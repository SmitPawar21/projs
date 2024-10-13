const mysql = require("mysql2");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // replace with your MySQL username
    password: 'smitpawar21082005', // replace with your MySQL password
    database: 'financeTrackerDB'
});

db.connect(err =>{
    if(err) {
        console.log(err);
        return;
    }
    
    console.log("database connected");
});

module.exports = db;