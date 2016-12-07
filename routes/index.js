var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get("/:time", function(req, res) {

    function unixInput(unix) {
        var d = new Date(unix * 1000);
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        return months[d.getMonth()] +" "+ d.getDate() +", "+ d.getFullYear();
    }
    
    
    if (!isNaN(req.params.time)) {
        var result = unixInput(req.params.time);
        res.json({unix: req.params.time, natural: result});
    } else{
        var d = new Date(req.params.time);
        if (!isNaN(d)) {
            var unix = d/1000;
            res.json({unix: unix, natural: req.params.time});
        } else {
            res.json({unix: null, natural:null});
        }
    }
});

module.exports = router;
