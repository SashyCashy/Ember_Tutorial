import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    willTransition: function(){
      if(this.get('controller').get('isEditing')){
          leave = window.confirm("You have unsaved changes. Are you sure you want to leave?");
          if(leave){
            this.get('controller').set('isEditing',false);
          }else{
            transition.abort();
          }
      }
    }
  }
});
