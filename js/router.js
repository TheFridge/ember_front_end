TheFridge.Router.map(function(){
  this.route('login');
  this.resource('kitchen', function(){
    this.resource('recipes');
    this.route('inventory');
  });
});

TheFridge.RecipesRoute = Ember.Route.extend({
  model: function(){
    return this.store.findAll('recipe');
  }
});
