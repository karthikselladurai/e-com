import * as type from '../../constants/Constants';

export const signIn = (email, password) => ({
  type: type.SIGNIN,
  payload: {
    email,
    password
  }
});
export const signOut = () => ({
  type: type.SIGNOUT,
  payload: {
  }
});
export const setIsAuthenticated = (bool=true) => ({
  type: type.IS_AUTHENTICATING,
  payload:bool
});