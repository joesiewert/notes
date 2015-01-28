import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    newNote: function() {
      var body = this.get('noteCopy');

      var note = this.store.createRecord('note', {body: body});
      this.set('noteCopy', '');
      note.save();
    }
  }
});
