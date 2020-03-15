import React from 'react';
import Context from '../../Context';

class AddNote extends React.Component {
    // constructor() {
    //     super();
    //     state = {
    //         form: '',
            
    //     }
    // }

    static contextType = Context;

    handleSubmit = (e) => {
        e.preventDefault();
        const noteName = e.target.name.value;
        const noteDesc = e.target.description.value;
        const noteId = this.getFolderId(this.state.folder.value)
        this.context.addNote({
            name: this.state.name.value,
            modified: Date.now(),
            id: noteId,
            noteContents: noteDesc
        })
    }



    handleAddNote(noteName, noteDesc, id, content) {
        const API_NOTES = `http://localhost:9090/notes/${ this.context.id }`;
        fetch(API_NOTES, {
            method: 'POST',
            body: JSON.stringify({
                "name": noteName,
                "modified": Date.now(),
                "folderId": id,
                "content": content
            })
        })
        .then(res => {
            if(!res.ok) {
                throw new Error(res.statusText)
            }
            return res.json()
        })

    }

    validateForm = (e) => {
        let input = e.target.value;
        if(input === '') {
            
        }
    }
    

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input name="name" />
                <button>Add Note</button>
            </form>
        )
    }
}

export default AddNote;