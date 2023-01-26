import React, { Component } from 'react'

class Calculator extends Component {

    showOrder(orders) {
        if(!orders || orders.length === 0) {
            return <li className="text-center text-muted title">ไม่มีสินค้าในตระกร้า</li>
        }
        else {
            return orders.map(order =>{
                return (
                    <li className="text-center text-success title">
                        {order.product.productName} x {order.quantity} = {order.product.unitPrice * order.quantity}
                        <button className="ml-2 btn btn-light -btn-sm" onClick={() => this.props.onDelOrder(order.product)}>x</button>
                    </li>
                )
            })
        }
    }

    render() {

        const { totalPrice, orders } = this.props

        return (
            <div>
                <h1 className="text-center">{totalPrice} THB</h1>
                <hr />

                <ul className="list-unstyled">
                    {this.showOrder(orders)}
                </ul>
                <hr />

                <div className="d-grid gap-2 col-md-                    8 mx-auto">
                    <button className="btn btn-block btn-danger title">ยืนยัน</button>
                    <button className="btn btn-block btn-secondary title">ยกเลิก</button>
                </div>

            </div>
        )
    }
}

export default Calculator