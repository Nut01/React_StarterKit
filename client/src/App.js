import './App.css'
import React, { Component } from 'react';
import Header from './components/Header';
import Monitor from './components/Monitor/Monitor';
import Footer from './components/Footer';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {products : ""}
  }

  componentDidMount() {
    this.setState({ products : [
      { productId: 1, productName: "สลัดผัก", unitPrice: "120", thumbnail: "/images/Product/1.jpg" },
      { productId: 2, productName: "ไก่ทอด", unitPrice: "90", thumbnail: "/images/Product/2.jpg" },
      { productId: 3, productName: "บิงซู", unitPrice: "200", thumbnail: "/images/Product/3.jpg" },
      { productId: 4, productName: "เฟรนฟราย", unitPrice: "140", thumbnail: "/images/Product/4.jpg" },
      { productId: 5, productName: "เค๊ก 3 ชิ้น", unitPrice: "200", thumbnail: "/images/Product/5.jpg" },
      { productId: 6, productName: "กาแฟ เฮลตี้ฟู๊ด", unitPrice: "140", thumbnail: "/images/Product/6.jpg" }
  ]})
  }

  render() {

    return (
      <div>
        <Header />
        <Monitor products={this.products} />
        <Footer company="Thairidgebuds" email="thairidgebuds@gmail.com" />
      </div>
    );
  }
}

export default App;
