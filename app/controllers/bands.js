import Ember from 'ember';

export default Ember.Controller.extend({
  
  isAddButtonDisabled: function() {
    return Ember.isEmpty(this.get('band_name'));
  }.property('band_name'),
});
