// Iteration 3: import tweets data
const dataTweets = require('../data/tweets')

// Iteration 3: list tweets from file
module.exports.list = (req, res, next) => {
  dataTweets.sort((tweet1, tweet2) => {
    tweet2.createdAt - tweet1.createdAt
  
  });
  
  res.render('tweets/list', {tweets: dataTweets})
  
}


  // Order tweets desc by date
  // Iteration 4: filter tweets by user checking the query param 'name'


// Iteration 5: Create tweet validating body params
module.exports.create = (req, res, next) => {}

// Iteration 6: find tweet by id path param and delete it if exists
module.exports.delete = (req, res, next) => {}
