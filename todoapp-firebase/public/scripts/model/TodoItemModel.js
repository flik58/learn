let todoIdx = 0;

export class TodoItemModel {
  constructor({id, title, complated}) {
    // this.id = todoIdx++;
    this.id = id;
    this.title = title;
    this.complated = complated;
  }
}
