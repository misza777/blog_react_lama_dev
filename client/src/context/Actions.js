export const LoginStart = (userCredentials) => 
async (dispatch) => {
  dispatch({ type: LOGIN_START });
//   try {
    // const res = await axios.post("/auth/login", userCredentials);
    // dispatch({ type: LOGIN_SUCCESS, payload: res.data });
//   } catch (err) {
    // dispatch({ type: LOGIN_FAILURE, payload: err });
//   }
};

export const LoginSuccess = (user) => async (dispatch) => {
  dispatch({ type: LOGIN_SUCCESS, payload: user });
};

export const LoginFailure = () => async (dispatch) => {
  dispatch({ type: LOGIN_FAILURE });
}