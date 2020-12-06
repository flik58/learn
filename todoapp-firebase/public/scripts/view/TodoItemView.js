import {element} from "./html-util.js"

export class TodoItemView {
  createElement(todoItem, {onUpdateTodo, onDeleteTodo}) {
    const todoItemElement = todoItem.complated
          ? element`<li><input type="checkbox" class="checkbox" checked>
                <s>${todoItem.title}</s>
                <button class="delete">x</button>
              </li>`
          : element`<li><input type="checkbox" class="checkbox">
                ${todoItem.title}
                <button class="delete">x</button>
              </li>`;

    // checkbox toggle
    const inputCheckboxElement = todoItemElement.querySelector(".checkbox");
    inputCheckboxElement.addEventListener("change", () => {
      onUpdateTodo({
        id: todoItem.id,
        complated: !todoItem.complated
      });
    });

    // delete button
    const deleteButtonElement = todoItemElement.querySelector(".delete");
    deleteButtonElement.addEventListener("click", () => {
      onDeleteTodo({
        id: todoItem.id
      });
    });

    return todoItemElement;
  }
}
