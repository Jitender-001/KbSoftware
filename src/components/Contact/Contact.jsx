import React from "react";
import './Contact.css';
import { MdEmail } from "react-icons/md";
import { GrLinkedin } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter ,FaLocationDot} from "react-icons/fa6";


function Contact() {
    return (
        <>
            <div className="contact">
                <div className="container contact-box">
                    <div className="box">
                        <div className="icon">
                            <MdEmail className="icon-img" />
                        </div>
                        <b>Email</b>
                        <p>kharidobefikar@gmail.com</p>
                    </div>

                    <div className="box">
                        <div className="icon">
                            <FaPhoneAlt className="icon-img" />
                        </div>
                        <b>Mobile</b>
                        <p>+91 8320121716</p>

                    </div>

                    <div className="box">
                        <div className="icon">
                            <GrLinkedin className="icon-img" />
                        </div>
                        <b>LinkedIn</b>
                        <p>kharido_befikar</p>
                    </div>

                    <div className="box">
                        <div className="icon">
                            <FaXTwitter className="icon-img" />
                        </div>
                        <b>Twitter</b>
                        <p>kharidobefikar@gmail.com</p>
                    </div>
                </div>

                <div className="container lower-box">
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.8242114397754!2d76.81804067527496!3d30.638911390161436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x26f6a91645870bbd%3A0x4938f0f13748585f!2sKharido%20befikar!5e0!3m2!1sen!2sin!4v1727243114300!5m2!1sen!2sin"  style={{ border: 0, width: "100%" , height:"100%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className="contact-info">
                        <div className="quick-app">
                            <h4>QUICK APP SOLUTIONS</h4>
                            <p>We are offering complete best web solution as
                                Custom web Designing, Web Development,and
                                Application Software Development
                                Service.
                            </p>
                        </div>

                        <div className="contact-details">
                            <h4>Contact Information</h4>
                            <div className="box">
                                <div className="icon"><FaLocationDot/></div>
                                <p>Office No. 1429, 14th Floor, Block D, CCC,
                                    VIP Road Zirakpur, 140603
                                </p>
                            </div>
                            <div className="box">
                                <div className="icon"><FaPhoneAlt/></div>
                                <p>+91 8320121716
                                </p>
                            </div>
                            <div className="box">
                                <div className="icon"><MdEmail/></div>
                                <p>kharidobefikar@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contact;
