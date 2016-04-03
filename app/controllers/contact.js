import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',

  message: '',


  emailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  messageValid: Ember.computed.gte('message.length', 5),
  isValid: Ember.computed.and('emailValid', 'messageValid'),
  isDisabled: Ember.computed.not('isValid'),

  actions: {
    sendMessage(){
      alert(`Thank you for your message! Email Address: ${this.get('emailAddress')}, Message: ${this.get('message')}`);
      
      this.set('responseMessage', 'Thanks for your email.');
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }

});
