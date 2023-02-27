const express = require('express');
var bodyParser = require('body-parser') ; 
const nodemailer = require('nodemailer') ; 
const app = express();

app.listen(4000,()=>{
    console.log('connected successfully on port 4000')
})
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());



app.post('/sendMail', (req,res)=>{
        
       const {fullname,email,subject,text} = req.body ; 
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'amir.maalaoui27@gmail.com',
              pass: 'fievzxnivehllblp'
            }
          });
      
          var mailOptions = {
            from: 'amir.maalaoui27@gmail.com',  
            to: 'amir.maalaoui270@gmail.com',
            subject  : subject,
                
                html :'Email sended by '+'<h1>'+fullname+'</h1>'+'</br>'+' with email :  '+'<h2>'+email+'</h2>'+'</br>'+' Subject :'+'<p>'+subject+'</p>'+'</br>'+ 'Text :'+'<p>'+text+'</p>'
                 
          };
      
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
                console.log('Email sent: ' + info.response)
            }
          });
     
  
});