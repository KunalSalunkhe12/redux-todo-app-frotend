import { useDeleteTodoMutation, useUpdateTodoMutation } from "../services/todo";

const TodoItem = ({ todo }) => {
  const [deleteTodo, { isError: isDeleteError, isLoading: isDeleteLoading }] =
    useDeleteTodoMutation();
  const [updateTodo, { isError: isUpdateError, isLoading: isUpdateLoading }] =
    useUpdateTodoMutation();

  if (isDeleteError || isUpdateError) {
    alert("Error");
  }

  return (
    <>
      <div className="todo-item">
        <div>
          <h3 className={todo.completed ? "todo-done" : ""}>{todo.name}</h3>
          <p className={todo.completed ? "todo-done" : ""}>
            {todo.description}
          </p>
        </div>
        <div className="item-btn-container">
          {!todo.completed && (
            <button
              onClick={() => updateTodo(todo._id, !todo.completed)}
              className="btn complete-btn"
            >
              {isUpdateLoading ? "Loading..." : "Completed"}
            </button>
          )}
          <button
            onClick={() => deleteTodo(todo._id)}
            className="btn delete-btn"
          >
            {isDeleteLoading ? "Loading..." : "Delete"}
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default TodoItem;
