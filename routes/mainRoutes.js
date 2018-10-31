var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    //req.db.getValue(function(err, doc) {
      //  res.send(doc)
    //})
    res.send("my val")
});

router.post('/value', function(req, res, next) {
    req.db.insertValue(req.body)
    res.send({ status : "Okay"})
});

module.exports = router;