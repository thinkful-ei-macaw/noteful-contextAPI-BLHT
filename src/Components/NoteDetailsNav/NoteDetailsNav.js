import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NoteDetailsNav extends Component {
  render() {
    const { id, name } = this.props.folder;
    return (
      <>
        <nav className="Sidebar__nav">
          <Link className="Sidebar__nav_back" to={`/note-list/${id}`}>
            Go Back
          </Link>
          <h2>{name}</h2>
        </nav>
      </>
    );
  }
}
export default NoteDetailsNav;
