import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


//Tasks = new Mongo.Collection('tasks');
Meteor.subscribe('tasks');

Template.tasks.helpers({
	tasks() {
		return Tasks.find({}, {sort: {createdAdd: -1}});
	},
});


Template.tasks.events({
	'submit .add-task'(event) {
		var name = event.target.name.value;
		console.log(name);

		Meteor.call('addTask', name);
		event.target.name.value = '';

		return false;
	},

	'click .delete-task'(event) {
		if (confirm('Delete Task?')) {
			Meteor.call('deleteTask', this._id);
		}

		return false;
	},
});
// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
