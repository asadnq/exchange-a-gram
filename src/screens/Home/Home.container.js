import { connect } from 'react-redux';
import { getPosts, getPost, getPostsComment } from '../../store/actions/post';
import Home from './Home.screen';

const mapState = state => {
  return {
    posts: state.post.posts,
    post: state.post.post
  };
};

export default connect(
  mapState,
  { getPosts, getPost, getPostsComment }
)(Home);