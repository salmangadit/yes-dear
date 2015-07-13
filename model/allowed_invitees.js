var mongoose = require( 'mongoose' );

exports.create = function(allowedInvitee, callback) {
	var AllowedInvitees = mongoose.model( 'AllowedInvitees' );
	AllowedInvitees.create(allowedInvitee, function(err, result) {
		if(err){
			console.log(err);
			callback(err, {status: "failure", message: err});
			return;
		}
		
		callback(err, {status : "success", data: result});
	});
};

exports.getAll = function(callback) {
	var AllowedInvitees = mongoose.model( 'AllowedInvitees' );
	AllowedInvitees.find({}, function(err, result) {
		if(err){
			console.log(err);
			callback(err, {status: "failure", message: err});
			return;
		}
		
		callback(err, {status : "success", data: result});
	});
};

exports.remove = function(name, callback) {
	var AllowedInvitees = mongoose.model( 'AllowedInvitees' );
	AllowedInvitees.remove(name, function(err, result) {
		if(err){
			console.log(err);
			callback(err, {status: "failure", message: err});
			return;
		}
		
		callback(err, {status : "success", data: result});
	});
};