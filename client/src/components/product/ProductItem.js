import React, { Component } from "react";

class ProductItem extends Component {

    render() {
        const { productName, unitPrice, thumbnail } = this.props

        return (
            <div className="col-md-3 col-sm-6">
                <img className="img-fluid img-thumbnail" src={thumbnail} alt=""></img>
                <h5 className="mt-2">{productName}</h5>
                <p className="text-end title">{unitPrice} THB</p>
                <div className="d-grid gap-2">
                    <button className="btn btn-block btn-secondary title">
                        ซื้อ
                    </button>
                    <hr />
                </div>
            </div>
        )
    }
}

export default ProductItem