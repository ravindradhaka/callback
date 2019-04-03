const router = (require('express')).Router()
var lineByLine 	= require('n-readlines'),
fs        	= require("fs"),
inputUserStory = new lineByLine(__dirname+'/input_user_story.txt');

const getNumber = require('./common.js');
router.get('/TopSecret', function(req, res) {
  debugger;
  var series = getNumber(inputUserStory);
  fs.writeFile('output_top_secret_1.txt', series, function (err, data) {
    if (err) {
      res.send({success : false, info : "Something went wrong"});
    } else {
      res.send({success : true, info : "Result Saved in File output_user_story_1.txt successfully "});
    }
  })
})

module.exports = router
