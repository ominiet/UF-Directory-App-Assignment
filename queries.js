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

    mongoose.Promise = global.Promise; 
    mongoose.connect(config.db.uri, { useMongoClient: true });

/* Fill out these functions using Mongoose queries*/

var findLibraryWest = function() {
  var query = { name: "Library West" };
  Listing.find(query, function(err, result) {
    if (err) throw err;
    console.log(result);
  });
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */

   var query = { code: "CABL" };
   Listing.findOne(query, function(err,result){
    if (err) throw err;
    console.log(result);
   });
   Listing.findOneAndRemove(query, function(err, result){
    if (err) throw err;
    //console.log(result);
   });
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
   var query = {name: "Phelps Laboratory"};
   var upd = {address: "new Address"};
   Listing.findOneAndUpdate(query, upd ,function(err, result){
    if (err) throw err;
    console.log(result);
   });
};
var retrieveAllListings = function() {
  var query = {};
  Listing.find(query, function(err,result){
    if (err) throw err;
    console.log(result);
    mongoose.disconnect();
  });
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();

