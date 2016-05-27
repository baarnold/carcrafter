import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
	carInsert: function(car) {
		car.updateOn = new Date();
		carCollection.insert(car);
	},
	carDelete: function(_id) {
		
	},
	carUpdate: function(updateCar) {
		
	},
	getCraftedCar: function(_id) {
		
	}
});

Meteor.publish('cars', function() {
	return carCollection.find();
});