import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

const testFunc = function (val) {
    return val * 2;
};

export default testFunc;