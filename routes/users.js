var express = require('express');
var router = express.Router();
var {google} = require('googleapis');

     youtubeV3 = google.youtube( { version: 'v3', auth: '{YOUR_API_KEY_HERE}' } );
router.post('/',(req,res)=>{
  async function getUser() {
    var request = await youtubeV3.search.list({
        part: 'snippet',
        type: 'video',
        q: req.body.lastname,
        maxResults: 20,
        order: 'date',
        safeSearch: 'moderate',
        videoEmbeddable: true
    }, (err,response) => {
      if(err){
          throw err
      }else{
        
        var alldata = response.data.items
        // console.log(alldata)
        res.render('viedo',{alldata:alldata})
          }
    });
  }
  getUser();
})



module.exports = router;
