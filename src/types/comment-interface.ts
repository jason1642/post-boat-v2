interface CommentModel {
  _id: string,
  author: {
    user_id: string,
    username: string,
    profile_picture: String,
  },
  text: string,
  post_id: string,
  liked_by: Array<string>,
  replies: Array<any>
}

export default CommentModel