import { fetchTodos } from "@/api/TodoApi"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card"
import { Pencil, Trash2 } from "lucide-react"
import { useEffect, useState } from "react"
import { Todo } from "@/logical/Todo"
import { useUser } from "@/logical/context/UserContext"
import { AddTodoDialog } from "./AddTodoDialog"

function CardGrid() {
    const [todos, setTodos] = useState<Todo[] | undefined>(undefined)
    const { user } = useUser()

    useEffect(() => {
        if (!user?.user_id) return
        (async () => {
            const response = await fetchTodos(user.user_id)
            console.log(response);
            setTodos(response)
        })()
    }, [user?.user_id])

    return (
        <>
            <div className="flex justify-end p-4">
                <AddTodoDialog />
            </div>
            <div className="flex flex-wrap justify-evenly p-4 gap-4">
                {todos?.map(todo => (
                    <Card key={todo.id} className="w-[350px]">
                        <CardHeader>
                            <CardTitle>{todo.title}</CardTitle>
                            <CardDescription>This is a beautiful card component from shadcn/ui</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>{todo.description}</p>
                        </CardContent>
                        <CardFooter className="flex justify-end gap-2">
                            <button className="p-2 hover:bg-accent rounded-md transition-colors">
                                <Pencil className="h-4 w-4" />
                            </button>
                            <button className="p-2 hover:bg-destructive hover:text-destructive-foreground rounded-md transition-colors">
                                <Trash2 className="h-4 w-4" />
                            </button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </>
    )
}

export default CardGrid