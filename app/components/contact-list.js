import Ember from 'ember';

export default Ember.Component.extend({

  filteredPeople: function() {
    const filter = this.get('filter');
    const people = this.get('people');

    if (!filter) {return people;}

    return people
      .filter(p => p.get('fullName').toLowerCase()
        .includes(filter.toLowerCase()
      ));

  }.property('filter'),

  actions: {
    personSelected: function(person) {
      this.sendAction('personSelected', person);
    }
  }

});
