var mongoose = require( 'mongoose' );
var uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/bit_coach_db';

// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(uristring, function (err, res) {
  if (err) {
  console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
  console.log ('Succeeded connected to: ' + uristring);
  }
});



var Schema   = mongoose.Schema;

var codesite = new Schema({
    address    : String,
    content    : String,
    updated_at : Date
});

mongoose.model( 'codesite', codesite );
//mongoose.connect( 'mongodb://localhost/bit_coach_db' );
// Here we find an appropriate database to connect to, defaulting to
// localhost if we don't find one.
