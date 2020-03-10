import React, { Component } from 'react';
import './App.css';
import FolderNav from './Components/FolderNav/FolderNav';
import NoteList from './Components/NoteList/NoteList';
import NoteDetails from './Components/NoteDetails/NoteDetails';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folders: [],
      notes: [],
    };
  }

  componentDidMount() {
    this.setState(this.props.store);
  }

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <h1>Noteful</h1>
        </header>
        <Route
          exact
          path={['/', '/note-list/:id']}
          render={() => <FolderNav folders={this.state.folders} />}
        />
        <Route
          exact
          path="/"
          render={() => <NoteList notes={this.state.notes} />}
        />
        <Route
          path="/note-list/:id"
          render={({ match }) => (
            <NoteList
              notes={this.state.notes.filter(
                note => note.folderId === match.params.id,
              )}
            />
          )}
        />
        <Route
          path="/note-details/:id"
          render={({ match }) => (
            <NoteDetails
              folders={this.state.folders}
              note={this.state.notes.find(n => n.id === match.params.id)}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
