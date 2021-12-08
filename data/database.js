const mysql = require('mysql2')
const mysqlConfig = require('./credentials.js')

const connection = mysql.createConnection(mysqlConfig);

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})


const getTemplates = function(callback) {
  let all = 'SELECT * FROM templates';

  connection.query(all, (err, data) => {
    if (err) {
      console.log(err);
      callback(err, null);
    }
    callback(null, data);
  });
};

// connection.end()

module.exports = {
  getTemplates
}
