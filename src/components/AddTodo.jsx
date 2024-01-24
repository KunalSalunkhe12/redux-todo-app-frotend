import { useAddTodoMutation } from "../services/todo";
import { useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState({ name: "", description: "" });
  const [addTodo, result] = useAddTodoMutation();

  console.log(result);
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      name: todo.name,
      description: todo.description,
    });
    setTodo({
      name: "",
      description: "",
    });
  };

  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <div className="">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={handleChange} />
      </div>
      <div className="">
        <label htmlFor="description">Description</label>
        <input type="text" id="description" onChange={handleChange} />
      </div>
      <button type="submit" className="btn add-btn">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
