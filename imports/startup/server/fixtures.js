/* eslint-disable no-console, no-undef */

import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';

import Entries from '../../collections/entries';

import {entrySchema} from '../../schemas/entry';

Meteor.startup(() => {

  // console.log('running fixures');

  /*
  if (Meteor.users.find({ username: 'admin' }).count() == 0) {
    console.log('seeding admin user');
    Accounts.createUser({
      username: 'admin',
      password: 'password'
    });
  }

  if (Meteor.users.find({ username: 'editor' }).count() == 0) {
    console.log('seeding editor user');
    Accounts.createUser({
      username: 'editor',
      password: 'password'
    });
  }
  */

  if (Entries.find().count() == 0) {
    const entry = entrySchema.clean({})
    console.log('inserting initial entry ', entry);
    Entries.insert(entry)
  }

})