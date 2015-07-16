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
    	console.log(e);
        res.json(docs);

    });
});

/*
 * GET specific user.
 */
router.get('/verifyuser', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    var emailid = req.params.emailid
    console.log("Fetching data from usercollection");
    collection.find({ 'useremail': emailid},{},function(e,docs){
         res.json(docs);

    });
});

router.post('/postconfession', function(req, res) {
    console.log("Inside Post Confession");
    var db = req.db;
    var collection = db.get('confession');
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

router.post('/createuser', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});


module.exports = router;
