import React, { Component } from 'react';
import './App.css';
import FolderNav from './Components/FolderNav/FolderNav';
import NoteList from './Components/NoteList/NoteList';
import NoteDetails from './Components/NoteDetails/NoteDetails';
import { Route, Link, Switch } from 'react-router-dom';
import MyContext from './Components/Context'

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
  //   Promise.all([
  //     fetch()
  //     fetch()
  //   ])
  //   .then()
  }

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <h1>
            <Link to="/">Noteful</Link>
          </h1>
        </header>
        <Route
          exact
          path={['/', '/note-list/:id']}
          render={() => <FolderNav folders={this.state.folders} />}
        />
        <Switch>
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
          <Route path="/" render={() => <div>404 Not Found</div>} />
        </Switch>
      </div>
    );
  }
}

export default App;
