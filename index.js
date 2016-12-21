//TODO:
//do homepage
//Should the connection to the database ever close?
//Do git stuff and heroku

const path = require("path"),
      express = require("express"),
      app = express(),
      port = (process.env.PORT || 3000)

app.use("/api/imagesearch/", require("./routes/search"));
app.use("/api/latest/", require("./routes/latest"));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
});



app.listen(port, () => console.log("server listening on port 3000"));

