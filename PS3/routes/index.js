var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.route('/ps3')
    .get((req, res, next) => {
        //res.send('Hello');
        res.render('index', {response: 'anything that you like'});
    })

    .post((req, res, next) => {
        //res.send(`${req.body.phrase}`);
        res.render('index', {
            phrase: req.body.phrase,
            phraseLength: req.body.phrase.length
        })
    })


module.exports = router;
