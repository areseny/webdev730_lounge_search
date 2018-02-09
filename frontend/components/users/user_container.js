import React from 'react';
import { connect } from 'react-redux';
import { fetchUser, fetchUsers} from '../../actions/user_actions';
import userProfile from './user_profile';

const mapStateToProps = (state, ownProps) => {
  let user;
  let userId;
  let reviews;
  let location;
  const author = state.session.currentUser;
  if (ownProps.match.path === '/users/:userId'){
    userId = ownProps.match.params.userId;
    user = state.users[ownProps.match.params.userId];
    reviews = Object.values(state.reviews).filter((element)=>{
      return element.user_id == userId;
    });
  }
  return {userId, user, author, reviews};
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(userProfile);
