import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { carCollection } from '../collections/collections.js';

import './main.html';

Meteor.subscribe('userData');
userData = new Mongo.Collection('userData');

Accounts.ui.config({
	passwordSignupFields: 'USERNAME_ONLY'
});

Template.carEditor.events({
    'submit #editCar': function(event) {
        event.preventDefault();
 
        //create a new activity document
        var newDocument = {
            chassis: $('#chassisChoice').val(),
            color: $('#colorChoice').val(),
            bumper: $('#bumperChoice').val(),
			wheel: $('#wheelChoice').val(),
			spoiler: $('#spoilerChoice').val()
        };
		
		console.log(newDocument);
 
        //insert our new record on the server side
        Meteor.call('carInsert', newDocument);
    }
});

Template.viewCars.helpers({
    getAllCars: function() {
        return carsCollection.find({});
    }
});

Template.carPicture.helpers({
	
});