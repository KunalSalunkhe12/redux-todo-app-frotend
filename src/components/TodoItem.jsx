import { useDeleteTodoMutation, useUpdateTodoMutation } from "../services/todo";

const TodoItem = ({ todo }) => {
  const [deleteTodo, result] = useDeleteTodoMutation();
  const [updateTodo, completeResult] = useUpdateTodoMutation();

  console.log(result);
  console.log(completeResult);

  //   const handleComplete = async (id, completed) => {
  //     await completeTodo({
  //       id,
  //       completed,
  //     });

  //   };

  return (
    <>
      <div className="todo-item">
        <div>
          <h3>{todo.name}</h3>
          <p>{todo.description}</p>
        </div>
        <div className="item-btn-container">
          <button
            onClick={() => updateTodo(todo._id, !todo.completed)}
            className="btn complete-btn"
          >
            Completed
          </button>
          <button
            onClick={() => deleteTodo(todo._id)}
            className="btn delete-btn"
          >
            Delete
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default TodoItem;
