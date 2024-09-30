import React from "react";
import './Home.css'
import { Carousel } from "react-bootstrap";

import Products from './../Products';
import MarketingTools from "../MarketingTools";
import Query from "../Query/Query";
import { useState } from "react";


function Home() {

    const [isModalOpen , setIsModalOpen] = useState("false");
    const [selectedItem, setSelectedItem] = useState(null);

    const toggleModal = (currItem)=>{
        setSelectedItem(currItem);
        setIsModalOpen(!isModalOpen);
    }

    const closeModal = ()=>{
        setSelectedItem(null);
    }

    return (
        <>
            <div className="home">
                <div className="container-fluid">
                    <div className="slide-show">
                        <Carousel className="slides">
                            <Carousel.Item>
                                <img
                                    className=" slide-image"
                                    src="/images/slideImage1.jpg"
                                    alt="1st slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="slide-image"
                                    src="/images/slideImage2.jpg"
                                    alt="2nd slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="slide-image"
                                    src="/images/slideImage3.jpg"
                                    alt="3rd slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="slide-image"
                                    src="/images/slideImage4.jpg"
                                    alt="4th slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="slide-image"
                                    src="/images/slideImage5.jpg"
                                    alt="5th slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="slide-image"
                                    src="/images/slideImage6.jpg"
                                    alt="6th slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="slide-image"
                                    src="/images/slideImage7.jpg"
                                    alt="7th slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="slide-image"
                                    src="/images/slideImage8.jpg"
                                    alt="8th slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>

                    <div className="container products">
                        <h2 className="p-heading">OUR <span>PRODUCTS</span></h2>
                        <p className="p-quote">E.R.P. Software For Library with Books Record, Issue, Receipt, Sticker Printing, Library Card, Pending Books List,Book Ledger & User Security</p>
                        <div className="product-items">
                            {
                                Products.map((item, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <div className="item">
                                                <img src={item.image} alt={item.alt} className="item-image" />
                                                <strong className="item-name">{item.name}</strong>
                                                <p className="item-desc">{item.desc}</p>

                                                <button type="button" className="btn btn-primary download-btn" onClick={()=>toggleModal(item)}>Download</button>
                                            </div>

                                            {
                                                isModalOpen && selectedItem && selectedItem === item && <Query item={item} closeModal={closeModal} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
                                            }

                                        </React.Fragment>
                                    )
                                })
                            }

                        </div>

                    </div>

                    <div className="container marketing-tools">
                        <h2 className="m-heading">MARKETING <span>TOOLS</span></h2>
                        <div className="tools">
                            {
                                MarketingTools.map((tool) => {
                                    return (
                                        <div className="tool">
                                            <img src={tool.image} alt={tool.alt} className="tool-image" />
                                            <strong className="tool-name">{tool.name}</strong>
                                            <p className="tool-desc">{tool.desc}</p>

                                            <button type="button" className="btn btn-primary download-btn">Download</button>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>

                </div>

                <div className="inventory">
                    <img src="/images/bulbs.png" alt="" />
                    <h3>Inventory & Accounting Software</h3>
                    <button type="button" className="btn btn-lg btn-warning connect-btn">Let's Connect</button>
                </div>


                <div className="container gst-features">
                    <h2 className="g-heading">GST SOFTWARE <span>FEATURES</span></h2>
                    <div className="gst-box">
                        <div className="box left-box">

                            <div className="l-box lb-1">
                                <div className="img-box">
                                    <img src="/images/choose-box-01.png" alt="image" />
                                </div>
                                <div>
                                    <p className="heading">Auto Backup</p>
                                    <p>Save Backup in Financial year wise, Monthwise, Daywise & Direct Email.</p>
                                </div>
                            </div>

                            <div className="l-box lb-2">
                                <div className="img-box">
                                    <img src="/images/choose-box-02.png" alt="image" />
                                </div>
                                <div>
                                    <p className="heading">Send Bills on Whatsapp</p>
                                    <p>You Can Share Bills & Reports on Whatsapp with-in Single Click.</p>
                                </div>
                            </div>

                            <div className="l-box lb-3">
                                <div className="img-box">
                                    <img src="/images/choose-box-06.png" alt="image" />
                                </div>
                                <div>
                                    <p className="heading">Cheque Printing</p>
                                    <p>Our ERP Software provide facilty to Print Cheque Directly from software.</p>
                                </div>
                            </div>

                        </div>

                        <div className="box invention-image">
                            <img src="/images/InventionBulb.png" alt="Invention Bulb" />
                        </div>

                        <div className="box right-box">

                            <div className="r-box rb-1">
                                <div className="img-box">
                                    <img src="/images/choose-box-03.png" alt="image" />
                                </div>
                                <div>
                                    <p className="heading">SMS Plugin</p>
                                    <p>Create your Own SMS Templates, Reminder etc.</p>
                                </div>
                            </div>

                            <div className="r-box rb-2">
                                <div className="img-box">
                                    <img src="/images/choose-box-04.png" alt="image" />
                                </div>
                                <div>
                                    <p className="heading">E-Way Bill</p>
                                    <p>Easily Generate JSON file & Get your E-way Bill.</p>
                                </div>
                            </div>

                            <div className="r-box rb-3">
                                <div className="img-box">
                                    <img src="/images/choose-box-05.png" alt="image" />
                                </div>
                                <div>
                                    <p className="heading">Import Data From Excel</p>
                                    <p>Easily Import & Export Data in any Format (.pdf, .xls, .doc, .mdb etc.)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Home;