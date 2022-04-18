import React, { useState } from "react";

function Compose(props) {
  const [input, setInput] = useState({
    title: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <form>
      <div className="create-area">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Title"
          name="title"
          value={input.title || ""}
        />
        <textarea
          onChange={handleChange}
          placeholder="Take note"
          name="content"
          value={input.content || ""}
          rows="3"
        ></textarea>
        <button
          onClick={(e) => {
            props.onAdd(e, input);
            setInput("");
          }}
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default Compose;
