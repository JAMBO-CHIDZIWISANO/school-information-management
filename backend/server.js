const express = require("express");


//morgan for easy error check of the routes
const morgan = require("morgan")

//parsing json content body
const bodyParser = require("body-parser")

//twilio
const twilio = require('twilio')
//envilonment building
require('dotenv').config({path: ".env"})

//accessing protected routes
const cors = require('cors');

//exectiting sequlizer for tables into database
const db = require("./models");
db.sequelize.sync();

//swagger documentation

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "School Management Information System API",
      version: '1.0.0',
    },
  },
  apis: [ "./routes/*.js", 'server.js'],
};




const app = express();//alias
const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

//twilio config
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN; 
const senderNumber = process.env.TWILIO_PHONE_NUMBER; 

var client = new twilio(accountSid, authToken);

//defualt cors route
var corsOptions = {
    origin: "http://localhost:4001"
};

app.use(morgan('dev'))

//blocks browser from restricting any data
app.use(cors(corsOptions));

//parse request of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}));

//passing json
app.use(bodyParser.json())

/**
 * @swagger
 * /:
 *  get:
 *      description: default routes to try server
 *      responses:
 *          200: 
 *              description: success
 */
app.get('/', (req, res)=>{
    res.json({message:'helloworld'});
});


/**
 * @swagger
 * /send-sms:
 *   post:
 *     description: send sms
 *     parameters:
 *      
 *      - name: phoneNumber
 *        description: phone number to send sms
 *        in: formData
 *        required: true
 *        type: string
 *      - name: message
 *        description: short message service txt to be sent
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       201:
 *         description: sent
 */
app.post('/send-sms', async (req, res)=>{
   
    client.messages.create({
        to: req.body.phoneNumber,
        from: senderNumber,
        body: req.body.message,
    }).then(message=> console.log(message))

    .catch(error=>console.log(error))
})


require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
require("./routes/school.routes")(app);
require("./routes/student.routes")(app);
require("./routes/teacher.routes")(app);
require("./routes/parent.routes")(app);
require("./routes/attendance.routes")(app);
require("./routes/marks.routes")(app);
require("./routes/subject.routes")(app);
require("./routes/classes.routes")(app);
require("./routes/terms.routes")(app);
require("./routes/lessons.routes")(app);
require("./routes/smiscomments.routes")(app);
require("./routes/smisposts.routes")(app);
require("./routes/student-subject")(app);
require("./routes/Total.routes")(app);

//Set port, listen for requests
const PORT =  process.env.PORT || 4000
app.listen(PORT, ()=>console.log('helloo'));

