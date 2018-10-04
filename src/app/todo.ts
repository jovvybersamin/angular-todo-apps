export class Todo {
  id: number;
  title: string;
  completed = false;
  editing = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

