const express = require("express");

const bodyParser = require("body-parser")



const db = require("./models");
db.sequelize.sync();


const cors = require('cors');

const app = express();

var corsOptions = {
    origin: "http://localhost:4001"
};

app.use(cors(corsOptions));


//parse request of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}));

app.use(bodyParser.json())

//simple get route
app.get('/', (req, res)=>{
    res.json({message:'helloworld'});
});

require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
require("./routes/school.routes")(app)

//Set port, listen for requests
const PORT =  process.env.PORT || 4000
app.listen(PORT, ()=>console.log('helloo'));

