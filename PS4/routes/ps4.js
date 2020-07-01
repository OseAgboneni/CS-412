const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const CONFIG = require('../configs/openWeatherAPI');

const redis = require('redis');
const client = redis.createClient();

const {promisify} = require('util');

const existsAsync = promisify(client.exists).bind(client);
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

router.route('/')
    .get(async (req, res, next) => {
        let result = await fetch(CONFIG.url + '?q=Boston&appid=' + CONFIG.key);
        //res.send(result);
        let weather = await result.json();
        const resObj = {
            title: 'Today in Weather!',
            city: weather.name,
            temperature: weather.main.temp
        };

        res.render('wx', {
            title: 'Today in Weather!',
            city: weather.name,
            temperature: weather.main.temp
        });
    })

    .post(async (req, res, next) => {

        const city = req.body.city;

        let match = await existsAsync(city);
        if (match) {
            let cityData = await getAsync(city);
            cityData.fromCache = true;
            res.send(JSON.stringify(cityData));
        } //Ask to go over this tomorrow
        else {
            let result = await fetch(CONFIG.url + '?q=' + city + '&units=metric&appid=' + CONFIG.key);
            let weather = await result.json()

            let resObj = {
                fromCache: false,
                title: 'Today in Weather!',
                city: weather.name,
                temperature: weather.main.temp
            };

            client.set(city, resObj, (err, response) =>{
                res.send(JSON.stringify(resObj));
            });
            let match1 = await existsAsync(city);
            console.log(match1);
            //client.expire(city, 30);
        }
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
