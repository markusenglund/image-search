const mongoose = require("mongoose"),
      express = require("express"),
      router = express.Router(),
      schema = require("./schema");

router.get("/", (req, res) => {

    mongoose.connection.db.collection("searches", (err, collection) => {
        collection.find({}).toArray( (err, data) => {
            var parsedData = data.map( (val) => {
                return { term: val.term, when: val.when }
            });
            res.json(parsedData.reverse());
        });
    });
});


module.exports = router;