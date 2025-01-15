let todos = [];

export const todoData = (req, res) => {
  const { todo } = req.body;
  todos.push(todo);
  res.send(todos);
  // res.render("data", { todos });
};

export const deleteTodo = (req, res) => {
  const { index } = req.body;
  todos.splice(index, 1);
  res.render("data", { todos });
};
