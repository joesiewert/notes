import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    createNote: function() {
      var title = this.get('noteTitle');
      var body = this.get('noteBody');

      if (title !== undefined) {
        if (body !== undefined) {
          if (title.trim() !== '') {
            if (body.trim() !== '') {
              var note = this.store.createRecord('note', {title: title, body: body});
              note.save();
              this.set('noteTitle', '');
              this.set('noteBody', '');
            }
          }
        }
      }
    }
  }
});
