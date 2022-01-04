interface Todo {
  title: string;
  description: string;
  completed: boolean;
  age: number;
}

type TodoPreview = Pick<Todo, "title" | "completed" | "age">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  age: 10,
};
