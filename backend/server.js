const express = require("express");
const morgan = require("morgan")
const bodyParser = require("body-parser")
//const pino = require('express-pino-logger')
const twilio = require('twilio')
require('dotenv').config({path: ".env"})

const cors = require('cors');

//var AWS = require('aws-sdk');

const db = require("./models");
db.sequelize.sync();

const app = express();//alias

//twilio config
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN; 
//const recieverNumber = process.env.myNumber; 
const senderNumber = process.env.TWILIO_PHONE_NUMBER; 

var client = new twilio(accountSid, authToken);

var corsOptions = {
    origin: "http://localhost:4001"
};

// //twilio requirements texting api
// const accountSid = 'AC76768df563f3781ee71cea955619a47c'
// const authToken ='f8647c2d992252ada8c5e686ee833500'
// const client  = require('twilio')(
//    accountSid, authToken
// );



app.use(morgan('dev'))

//blocks browser from restricting any data
app.use(cors(corsOptions));
//app.use(pino) 

//parse request of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json())


//simple get route (welcome page server)
app.get('/', (req, res)=>{
    res.json({message:'helloworld'});
});

//send sms text from twilio
app.post('/send-sms', async (req, res)=>{
    client.messages.create({
        to: req.body.phoneNumber,
        from: senderNumber,
        body: "Message: "+ req.body.message,
    }).then(message=> console.log(message))

    .catch(error=>console.log(error))
})

// app.get('/send-text ', (req,res)=>{
//     // get variables, passed via query string
//     const {recipient, textmessage}= req.query
//     //send text
//     client.messages.create({
//         body: textmessage,
//         to: recipient,
//         from: '+17575298348'//from twilio
//     }).then((message)=>console.log(message.body))
// })

// //sms text notification
// app.get('/api/school/sms', (req, res) => {

//     console.log("Message = " + req.body.message);
//     console.log("Number = " + req.body.number);
//     console.log("Subject = " + req.body.subject);

//     //passing parameters
//     var params = {
//         Message: req.body.message,
//         PhoneNumber: '+' + req.body.number,
//         MessageAttributes: {
//             'AWS.SNS.SMS.SenderID': {
//                 'DataType': 'String',
//                 'StringValue': req.body.subject
//             }
//         }
//     };

//     //publishing text to the SNS api
//     var publishTextPromise = new AWS.SNS({ apiVersion: '2010-03-31' }).publish(params).promise();

//     //stringfying the data and also catching errors
//     publishTextPromise.then(
//         function (data) {
//             res.end(JSON.stringify({ MessageID: data.MessageId }));
//         }).catch(
//             function (err) {
//                 res.end(JSON.stringify({ Error: err }));
//             });

// });

// app.post('/api/messages', (req, res)=>{
//     res.setHeader('Content-Type', 'application/json');
//     client.messages
//     .create({
//       from: process.env.TWILIO_PHONE_NUMBER,
//       to: req.body.to,
//       body: req.body.body
//     })
//     .then(() => {
//       res.send(JSON.stringify({ success: true }));
//     })
//     .catch(err => {
//       console.log(err);
//       res.send(JSON.stringify({ success: false }));
//     });
// })

require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
require("./routes/school.routes")(app);
require("./routes/student.routes")(app);
require("./routes/teacher.routes")(app);
require("./routes/parent.routes")(app);
require("./routes/post.routes")(app);
require("./routes/comments.routes")(app);
require("./routes/attendance.routes")(app)
require("./routes/marks.routes")(app)
require("./routes/subject.routes")(app)
require("./routes/classes.routes")(app);
require("./routes/terms.routes")(app);

require("./routes/smiscomments.routes")(app);
require("./routes/smisposts.routes")(app);


//Set port, listen for requests
const PORT =  process.env.PORT || 4000
app.listen(PORT, ()=>console.log('helloo'));

