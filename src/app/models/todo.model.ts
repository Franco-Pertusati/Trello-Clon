export interface Board {
  id: number;
  title: string;
  columns: Column[];
}

export interface Column {
  id: string;
  title: string;
  todos: ToDo[];
}

export interface ToDo {
  id: number;
  title: string;
  description: string;
  comments: [];
}
