import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { TasksCollection } from '/imports/api/TasksCollection';


Meteor.startup(() => {
  new App({
    target: document.getElementById('app')
  });
});