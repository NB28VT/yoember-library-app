import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',

  message: '',


  emailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  messageValid: Ember.computed.gte('message.length', 5),
  isValid: Ember.computed.and('emailValid', 'messageValid'),
  isDisabled: Ember.computed.not('isValid'),

  actions: {
    saveContact() {
      
      const email = this.get('emailAddress');
      const message = this.get('message');
      
      const newContact = this.store.createRecord('contact', {
        email: email,
        message: message
      });

      newContact.save().then((response) => {

        this.set('responseMessage', `Thank you! We have just saved your email address with the following id: ${response.get('id')}`);
        this.set('emailAddress', '');
        this.set('message', '');

      });

    }
  }
});






