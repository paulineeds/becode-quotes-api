const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

let app = express();

app.set('view engine', 'ejs');

app.use(cors());
app.use(bodyParser.json());
//enable public folder
app.use(express.static('public'));


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