import React from 'react';
import Context from '../../Context';

class AddFolder extends React.Component {
    static contextType = Context;
    onSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        this.context.addFolder({
            name
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input name="name"/>
                <button>Save</button>
            </form>
        )
    }
}

export default AddFolder;