import Post from '../models/post.mjs'
import express from 'express'
import _ from 'lodash'
import mongoose from 'mongoose'
import User from '../models/user.mjs'

const commentRouter = express.Router()

// Create a comment on a post
commentRouter.post('/post', async (req, res, next) => {
  let post, user, comment
  await Post.findOne({ _id: req.body.post_id }).then(ele=>post=ele)
  await User.findOne({ _id: req.body.user_id }).then(ele=>user=ele)
  if (!post || !user) return res.status(404).send('Post not found.')
  comment = _.assign(_.pick(req.body, ['author', 'text', 'post_id',]), {_id: new mongoose.Types.ObjectId()})
  console.log(comment)
  post.comments.push(comment)

  await post.save()
  res.send(post) 
 
}) 

// Create a reply comment to a comment 
// Replies can have endless comments, but not sure how that would work on a deeper level
// Atm only one level deep comments
commentRouter.post('/replyToComment', async (req, res, next) => {
  let post, user, comment, targetComment
  await Post.findOne({ _id: req.body.post_id })
    .then(async ele => {
      post = ele
      if (ele) targetComment = ele.comments.findIndex(e =>e._id.equals(req.body.target_comment_id))
    })
  await User.findOne({ _id: req.body.user_id }).then(ele => user = ele)
  if (!post || !user || targetComment !== -1) return res.status(404).send('Post, user, or comment not found.')
  comment = _.assign(_.pick(req.body, ['author', 'text', 'post_id',]), {_id: new mongoose.Types.ObjectId()})
  post.comments[targetComment].replies.push(comment)
  post.save()
  res.send('post')
})


// Delete
// Need req: post_id, comment_id, and verify middleware to verify either post author or comment author
commentRouter.delete('/delete', async (req, res, next) => {
  let post
  await Post.findOne({ _id: req.body.post_id }).then(ele => post = ele)
  if (!post) return res.status(404).send('Post not found.')
  const commentIndex = post.comments.findIndex(e => e._id.equals(req.body.comment_id))
  if (commentIndex === -1) return res.status(404).send('Comment not found.')
  
  post.comments.splice(commentIndex, 1)
  await post.save()
  res.send(post)
})

// Edit comment - only text
commentRouter.put('/edit', async (req, res, next) => {
  let post, commentIndex
  await Post.findOne({ _id: req.body.post_id }).then(ele => post = ele)
  if (!post) return res.status(404).send('Cannot find post')
  commentIndex = post.comments.findIndex(e => e._id.equals(req.body.comment_id))
  if (commentIndex === -1) return res.status(404).send('Comment not found.')
  post.comments[commentIndex].text = req.body.text
  await post.save()
  res.send(post.comments[commentIndex])
})

export default commentRouter