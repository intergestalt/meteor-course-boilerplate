import { Meteor } from 'meteor/meteor';

import Entries from '../../collections/entries';

Meteor.publish('entries', function (query={}) {
  return Entries.find(query, {sort: {}})
});
