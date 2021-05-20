import React from 'react';
import ReactDOM from 'react-dom';
import './styling/index.css'
import './styling/footer.css'
import './styling/navbar.css'
import App from './components/App';

// Adding Redux for state management
import store from './redux/store/index'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);