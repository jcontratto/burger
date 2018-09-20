//import the MySQL connection
var connection = require("../config/connection.js");
//SQL syntax helper function
function printQuestionMarks(num) {
    var arr = [];

    for(var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

//Convert key and value object pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
    //loops through the keys and pushes into a string array
    for(var key in ob) {
        var value = ob[key];
        if(Object.hasOwnProperty.call(ob, key)) {
            if(typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    //Takes an array of strings and makes a single string
    return arr.toString();
}
//This is the object for all our SQL functions
var orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(querySTring, function(err, result) {
            if(err) {
                throw err;
            }
            cb(result);
        });
    },

    //Create function
    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO" + table + "values(tessing111)";
         // vals = '789'
    // queryString += " (";
    // queryString += cols.toString();
    // queryString += ") ";
    // queryString += "VALUES (";
    // queryString += printQuestionMarks(vals.length);
    // queryString += ") ";
    console.log(queryString);
    console.log(vals)

    connection.querey(queryString, vals, function(err, result) {
        if(err) {
            throw err;
        }
        cb(result);
    });
    },

    //Update function
    update: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE" + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if(err) {
                throw err;
            }
            cb(result);
        });
    },

    //Delete function
    delete: function(table, condition, cb) {
        var queryString = "DELETE FROM" + table;
        queryString += "WHERE";
        queryString += condition;

        connection.query(queryString, function(err, result) {
            if(err) {
                throw err;
            }
            cb(result);
        });
    }
};

//Export ORM object to model (burger.js)
module.exports = orm;