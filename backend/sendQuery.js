const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const expressAsyncHandler = require("express-async-handler");

require('dotenv').config();

const app = express();

app.use(cors());  //To allow requests from React Frontend

app.use(bodyParser.json());  // Parse JSON request bodies

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user : process.env.EMAIL_USER,
        pass : process.env.EMAIL_PASS,
    },
});

//handling the email route

const sendEmail = expressAsyncHandler(async(req,res) =>{
    const {email, name, phone,query,itemName} = req.body;   //get data from request body
    console.log(name, email);

    //Define email options

    const mailOptions ={
        from : email,
        to : process.env.EMAIL_USER,
        subject : `Query for ${itemName}`,
        text : `Item : ${itemName}\n Name : ${name}\n Phone : ${phone}\n Query : ${query}`,
    };

    //send mail

    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            return res.status(500).send({message : 'Error sending mail',error});
        }
        else{
            return res.status(200).send({message : 'Email sent successfully',info});
        }
    });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

module.exports = { sendEmail };