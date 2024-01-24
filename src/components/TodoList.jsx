import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  if (todos.length === 0) return <div>No Todos</div>;

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
