const req = require("express/lib/request");
const db = require("../models");

const Student = db.student;

const Op = db.Sequelize.Op;

//create school details
exports.create = (req, res) =>{
    if(!req.body.studentId){
        res.status(400).send({
            message: "school name cannot be empty"
        });
        return;
    };

    //create a school
    const student = {
        studentId: req.body.studentId,
        firstname: req.body.firstname,
        middlename: req.body.middlename,
        gender: req.body.gender,
        address: req.body.address
    }

    //save school in the database
    Student.create(student).then(data =>{
        res.send(data);
    })
    .catch(error => {
        res.status(500).send({
            message: 
            error.message || "some error occured while creating school"
        });
    });
};

//retriev all schools
// exports.findAll = (req, res) =>{
//     const schoolName = req.query.schoolName;
//     var condition = schoolName ? {
//         schoolName: {[Op.like]: '%${schoolName}%'}}
//         : null

//         school.findAll({where: condition})
//         .then(data =>{
//             res.send(data);
//         })
//         .catch(error =>{
//             res.status(500).send({
//                 message: 
//                 error.message || "some error occured while retrieving schools"
//             })
//         })
// };

// //retrieve one school
// exports.findOne = (req, res) =>{
//     const schoolId = req.params.schoolId;

//     School.findByPk(schoolId)
//     .then(data =>{
//         res.send(data);
//     }).catch(error =>{
//         res.status(500).send({
//             message:
//             error.message || "some error while retrieving a school"
//         });
//     });
// };

// //update school
// exports.update = (req, res) => {
//     const schoolId = req.params.schoolId;

//     School.update(req.body, {
//         where: { schoolId: schoolId}
//     }).then(num => {
//         if (num == 1){
//             res.send({
//                 message: "school successfully added"
//             });
//         }
//         else{
//             res.status(404).send({
//                 message: `not found school with id=${schoolId}.`
//             });
//         }
//     }).catch(error =>{
//         res.status(500).send({
//             message:
//             error.message || "error in updating school with id="+ schoolId
//         });
//     });
// };