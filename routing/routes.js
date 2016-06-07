import { productsCollection } from '../collections/collections.js';

//Home Page
Router.route('/', function() {
	//View allProducts template
	this.render('carlist');
});

Router.route('/carcrafter', function() {
	this.render('carcrafter');
});

//Use a hook to prevent unauthorized access to templates with data
//	onBeforeAction runs before route occurs
Router.onBeforeAction(function() {
	//If not a user, and not logging in
	if (!Meteor.user() && !Meteor.loggingIn()) {
		this.redirect('/login');
	}
	else {
		//Tells the Router to continue what it was doing
		this.next();
	}
}, {
	//Won't reroute if on login page
	except: ['login']
});




Router.route('/login', function() {
	this.render('login');
});