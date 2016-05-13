import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

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