var mysql      = require('mysql');

// creating a database connection
var connection = mysql.createConnection({
      host     : 'sql9.freemysqlhosting.net',
      user     : 'sql9328028',
      password : 'iumlKJrXcv',
      database : 'sql9328028'
});
connection.connect();

module.exports = {
    connection : connection
};



