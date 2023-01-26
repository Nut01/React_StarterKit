import React, { Component } from 'react'

class Calculator extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center">340.0</h1>
                <hr />

                <ul className="list-unstyled">
                    <li className="text-center text-success title">
                        บิงซู x 1 = 200.0
                        <button className="btn btn-light -btn-sm">x</button>
                    </li>
                    <li className="text-center text-success title">
                        เฟรนฟราย x 1 = 140.0
                        <button className="btn btn-light -btn-sm">x</button>
                    </li>
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