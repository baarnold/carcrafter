import { Template } from 'meteor/templating';
import { carCollection } from '../collections/collections.js';

import './main.html';

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
        return carCollection.find({}, {"sort": {"updatedOn": -1}});
    }
});

Template.carPicture.helpers({
	
});