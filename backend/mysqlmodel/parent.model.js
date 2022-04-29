const sql = require("../models/mysqldb")

//constructor 
const Parent = function(parent) {
    this.parentId = parent.parentId;
    this.firstname = parent.firstname;
    this.surname = parent.surname;
    this.gender = parent.gender;
    this.address = parent.address;
    this.phoneNo = parent.phoneNo;
    this.userId = parent.userId;    
}

//insert a parent into a system
Parent.create = (newParent, result)=> {
    
    sql.query("INSERT INTO parents SET ?", newParent, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        
    console.log("created parent: ", { parentId: res.insertParentId, ...newParent });
    result(null, { parentId: res.insertParentId, ...newParent });
        
    })
}

//retrieving single parent object
Parent.findParentById = (parentId, result) => {
    sql.query(`SELECT * FROM parents WHERE parentId LIKE '%${parentId}%'`, (err, res) => {
      
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res) {
        console.log("found parent: ", res);
        result(null, res);
        return;
      }
      // not found parents with the id
      result({ kind: "not_found" }, null);
    });
  };



//retrieve logged parent data
Parent.findParentByUsername = (username, result) => {
  sql.query(`SELECT p.parentId, p.firstname,p.surname, u.email, p.phoneNo from parents p join users u on u.username=p.userId where u.username = '${username}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    //return the results
    if (res) {
      console.log("found parent: ", res);
      result(null, res);
      return;
    }
    // not found parents with the id
    result({ kind: "not_found" }, null);
  });
};

//retrieve children info of logged parent data
Parent.findChildrenByPUsername = (parentId, result) => {
  sql.query(`select s.studentId, s.firstname,s.surname, c.className from students s join classes c on s.classId=c.classId join parents p on s.parentId=p.parentId where p.parentId='${parentId}' group by s.studentId order by c.classId asc;`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    //return the results
    if (res) {
      console.log("found parent: ", res);
      result(null, res);
      return;
    }
    // not found parents with the id
    result({ kind: "not_found" }, null);
  });
};

Parent.findChildrenExamByparentId = (parentId, result) => {
  sql.query(`select m.subjectCode, u.subjectName, m.student_score, m.total_score, round((m.student_score/m.total_score)*100,2) as grade, s.studentId ,CASE WHEN (round((m.student_score/m.total_score)*100,2))>=80 THEN 'A=distinction' WHEN (round((m.student_score/m.total_score)*100,2))>=70 THEN 'B=very good' WHEN (round((m.student_score/m.total_score)*100,2))>=60 THEN 'C=good' WHEN (round((m.student_score/m.total_score)*100,2))>=50 THEN 'D=average' ELSE 'F=fail' END AS remarks from students s inner join classes c on s.classId=c.classId join student_marks m on m.studentId = s.studentId JOIN parents p on s.parentId=p.parentId join subjects u on m.subjectCode=u.subjectCode join terms t on m.termId=t.termId where p.parentId like '${parentId}' order by s.studentId;`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    //return the results
    if (res) {
      console.log("found parent: ", res);
      result(null, res);
      return;
    }
    // not found parents with the id
    result({ kind: "not_found" }, null);
  });
};



//retrieving all parents
Parent.findAllParents = (surname, result) => {
  let query = "SELECT * FROM parents";
  if (surname) {
    query += ` WHERE surname LIKE '%${surname}%'`;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("parents: ", res);
    result(null, res);
  });
};

//update parent by their id
Parent.updateParentById = (parentId, parent, result) => {
  
  sql.query(
    `UPDATE parents SET firstname = ?, surname = ?, phoneNo = ?, gender = ?, address = ?, userId = ? WHERE parentId = '${parentId}'`,
    
    [ parent.firstname,
      parent.surname, 
      parent.phoneNo, 
      parent.gender, 
      parent.address, 
      parent.userId, 
      parentId],

    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {

        // not found parent with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated parent: ", 
      { parentId: parentId, ...parent });
      result(null, { parentId: parentId, ...parent });
    }
  );
}

//delete al parent by id
Parent.deleteParent = (parentId, result) => {
      
  sql.query("DELETE FROM parents WHERE parentId = ?", 
  
  parentId, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found parent with the id
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted parent with parentId: ", parentId);
    result(null, res);
  });
};


//retrieve a student person info
Parent.childrenPersonalInfo = (parentId, result) => {
  sql.query(`SELECT s.studentId, s.firstname, s.surname, c.className, t.termName, sum(m.total_score) as fullmarks, case when ((sum(m.student_score)/sum(m.total_score))*100)>=50 then 'pass' else 'fail' end as status, sum(m.student_score) as marks, CASE WHEN ((sum(m.student_score)/sum(m.total_score))*100)>=80 THEN 'Grade A Excellent' WHEN ((sum(m.student_score)/sum(m.total_score))*100)>=70 THEN 'Grade B, Very good' WHEN ((sum(m.student_score)/sum(m.total_score))*100)>=60 THEN 'Grade C, Good' WHEN ((sum(m.student_score)/sum(m.total_score))*100)>=50 THEN 'Grade D, Average pass' ELSE 'Grade F, Needs support' END AS comments from student_marks m join students s on m.studentId=s.studentId join parents p on s.parentId=p.parentId join classes c on s.classId=c.classId join terms t on t.termId=m.termId where m.type like '%End-Of-Term%' and p.parentId = '${parentId}'  group by studentId, m.termId,m.ayearId order by marks desc;`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res) {
      console.log("found student: ", res);
      result(null, res);
      return;
    }
    // not found student with the id
    result({ kind: "not_found" }, null);
  });
};

module.exports = Parent;