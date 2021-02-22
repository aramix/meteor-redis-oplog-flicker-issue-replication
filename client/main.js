import { Template } from 'meteor/templating';
import Counters from '../lib/counters';

import './main.html';

Template.hello.onRendered(function helloOnCreated() {
	// counter starts at 0
	Meteor.subscribe('counters');
});

Template.hello.helpers({
	counter() {
		return Counters.find();
	},
});

Template.hello.events({
	'click button'(event, instance) {
		Counters.update(Counters.findOne()._id, { $inc: { value: 1 } });
	},
});
