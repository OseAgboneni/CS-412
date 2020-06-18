const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const CONFIG = require('../configs/openWeatherAPI');



router.route('/')
    .get(async (req, res, next) => {
        let result = await fetch(CONFIG.url + '?q=Boston&appid=' + CONFIG.key);
        //res.send(result);
        let weather = await result.json();
        res.render('wx', {
            title: 'Today in Weather!',
            city: weather.name,
            temperature: weather.main.temp
        });
    })

    .post(async (req, res, next) => {

        let result = await fetch(CONFIG.url + '?q=' + req.body.city + '&units=metric&appid=' + CONFIG.key);
        let weather = await result.json()
        res.render('wx', {
            title: 'Today in Weather!',
            city: weather.name,
            temperature: weather.main.temp
        });
    })

module.exports = router;
// var request = require('request');
// var options = {
//     'method': 'GET',
//     'url': CONFIG.url + '?q=Boston&appid=' + CONFIG.key,
//     'headers': {
//         'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     form: {
//         'phrase': 'Hello'
//     }
// };
// request(options, function (error, response) {
//     if (error) throw new Error(error);
//     console.log(response.body);
// });
