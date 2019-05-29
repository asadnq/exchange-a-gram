import { connect } from 'react-redux';
import { createPost } from '../../store/actions/post';

import CreatePost from './CreatePost.screen'

export default connect(
  null,
  { createPost }
)(CreatePost);