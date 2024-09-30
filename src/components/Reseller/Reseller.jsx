import React from "react";
import './Reseller.css';

function Reseller(){
    return(
        <>
            <div className="reseller">
                <div className="container r-top">
                    <h3>Business Proposal For</h3>
                    <div className="boxes">
                    <div className="box">
                        <div className="icon">
                            <img src="/images/1.png" alt="" />
                        </div>
                        <b>Innovative & Enthusiastic IT Entrepreneurs</b>
                        <p>Active and enthusiastic entrepreneurs can fully exploit the potentialities of a coompany available resources.such as Softwares, Technology and Capital.
                        </p>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <img src="/images/2.png" alt="" />
                        </div>
                        <b>Software companies</b>
                        <p>Softwares Companies were increase growth in business using these softwares.My ERP Provide software for every trade.</p>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <img src="/images/3.png" alt="" />
                        </div>
                        <b>Website designers and developers</b>
                        <p>Web Developers & Designers are genrate packages of 'website + Accounting Software' increase own turnover figures.</p>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <img src="/images/4.png" alt="" />
                        </div>
                        <b>IT Startups</b>
                        <p>Great oppurtunity for those startups who were survived because of their financial terms & they genrate side income by selling these softwares.</p>
                    </div>
                    </div>
                </div>

                {/* ----------- RoadMap ------------------- */}

                <div className="container-fluid">
                    <div className="roadmap">
                        <h2>Road Map To start your own Software Compay</h2>
                        <div className="items">
                            <div className="info">
                                <div className="icon">
                                    <img src="/images/investment.png" alt="" />
                                </div>
                                <div className="details">
                                    <b>No Investment Required</b>
                                    <p>To Become a part of this programme 'No Investment Requirement', Only Concentrate on sales.</p>
                                </div>
                            </div>

                            <div className="info">
                                <div className="icon">
                                    <img src="/images/software.png" alt="" />
                                </div>
                                <div className="details">
                                    <b>No Need to Hire Software Engineer</b>
                                    <p>Most Important, No need of software Engineer Every Technical Problem will tackled by Company.</p>
                                </div>
                            </div>

                            <div className="info">
                                <div className="icon">
                                    <img src="/images/programming.png" alt="" />
                                </div>
                                <div className="details">
                                    <b>No Programming Required</b>
                                    <p>No need of technical skills for join this programme only determination & sales skills will increase your income.</p>
                                </div>
                            </div>

                            <div className="info">
                                <div className="icon">
                                    <img src="/images/experience.png" alt="" />
                                </div>
                                <div className="details">
                                    <b>No Experience Required</b>
                                    <p>No need of experience in software trade to join this programme.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* -------------- Resale ------------------ */}

                <div className="container">
                    <div className="resale">
                        <h2>Resale our products on your own brand name</h2>

                        <div className="image">
                            <img src="/images/resaleImage.jpg" alt="image" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Reseller;