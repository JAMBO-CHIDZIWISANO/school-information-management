const express = require("express");

const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json)

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

//routes
app.get("/", (req, res)=>{
    res.json({message: "welcome first message."});
});

//set port, listen for request
const PORT = process.env.PORT || 9000;
app.listen(PORT, ()=>{

    console.log(`Server is running on port ${PORT}.`);

})