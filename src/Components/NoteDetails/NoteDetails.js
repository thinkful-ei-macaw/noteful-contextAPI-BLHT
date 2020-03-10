import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NoteDetails.css';

class NoteDetails extends Component {
  render() {
    const { folderId, name, content, modified } = this.props.note;
    const dateModified = new Date(modified).toLocaleString();
    const folder = this.props.folders.find(f => f.id === folderId);

    return (
      <>
        <nav className="Sidebar__nav">
          <Link className="Sidebar__nav_back" to={`/note-list/${folderId}`}>
            Go Back
          </Link>
          <h2>{folder.name}</h2>
        </nav>
        <section className="Main__content">
          <div className="Main__note_header">
            <h3>{name}</h3>
            <p>{dateModified}</p>
          </div>
          <p className="Main__note_details">{content}</p>
        </section>
      </>
    );
  }
}
export default NoteDetails;
