import React, { Component } from 'react';
import './NoteDetails.css';
import NoteDetailsNav from '../NoteDetailsNav/NoteDetailsNav';
import Context from '../../Context';

class NoteDetails extends Component {

  static contextType = Context;

  render() {
    const note = this.context.notes.find(note => note.id === this.props.match.params.id);
    const { folderId, name, content, modified } = note;
    const dateModified = new Date(modified).toLocaleString();
    const folder = this.props.folders.find(f => f.id === folderId);

    return (
      <>
        <NoteDetailsNav folder={folder} />
        <section className="Main">
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