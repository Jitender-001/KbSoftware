import React from "react";
import './About.css';

import { Link } from "react-router-dom";
import { FiArrowRightCircle } from "react-icons/fi";

function About() {
    return (
        <>
            <div className="about">
                <div className="container about-box">
                    <div className="about-left">
                        <div className="about-heading">
                            <h3>India's Best <strong>GST SOFTWARE COMPANY</strong></h3>
                            <p>
                                My ERP Software is a team of software developers working in the field of Application Development, Barcode Solutions, Web Development, Mobile Apps, M-Commerce and Business Automation processes.
                            </p>
                            <p>
                                Product research is the key strength of our organization. Our R&D team studies a business segment, analyses its requirements, checks market feasibility and develop specialized software product that help making lives of number of businessmen easier and better. As a result we have completely automated such root level trades where nobody can even think about computerization like Fruits and vegetable market, milk dairies, laundries etc.
                            </p>
                        </div>
                        <hr />
                        <div className="we-offer">
                            <div className="offer-left">
                                <h4>WHO <strong>WE ARE</strong></h4>
                                <img src="" alt="image" />
                                <p>
                                    Since its establishment in 2019 MY ERP Software has constantly grown and expanded. With our 10 years extensive research and market exposure, We have earned a reputation for delivering top quality solutions on time and within budget, resulting in long-term customer relationships.
                                </p>
                            </div>

                            <div className="offer-left">
                                <h4>WHAT <strong>WE DO</strong></h4>
                                <img src="" alt="image" />
                                <p>
                                    People are the key strength of any organization. Our dedicated staff of Software Architects, Developers, product managers, support engineers and fastest growing network of Channel Partners / resellers have made our products available at every corner.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="about-right">
                        <div className="services-offer">
                            <h4>Services We Offer</h4>
                            <Link to="/services" className="page-link"><span><FiArrowRightCircle /></span> Software Development</Link><br />
                            <Link to="/services" className="page-link"><span><FiArrowRightCircle /></span> Web Development</Link><br />
                            <Link to="/services" className="page-link"><span><FiArrowRightCircle /></span> Android Apps</Link><br />
                            <Link to="/services" className="page-link"><span><FiArrowRightCircle /></span> Bulk SMS</Link><br />
                            <Link to="/services" className="page-link"><span><FiArrowRightCircle /></span> Domain Registration</Link><br />
                            <Link to="/services" className="page-link"><span><FiArrowRightCircle /></span> 24*7 Online Support</Link>
                        </div>
                    </div>
                </div>

                <div className="container features">
                    <h3>OUR PRODUCTS/FEATURES</h3>
                    <div className="feature-services">
                        <div className="feature feature-top">
                            <div className="feature-box">
                                <div className="feature-image">
                                    <img src="/images/erp.jpg" alt="image" />
                                </div>
                                <h4>Business ERP Softwares</h4>
                                <p>
                                    Small and medium enterprises e.g. Supermarkets, Computer Shops, Electronics Dealers, FMCG, Book shops, Garments Shops, Footwear Shops, Mobile Distributors, Automobile Sales and Service, Wholesalers, Retailers, Manufacturers.
                                </p>
                            </div>

                            <div className="feature-box">
                                <div className="feature-image">
                                    <img src="/images/education.jpg" alt="image" />
                                </div>
                                <h4>Business ERP Softwares</h4>
                                <p>
                                    Small and medium enterprises e.g. Supermarkets, Computer Shops, Electronics Dealers, FMCG, Book shops, Garments Shops, Footwear Shops, Mobile Distributors, Automobile Sales and Service, Wholesalers, Retailers, Manufacturers.
                                </p>
                            </div>

                            <div className="feature-box">
                                <div className="feature-image">
                                    <img src="/images/healthcare.jpg" alt="image" />
                                </div>
                                <h4>Business ERP Softwares</h4>
                                <p>
                                    Small and medium enterprises e.g. Supermarkets, Computer Shops, Electronics Dealers, FMCG, Book shops, Garments Shops, Footwear Shops, Mobile Distributors, Automobile Sales and Service, Wholesalers, Retailers, Manufacturers.
                                </p>
                            </div>

                            
                        </div>

                        <div className="feature feature-bottom">
                            <div className="feature-box">
                                <div className="feature-image">
                                    <img src="/images/hotel.jpg" alt="image" />
                                </div>
                                <h4>Business ERP Softwares</h4>
                                <p>
                                    Small and medium enterprises e.g. Supermarkets, Computer Shops, Electronics Dealers, FMCG, Book shops, Garments Shops, Footwear Shops, Mobile Distributors, Automobile Sales and Service, Wholesalers, Retailers, Manufacturers.
                                </p>
                            </div>

                            <div className="feature-box">
                                <div className="feature-image">
                                    <img src="/images/agri.jpg" alt="image" />
                                </div>
                                <h4>Business ERP Softwares</h4>
                                <p>
                                    Small and medium enterprises e.g. Supermarkets, Computer Shops, Electronics Dealers, FMCG, Book shops, Garments Shops, Footwear Shops, Mobile Distributors, Automobile Sales and Service, Wholesalers, Retailers, Manufacturers.
                                </p>
                            </div>
                            
                            <div className="feature-box">
                                <div className="feature-image">
                                    <img src="/images/construction.jpg" alt="image" />
                                </div>
                                <h4>Business ERP Softwares</h4>
                                <p>
                                    Small and medium enterprises e.g. Supermarkets, Computer Shops, Electronics Dealers, FMCG, Book shops, Garments Shops, Footwear Shops, Mobile Distributors, Automobile Sales and Service, Wholesalers, Retailers, Manufacturers.
                                </p>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default About;