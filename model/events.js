var mongoose = require( 'mongoose' );

exports.create = function(event, callback) {
	var Events = mongoose.model( 'Events' );
	Events.create(event, function(err, result) {
		if(err){
			console.log(err);
			callback(err, {status: "failure", message: err});
			return;
		}
		
		callback(err, {status : "success", data: result});
	});
};

exports.getAll = function(callback) {
	var Events = mongoose.model( 'Events' );
	Events.find({}, function(err, result) {
		if(err){
			console.log(err);
			callback(err, {status: "failure", message: err});
			return;
		}
		
		callback(err, {status : "success", data: result});
	});
};

exports.remove = function(name, callback) {
	var Events = mongoose.model( 'Events' );
	Events.remove(name, function(err, result) {
		if(err){
			console.log(err);
			callback(err, {status: "failure", message: err});
			return;
		}
		
		callback(err, {status : "success", data: result});
	});
};