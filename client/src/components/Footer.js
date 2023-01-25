import React from "react";

const Footer = (props) => {
    const {company, email} = props

    return (
        <div>Powered by {company} | Contract by email {email}</div>
    )
}

export default Footer;