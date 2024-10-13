const express = require("express");
const router = express.Router();
const db = require("../database/financeTrackerDB");

// signup 
router.post('/signup', async (req, res)=>{
    const { userName, email, pass } = req.body;

    const query = 
    `INSERT INTO user (userName, email, pass) VALUES ("${userName}", "${email}", "${pass}");`;

    db.query(query, (err, results)=>{
        if(err) {
            res.status(401).json({error: `Something went wrong. ${err}`});
            return;
        }
        res.status(201).json({results});
    })
});



module.exports = router;