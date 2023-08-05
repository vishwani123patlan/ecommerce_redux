import React from 'react';
import { useSelector } from 'react-redux';
import Product from './components/Product';
import { basketCount } from './features/basketSlice';

function App() {
  const basketCounter = useSelector(basketCount)
  return (
    <div className="App">
      <header className='flex justify-between items-center px-10'>
        <div>
          <h1 className="text-5xl">Welcome to my store</h1>
          <p>The fastest growing store</p>
        </div>
        <div>
          <h3>Your basket items: {basketCounter}</h3>
        </div>
      </header>
      <Product id="123" title="MI Phone" />
      <Product id="124" title="Iphone 14" />
      <Product id="125" title="Dell Laptop" />
      <Product id="126" title="Macbook Pro" />
    </div>
  );
}

export default App;
