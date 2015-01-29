import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    createNote: function() {
      var title = this.get('noteTitle');
      var body = this.get('noteBody');

      if (body !== undefined) {
        if (body.trim() !== '') {
          var note = this.store.createRecord('note', {title: title, body: body});
          note.save();
          this.set('noteTitle', '');
          this.set('noteBody', '');
        } else {
          this.set('noteTitle', '');
          this.set('noteBody', '');
        }
      }
    }
  }
});
