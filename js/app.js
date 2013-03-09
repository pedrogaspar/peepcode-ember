var App = Ember.Application.create();

// Router
App.Router.map(function() {
  this.resource('tables'); // '/#/tables'
});