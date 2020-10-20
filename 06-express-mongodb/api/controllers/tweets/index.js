const Twitter = require("twitter");
//let tweets = require("./../../models/tweets");
let Tweet = require("./../../models/tweets");
const lib = require ("./../../lib/dates");
const response = require("./../../lib/response");
const config = require ("./../../../config");


// todos los tweets
const getTweets = (req, res) => {
    Tweet.find({})
    .then((tweets)=>{
      res.status(200).json(response(true, tweets));
    })
    .catch((err)=>{
        res.json(response (false, undefined, err));
    });
};


const newTweet = (req, res) => {
    const tweet = {content: req.body.content}                             
        const obj = new Tweet (tweet);
        obj.save()
            .then((tweet)=>{
                res.json(response (true, [tweet]))                
            })
            .catch((err)=> {
                res.json(response (false, undefined, err))
            });      
};


const getTweet = (req, res) => {
    const id = req.params.id;
    Tweet.find({})
    .then((tweet)=>{       
        if(id >= tweet.length){
            res.status(500).json(response(false, undefined, "El tweet consultado no existe"));
        }else {
            res.status(200).json(response(true, tweet[id]));
        }     
    })
    .catch((err)=>{
        res.json(response (false, undefined, err));
    });  
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
    Tweet.find({})
    .then((tweet)=>{       
        if(id >= tweet.length){
            res.status(500).json(response(false, undefined, "El tweet consultado no existe"));
        }else {         
            Tweet.remove (tweet [id])
            .then((tweet) =>{
                res.json(response (true, [{message:"el usuario ha sido borrado"}] ));
            })
            .catch((err)=> {
                res.json(response (false, undefined, err));
            });
        }     
    })
    .catch((err)=>{
        res.json(response (false, undefined, err));
    });  
};

module.exports = { getTweets, newTweet, getTweet, getTweetsStream, deleteTweet};