import { connect } from 'react-redux';
import Login from './Login.screen'
import { login } from '../../store/actions/auth';

const mapDispatch = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(
  null,
  mapDispatch
)(Login);