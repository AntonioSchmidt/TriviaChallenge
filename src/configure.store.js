import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createInjectStore } from 'redux-injector';

const endpoint = 'https://opentdb.com/api.php';
const reduxMiddleware = applyMiddleware(thunk.withExtraArgument({
  fetch: (url, options = {}, ...args) => {
    options = {
      method: 'GET',
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    };
    url = `${endpoint}${url}`;
    return fetch(url, options, ...args);
  },
}));

const store = createInjectStore({ global: (state = {}) => state }, {}, reduxMiddleware);

export default store;
