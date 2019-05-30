import { connect } from 'react-redux';
import { getPosts, getPost, getPostsComment } from '../../store/actions/post';
import { likePost } from '../../store/actions/like';
import { getUser } from '../../store/actions/user'
import Home from './Home.screen';

const mapState = state => {
  return {
    posts: state.post.posts,
    post: state.post.post,
    authUser: state.auth.user
  };
};

export default connect(
  mapState,
  { getPosts, getPost, getPostsComment, getUser, likePost }
)(Home);