import Ember from 'ember';
import Song from '../../../models/song';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('bands.band');
  },

  actions: {
    didTransition:  function(){
      var band = this.modelFor('bands.band');
      document.title = `${band.get('name')} songs - Rock & Roll`;
    },
    createSong: function() {
      var controller=this.get('controller');
          band=this.modelFor('bands.band');
        var song_name = this.store.createRecord('song',{
          title:  controller.get('song_name'),
          band: band
        });

        song.save().then(function() {
          controller.set('song_name','');
        });
      },
    }
});
