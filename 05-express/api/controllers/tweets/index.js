let tweets = require("./../../models/tweets");


const getTweets = (req, res) => {
    res.send(tweets);
};

const newTweet = (req, res) => {
    let tweet = {
        content: req.body.content
         };

        tweets.push(tweet);
        res.send ("el tweet ha sido creado");

};

module.exports = { getTweets, newTweet}