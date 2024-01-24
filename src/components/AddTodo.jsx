import { useAddTodoMutation } from "../services/todo";
import { useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState({ name: "", description: "" });
  const [addTodo, { isError, isLoading }] = useAddTodoMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!todo.name || !todo.description)
      return alert("Please fill all the fields");

    await addTodo({
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

  if (isError) {
    alert("Error");
  }

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <div className="">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={handleChange}
          value={todo.name}
        />
      </div>
      <div className="">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          onChange={handleChange}
          value={todo.description}
        />
      </div>
      <button type="submit" className="btn add-btn">
        {isLoading ? "Adding..." : "Add"}
      </button>
    </form>
  );
};

export default AddTodo;
