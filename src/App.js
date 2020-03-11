import React, { Component } from 'react';
import './App.css';
import FolderNav from './Components/FolderNav/FolderNav';
import NoteList from './Components/NoteList/NoteList';
import NoteDetails from './Components/NoteDetails/NoteDetails';
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

  // componentDidMount() {
  //   const API_FOLDERS = "http://localhost:9090/folders";
  //   const API_NOTES = "http://localhost:9090/notes";

  //   fetch(API_NOTES)
  //   .then(res => res.json())
  //   .then(data => this.setState(
  //     { notes: data }
  //   ))
    
  //   fetch(API_FOLDERS)
  //   .then(res => res.json())
  //   .then(data => this.setState(
  //     { folders: data }
  //   ))
  // }

  componentDidMount() {
    const api_link_folders = 'http://localhost:9090/folders';
    const api_link_notes = 'http://localhost:9090/notes';

    Promise.all([fetch(api_link_folders), fetch(api_link_notes)])
      .then(([folderRes, noteRes]) => {
        if (!folderRes.ok) return folderRes.json().then(e => Promise.reject(e));
        if (!noteRes.ok) return noteRes.json().then(e => Promise.reject(e));

        return Promise.all([folderRes.json(), noteRes.json()]);
      })
      .then(([folders, notes]) => {
        this.setState({ folders, notes });
      })
      .catch(error => console.error(error));
  }

  setNotes = notes => {
    this.setState({
      notes: notes,
    });
  };

  render() {
    const contexts = {
      notes: this.state.notes,
      folders: this.state.folders
    }

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
          Component={FolderNav}
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
          <Route path="/" render={() => <div>404 Not Found</div>} />
        </Switch>
        </Context.Provider>
      </div>
    );
  }
}

export default App;