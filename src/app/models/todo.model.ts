export interface Board {
    id: number;
    name: string;
    columns: Column[];
}

export interface Column {
    id?: number;
    title: string;
    todos: ToDo[];
}

export interface ToDo {
    id: number;
    title: string;
}
