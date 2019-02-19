const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

let app = express();

app.use(bodyParser.json());
// require("./models/quote.js")(app);
require("./routes/quoteroutes")(app);


mongoose.connect(
    "mongodb+srv://root:root@cluster0-q30av.mongodb.net/quotesDB", {
        useNewUrlParser: true
    });


const port = 5000;


app.listen(port, () => {
    console.log(`Server running ` + port);

});