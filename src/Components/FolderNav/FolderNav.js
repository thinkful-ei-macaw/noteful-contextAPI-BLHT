import React, { Component } from 'react';
import './FolderNav.css';
import { NavLink } from 'react-router-dom';
import Context from '../../Context';

class FolderNav extends Component {
  static contextType = Context;
  render() {
    const { folders } = this.context;
    return (
      <nav className="Sidebar">
        <ul>
          {folders.map(folder => {
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
