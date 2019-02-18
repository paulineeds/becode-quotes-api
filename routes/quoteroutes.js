module.exports = app => {

    app.get("/demo", (req, res) => {

        // Some dummy data
        //

        const demo = {
            data1: "Hello",
            data2: "World"
        }

        // res.send(data) or res.sendStatus(statusCode)
        // To send a status message or data back to the requester
        //

        res.send(demo)
    })

    const jsonfile = require("jsonfile");

    app.get("/quotes", (req, res) => {
        console.log("fetching all quotes");

        // jsonfile reading
        jsonfile.readFile("./DB/quotes.json", function (err, content) {
            // send file contents back to sender
            res.send(content);
        });
    });

    app.post("/quotes/new", (req, res) => {

        let quote = req.body.quote
        let author = req.body.author
        let id = req.body.id

        jsonfile.readFile("./DB/quotes.json", function (err, content) {

            content.push({
                quote: quote,
                author: author,
                id: id
            });

            console.log("added " + quote + " to DB");

            jsonfile.writeFile("./DB/quotes.json", content, function (err) {
                console.log(err);
            });

            res.sendStatus(200);
        });
    });

    app.delete("/quotes/destroy", (req, res) => {

        let quote = req.body.quote;

        jsonfile.readFile("./DB/quotes.json", function (err, content) {

            for (var i = content.length - 1; i >= 0; i--) {

                if (content[i].quote === quote) {
                    console.log("removing " + content[i].quote + " from DB");
                    content.pop(i);
                }

            }

            jsonfile.writeFile("./DB/quotes.json", content, function (err) {
                console.log(err);
            });

            res.sendStatus(200);
        });
    });
    app.put("/quotes", (req, res) => {
        let quote;
        let author = req.body.author;

        jsonfile.readFile("./DB/quotes.json", function (err, content) {
            for (var i = content.length - 1; i >= 0; i--) {
                if (content[i].quote === req.query.quote) {

                    console.log("updated quote " + quote + " has now author : " + author);

                    quotes = content[i];
                    quotes.author = author;

                }
            }

            jsonfile.writeFile("./DB/quotes.json", content, function (err) {
                console.log(err);
            });

        });
        res.send(quote);
    });

    app.get("/quote", (req, res) => {
        let quotes;
        let quote = req.query.quote;

        jsonfile.readFile("./DB/quotes.json", function (err, content) {
            for (var i = content.length - 1; i >= 0; i--) {
                if (content[i].quote === quote) {
                    console.log("found quote");
                    console.log(content[i]);
                    quotes = content[i];
                }
            }

            res.send(quotes);
        });
    });
};
