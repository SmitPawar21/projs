const express = require("express");
const AuthRouter = require("./routers/AuthRouter")
const app = express();
const db = require("./database/financeTrackerDB");

app.use(express.json());

app.use('/', AuthRouter);

app.listen(5000, ()=> { console.log("server chalu hai") })

app.get('/data', (req, res)=>{

    db.query('SELECT * FROM user', (err, results)=>{
        if(err) {
            console.log(err);
            res.status(401).json({error: `Something went wrong. ${err}`})
        }
        res.status(201).json({results});
    })

})