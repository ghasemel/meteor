
Tasks = new Mongo.Collection('tasks');

Meteor.methods({
	addTask(name) {
		if (!Meteor.userId()) {
			throw new Meteor.Error('No Access!');
		}

		Tasks.insert({
			name: name,
			createdAdd: new Date(),
			userId: Meteor.userId()
		});
	},
	deleteTask(taskId) {
		Tasks.remove(taskId);
	}
});