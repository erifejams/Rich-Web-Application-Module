const {
  Observable,
  fromEvent, filter,
} = rxjs;
    
 //const $ = (selector) => document.querySelector(selector);   
//var hiddenToShowUp = document.getElementById('myButton');
//var buttonShowUpSection = document.getElementById('allofit');
//var editNoteSection = document.getElementById('editingthenote');

//declaring variableclick events
const hiddenToShowUp = rxjs.Observable.fromEvent(document.getElementById('myButton'), "click");
const buttonShowUpSection = rxjs.Observable.fromEvent(document.getElementById('allofit'), "click");
const editNoteSection = rxjs.Observable.fromEvent(document.getElementById('editingthenote'), "click");
var GettextInput= document.getElementById('textInput').value


//var deleteNotes = observable.subscribe( x => document.getElementById('deletenote').innerHTML += x + ' ' );
//this DELETES all the things that come with the notes made e.g. the box, the delete button, the edit button
/*.filter(function( userInputFromNote){ 
        document.getElementById('allofit').style.display = 'block'
        */
        
var userInputFromNotes$ =  rxjs
   	.Observable.fromEvent(document.getElementById('myButton'), "click")
    .subscribe(input =>document.getElementById("noteBox").innerHTML =  GettextInput);
  
function DeleteNote() {
  buttonShowUpSection.parentNode.removeChild(buttonShowUpSection);
  editNoteSection.parentNode.removeChild(editNoteSection);
}


//ReactDOM.render( document.getElementById('myButton'));
//this function is to get what the user writes and make it in a note - ADD USERS WRITTEN NOTES

function userInputFromNotes() {
    document.getElementById('allofit').style.display = 'block';
    document.getElementById("noteBox").innerHTML = document.getElementById('textInput').value;
     return (
    	<input type="button" id="myButton" value="Add Note"/>
      //<button onClick={shoot}>Take the shot!</button>
  	);
}

//to CHANGE the background COLOUR of the box/note
const bgColour$ = rxjs.Observable.fromEvent(document.getElementById("favcolor").value, 'change', document.getElementById("noteBox").style.backgroundColor);

//this is for EDIT the note
function EditNote() {
  //this is for the buttons of edit and delete, color background of notes to show up
  document.getElementById('editingthenote').style.display = 'block';
  document.getElementById("noteBox").innerHTML = document.getElementById('textInput2').value;
  return (
  	<p>Write out your new note</p>
    <form>
			<input type="text" id="textInput2">
			<input type="button" value="Confirm note change" />
		</form>
    <button onClick={editNoteSection}></button>
  );
}


//showing it on the screen
ReactDOM.render(<userInputFromNotes/>, document.getElementById('myButton'));
ReactDOM.render(<EditNote/>, document.getElementById('textInput2'));
ReactDOM.render(<DeleteNote/>, document.getElementById('deletenote'));
ReactDOM.render(<changebackground/>, document.getElementById('favcolor'));
