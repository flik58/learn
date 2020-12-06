import {TodoItemModel} from "../model/TodoItemModel.js"

const item = new TodoItemModel({
  title: "not complated",
  complated: false
});

const complatedItem = new TodoItemModel({
  title: "complated",
  complated: true
});

console.log(item.id != complatedItem.id);
