import React, { Component } from 'react';
import './App.css';
import FolderNav from './Components/FolderNav/FolderNav';
import NoteList from './Components/NoteList/NoteList';
import NoteDetails from './Components/NoteDetails/NoteDetails';
import AddFolder from './Components/AddFolder/AddFolder';
import AddNote from './Components/AddNote/AddNote';
import { Route, Link, Switch } from 'react-router-dom';
import Context from './Context';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folders: [],
      notes: [],
    };
  }

  componentDidMount() {
    this.getNotes();
  };

  deleteNotes = (id) => {
    const newNotes = this.state.notes.filter(note => note.id !== id);
    this.setState({
      notes: newNotes
    })
  }

  addFolder = (folder) => {
    this.setState({
      folders: this.state.folders.concat(folder)
    })
  }

  addNote = (note) => {
    this.setState({
      notes: this.state.notes.concat(note)
    })
  }

  getNotes = () => {
    const API_FOLDERS = "http://localhost:9090/folders";;
    const API_NOTES = "http://localhost:9090/notes";

    fetch(API_NOTES)
    .then(res => res.json())
    .then(data => this.setState(
      { notes: data }
    ));
    
    fetch(API_FOLDERS)
    .then(res => res.json())
    .then(data => this.setState(
      { folders: data }
    ));
  } 

  render() {
    const contexts = {
      notes: this.state.notes,
      folders: this.state.folders,
      delete: this.deleteNotes,
      addFolder: this.addFolder,
      addNote: this.addNote,
      getNotes: this.getNotes
    };

    return (
      <div className="App">
        <header className="App__header">
          <h1>
            <Link to="/">Noteful</Link>
          </h1>
        </header>
        <Context.Provider value={contexts}>
        <Route
          exact
          path={['/', '/note-list/:id']}
          component={FolderNav}
        />
        <Switch>
          <Route
            exact
            path="/"
            component={NoteList}
          />
          <Route
            path="/note-list/:id"
            component={NoteList}
              />
            )}
          />
          <Route
            path="/note-details/:id"
            component={NoteDetails}
              />
            )}
          />
          <Route
          path="/addfolder"
          component={AddFolder}
          />
          <Route
          path="/addnote"
          component={AddNote}
          />
          <Route path="/" render={() => <div>404 Not Found</div>} />
        </Switch>
        </Context.Provider>
      </div>
    );
  }
}

export default App;