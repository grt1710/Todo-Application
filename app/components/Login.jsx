import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export class Login extends React.Component {
  constructor (props) {
    super(props);
    this.onGithubLogin = this.onGithubLogin.bind(this);
    this.onGoogleLogin = this.onGoogleLogin.bind(this);
  }
  onGithubLogin () {
    var {dispatch} = this.props;

    dispatch(actions.startGithubLogin());
  }
  onGoogleLogin () {
    var {dispatch} = this.props;

    dispatch(actions.startGoogleLogin());
  }
  render () {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="columns small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>
                Login with GitHub account below.
              </p>
              <button className="button" onClick={this.onGoogleLogin}>Login With Google</button>
              <button className="button" onClick={this.onGithubLogin}>Login With GitHub</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Redux.connect()(Login);
