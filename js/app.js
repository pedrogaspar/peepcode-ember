var App = Ember.Application.create();

// Router
App.Router.map(function() {
  this.resource('tables'); // '/#/tables'
});

App.TablesRoute = Ember.Route.extend({ // Extend like inheritance
  model: function() {
    return App.Table.find(); // Without parameters to return all tables
  }
});

// Controllers
App.TablesController = Ember.ArrayController.extend(); // Must match the route name

// Models
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