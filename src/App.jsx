import React from 'react';
import './App.css';
import Banner from  "./assets/banner.svg"
import CheckoutForm from './components/checkoutForm';


function App() {
  return (
    <div className="App">
      <div className="banner" style={{ backgroundImage: `url(${Banner})`, bottom:'0', width:'100%' }} />
      <div className="content">
        <h1>Faça seu Checkout</h1>
        <h3>É FÁCIL. É TECNOLÓGICO. ISSO É FUTURISTICO!</h3>
        <CheckoutForm />
      </div>
    </div>
  );
}

export default App;