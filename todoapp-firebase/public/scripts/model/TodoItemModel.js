let todoIdx = 0;

export class TodoItemModel {
  constructor({title, complated}) {
    this.id = todoIdx++;
    this.title = title;
    this.complated = complated;
  }
}
