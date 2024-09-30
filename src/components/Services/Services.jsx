import React from "react";

import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { BiCustomize } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";

import './Services.css'

function Services() {
    return (
        <>
            <div className="services">

                <div className="container services-box">
                    <div className="top-box">
                        <div className="box software">
                            <div className="service-image">
                                <img src="/images/softwareDev.jpg" alt="image" />
                            </div>

                            <h3>Software Development</h3>
                            <p>We are top-rated web design company which helps you in propelling your business to greater heights in today’s world. We take pride in delivering high-quality and robust websites to our clients and guarantee to provide a respectable and commendable business space.</p>
                        </div>
                        <div className="box web">
                            <div className="service-image">
                                <img src="/images/webDev.jpg" alt="image" />
                            </div>

                            <h3>Web Development</h3>
                            <p>We offer custom website development option. We have extensive experience in developing unique websites of all types, budgets and complexities. Our approach is to get down to basics and work out what the requirements of the clients are. We create the websites from the ground up, utilizing the standard development frameworks to ensure we provide a sustainable tailored solution to your requirements.</p>
                        </div>
                        <div className="box domain">
                            <div className="service-image">
                                <img src="/images/domain.jpg" alt="image" />
                            </div>

                            <h3>Domain Registration</h3>
                            <p>When there is limitations of varied solutions confronted by customers, we offer custom website development option. We have extensive experience in developing unique websites of all types, budgets and complexities. Our approach is to get down to basics and work out what the requirements of the clients are. We create the websites from the ground up, utilizing the standard development frameworks to ensure we provide a sustainable tailored solution to your requirements.</p>
                        </div>
                    </div>

                    <div className="lower-box">
                        <div className="box mobile">
                            <div className="service-image">
                                <img src="/images/mobileDev.jpg" alt="image" />
                            </div>

                            <h3>Android Apps</h3>
                            <p>We hold the expertise in mobile app development with our team of creative and knowledgeable developers to accomplish your business demands and requirements. Utilizing advanced technology and tools, our mobile app developers create highly customizable mobile apps that suit your requirement. Our past work and experience showcase our brilliance in mobile app development.</p>
                        </div>
                        <div className="box bulk-sms">
                            <div className="service-image">
                                <img src="/images/bulkSms.jpg" alt="image" />
                            </div>

                            <h3>Bulk SMS</h3>
                            <p>We hold the expertise in mobile app development with our team of creative and knowledgeable developers to accomplish your business demands and requirements. Utilizing advanced technology and tools, our mobile app developers create highly customizable mobile apps that suit your requirement. Our past work and experience showcase our brilliance in mobile app development.</p>
                        </div>
                        <div className="box 24*7-support">
                            <div className="service-image">
                                <img src="/images/support24.jpg" alt="image" />
                            </div>

                            <h3>24*7 Support</h3>
                            <p>We optimize your business website for search engines to ensure an increase in traffic and higher revenue. We are reputed SEO agency which offers the best optimization solutions. Everyone wishes to have their website on the first page of search engines, and you need to prove these search engines that you deserve it. We offer professional SEO marketing with the in-depth understanding of how a search engine works and how to rank higher. We have an expert team of SEO marketers with years of experience in delivering best SEO services to increase the visibility of your website.</p>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="container-fluid">
                    <div className="service-tools">
                        <div className="tool-box deployment">
                            <i className="icons"><AiOutlineDeploymentUnit /></i>
                            <b>Fast Deployment</b>
                            <p>Engineered for rapid deployment and seamless integration, ensuring you're up and running in no time with minimal effort!</p>
                        </div>

                        <div className="tool-box customization">
                            <i className="icons"><BiCustomize /></i>
                            <b>Easy Customization</b>
                            <p>We provide simple and flexible design for easy customization, tailored to your needs!</p>
                        </div>

                        <div className=" tool-box features">
                            <i className="icons"><IoSettings /></i>
                            <b>Awesome Features</b>
                            <p>Packed with awesome features to elevate your experience and empower your projects like never before!</p>
                        </div>

                        <div className="tool-box flexible">
                            <i className="icons"><FaUserFriends /></i>
                            <b>Extremely Flexible</b>
                            <p>Extremely flexible design, built to adapt effortlessly to your unique requirements and scale with ease!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;