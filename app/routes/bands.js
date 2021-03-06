import Ember from 'ember';
import Band from '../models/band';
import Song from '../models/song';

var blackDog = Song.create({
  title: 'Black Dog',
  band: 'Led Zeppelin',
  rating: 3
});
var yellowLedbetter = Song.create({
  title: 'Yellow Ledbetter',
  band: 'Pearl Jam',
  rating: 4
});
var pretender = Song.create({
  title: 'The Pretender',
  band: 'Foo Fighters',
  rating: 2
});
var ledZeppelin = Band.create({
  name: 'Led Zeppelin',
  // description: 'Led Zeppelin band',
  songs:  [blackDog]
});
var pearlJam = Band.create({
  name: 'Pearl Jam',
  description: 'Pearl Jam is an American rock band, formed in Seattle, Washington in 1990.',
  songs:  [yellowLedbetter]
});
var fooFighters = Band.create({
  name: ' The Foo Fighters',
  description:  'This is FooFighters',
  songs:  [pretender]
});

var BandsCollection = Ember.Object.extend({
content: [],
sortProperties: ['name:desc'],
sortedContent: Ember.computed.sort('content', 'sortProperties'),
});

var bands = BandsCollection.create();
bands.get('content').pushObjects([ledZeppelin,pearlJam,fooFighters]);

export default Ember.Route.extend({
  model: function() {
    return bands;
  },
  actions:  {
    didTransition:  function(){
      document.title = 'Bands- Rock & Roll EmberJS'
    },
    createBand: function() {
      var name = this.get('controller').get('band_name');
      var band = Band.create({name: name });
      bands.get('content').pushObject(band);
      this.get('controller').set('band_name','');
      this.transitionTo('bands.band.songs', band);
    },

  }
});
