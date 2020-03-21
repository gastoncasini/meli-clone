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
      return { ...state, fetching: false, ...action.payload, loggedIn: true };

    case LOGIN_ERROR:
      return { ...state, fetching: false, error: action.payload };
    default:
      return state;
  }
}

// actions

export let doLoginAction = () => dispatch => {
  dispatch({
    type: LOGIN
  });

  return;
};
