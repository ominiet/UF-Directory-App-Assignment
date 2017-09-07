'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config'),
    mongo = require('mongodb').MongoClient,
    assert = require('assert');

/* Connect to your database */

/*
mongo.connect(config.db.uri, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");

  
  modelStuff();

  db.close();
});
*/

mongoose.Promise = global.Promise; 
mongoose.connect(config.db.uri, { useMongoClient: true });

  var data = fs.readFileSync('./listings.json');
  var listingData = JSON.parse(data.toString());


  for (let x of listingData.entries) {
  const newListing = new Listing(x);
  newListing.save(function(err) {
    if (err) throw err;
      console.log(x.code);
    });
  }
/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 


 */
  mongoose.disconnect();


/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */