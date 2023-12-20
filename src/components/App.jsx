import React, { useState } from "react";

function App() {
  const [Input, setInput] = useState("");
  const [Items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;

    setInput(newValue);
  }

  function addItem() {
    setItems((prevItems) => [...prevItems, Input]);
    setInput("");
  }
  function removeItem() {
    setItems([...Items.slice(1)]);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Add an item"
          value={Input}
        />
        <button>
          <span className="addbutton" onClick={addItem}>
            Add
          </span>
          <span className="delbutton" onClick={removeItem}>
            Rem
          </span>
        </button>
      </div>
      <div>
        <ul>
          {Items.map((Item) => (
            <li>{Item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
