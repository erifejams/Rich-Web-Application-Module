/// THIS IS THE LINK TO MY JSFIDDLE WHICH I USED FOR IT TO display:   https://jsfiddle.net/EJams/z8n9htp6/198/


//this is for the buttons of edit and delete, color background of notes to show up
function ShowHiddenNotesSection(props){ 
  if (!props.warn) {
    return null;
  }

  return (
  	//this is for the edit and delete button
    <div className="noteBox">
       <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/>
       <input type="button" id="editnote" value="Edit Note" />
       <input type="button" id="deletenote" value="Delete Note" />
    </div>
    
  );
}

//change background colour
function changebackground(props){ 

  if (!props.warn) {
        return null;
   }
    
    return(
    
    		//this is to change the color of the notes
        <div id="favcolor" >
           <input type="color" value="#f00000"/>
           <button>Submit</button>
        </div>
    );
}


//this is for EDIT the note
//should be hidden until edit button is clicked
function EditNote(props){

  if (!props.warn) {
      return null;
    }
    return(
      <div id="textInput2">
          <p>Write out your new note</p>
          <form>
            <input type="text"  />
            <input type="submit" value="Confirm note change" />
          </form>
       </div>
    );
 }

//this DELETES all the things that come with the notes made e.g. the box, the delete button, the edit button
function DeleteNote(props){

	if (!props.warn) {
      return null;
    }
    
  render:{
    return(
      <div id="delete">
      </div>
    );
  }
}

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', show: false, editShow: false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.editTheNote = this.editTheNote.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state.value);
 
    this.setState(prevState => ({
      show: !prevState.show
    }));
    event.preventDefault();
  }
  
  editTheNote(event){
  	 this.setState(prevState => ({
      editShow: !prevState.editShow
    }));
    event.preventDefault();
  }
  /*
  changebackground(props){
  
  }
  
  ShowHiddenNotesSection(props){ 
  }

  EditNote(props){
 }
 
 DeleteNote(props){
 
 }
 */
 
  render() {
    return (
    //to display add notes and input button
    //this is for the notes box to appear
       <div>
          <form onSubmit={this.handleSubmit}>
              <h2>My Notepad</h2>
             <input type="text" value={this.state.value} onChange={this.handleChange} />
             <input type="submit" value="Add note"/>
              <br/><br/>
          </form>
           <ShowHiddenNotesSection warn={this.state.show} />
         
          <div onSubmit={this.editTheNote}>
            <br/><br/>
            <EditNote warn={this.state.editShow} />
          </div>
        </div>
     );
  }
}


ReactDOM.render(
  <Notes />,
  document.getElementById('textInput')
);
