import React from 'react';
import Context from '../../Context';

class AddNote extends React.Component {

    static contextType = Context;

    handleSubmit = (e) => {
        e.preventDefault();
        const noteTitle = e.target.name.value;
        const noteDesc = e.target.description.value;
        const noteId = this.getFolderId(this.state.folder.value)
        this.context.addNote({
            name: this.state.name.value,
            modified: Date.now(),
            id: noteId,
            content: noteDesc
        })
    }



    handleAddNote(noteTitle, content, folderId) {
        const API_NOTES = `http://localhost:9090/notes/`;
        fetch(API_NOTES, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },

            body: JSON.stringify({
                "name": noteTitle,
                "content": content,
                folderId: folderId,
                "modified": new Date()
            })
        })
        .then(res => {
            if(!res.ok) {
                throw new Error(res.statusText)
            }
            return res.json()
        })
        .then(data => {
            this.context.getNotes();
            this.props.history.push('/')    
        })
    }

    validateForm = (e) => {
        e.preventDefault();
        let noteTitle = e.target.title.value;
        let content = e.target.content.value;
        let folderId = e.target.folderId.value;

        if(noteTitle.length === 0) {
            alert('Note must have a title!');
        } else {
            return this.handleAddNote(noteTitle, content, folderId);
        }
    }
    

    render() {
        return (
            <form onSubmit={this.validateForm}>
                <input type="text" 
                id="note-title" 
                name="title"
                />
                <textarea name="content"></textarea>
                <select name="folderId"> 
        {this.context.folders.map(folder =>(<option value={folder.id}>{folder.name}</option>))}
                </select>
                <button >Add Note</button>
            </form>
        )
    }
}

export default AddNote;