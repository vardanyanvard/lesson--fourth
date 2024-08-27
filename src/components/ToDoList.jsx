import { useState } from "react";
import AddToDo from "./AddToDo";
import List from "./List";

function ToDoList() {
  const [toDoData, setToDoData] = useState([]);

  const addNewItemToData = (newItem) => {
    setToDoData((prev) => [newItem, ...prev]);
  };

  const changeDataById = (id, isDelete) => {
    setToDoData(
      toDoData.filter((item) => {
        if (item.id === id) {
          if (isDelete) return false;
          item.isCompleted = !item.isCompleted;
        }
        return true;
      })
    );
  };

  console.log(toDoData);

  return (
    <div className="toDoListWrapper">
      <div className="content">
        <AddToDo addNewItemToData={addNewItemToData} />
        <List toDoData={toDoData} changeDataById={changeDataById} />
      </div>
    </div>
  );
}

export default ToDoList;
