import * as React from 'react';
import {Container, ErrorMessage} from '../../styles/account-page/user-posts.js'
import { useOutletContext } from 'react-router-dom';
import PostCard from '../post-card/PostCard.tsx'
import { CommentContainer } from '../../styles/account-page/user-comments.js';
interface IUserPostsProps {
  currentUser: any, 
  id: string,
  cardPadding: string,
}


const UserPosts: React.FunctionComponent<IUserPostsProps> = () => {
  const { postData }: any = useOutletContext()
  // const [postData, setPostData] = useState([])

  

  // console.log(postData)
  return (
    <Container
    >
      {
        postData.length > 0 ?
          postData.map(ele =>
            <PostCard
              cardPadding="8px 12px 10px 10px"
              key={ele._id}
              data={ele}
            />
          )
          : 
          <ErrorMessage>
            <CommentContainer style={{backgroundColor: 'transparent'}}>
              No posts created
            </CommentContainer>
          </ErrorMessage>
      }
    </Container>
  );
};

export default UserPosts;
