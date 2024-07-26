import { CountContext, CountInitialData } from "@/contexts/CountContext"
import { OnlineUSers } from "./OnlineUsers"

export const Header = () => {
    return (
        <header>
            <h1 className="text-3xl">Título da Página</h1>
            <OnlineUSers />
        </header>
    )
}