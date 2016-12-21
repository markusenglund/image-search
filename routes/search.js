const request = require("request"),
      mongoose = require("mongoose"),
      express = require("express"),
      router = express.Router(),
      schema = require("../schema");

mongoose.connect("mongodb://markus:markus@ds141428.mlab.com:41428/latest-searches");
var Search = mongoose.model("Search", schema);

router.use("/:searchTerm", (req, res, next) => { //Saves the searchterm to mongo database.
    var search = new Search({ term: req.params.searchTerm, when: new Date() });
    search.save( (err) => {
        if (err) {
           console.log(err);
           process.exit(1);
        }        
    });
    next();
});

router.get("/:searchTerm/", (req, res) => {
    var url = "https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=" + req.params.searchTerm + "&mkt=en-us&count=10";
    if (typeof(req.query.offset) === Number) {
        url += "&offset=" + req.query.offset;
    }
    var options = {
        url: url,
        json: true,
        headers: { "Ocp-Apim-Subscription-Key": "70ba2c7d6c5842ed9166bdd9770f9a16" }
    }
    
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