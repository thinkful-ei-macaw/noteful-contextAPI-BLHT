import React from 'react';
import Context from '../../Context';

class AddFolder extends React.Component {

    static contextType = Context;
    
    onSubmit = (e) => {
        e.preventDefault();
        const folderName = e.target.name.value;
        this.context.addFolder({
            name: folderName
        });
    }

    validateFolderTitle() {
        const folderTitle = this.context.folder.value.target;
        console.log(folderTitle);
        if(folderTitle.length === 0) {
            return 'Folders need a title!';
        } else if(folderTitle.length < 4) {
            return 'Titles must be at least 4 letters long!';
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                required
                id="addFolder"
                name="name"
                type="text"
                value={this.context.folder}
                onSubmit={e => this.validateFolderTitle}
                />
                <button>Save</button>
            </form>
        )
    }
}

export default AddFolder;