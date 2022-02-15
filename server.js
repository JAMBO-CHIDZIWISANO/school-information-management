const express = require("express");

const db = require("./models");
db.sequelize.sync();


const cors = require('cors');

const app = express();

var corsOptions = {
    origin: "http://localhost:4001"
};

app.use(cors(corsOptions));

//app.use(express.json)

//parse request of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true}));

//simple get route
app.get('/', (req, res)=>{
    res.json({message:'helloworld'});
});

//Set port, listen for requests
const PORT =  process.env.PORT || 4000
app.listen(PORT, ()=>console.log('helloo'));

