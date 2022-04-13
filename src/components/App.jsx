import React from "react";
import Heading from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

function App() {
  return (
    <div>
      <Heading />
      {notes.map((noteEntry) => (
        <Note
          key={noteEntry.id}
          title={noteEntry.title}
          content={noteEntry.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
