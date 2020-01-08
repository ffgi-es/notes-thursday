(function(exports){
  function NoteListView(noteListModel){
    this.noteListModel = noteListModel;
  };

  NoteListView.prototype = {
    htmlString: function(){
      return "<ul>" + this.noteListModel.showNotes().map(note => {
        return "<li><div>" + note.substr(0, 20) + "</div></li>"
      }).join("") + "</ul>"
    }
  }

  exports.NoteListView = NoteListView;
})(this);
