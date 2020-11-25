import {TodoItemModel} from "../model/TodoItemModel.js"
import {TodoListModel} from "../model/TodoListModel.js"

const todoListModel = new TodoListModel();
console.log(todoListModel.getTotalCount());

todoListModel.onChange(() => {
  console.log("TodoList changed.");
});

todoListModel.addTodo(new TodoItemModel({
  title: "new Todo item",
  complated: false
}));

console.log(todoListModel.getTotalCount());
