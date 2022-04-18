import React, { useState } from "react";
import Heading from "./Header";
import Compose from "./Compose";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

function App() {
  const [entries, setEntries] = useState([]);

  function addNote(e, inputText) {
    setEntries((prevNotes) => {
      return [...prevNotes, inputText];
    });
    e.preventDefault();
  }

  function deleteNote(id) {
    setEntries((prevEntries) => {
      return prevEntries.filter((entries, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Heading />
      <Compose onAdd={addNote} />
      {entries.map((entries, index) => (
        <Note
          key={index}
          id={index}
          title={entries.title}
          content={entries.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
