import mongoose from 'mongoose';

const snakeCaseStamps = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
};

const commentSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId
  },
  author: {
    type: {
      user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
      username: { type: String },
      profile_image: { type: String }
    },
    _id: false
  },
  text: {
    type: String,
    minlength: 2,
    maxlength: 330
  },
  post_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Posts' },
  liked_by:[{type: mongoose.Schema.Types.ObjectId, ref: 'Users'}],
  replies: {
    type: [this],
    default: []
  }
}, snakeCaseStamps)

const Post = mongoose.model('Post', new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId
  },
  author: {
    type: {
      user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
      username: { type: String, required: true },
      profile_image: { type: String }
    }
  },
  title: { type: String, minlength: 5, maxlength: 100 },
  text: { type: String, minlength: 2, maxlength: 400 },
  comments: {
    type: [commentSchema]
  },
  category: { type: String, required: true },
  images: {
    type: [{
      type:
        String,
      maxItems: 8
    }]
  },
  likes_count: { type: Number, default: 0 },
  liked_by: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Users' }],
  saved_by: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Users' }],
}, snakeCaseStamps))


export default Post;