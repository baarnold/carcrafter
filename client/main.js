import { Template } from 'meteor/templating';

import './main.html';

Template.carchassis.events({
	'change #sport-chassis' : function(event) {
		event.preventDefault();
		
		//var target = event.target;
		//var choice = target.radio.value;
		console.log(event.type);
	},
	'change #suv-chassis': function(event) {
		event.preventDefault();
		
		//var target = event.target;
		//var choice = target.radio.value;
		console.log(event.type);
	},
	'change #truck-chassis': function(event) {
		event.preventDefault();
		
		//var target = event.target;
		//var choice = target.radio.value;
		console.log(event.type);
	}
});

Template.carcolor.events({
	'change #blue-color' : function(event) {
		event.preventDefault();
		
		//var target = event.target;
		//var choice = target.radio.value;
		console.log(event.type);
	},
	'change #red-color': function(event) {
		event.preventDefault();
		
		//var target = event.target;
		//var choice = target.radio.value;
		console.log(event.type);
	},
	'change #yellow-color': function(event) {
		event.preventDefault();
		
		//var target = event.target;
		//var choice = target.radio.value;
		console.log(event.type);
	}
});

Template.carwheel.events({
	'change #sixteen' : function(event) {
		event.preventDefault();
		
		//var target = event.target;
		//var choice = target.radio.value;
		console.log(event.type);
	},
	'change #eighteen': function(event) {
		event.preventDefault();
		
		//var target = event.target;
		//var choice = target.radio.value;
		console.log(event.type);
	},
	'change #twenty': function(event) {
		event.preventDefault();
		
		//var target = event.target;
		//var choice = target.radio.value;
		console.log(event.type);
	},
	'change #twentytwo': function(event) {
		event.preventDefault();
		
		//var target = event.target;
		//var choice = target.radio.value;
		console.log(event.type);
	}
});

Template.carbumper.events({
	'change #plastic' : function(event) {
		event.preventDefault();
		
		//var target = event.target;
		//var choice = target.radio.value;
		console.log(event.type);
	},
	'change #chrome': function(event) {
		event.preventDefault();
		
		//var target = event.target;
		//var choice = target.radio.value;
		console.log(event.type);
	},
	'change #carbon': function(event) {
		event.preventDefault();
		
		//var target = event.target;
		//var choice = target.radio.value;
		console.log(event.type);
	}
});

Template.carspoiler.events({
	'change #no-spoil' : function(event) {
		event.preventDefault();
		
		//var target = event.target;
		//var choice = target.radio.value;
		console.log(event.type);
	},
	'change #low-spoil': function(event) {
		event.preventDefault();
		
		//var target = event.target;
		//var choice = target.radio.value;
		console.log(event.type);
	},
	'change #high-spoil': function(event) {
		event.preventDefault();
		
		//var target = event.target;
		//var choice = target.radio.value;
		console.log(event.type);
	}
});