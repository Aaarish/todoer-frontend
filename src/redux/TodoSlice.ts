import { useUser } from "@/logical/context/UserContext";
import { Todo } from "@/logical/Todo";
import { createSlice } from "@reduxjs/toolkit";

interface TodoState {
    todos: Todo[]
}

const initialState: TodoState = {
    todos: []
}

const { user } = useUser()

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            if (!user?.user_id) return
            const newTodo = new Todo("", action.payload.title, action.payload.description, user)
            state.todos.push(newTodo);
        }
    },
})

export const { addTodo } = todoSlice.actions
export default todoSlice.reducer
