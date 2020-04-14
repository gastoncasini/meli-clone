import { userService } from "../services/user.service";

// aux

function sumTotal(items) {
  let total = 0;
  items.forEach(({ item, quantity }) => {
    total += Number(item.price) * quantity;
  });

  return total;
}

// constants
const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";

const LOG_OUT = "LOGOUT";

const ORDER_ADD_ITEM = "ORDER_ADD_ITEM";
const ORDER_REMOVE_ITEM = "ORDER_REMOVE_ITEM";

const ORDER_SET_ITEM_QUANTITY = "ORDER_SET_ITEM_QUANTITY";

const ORDER_UPDATE_TOTAL = "ORDER_UPDATE_TOTAL";

const ORDER_SET_DELIVERY_ADDRESS = "ORDER_SET_DELIVERY_ADDRESS";
const ORDER_UPDATE_DELIVERY_ADDRESS = "ORDER_SET_DELIVERY_ADDRESS";

const initialData = {
  fetching: false,
  loggedIn: false,
  order: {
    items: [],
    total: null,
  },
};

// reducer

export default function reducer(state = initialData, action) {
  switch (action.type) {
    // user session
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
        error: null,
      };

    case LOGIN_ERROR:
      return { ...state, fetching: false, error: action.payload.error };

    // user order

    case ORDER_ADD_ITEM:
      return {
        ...state,
        order: action.payload,
      };

    case ORDER_SET_ITEM_QUANTITY:
      return {
        ...state,
        order: action.payload,
      };

    default:
      return state;
  }
}

// actions

export let doLoginAction = (username, password) => (dispatch) => {
  dispatch({
    type: LOGIN,
  });

  userService
    .login(username, password)
    .then((user) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: user,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: LOGIN_ERROR, payload: err });
    });
};

export let doLogoutAction = () => (dispatch) => {
  userService.logout().then(
    dispatch({
      type: LOG_OUT,
    })
  );
};

export let doRestoreSessionAction = () => (dispatch) => {
  let user = localStorage.getItem("user");
  user = JSON.parse(user);
  if (user) {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: user,
    });
  }
};

export let addItemAction = (quantity) => (dispatch, getState) => {
  let currentItem = getState().products.selectedItem;
  let { items } = getState().user.order;

  let checkItems = items.filter(({ item }) => item.id === currentItem.id);

  if (!checkItems[0]) {
    let newItems = items.concat({
      item: currentItem,
      quantity: Number(quantity),
    });

    let total = sumTotal(newItems);

    dispatch({
      type: ORDER_ADD_ITEM,
      payload: {
        items: newItems,
        total: total,
      },
    });
  } else {
    console.log("item allready in collection");
  }
};

export let setItemQuantityAction = (operation, item) => (
  dispatch,
  getState
) => {
  let { items } = getState().user.order;
  let total, newOrder;

  let position = items.indexOf(item);
  let newArray = [...items];
  if (operation === "+") {
    newArray[position] = { ...item, quantity: item.quantity + 1 };
  }

  if (operation === "-") {
    newArray[position] = { ...item, quantity: item.quantity - 1 };
  }
  total = sumTotal(newArray);
  newOrder = { items: newArray, total };

  dispatch({ type: ORDER_SET_ITEM_QUANTITY, payload: newOrder });
};
