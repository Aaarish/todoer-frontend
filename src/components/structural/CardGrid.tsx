import { useTodos } from "@/api/TodoApi"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card"
import { Pencil, Trash2 } from "lucide-react"
import { AddTodoDialog } from "./AddTodoDialog"
import toast from "react-hot-toast"
import { useSelector } from "react-redux"
import { RootState } from '@/state-management/Store'

function CardGrid() {
    const user = useSelector((state: RootState) => state.authContextSliceReducer.loggedInUser)

    const { data, isLoading, error } = useTodos(user.user_id)

    return (
        <>
            {isLoading && <p className="text-center text-8xl">Loading...</p>}
            {error && toast.error('Some error occurred while loading todos !')}
            {data && <><div className="flex justify-end p-4">
                <AddTodoDialog />
            </div>
                <div className="flex flex-wrap justify-evenly p-4 gap-4">
                    {data.map(todo => (
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
                </div></>}
        </>
    )
}

export default CardGrid