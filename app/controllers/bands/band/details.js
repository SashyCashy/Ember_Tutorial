import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing:  false,
  actions: {
    save: function(){
      this.set('isEditing',false)
    },
    edit: function()  {
      this.set('isEditing',true)
    }
  }
});
