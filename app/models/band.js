export default Ember.Object.extend({
  name: '',
  description: '',
  slug: function() {
    return this.get('name').dasherize();
  }.property('name'),
  init: function() {
    this._super.apply(this, arguments);
    if(!this.get('songs')){
      this.set('songs',[]);
    }
  },
});
