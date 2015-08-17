var http = require ('http');  
var mongoose = require( 'mongoose' );

var uristring = 
process.env.MONGOLAB_URI || 
process.env.MONGOHQ_URL || 
'mongodb://localhost/sandsg';

var theport = process.env.PORT || 5000;

var inviteesSchema = new mongoose.Schema({
	fb_id: String,
	fb_name: String,
	fb_token: String,
	nationality: String,
	thumbnail: String
});
var Invitees = mongoose.model( 'Invitees', inviteesSchema );

var allowedInvitees = new mongoose.Schema({
	fb_name: String
});
var AllowedInvitees = mongoose.model( 'AllowedInvitees', allowedInvitees );

var eventsSchema = new mongoose.Schema({
	name: String,
	date: Date,
	notes: String,
	label: {type:String, enum:['default', 'primary', 'success', 'warning', 'danger', 'info'], default:'default'}
});
var Events = mongoose.model( 'Events', eventsSchema );

var rsvpSchema = new mongoose.Schema({
	fb_id: String,
	coming: Boolean,
	vegetarian: Boolean,
	arrival : {
		date: Date,
		flight: String,
		notes: String
	},
	departure : {
		date: Date,
		flight: String,
		notes: String
	}
});
var Rsvp = mongoose.model( 'Rsvp', rsvpSchema );


// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(uristring, function (err, res) {
  if (err) { 
  console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
  console.log ('Succeeded connected to: ' + uristring);
  }
});