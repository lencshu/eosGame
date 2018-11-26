import { Meteor } from 'meteor/meteor';


Meteor.publish('messages',
    function () {
        return Messages.find();
    },
    { is_auto: true }
);

Meteor.startup(() => {
  // code to run on server at startup
});
