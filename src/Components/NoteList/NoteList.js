import React, { Component } from 'react';
import './NoteList.css';
import { Link } from 'react-router-dom';

class NoteList extends Component {
  formatDate(date) {
    return new Date(date).toLocaleString();
  }

  render() {
    return (
      <ul className="Main__content">
        {this.props.notes.map(note => {
          const date = this.formatDate(note.modified);
          return (
            <li key={note.id}>
              <h2>
                <Link to={`/note-details/${note.id}`}>{note.name}</Link>
              </h2>
              <p>{date}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default NoteList;
