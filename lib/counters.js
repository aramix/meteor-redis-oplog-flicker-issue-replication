export default Counters = new Mongo.Collection('counters');
Counters.allow({
	insert() {
		return true;
	},
	update() {
		return true;
	},
	remove() {
		return true;
	},
});
