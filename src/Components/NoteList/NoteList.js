import React, { Component } from 'react';
import './NoteList.css';

class NoteList extends Component {
  render() {
    return (
      <ul className="Main__content">
        <li>Note 1</li>
        <li>Note 2</li>
        <li>Note 3</li>
        <li>Note 4</li>
        <li>Note 5</li>
      </ul>
    );
  }
}
export default NoteList;
