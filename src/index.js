import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import ContextProvider from './components/appContextApi/ContextProvider'

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <ContextProvider>
<App />
</ContextProvider>,
  document.getElementById('root')
);

