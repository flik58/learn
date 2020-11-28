import {TodoListModel} from "./model/TodoListModel.js";
import {TodoItemModel} from "./model/TodoItemModel.js";
import {TodoListView} from "./view/TodoListView.js";
import {element, render} from "./view/html-util.js";

export class App {
  constructor() {
    this.todoListModel = new TodoListModel();
    this.todoListView = new TodoListView();
  }

  handleAdd(title) {
    this.todoListModel.addTodo(new TodoItemModel({title, complated: false}));
  }

  handleUpdate({id, complated}) {
    this.todoListModel.updateTodo({id, complated});
  }

  handleDelete({id}) {
    this.todoListModel.deleteTodo({id});
  }

  mount() {
    const formElement = document.querySelector("#js-form");
    const inputElement = document.querySelector("#js-form-input");
    const containerElement = document.querySelector("#js-todo-list");
    const todoItemCountElement = document.querySelector("#js-todo-count");

    this.todoListModel.onChange(() => {
      const todoItems = this.todoListModel.getTodoItems();
      const todoListElement = this.todoListView.createElement(todoItems, {
        onUpdateTodo: ({id, complated}) => {
          this.handleUpdate({id, complated});
        },
        onDeleteTodo: ({id}) => {
          this.handleDelete({id});
        }
      });
      render(todoListElement, containerElement);
      todoItemCountElement.textContent = `todo item: ${this.todoListModel.getTotalCount()}`;
    });

    formElement.addEventListener("submit", (event) => {
      console.log(`input value: ${inputElement.value}`);
      event.preventDefault();
      this.handleAdd(inputElement.value);
      inputElement.value = "";
    });
  }
}
