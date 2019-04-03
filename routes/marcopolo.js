const router = (require('express')).Router()

router.get('/MarcoPolo', function(req, res) {
  debugger;
  var lines = [];
  for(var i=1; i<=1000; i++) {
    var lineStr = "";
    for(var j=1; j<=1000; j++) {
      if(j%4 === 0 && j%7 === 0) {
        lineStr+="marcopolo,";
      } else if (j%4 === 0) {
        lineStr+="marco,";
      } else if(j%7 === 0) {
        lineStr+="polo,";
      } else {
        lineStr+=(j + ",");
      }
    }
    lines.push({line : lineStr.substring(0, lineStr.length-1)});
  }
  res.send(lines)
})

module.exports = router
