import Post from '../models/post.mjs';
import express from 'express';
import Category from '../models/category.mjs';
import _ from 'lodash';
import mongoose from 'mongoose';
import User from '../models/user.mjs';


const postRouter = express.Router();


// api/posts


// post to category
postRouter.post('/create', async (req, res, next) => {
  // Check if category exists
  // Verify info? check user
  // Add post to categories
  // category instance to push to
  // req: user_id, username, category, images, text, title, 
  let user
  let category = await Category.findOne({ name: req.body.category });
   await User.findOne({ _id: req.body.author.user_id }).then(ele=>{ user = ele})
  
  if (!category || !user) return res.status(404).send('Category or User does not exist.')
  let post = new Post(_.assign(_.pick(req.body, ['title', 'text', 'images', 'category']), {
    author: {
      user_id: req.body.author.user_id,
      username: req.body.author.username,
      profile_image: req.body.author.profile_image
    }, _id: new mongoose.Types.ObjectId() 
  }))
  category.posts.push({ post_id: post._id, author_id: post.user_id });
  user.created_posts.push({ post_id: post._id });
  await category.save()
  await user.save()
  await post.save()
  console.log(post)

  return res.send(post)

})
  
postRouter.get('/findAll', async (req, res) => {
  try {
    const posts = await Post.find({}).limit(100)
    return res.send(posts)

  } catch (err) {
    res.status(404).send('An error has occurred while fetching posts.')
  }
})

// Find one
postRouter.get('/findOne/:_id', async (req, res, next) => {
  const post = await Post.findOne({ _id: req.params._id })
  if(!post) return res.status(404).send('Cannot find post.')
  res.send(post)  

})

// Find all by user ID
postRouter.get('/findAllByUser/:_id', async (req, res, next) => {
  try { await User.findOne({ _id: req.params._id }) } catch(e){return res.status(404).send('User not found')}
  
  const posts = await Post.find({ 'author.user_id': req.params._id })
  console.log(posts)
  if (!posts) return res.status(404).send('Cannot find post.')
  return res.send(posts)
}) 


// Delete
postRouter.delete('/delete', async (req, res) => 
  res.send(await Post.deleteOne({ name: req.body._id }, {})
  ))

// Find all by category name
postRouter.get('/findAllByCategory/:name', async (req, res, next) => {
  const posts = await Post.find({ category: req.params.name })
  if (!posts) return res.status(404).send('No posts were found.')
  
  res.send(posts)
})

// Add like/remove like 
postRouter.post('/like', async (req, res, next) => {
  let user, post
  try { await User.findOne({ _id: req.body.user_id }).then(ele => { user = ele }) } catch (err) { return res.status(404).send('User not found') }
  // console.log('user is found')
  try { await Post.findOne({ _id: req.body.post_id }).then(ele => { post = ele }) } catch(err){return res.status(404).send('Post not found.')}
  // Type of value in liked_posts array is objects but look like strings, use ele.equals() to compare
  const isAlreadyLiked = user.liked_posts.find(ele => ele.equals(req.body.post_id))

  if (isAlreadyLiked) {
    // Remove from liked array from both user & post
    user.liked_posts.splice(isAlreadyLiked, 1)
    post.liked_by.splice(post.liked_by.find(ele=>ele===user._id), 1)
  } else {
    // If it doesnt alrady exists, push user ID to both
    post.liked_by.push(user._id)
    user.liked_posts.push(post._id)
  }
  user.save()
  post.save()

  // console.log(isAlreadyLiked)
  res.send(post.liked_by)
  
})




// Save/Unsave post
postRouter.post('/save', async (req, res, next) => {
  let user, post
  try { await User.findOne({ _id: req.body.user_id }).then(ele => { user = ele }) } catch (err) { return res.status(404).send('User not found') }
  // console.log('user is found')
  try { await Post.findOne({ _id: req.body.post_id }).then(ele => { post = ele }) } catch(err){return res.status(404).send('Post not found.')}
  // Type of value in liked_posts array is objects but look like strings, use ele.equals() to compare
  const isAlreadySaved = user.saved_posts.find(ele => ele.equals(req.body.post_id))

  if (isAlreadySaved) {
    // Remove from liked array from both user & post
    user.saved_posts.splice(isAlreadySaved, 1)
    post.saved_by.splice(post.saved_by.find(ele=>ele===user._id), 1)
  } else {
    // If it doesnt alrady exists, push user ID to both
    post.saved_by.push(user._id)
    user.saved_posts.push(post._id)
  }
  user.save()
  post.save()

  res.send(post.saved_by)
  
})











// Edit post
postRouter.put('/edit', async (req, res, next) => {
  let post
  try { await Post.findOne({ _id: req.body.post_id }).then(ele => {post = ele}) } catch (err) { res.status(404).send('Post not found.') }
  _.assign(post, {
    title: req.body.title, category: req.body.category, images: req.body.images, text: req.body.text
  })
  post.save()
  res.send(post)
})


export default postRouter;  