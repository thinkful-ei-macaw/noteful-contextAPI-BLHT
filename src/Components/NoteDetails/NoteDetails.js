import React, { Component } from 'react';
import './NoteDetails.css';
import NoteDetailsNav from '../NoteDetailsNav/NoteDetailsNav';
import MyContext from '../Context';

class NoteDetails extends Component {

  static defaultProps = {
    onDeleteNote: () => {}
  }

  handleDeleteNote = (event) => {
    event.preventDefault();
    const noteId = this.props.id;


  }

  render() {
    const { folderId, name, content, modified } = this.props.note;
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
