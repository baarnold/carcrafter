import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
 
export const carCollection = new Mongo.Collection('cars');
//export const dailyDiet = new Mongo.Collection('eatingActivities');
//export const stepsTaken = new Mongo.Collection('steps');