import { usePosts } from "@/contexts/PostContext"

export const PostList = () => {
    const PostCtx = usePosts();

    const handleRemovePost = (id: number) => {
        PostCtx?.dispatch({ type: 'remove',payload: { id } });
    }

    return (
        <div>
            {PostCtx?.posts.map(item => (
                <div key={item.id} className="p-3 border-b border-gray-500">
                    <div className="text-xl font-bold mb-2">{item.title}</div>
                    <div className="text-sm">{item.body}</div>
                    <button onClick={() => handleRemovePost(item.id)}>[ remove ]</button>
                </div>
            ))}
        </div>
    );
}