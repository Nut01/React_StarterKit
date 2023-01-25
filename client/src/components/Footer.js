import React from "react";

const Footer = (props) => {
    const { company, email } = props

    return (
        <div>
            <hr />
            <div className="text-center title text-uppercase">
                <small>
                    <span className="text-primary">Powered by {company}</span>   |   <span className="text-success ">Contact email : {email}</span>
                </small>
            </div>
        </div>
    )
}

export default Footer;