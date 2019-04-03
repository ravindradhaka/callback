const router = (require('express')).Router()
var lineByLine 	= require('n-readlines'),
topSecret 	= new lineByLine(__dirname+'/topSecret.txt'),
fs        	= require("fs");

const getNumber = require('./common.js');
router.get('/parseInvoiceNumbers', function(req, res) {
  debugger;
  var series = getNumber(topSecret);
  fs.writeFile('output_user_story_1.txt', series, function (err, data) {
    if (err) {
      res.send({success : false, info : "Something went wrong"});
    } else {
      res.send({success : true, info : "Result Saved in File output_user_story_1.txt successfully "});
    }
  })
})

module.exports = router
