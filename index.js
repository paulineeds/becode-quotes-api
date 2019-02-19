const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

let app = express();

app.use(bodyParser.json());
// require("./models/quote.js")(app);
require("./routes/quoteroutes")(app);
const uri = process.env.MONGODB_URI ||"mongodb+srv://root:root@cluster0-q30av.mongodb.net/quotesDB"

mongoose.connect(
    uri, {
        useNewUrlParser: true
    });


const port = process.env.PORT||5000;


app.listen(port, () => {
    console.log(`Server running ` + port);

});