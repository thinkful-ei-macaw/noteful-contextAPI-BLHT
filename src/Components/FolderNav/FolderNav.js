import React, { Component } from 'react';
import './FolderNav.css';
import { NavLink } from 'react-router-dom';

class FolderNav extends Component {
  render() {
    return (
      <nav className="Sidebar__nav">
        <ul>
          {this.props.folders.map(folder => {
            return (
              <li key={folder.id}>
                <NavLink
                  to={`/note-list/${folder.id}`}
                  activeClassName="Sidebar__selected"
                >
                  {folder.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
export default FolderNav;
