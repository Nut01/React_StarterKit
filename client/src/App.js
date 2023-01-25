import React, { component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductItem from './components/product/ProductItem';

function App() {
  return (
    <div>
      <Header />
      <ProductItem productName="Iphone X" unitPrice="40,500 BAHT" />
      <ProductItem productName="Ipad Pro 10.5 INCH" unitPrice="30,500 BAHT" />
      <ProductItem productName="Ipad Mini 4" unitPrice="19,500 BAHT" />
      <Footer company="Thairidgebuds" email="thairidgebuds@gmail.com" />
    </div>
  );
}

export default App;
