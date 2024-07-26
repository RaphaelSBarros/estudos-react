import { CountContext } from "@/contexts/CountContext"
import { useContext } from "react"

export const OnlineUSers = () => {
    const countCtx = useContext(CountContext)

    const handleBanAll = () => {
        countCtx?.setOnlineCount(0)
    }

    return (
        <>
        <p>Online: {countCtx?.onlineCount}</p>
        <button onClick={handleBanAll}>Banir Todo Mundo</button>
        </>
    )
}