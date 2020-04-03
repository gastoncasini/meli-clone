import faker from "faker";
import { v4 as uuidv4 } from "uuid";

// aux

// devuelve un valor booleano random

function randomBool() {
  return Math.random() > 0.5;
}

// devuelve un numero de descuento en formato $ NUM OFF , descueto maximo de 80%
function randomDiscount() {
  return 10 * Math.floor(Math.random() * 8 + 1);
}

// devuelve un array con objetos populados con datos de productos falsos

function fakeProductData(quantity) {
  const vendor = () => {
    return {
      name: faker.company.companyName(),
      slogan: faker.company.catchPhrase(),
      logo: "https://via.placeholder.com/258x240"
    };
  };

  const questions = () => {
    return [
      {
        ques: {
          user: faker.internet.userName(),
          content: faker.lorem.lines(1)
        },

        ans: faker.lorem.lines(1)
      }
    ];
  };

  const product = element => {
    return {
      id: uuidv4(),
      name: faker.commerce.productName(),
      image: `https://picsum.photos/200?random=${element}`,
      price: faker.commerce.price(),
      discount: randomBool() ? randomDiscount() : null,
      location: faker.address.city(),
      vendor: vendor(),
      questions: questions()
    };
  };

  return new Promise((resolve, reject) => {
    let products = Array(quantity)
      .fill(null)
      .map((_, i) => product(i));

    if (products) {
      resolve(products);
    } else {
      reject("Error");
    }
  });
}

// constants
const initialData = {
  productsList: []
};

// fetch multiple products
const GET_PRODUCTS = "GET_PRODUCTS";
const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
const GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR";
// fetch product filtered by ID
const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
const GET_PRODUCT_BY_ID_SUCCESS = "GET_PRODUCT_BY_ID_SUCCESS";
const GET_PRODUCT_BY_ID_ERROR = "GET_PRODUCT_BY_ID_ERROR";

// reducer

export default function reducer(state = initialData, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, fetching: true };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        fetching: false,
        productsList: state.productsList.concat(action.payload)
      };
    case GET_PRODUCTS_ERROR:
      return { ...state, fetching: false, error: action.payload };

    case GET_PRODUCT_BY_ID:
      return { ...state, fetching: true };

    case GET_PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
        fetching: false,
        selectedItem: action.payload
      };

    case GET_PRODUCT_BY_ID_ERROR:
      return { ...state, fetching: false, error: action.payload };

    default:
      return state;
  }
}

// actions

export let fetchItemAction = itemID => dispatch => {
  dispatch({
    type: GET_PRODUCT_BY_ID
  });

  fakeProductData()
    .then(products => {
      dispatch({
        type: GET_PRODUCT_BY_ID_SUCCESS,
        payload: products[0]
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: GET_PRODUCT_BY_ID_ERROR,
        error
      });
    });
};

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

export let selectItemAction = itemID => (dispatch, getState) => {
  let { productsList } = getState().products;
  let selectedItem = productsList.filter(product => product.id === itemID)[0];

  dispatch({
    type: GET_PRODUCT_BY_ID_SUCCESS,
    payload: selectedItem
  });
};
