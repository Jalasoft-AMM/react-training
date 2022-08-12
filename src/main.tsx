import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import Theme from '@/theme';
import App from '@/App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Theme>
    <Provider store={store}>
      <App />
    </Provider>
  </Theme>
);
