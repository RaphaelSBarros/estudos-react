"use client"

import axios from "axios";

const Page = () => {

  const handleAddPosts = async () => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts',{
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