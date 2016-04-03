import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.store.createRecord('contact');
  },


  emailAddress: '',

  message: '',


  emailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  messageValid: Ember.computed.gte('message.length', 5),
  isValid: Ember.computed.and('emailValid', 'messageValid'),
  isDisabled: Ember.computed.not('isValid'),


  actions: {
    saveContact(newContact) {
      alert(`Thank you for your message! Email Address: ${this.get('emailAddress')}, Message: ${this.get('message')}`);      
      this.set('responseMessage', 'Thanks for your email dickbaggg!');

      newContact.save().then(() => this.transitionTo('index'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }

});
