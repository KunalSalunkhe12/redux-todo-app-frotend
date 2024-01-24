const AddTodo = () => {
  return (
    <div className="add-todo">
      <div className="">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div className="">
        <label htmlFor="description">Description</label>
        <input type="text" id="description" />
      </div>
      <button className="add-btn">Add Todo</button>
    </div>
  );
};

export default AddTodo;
