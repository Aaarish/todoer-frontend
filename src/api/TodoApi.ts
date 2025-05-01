import { Todo } from "@/logical/Todo";
import axiosInstance from "./AxiosInstance"

export const fetchTodos = async (user_id: string) => {
    const response = await axiosInstance.get<Todo[] | undefined>(`/todos/${user_id}`);
    if (response.data) {
        return response.data.map(todo => new Todo(todo.id, todo.title, todo.description, todo.user))
    }
}

export const addTodo = async (user_id : string, todo : Todo) => {
    const response = await axiosInstance.post(`/todos/${user_id}`, todo);
    return response.data;
}
