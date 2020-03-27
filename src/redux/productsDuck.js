import faker from "faker";

// aux

function randomBool() {
  return Math.random() > 0.5;
}

function randomDiscount() {
  return `$${String(10 * Math.floor(Math.random() * 8 + 1))} OFF`;
}

function fakeProductData(quantity) {
  const product = () => {
    return {
      name: faker.commerce.productName(),
      image: "https://via.placeholder.com/258x146",
      price: faker.commerce.price(),
      discount: randomBool() ? randomDiscount() : null,
      location: faker.address.city()
    };
  };

  return new Promise((resolve, reject) => {
    let products = Array(quantity)
      .fill(null)
      .map(() => product());

    if (products) {
      resolve(products);
    } else {
      reject("Error");
    }
  });
}

// constants
const initialData = {};
const GET_PRODUCTS = "GET_PRODUCTS";
const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
const GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR";

// reducer

export default function reducer(state = initialData, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, fetching: true };
    case GET_PRODUCTS_SUCCESS:
      return { ...state, fetching: false, productsList: action.payload };
    case GET_PRODUCTS_ERROR:
      return { ...state, fetching: false, error: action.payload };

    default:
      return state;
  }
}

// actions

export let fetchProductsAction = numberOfProduts => dispatch => {
  dispatch({
    type: GET_PRODUCTS
  });

  fakeProductData(numberOfProduts)
    .then(products =>
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: [...products]
      })
    )
    .catch(error => {
      console.log(error);
      dispatch({
        type: GET_PRODUCTS_ERROR,
        payload: { error }
      });
    });
};
