const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();

const redis = require('redis');
const client = redis.createClient();

router.get('/find/:name', (req, res, next) => { //The colon matchs a url string, creates parameter name and puts it in req.params

    const name = req.params.name;
    client.exists(name, (err, response) => { //looks for key
        if(err){ throw new Error(err) }
        if(response == 1) { //key exists, grab value
            client.get(name, (err, response) => {
                res.send(JSON.stringify(response + ' already cached'));
                console.table(response);
            })
        } else {
            const reversedName = name.split('').reverse().join(''); //reverse the string
            client.set(name, reversedName, (err, response) => { //name=key, reversedName=value
                res.send(JSON.stringify(response + ' cached'));
                console.table(response);
            })
            client.expire(name, 10);
        }
    })
})

module.exports = router;
