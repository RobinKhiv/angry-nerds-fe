import React, { Component } from 'react';
import ApiService from '../services/ApiService';
// import IdleService from '../services/idle-service';
import JwtService from '../services/JwtService';

const UserContext = React.createContext({
  user: {},
  error: null,
  updateTime: () => {},
  setError: () => {},
  clearError: () => {},
  setUser: () => {},
  processLogin: () => {},
  processLogout: () => {}
});

export default UserContext;

export class UserProvider extends Component {
  constructor(props) {
    super(props);
    const state = {
      user: {},
      error: null,
    };

    const jwtPayload = JwtService.parseAuthToken();

    if (jwtPayload)
      state.user = {
        username: jwtPayload.sub
      };

    this.state = state;
    // IdleService.setIdleCallback(this.logoutBecauseIdle);
  }

  componentDidMount() {
    if (JwtService.hasAuthToken()) {
      // IdleService.regiserIdleTimerResets();
      JwtService.queueCallbackBeforeExpiry(() => {
        this.fetchRefreshToken();
      });
    }
  }

  componentWillUnmount() {
    // IdleService.unRegisterIdleResets();
    JwtService.clearCallbackBeforeExpiry();
  }

  setUser = user => {
    this.setState({ user });
  };

  processLogin = authToken => {
    JwtService.saveAuthToken(authToken);
    const jwtPayload = JwtService.parseAuthToken();
    this.setUser({
      username: jwtPayload.sub
    });
    // IdleService.regiserIdleTimerResets();
    JwtService.queueCallbackBeforeExpiry(() => {
      this.fetchRefreshToken();
    });
  };

  processLogout = () => {
    JwtService.clearAuthToken();
    JwtService.clearCallbackBeforeExpiry();
    // IdleService.unRegisterIdleResets();
    this.setUser({});
  };

  logoutBecauseIdle = () => {
    JwtService.clearAuthToken();
    JwtService.clearCallbackBeforeExpiry();
    // IdleService.unRegisterIdleResets();
    this.setUser({ idle: true });
  };

  fetchRefreshToken = () => {
    ApiService.refreshToken()
      .then(res => {
        JwtService.saveAuthToken(res.authToken);
        JwtService.queueCallbackBeforeExpiry(() => {
          this.fetchRefreshToken();
        });
      })
      .catch(err => {
        this.setError(err);
      });
  };

  render() {
    const value = {
      user: this.state.user,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setUser: this.setUser,
      processLogin: this.processLogin,
      processLogout: this.processLogout
    };

    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
