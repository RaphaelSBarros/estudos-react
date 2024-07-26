import { usePosts } from "@/contexts/PostContext"

export const Footer = () => {
    const PostCtx = usePosts();

    return (
        <footer>
            Total de posts: {PostCtx?.posts.length}
        </footer>
    );
}