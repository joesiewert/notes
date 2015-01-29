import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    newNote: function() {
      var body = this.get('noteCopy');

      if (body !== undefined) {
        if (body.trim() !== '') {
          var note = this.store.createRecord('note', {body: body});
          note.save();
          this.set('noteCopy', '');
        } else {
          this.set('noteCopy', '');
        }
      }
    }
  }
});
