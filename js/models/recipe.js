TheFridge.Recipe = DS.Model.extend({
  name: DS.attr('string')
});

TheFridge.Recipe.FIXTURES = [
  {
    id: 0,
    name: 'Brownies'
  },
  {
    id: 1,
    name: 'Mac and Cheese'
  }
];
