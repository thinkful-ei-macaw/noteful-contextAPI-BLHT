import React from 'react';
import Context from '../../Context';

class AddNote extends React.Component {
    static contextType = Context;
    onSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        this.context.addNote({
            name
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input name="name"/>
                <button>Add Note</button>
            </form>
        )
    }
}

export default AddNote;