"use client"

import { api } from "@/utils/api";

const Page = () => {
  const handleAddPosts = async () => {
    const response = await api.post('/posts',{
      userId: 98,
      title: 'Título do post',
      body: 'Body do post'
    });
    
    console.log(response)
  }

  return (
      <div className="container mx-auto">
        <button onClick={handleAddPosts}>Inserir Posts</button>
      </div>
  );
}

export default Page;