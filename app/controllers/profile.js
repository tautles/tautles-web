import Ember from 'ember';

export default Ember.Controller.extend({
  loginController: Ember.inject.controller('login'),
  session: Ember.computed.reads('loginController.session')
});
