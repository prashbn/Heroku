var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*
 * GET userlist.
 */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    console.log("Fetching data from usercollection");
    collection.find({},{},function(e,docs){
        res.json(docs);
        console.log(e);
    });
});

module.exports = router;
