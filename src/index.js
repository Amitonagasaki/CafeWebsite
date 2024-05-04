import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './Contexts/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CartProvider>
    <App />
    </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import { CartProvider } from './Contexts/Cart';

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <CartProvider>
//         <App />
//       </CartProvider>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );



