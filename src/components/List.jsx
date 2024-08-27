import ToDoItem from "./ToDoItem";

function List({ toDoData, changeDataById }) {
  return (
    <div className="listWrapper">
      {toDoData.map((item) => (
        <ToDoItem item={item} key={item.id} changeDataById={changeDataById} />
      ))}
    </div>
  );
}

export default List;
