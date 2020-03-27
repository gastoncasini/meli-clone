import { userService } from "../services/user.service";

// constants
const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";

const LOG_OUT = "LOGOUT";

const initialData = {
  fetching: false,
  loggedIn: false
};

// reducer

export default function reducer(state = initialData, action) {
  switch (action.type) {
    case LOG_OUT:
      return { ...initialData };

    case LOGIN:
      return { ...state, fetching: true };

    case LOGIN_SUCCESS:
      return {
        ...state,
        fetching: false,
        ...action.payload,
        loggedIn: true,
        error: null
      };

    case LOGIN_ERROR:
      return { ...state, fetching: false, error: action.payload.error };
    default:
      return state;
  }
}

// actions

export let doLoginAction = (username, password) => dispatch => {
  dispatch({
    type: LOGIN
  });

  userService
    .login(username, password)
    .then(user => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: user
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_ERROR, payload: err });
    });
};

export let doLogoutAction = () => dispatch => {
  userService.logout().then(
    dispatch({
      type: LOG_OUT
    })
  );
};

export let doRestoreSessionAction = () => dispatch => {
  let user = localStorage.getItem("user");
  user = JSON.parse(user);
  if (user) {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: user
    });
  }
};
