
const nodemailer = require('nodemailer')


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user : 'spriyadarshiny073@gmail.com',
        password : 
    }
});

const mailOption = {
    from : "spriyadarshiny073@gmail.com",
    to: "darshiny14@gmail.com",
    subject : "sending email using node",
    html : "<h1>node js mail</h1>"
}

transporter.sendMail(mailOption, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });