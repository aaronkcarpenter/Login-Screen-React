import React from 'react';
import ReactDOM from 'react-dom';
import './styling/index.css'
import './styling/footer.css'
import './styling/navbar.css'
import App from './components/App';

// Adding Redux for state management
import store from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);