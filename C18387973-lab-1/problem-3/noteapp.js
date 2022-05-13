//declaring variable for delete note function
var buttonShowUpSection = document.getElementById('allofit');
var editNoteSection = document.getElementById('editingthenote');

//this is for the buttons of edit and delete, color background of notes to show up
//this is jquery
$(document).ready(function() {
  $("#myButton").click(function() {
	$("#allofit").show();
  });
});

$(document).ready(function() {
  $("#editnote").click(function() {
	$("#editingthenote").show();
  });
});

//this DELETES all the things that come with the notes made e.g. the box, the delete button, the edit button
function DeleteNote() {
  buttonShowUpSection.parentNode.removeChild(buttonShowUpSection);
  editNoteSection.parentNode.removeChild(editNoteSection);
}

//this function is to get what the user writes and make it in a note - ADD USERS WRITTEN NOTES
function userInputFromNotes() {
  document.getElementById("noteBox").innerHTML = document.getElementById('textInput').value;
}

//to CHANGE the background COLOUR of the box/note
function changebackground() {
  document.getElementById("noteBox").style.backgroundColor = document.getElementById("favcolor").value;
}

//this is for EDIT the note
function EditNote() {
  document.getElementById("noteBox").innerHTML = document.getElementById('textInput2').value;
}
