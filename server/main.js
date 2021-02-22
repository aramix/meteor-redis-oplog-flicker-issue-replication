import { Meteor } from 'meteor/meteor';
import Counters from '../lib/counters';

if (Meteor.isServer) {
	const c = Counters.findOne();
	if (!c) Counters.insert({ value: 0 });
	// This code only runs on the server
	Meteor.publish('counters', function () {
		console.info(`New counters subscription`);
		return Counters.find();
	});
}
