import React from 'react';

const MyContext = React.createContext({
    notes: [],
    folders: [],
    deleteNote: () => {}
})

export default MyContext;

