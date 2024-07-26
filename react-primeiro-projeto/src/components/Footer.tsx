import { PostContext } from "@/contexts/PostContext"
import { useContext } from "react"

export const Footer = () => {
    const PostCtx = useContext(PostContext);

    return (
        <footer>
            Total de posts: {PostCtx?.posts.length}
        </footer>
    );
}