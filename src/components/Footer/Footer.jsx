import React from "react";

import './Footer.css';

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="boxes">

                        <div className="box address">
                            <b>Address</b>
                            <p>Office No. 1429, 14th Floor, Block D, CCC,</p>
                            <p>VIP Road Zirakpur, 140603</p>
                            <p>Phone : +91 8320121716</p>
                            <p>Email : kharidobefikar@gmail.com</p>
                        </div>

                        <div className="box bank-details">
                            <h2>Bank Details</h2>
                        </div>

                        <div className="box qr-code">
                            <h2>QR-code</h2>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;