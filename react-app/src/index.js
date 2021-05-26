import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import  createLogger  from 'redux-logger'
import configureStore from './store'
import './index.css';
import App from './App';
import BidPage from './components/events/BidPage'
import BidReviewPage from './BidReviewPage'
// const logger = createLogger({
  //empty options
// });

const store = configureStore();
window.store = store;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
        {/* <BidReviewPage /> */}
      {/* <BidPage /> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
