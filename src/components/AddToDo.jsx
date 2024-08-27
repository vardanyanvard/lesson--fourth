import { useState } from "react";

function AddToDo({ addNewItemToData }) {
  const [inputValue, setInputValue] = useState("");

  const changeInputValue = (e) => setInputValue(e.target.value);

  const addClick = (e) => {
    e.preventDefault();
    const newTodoItem = {
      id: Math.random().toFixed(16),
      isCompleted: false,
      todoText: inputValue,
    };
    addNewItemToData(newTodoItem);
    setInputValue("");
  };

  return (
    <div className="addToDoWrapper">
      <form onSubmit={addClick}>
        <input
          value={inputValue}
          onChange={changeInputValue}
          minLength={3}
          type="text"
          required
          placeholder="Min 3 chars"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddToDo;
