var express = require('express');
var router = express.Router();

/* GET users list. */
router.get('/userlist', function (req, res) {
  var db = req.db;
  var collection = db.get('userlist');
  collection.find({}, {}, function (e, docs) {
    if(e) { return next(e);}
    res.json(docs);
  });
});

/* GET users list by id. */
router.get('/userlist/:id', function (req, res) {
  var db = req.db;
  var collection = db.get('userlist');
  var idd=req.params.id;
  collection.find({ _id: idd}, {}, function (e, docs) {
    if (e) { return next(e); }
    res.json(docs);
  });
});
module.exports = router;
