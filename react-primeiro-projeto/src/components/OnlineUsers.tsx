import { CountContext } from "@/contexts/CountContext"
import { useContext } from "react"

export const OnlineUSers = () => {
    const count = useContext(CountContext)

    return (
        <p>Online: {count}</p>
    )
}