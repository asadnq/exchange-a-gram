import { connect } from 'react-redux';
import Profile from './Profile.screen';

const mapState = state => {
  return {
    user: state.user.user
  };
};

export default connect(mapState)(Profile);
