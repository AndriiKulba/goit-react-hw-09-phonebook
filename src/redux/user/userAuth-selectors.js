const getIsAuthenticated = state => state.userAuth.isLogin;

const getUsername = state => state.userAuth.user.name;

const getError = state => state.userAuth.error;

export default {
  getIsAuthenticated,
  getUsername,
  getError,
};
