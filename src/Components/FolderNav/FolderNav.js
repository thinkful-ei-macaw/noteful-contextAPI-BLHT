import React, { Component } from 'react';
import './FolderNav.css';

class FolderNav extends Component {
  render() {
    return (
      <nav className="Sidebar__nav">
        <ul>
          {this.props.folders.map(folder => {
            return (
            <li key={folder.id}>
              <h2>{folder.name}</h2>
            </li>
            )    
        })}
        </ul>
      </nav>  
    );
  }
}
export default FolderNav;
