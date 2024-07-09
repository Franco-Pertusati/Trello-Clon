export interface ToDo {
    id: string;
    title: string;
    namingTodoMode?: boolean;
}

export interface Column {
    title: string;
    todos: ToDo[];
    namingColumnMode?: boolean;
}