import { Meteor } from 'meteor/meteor';
import { carCollection } from '../collections/collections.js';

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

Meteor.publish('craftedCars', function() {
	return carCollection.find();
});

Meteor.publish('userData', function(){
	if (this.userId) {
		return Meteor.users.find({'_id': this.userId});
	}
	else {
		this.ready();
	}
});

Accounts.onCreateUser(function (options, user) {
	if (user.services.facebook) {
		user.profile.first_name = user.services.facebook.first_name;
		user.profile.last_name = user.services.facebook.last_name;
		user.profile.gender = user.services.facebook.gender;
	}
	return user;
});

if (ServiceConfiguration.configurations.find({
	service: 'facebook'
	}).count() === 0) {
		ServiceConfiguration.configurations.insert({
			service: 'facebook',
			appId: 'OAuth-credentials-from-facebook',
			secret: 'OAuth-credentials-from-facebook',
			loginStyle: 'popup'
		});
	}

