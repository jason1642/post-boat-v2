interface UserModel{

  _id: string, 
  username: string,
  email: string,
  preferences: { dark_mode: boolean },
  following: Array<any>,
  followers: Array<any>,
  category_subscriptions: Array<any>,
  created_at: Date,
  bio: string,
  created_posts: Array<any>,
  liked_posts: Array<any>,
  liked_comments: Array<any>,
  saved_posts: Array<any>,
  private_messages: Array<any>,
}

export default UserModel