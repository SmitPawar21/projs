const express = require("express");
const router = express.Router();
const axios = require("axios")

router.post('/chat', async (req, res) => {
    const userMessage = "hello";
    const apiKey = process.env.API_KEY;
    console.log(apiKey);

    try {
        await fetch('https://api.openai.com/v1/chat/completions', 
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    message: [{
                        role: "user", 
                        message: userMessage,
                    }]
                })
            }
        )
        .then((res) => res.json())
        .then((data)=> {
            console.log(data);
            res.status(201).json({data});
        }).catch((err) => {
            console.log(err);
        })
        // console.log(response)
        // res.status(201).json({botMessage: response.data})

    } catch (err) {
        res.status(401).json({ error: `Something went wrong. ${err}` });
    }
})

module.exports = router;