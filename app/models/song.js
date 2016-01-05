// export default Ember.Object.extend({
//   title: '',
//   rating: 0,
//   band: null
// });

import DS from 'ember-data';

export default DS.Model.extend({
  title:  DS.attr('string'),
  rating: DS.attr('number'),
  band: DS.belongsTo('band')
});
