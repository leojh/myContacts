import Ember from 'ember';

export default Ember.Component.extend({

  filteredPeople: function() {
    const filter = this.get('filter');
    const people = this.get('people');

    if (!filter) {return people;}

    return people
      .filter(p => p.toLowerCase()
        .includes(filter.toLowerCase()
      ));

  }.property('filter'),

  filterObs: function () {
    console.log(this.get('filter'))
  }.observes('filter')

});
