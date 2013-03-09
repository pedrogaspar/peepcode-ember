var App = Ember.Application.create();

// Router
// Smilar to rails routes
App.Router.map(function() {
  this.resource('tables'); // '/#/tables'
});

// Routes
// Run code when urls are visited and load data and assign to a controller
App.TablesRoute = Ember.Route.extend({ // Extend like inheritance
  model: function() {
    return App.Table.find(); // Without parameters to return all tables
  }
});

// Controllers
// Deliver model data to views and templates. Have a model property
App.TablesController = Ember.ArrayController.extend(); // Must match the route name

// Models
// Store specify how we access data
App.Store = DS.Store.extend({
  revision: 11, // Ember.Data has versions, this specifies the latest
  adapter: 'DS.FixtureAdapter' // Loads data locally. Good to initial setup
});

// Setup the tables model
App.Table = DS.Model.extend();

App.Table.FIXTURES = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 }
];