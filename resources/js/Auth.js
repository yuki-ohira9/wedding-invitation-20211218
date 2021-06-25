import React from 'react';
import { Redirect } from 'react-router-dom';
import User from './User';

const Auth = props =>
  User.isLoggedIn()
    && User.userId()
    && User.userName()
    && User.userEmail()
  ? props.children 
  : <Redirect to={'/login'} />;

export default Auth;