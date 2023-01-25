import React, { Component } from "react";

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentDidUpdate() {

    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {

        const style = {
            height: 70,
            marginTop: 15,
            marginLeft: 100
        }

        const h5 = {
            marginLeft: 175,
            marginTop: 15,
        }

        return (
            <div>
                <div className="row">
                    <div className="col-md-8 text-start">
                        <h1 className="text-success"><img style={style} src="/images/Logo/logo.png" alt="" /> เฮลตี้ คาเฟ่</h1>
                    </div>

                    <div className="col-md-4 text-center">
                        <h5 style={h5} className="text-muted mt-4">{this.state.date.toLocaleTimeString()}</h5>
                    </div>
                </div>
                <hr />

            </div>
        )
    }
}

export default Header;