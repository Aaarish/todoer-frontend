import { fetchTodos } from "@/api/TodoApi"
import { useEffect, useState } from "react"
import { Todo } from "@/logical/Todo"

const useTodo = (userId: string) : (Todo[] | null) => {
    const [todos, setTodos] = useState<Todo[] | null>(null);

    useEffect(() => {
        (async () => {
            const data = await fetchTodos(userId);
            if (data) setTodos(data);
        })()
    }, [userId])

    return todos;
}

export default useTodo