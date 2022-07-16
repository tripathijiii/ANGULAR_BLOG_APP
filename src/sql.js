const mysql = require('mysql2')


const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "9002748769sT",
    database: 'Blog_Gallery'
});

con.connect(function(err){
    if(err) throw err;
    console.log("connected");
})

module.exports = con; 