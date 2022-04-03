const sql = require("../models/mysqldb")

//constructor 
const Term= function(term) {
    this.termId = term.termId;
    this.termName = term.termName;
}

//retrieve all academic terms
Term.findAllTerms = (termName, result) => {
    let query = "SELECT termId, termName FROM terms";
    if (termName) {
      query += ` WHERE termName LIKE '%${termName}%'`;
    }
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
      console.log("terms: ", res);
      result(null, res);
    });
};

module.exports = Term;