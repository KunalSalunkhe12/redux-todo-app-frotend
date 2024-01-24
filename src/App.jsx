import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useGetTodosQuery } from "./services/todo";

function App() {
  const { error, isLoading, isSuccess, data } = useGetTodosQuery();

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <AddTodo />
      {isLoading && <div>Loading...</div>}
      {isSuccess && <TodoList todos={data} />}
      {error && <div>{error}</div>}
    </div>
  );
}

export default App;
