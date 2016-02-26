import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  count: DS.attr('number'),
  summary: DS.attr('string'),
  fcopyright: DS.attr('boolean'),
  fauthor: DS.attr('boolean', {defaultValue: false})
});
