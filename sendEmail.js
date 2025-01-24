const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', (req, res) => {
    const { fullName, mobileNumber, email, companyDescription, rentalDuration, rentalDate, requirementCity, rentalProduct, productConfiguration, additionalComments } = req.body;

    const message = `
    Full Name: ${fullName}
    Mobile Number: ${mobileNumber}
    Email: ${email}
    Company Description: ${companyDescription}
    Rental Duration: ${rentalDuration}
    Rental Date: ${rentalDate}
    Requirement City: ${requirementCity}
    Rental Product: ${rentalProduct}
    Product Configuration: ${productConfiguration}
    Additional Comments: ${additionalComments}
    `;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '3citsolutionsntelecom@gmail.com', // Your Gmail email address
            pass: 'zhad wxut qucp udvv'     // Your Gmail app password
        }
     });

    const mailOptions = {
        from: '3citsolutionsntelecom@gmail.com', // Sender's email
        to: 'dishank@3citsolutions.com ', 
        subject: 'Rental Request',
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Failed to send email');
        } else {
            console.log('Email sent: '+ info.response);
            res.status(200).send('Email sent successfully!');
        }
    });
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});