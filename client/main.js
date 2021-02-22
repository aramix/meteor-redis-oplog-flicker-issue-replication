import { Template } from 'meteor/templating';
import Counters from '../lib/counters';

import './main.html';

Template.hello.onRendered(function helloOnCreated() {
	// counter starts at 0
	Meteor.subscribe('counters');
});

Template.hello.helpers({
	counter() {
		const c = Counters.findOne();
		return c && c.value;
	},
});

Template.hello.events({
	'click button'(event, instance) {
		const c = Counters.findOne();
		c && Counters.update(c._id, { $inc: { value: 1 } });
	},
});
