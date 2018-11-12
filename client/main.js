import { Template } from 'meteor/templating';
import { Mongo } from "meteor/mongo";
import './main.html';

Template.body.helpers({
  tasks: [
    { text: "1.Meteor CrowdFunding Website Dev" },
    { text: "2.Meteor Casino Website Dev" },
    { text: "3.Smart Contracts Dev" },
    { text: "4.Business logic" },
    { text: "5.Meteor Casino App Dev" }
  ]
});

export const Tasks = new Mongo.Collection("tasks");
