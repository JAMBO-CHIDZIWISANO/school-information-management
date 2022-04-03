const Term = require("../mysqlmodel/terms.model");

exports.findAllTerms =(req, res) => {
    const termName = req.query.termName;
    Term.findAllTerms(termName, (err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving Comments."
        });
        else res.send(data);
    });
};