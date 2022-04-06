import React, { lazy, Suspense, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const Main = lazy(() => import('./Components/Main'));
const Login = lazy(() => import('./Components/Login'));
const CheckoutDetail = lazy(() => import('./Components/CheckoutDetail'));
const Payment = lazy(() => import('./Components/Payment'));
const PlaceOrder = lazy(() => import('./Components/PlaceOrder'));
export const myContext = React.createContext();

function App() {
  const [price, totalPrice] = useState(456);
  const cartData = {
    image: '/images/2.png',
    productName: 'Nike Girl Shoe',
    productPrice: price,
    priceChanged: totalPrice
  }
  return (
    <div>
      <myContext.Provider value={cartData}>
        <Router>
          <Routes>
            <Route path='/'
              element={<Suspense fallback={<div>Loading......</div>}>
                <Main />
              </Suspense>} />
            <Route path='/cart'
              element={<Suspense fallback={<div>Loading...</div>}>
                <Login />
              </Suspense>} />
            <Route path='/checkoutpage'
              element={<Suspense fallback={<div>Loading.....</div>}>
                <CheckoutDetail />
              </Suspense>} />
            <Route path='/payment'
              element={<Suspense fallback={<div>Loading.....</div>}>
                <Payment />
              </Suspense>} />
            <Route path='/placeorder'
              element={<Suspense fallback={<div>Loading....</div>}>
                <PlaceOrder />
              </Suspense>} />
          </Routes>
        </Router>
      </myContext.Provider>
    </div>
  );
}

export default App;
