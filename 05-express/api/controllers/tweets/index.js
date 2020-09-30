let tweets = require("./../../models/tweets");
const lib = require ("./../../lib/dates");
const response = require("./../../lib/response");

const getTweets = (req, res) => {
    res.send(tweets);
};

const newTweet = (req, res) => {
    let tweet = {
        content: req.body.content,
        date: lib.getColombianDate()
         };

        tweets.push(tweet);
        res.status(200).json(response(true, [tweet]));
};

const getTweet = (req, res) => {
    const id = req.params.id;
    if(id >= tweets.length){
        res.status(500).json(response(false, undefined, "El tweet consultado no existe"));
    }else{
        
        res.status(200).json(response(true, [tweets[id]]));
    }
};

module.exports = { getTweets, newTweet, getTweet}