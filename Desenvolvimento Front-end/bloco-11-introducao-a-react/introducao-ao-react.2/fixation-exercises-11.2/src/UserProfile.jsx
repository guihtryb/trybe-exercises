// arquivo UserProfile.js
import React from 'react';
import Image from './Image';
import './UserProfile.css'
import PropTypes from 'prop-types';

class UserProfile extends React.Component {
  render() {
      const { user: {firstName, group, email, avatar} } = this.props;
    return (
      <div className="user-card">
        <p> {firstName} </p>
        <strong> {group} </strong>
        <p> {email} </p>
        <Image source={avatar} alternativeText="User avatar" />
      </div>
    );
  }
}

UserProfile.propTypes = {
  user: {
    firstName: PropTypes.string.isRequired,
    group: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }
}

export default UserProfile;
