import DS from 'ember-data';

export default DS.Model.extend({
  token: DS.attr('string'),
  fauth : DS.attr('boolean')
});
