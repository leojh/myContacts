import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    const store = this.get('store')

    const leo = store.createRecord('person',{first: 'leo', last: 'hernandez'})
    leo.set('last', 'smith')

    store.createRecord('person',{first: 'bob', last: 'smith'})
    store.createRecord('person',{first: 'alice', last: 'alice'})

    return store.all('person')
  },

  actions: {
    saveAll: function() {
      this.store.all('person')
        .forEach(p => p.save())
    },

    goToPerson: function(person) {
      this.transitionTo('person', person);
    }
  }

});
