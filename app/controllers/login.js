import Ember from 'ember';

export default Ember.Controller.extend({
  session: {},
  actions : {
    auth() {
      var self = this;

      var session = this.get('session');
      session.username = this.get('username');
      session.password = this.get('password');

      var p = Ember.$.post('/auth', session);
      p.then(function(resp) {
        self.set('session.token', resp.token);
        self.transitionToRoute('profile');
      }, function(failure) {
        self.set('loginFailed', true);
      });
    }
  }
});
