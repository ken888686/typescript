interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreviewPick = Pick<Todo, "title" | "completed">;

const todoPick: TodoPreviewPick = {
  title: "Clean room",
  completed: false,
};

type TodoPreviewOmit = Omit<Todo, "description">;

const todoOmit: TodoPreviewOmit = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};
