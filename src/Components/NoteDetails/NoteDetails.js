import React, { Component } from 'react';
import './NoteDetails.css';
import NoteDetailsNav from '../NoteDetailsNav/NoteDetailsNav';
import Context from '../../Context';

class NoteDetails extends Component {

  static contextType = Context;

  deleteRequest = (id, cb) => {
    fetch(`http://localhost:9090/notes/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(() => {
      this.props.history.push('/');
      cb(id);
    })
    .catch(err => console.error(err));
  };

  render() {
    const note = this.context.notes.find(note => note.id === this.props.match.params.id) || {};
    const { folderId, name, content, modified } = note;
    const dateModified = new Date(modified).toLocaleString();
    const folder = this.context.folders.find(f => f.id === folderId);

    return (
      <>
        <NoteDetailsNav folder={folder} />
        <section className="Main">
          <div className="Main__note_header">
            <h3>{name}</h3>
            <p>{dateModified}</p>
            <button onClick={() =>
            this.deleteRequest(note.id, this.context.delete)}>
            Delete Note </button>
          </div>
          <p className="Main__note_details">{content}</p>
        </section>
      </>
    );
  }
}
export default NoteDetails;