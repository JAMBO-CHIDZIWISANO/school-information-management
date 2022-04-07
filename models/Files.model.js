module.exports = (sequelize, Sequelize) => {
    const Files = sequelize.define("files", {
      fileId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      fileName: {
        type: Sequelize.STRING
      }
    });
    return Files;
  };

//   const express = require("express");
// const fileupload = require("express-fileupload");
// const cors = require("cors");
// const bodyParser = require('body-parser');
 
// const app = express();
 
// app.use(cors());
// app.use(fileupload());
// app.use(express.static("files"));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
 
// app.post("/upload", (req, res) => {
//   const newpath = __dirname + "/files/";
//   const file = req.files.file;
//   const filename = file.name;
 
//   file.mv(`${newpath}${filename}`, (err) => {
//     if (err) {
//       res.status(500).send({ message: "File upload failed", code: 200 });
//     }
//     res.status(200).send({ message: "File Uploaded", code: 200 });
//   });
// });
 