

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

interface PostModel{
  _id: string,
  text: string,
  title: string,
  author: {
    user_id: string,
    username: string,
    profile_picture: string
  },
  images: Array<string>,
  category: string,
  created_at: string,
  comments: Array<CommentModel>,
  liked_by: Array<string>,
  saved_by: Array<string>,

}

export default PostModel

