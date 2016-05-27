import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
 
export const carCollection = new Mongo.Collection('craftedCars');