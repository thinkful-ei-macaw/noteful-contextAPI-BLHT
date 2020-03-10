import React, { Component } from 'react';
import './FolderNav.css';

class FolderNav extends Component {
  render() {
    return (
      <nav className="Sidebar__nav">
        <ul>
          <li>
            <a href="#">Folder 1</a>
          </li>
          <li>
            <a href="#">Folder 2</a>
          </li>
          <li>
            <a href="#">Folder 3</a>
          </li>
        </ul>
      </nav>
    );
  }
}
export default FolderNav;
