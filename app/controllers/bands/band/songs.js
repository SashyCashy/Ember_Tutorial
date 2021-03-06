import Ember from 'ember';

export default Ember.Controller.extend({
  noSongs: Ember.computed('model.songs.length', function() {
    return this.get('model.songs.length') === 0;
  }),
  actions: {
    enableSongCreation: function() {
      this.set('noSongs',false);
    },
    updateRating: function(params) {
      var song = params.item,
      rating = params.rating;
      song.set('rating', rating);
    },

  }
});
