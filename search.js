const request = require("request"),
      express = require("express"),
      router = express.Router();

router.get("/:searchTerm/", (req, res) => {
    //Mongodb search term here
    var url = "https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=" + req.params.searchTerm + "&mkt=en-us&count=10";
    if (typeof(req.query.offset) === Number) {
        url += "&offset=" + req.query.offset;
    }
    var options = {
        url: url,
        json: true,
        headers: { "Ocp-Apim-Subscription-Key": "70ba2c7d6c5842ed9166bdd9770f9a16" }
        }
    console.log("req.query.offset " + req.query.offset);
    console.log("url " + url);
    
    request.get(options, (err, response, data) => {
        var searchArray = [];
        data.value.forEach( (elem) => {
            searchArray.push({
                url: elem.contentUrl,
                name: elem.name,
                thumbnail: elem.thumbnailUrl,
                context: elem.hostPageUrl
            });
        });
                          
        res.json(searchArray);
            
            
    });
});


module.exports = router;