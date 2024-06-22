import React from 'react';

import Login from '../components/login and registration/Login.jsx';
import Social from '../components/login and registration/Social.jsx';

function login() {
  return (
    <div className="App">
      <Social />
      <Login />
    </div>
  );
}

export default login;
