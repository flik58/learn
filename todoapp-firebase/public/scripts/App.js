import {TodoListModel} from "./model/TodoListModel.js";
import {TodoItemModel} from "./model/TodoItemModel.js";
import {TodoListView} from "./view/TodoListView.js";
import {element, render} from "./view/html-util.js";

export class App {
  constructor() {
    this.todoListModel = new TodoListModel();
    this.todoListView = new TodoListView();

    this.db = firebase.firestore();
  }

  handleAdd(title) {
    this.db.collection("todos").add({
      title: title,
      complated: false,
    }).then(function(docRef) {
      id = docRef.id
      console.log("Document written with ID: ", id);
      this.todoListModel.addTodo(new TodoItemModel({id, title, complated: false}));
    }).catch(function(error) {
      console.error("Error adding document: ", error);
    });
    // this.todoListModel.addTodo(new TodoItemModel({title, complated: false}));
  }

  handleUpdate({id, complated}) {
    this.db.collection('todos').doc(id).update({
      complated: complated
    });
    this.todoListModel.updateTodo({id, complated});
  }

  handleDelete({id}) {
    this.db.collection('todos').doc(id).delete();
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


db.collection("users").add({
  first: "Alan",
  middle: "Mathison",
  last: "Turing",
  born: 1912
}).then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
}).catch(function(error) {
  console.error("Error adding document: ", error);
});

db.collection("users").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
});

db.collection("users").where("first", "==", "Ada").get().then((querySnapshot) => {
  querySnapshot.forEach(function(doc) {
    doc.ref.delete();
  });
});

db.collection("users").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
});
