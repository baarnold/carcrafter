import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
//import { carCollection } from '../collections/collections.sj';

import './main.html';

Template.carchassis.events({
	'change #sport-chassis' : function(event, template) {
		event.preventDefault();
		
		var newChassis = $('#sport-chassis').val();

		console.log(newChassis);
	},
	'change #lux-chassis': function(event) {
		event.preventDefault();
		
		var newChassis = $('#lux-chassis').val();

		console.log(newChassis);
	},
	'change #con-chassis': function(event) {
		event.preventDefault();
		
		var newChassis = $('#con-chassis').val();

		console.log(newChassis);
	}
});

Template.carcolor.events({
	'change #blue-color' : function(event) {
		event.preventDefault();
		
		var newColor = $('#blue-color').val();

		console.log(newColor);
	},
	'change #red-color': function(event) {
		event.preventDefault();
		
		var newColor = $('#red-color').val();

		console.log(newColor);
	},
	'change #yellow-color': function(event) {
		event.preventDefault();
		
		var newColor = $('#yellow-color').val();

		console.log(newColor);
	}
});

Template.carwheel.events({
	'change #sixteen' : function(event) {
		event.preventDefault();
		
		var newWheel = $('#sixteen').val();

		console.log(newWheel);
	},
	'change #eighteen': function(event) {
		event.preventDefault();
		
		var newWheel = $('#eighteen').val();

		console.log(newWheel);
	},
	'change #twenty': function(event) {
		event.preventDefault();
		
		var newWheel = $('#twenty').val();

		console.log(newWheel);
	},
	'change #twentytwo': function(event) {
		event.preventDefault();
		
		var newWheel = $('#twentytwo').val();

		console.log(newWheel);
	}
});

Template.carbumper.events({
	'change #plastic' : function(event) {
		event.preventDefault();
		
		var newBumper = $('#plastic').val();

		console.log(newBumper);
	},
	'change #chrome': function(event) {
		event.preventDefault();
		
		var newBumper = $('#chrome').val();

		console.log(newBumper);
	},
	'change #carbon': function(event) {
		event.preventDefault();
		
		var newBumper = $('#carbon').val();

		console.log(newBumper);
	}
});

Template.carspoiler.events({
	'change #no-spoil' : function(event) {
		event.preventDefault();
		
		var newSpoiler = $('#no-spoil').val();

		console.log(newSpoiler);
	},
	'change #low-spoil': function(event) {
		event.preventDefault();
		
		var newSpoiler = $('#low-spoil').val();

		console.log(newSpoiler);
	},
	'change #high-spoil': function(event) {
		event.preventDefault();
		
		var newSpoiler = $('#high-spoil').val();

		console.log(newSpoiler);
	}
});