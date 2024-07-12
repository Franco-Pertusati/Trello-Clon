export interface Board {
    id: number;
    name: string;
    columns: Column[];
    isNaming?: boolean;
}

export interface Column {
    id?: number;
    title: string;
    todos: ToDo[];
    namingColumnMode?: boolean;
}

export interface ToDo {
    id: string;
    title: string;
    namingTodoMode?: boolean;
}
