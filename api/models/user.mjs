import mongoose from 'mongoose';

const snakeCaseStamps = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }};

const User = mongoose.model('User', new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId
  },
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 24
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 32,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  profile_image: {
    type: String
  },
  bio: {
    type: String,
    minlength: 0,
    maxlength: 300,
    default: ''
  },
  category_subscriptions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Users' }],
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Users' }],
  created_posts: [{ post_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Posts' } }],
  liked_posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Posts' }],
  liked_comments: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comments' }]
  },
  saved_posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Posts' }],
  // posts: {
  preferences: {
    type: {
      dark_mode: { type: Boolean, default: false },
      
    },
    default: {
      preferences: {
        dark_mode: false
      }
    },
    _id: false
  }
  // }
  // comments: [{typ}]
}, snakeCaseStamps));


export default User;