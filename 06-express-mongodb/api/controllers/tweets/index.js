const Twitter = require("twitter");
let tweets = require("./../../models/tweets");
const lib = require ("./../../lib/dates");
const response = require("./../../lib/response");
const config = require ("./../../../config");

const getTweets = (req, res) => {
    res.send(tweets);
};

const newTweet = (req, res) => {
    let tweet = {
        content: req.body.content,
        date: lib.getColombianDate(),
        username:req.username
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

const getTweetsStream = (req, res) => {
    const username = req.params.username;
    const client = new Twitter({
        consumer_key: config.twitter.consumerKey,
        consumer_secret: config.twitter.consumerSecret,
        access_token_key: config.twitter.accessTokenKey,
        access_token_secret: config.twitter.accessTokenSecret
    });
    client.get("statuses/user_timeline", {screen_name: username}, (err, tweets, reponse) => {
        if (err) {
            res.status(500).json(response(false, undefined, [ {message: "Ocurrió un error"}]));
        } else
            res.status(200).json(response(true, tweets));
    });  
};

const deleteTweet = (req, res) => {
    const id = req.params.id;
    if (id < tweets.length)
    {
        tweets.splice(tweets[id],1 );
        res.status(500).json(response(true, undefined, "Se elimino el tweet"));
      
    }else {
        res.status(500).json(response(false, undefined, "El tweet consultado no existe"));
    }
    
   
 
};

module.exports = { getTweets, newTweet, getTweet, getTweetsStream, deleteTweet};