function ToDoItem({ item, changeDataById }) {
  return (
    <div className="toDoItemWrapper" data-completed={item.isCompleted + ""}>
      <span>{item.todoText}</span>
      <p onClick={() => changeDataById(item.id)}>
        {item.isCompleted ? "cancel" : "completed"}
      </p>
      <p onClick={() => changeDataById(item.id, true)}>delete</p>
    </div>
  );
}

export default ToDoItem;
