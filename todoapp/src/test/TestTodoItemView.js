import {TodoItemModel} from "../model/TodoItemModel.js";
import {TodoItemView} from "../view/TodoItemView.js"

const todoItemView = new TodoItemView();
const todoItemModel = new TodoItemModel({
  title: "new Todo",
  complated: false
});

const todoItemElement = todoItemView.createElement(todoItemModel, {
  onUpdateTodo: () => {
    //
  },
  onDeleteTodo: () => {
    //
  }
});
console.log(todoItemElement);
