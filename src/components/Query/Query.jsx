import React from "react";
import './Query.css';

import { useEffect } from "react";

function Query({ item, isModalOpen, setIsModalOpen, closeModal }) {

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add('no-scroll');
            document.documentElement.classList.add('no-scroll'); // Lock scrolling on html as well
        } else {
            document.body.classList.remove('no-scroll');
            document.documentElement.classList.remove('no-scroll');
        }

        // Cleanup function to ensure the class is removed when the modal is closed
        return () => {
            document.body.classList.remove('no-scroll');
            document.documentElement.classList.remove('no-scroll');
        };
    }, [isModalOpen]);

    closeModal = () => {
        setIsModalOpen(!isModalOpen);
    }


    //Mail function to send send query.

    const sendEmail = async(item)=> {
        const emailParams = {
            email: document.getElementById('email').value,
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            query: document.getElementById('query').value,
            itemName: item.name,
        }


        //fetch POST request from backend

        const res = await fetch('http://localhost:5000/query', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(emailParams),
        })
            .then(res => res.json())
            .then(data => {
                if (data.message === 'Email sent successfully') {
                    alert("Email sent successfully!");
                    setIsModalOpen(!isModalOpen);
                }
                else {
                    alert("Failed to send email.");
                }
            })
            .catch((error) => {
                console.error('Error : ', error);
                alert("Failed to send email.");
            });
    }


    return (
        <>
            <div className="query">
                <div className="container">
                    <div className="query-box">
                        <div className="query-content">
                            <div className="query-head">
                                <h3>{item.name}</h3>
                                <button type="button" className="btn" onClick={closeModal}>&times;</button>
                            </div>
                            <div className="query-form">
                                <form action="#" class="was-validated">
                                    <div class="form-group">
                                        <label for="email">Email:</label>
                                        <input type="email" class="form-control" id="email" placeholder="Enter your Email" name="email" required />
                                        <div class="invalid-feedback">Please fill out this field.</div>
                                    </div>
                                    <div class="form-group">
                                        <label for="pwd">Name:</label>
                                        <input type="text" class="form-control" id="name" placeholder="Enter your Name" name="name" required />
                                        <div class="invalid-feedback">Please fill out this field.</div>
                                    </div>
                                    <div class="form-group">
                                        <label for="phone">Phone No.:</label>
                                        <input type="text" class="form-control" id="phone" placeholder="Enter your Phone Number" name="phone" required />
                                        <div class="invalid-feedback">Please fill out this field.</div>
                                    </div>

                                    <div class="form-group">
                                        <label for="query">Ask Your Query:</label>
                                        <input type="text" class="form-control" id="query" placeholder="Enter your Query" name="query" required />
                                        <div class="invalid-feedback">Please fill out this field.</div>
                                    </div>

                                    <button type="submit" class="btn btn-primary" onClick={(e) =>{
                                        e.preventDefault();
                                        sendEmail(item);
                                    }}>Send</button>
                                </form>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Query;