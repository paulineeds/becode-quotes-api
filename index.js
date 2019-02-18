const express = require("express");
const bodyParser = require("body-parser")
// const mongoose = require("mongoose");

let app = express();


app.use(bodyParser.json());

require("./routes/quoteroutes")(app);

let port = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send('Hello World with Express')
});


app.listen(port, () => {
    console.log(`Server running ` + port);

});