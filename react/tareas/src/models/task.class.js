export class Task {
  id = '';
  description = '';
  completed = false;

  constructor(id, description, completed) {
    this.id = id;
    this.description = description;
    this.completed = completed;
  }
}
