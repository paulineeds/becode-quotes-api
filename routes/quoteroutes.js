const TheQuote = require("../models/quote.js");
const mongoose = require("mongoose");

module.exports = app => {

    app.get('/', (req, res) => {
        res.render('index')
    });

    app.get("/quotes", (req, res) => {
        console.log("fetching all quotes");
        mongoose.model('TheQuote').find((err, quotes) => {
            res.send(quotes)
        });
    });

    app.post("/quotes/new", (req, res) => {
        const aquote = new TheQuote({
            _id: new mongoose.Types.ObjectId(),
            quote: req.body.quote,
            author: req.body.author
        });
        aquote.save().then(result => {
                console.log(result);
            })
            .catch(err => console.log(err));
        res.sendStatus(200);
    });

    app.delete("/quotes/destroy/:id", (req, res) => {
        // TheQuote.findOneAndDelete({
        //     _id: req.body._id
        
        //    const id= req.params._id;
        //    TheQuote.remove({
        //        _id:id
        //    })
        TheQuote.findByIdAndRemove(req.params.id,(err, quote)=>{
            if (err) throw err;
            res.send(quote);
        })
        
    });

    app.put("/quotes", (req, res) => {
        TheQuote.findOneAndUpdate({
            _id: req.body._id
        }, {
            quote: req.body.quote,
            author: req.body.author
        }).then(doc => {
            console.log(doc)
            res.send(doc)
        })
    })

    app.get("/quote", (req, res) => {
        const id = req.body._id
        TheQuote.find({
            _id: id
        }).then(doc => {
            console.log(doc)
            res.send(doc)
        });
    });
};