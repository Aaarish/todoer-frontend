import axiosInstance from "./AxiosInstance"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { User } from "./UserApi";
import toast from "react-hot-toast";

export interface Todo {
    id: string,
    title: string,
    description: string,
    user: User
}

export interface TodoAddRequest {
    title: string,
    description: string
}

export const fetchTodos = async (user_id: string) => {
    return (await axiosInstance.get<Todo[]>(`/todos/${user_id}`)).data;
}

export const addTodo = async (user_id: string, todoAddRequest: TodoAddRequest) => {
    const response = await axiosInstance.post<Todo>(`/todos/${user_id}`, todoAddRequest);
    return response.data;
}

export const useTodos = (user_id: string) => {
    return useQuery({
        queryKey: ['todos', user_id],
        queryFn: () => fetchTodos(user_id)
    })
}

export const useAddTodo = (user_id: string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (todoAddRequest: TodoAddRequest) => addTodo(user_id, todoAddRequest),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos', user_id] })
            toast.success('Todo added !')
        },
        onError: () => toast.error('Failed to add todo')
    });
}
