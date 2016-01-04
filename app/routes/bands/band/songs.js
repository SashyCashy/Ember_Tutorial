import Ember from 'ember';
import Song from '../../../models/song';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('bands.band');
  },
  
  actions: {
    createSong: function() {
      var band=this.modelFor('bands.band');
      var song_name = this.get('controller').get('song_name');
      var band_name = band.get('name');
      var song = Song.create({ title:  song_name, band: band_name });
      band.get('songs').pushObject(song);
      this.get('controller').set('song_name','');
    },

  }
});
