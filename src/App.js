import React, { Component } from 'react';
import './App.css';
import FolderNav from './Components/FolderNav/FolderNav';
import NoteList from './Components/NoteList/NoteList';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folders: this.props.store.folders,
      notes: this.props.store.notes,
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <h1>Noteful</h1>
        </header>
        <Route path="/" render={() => <FolderNav folders={this.state.folders} />} />
        <Route path="/" render={() => <NoteList notes={this.state.notes} />} />
      </div>
    );
  }
}

export default App;
