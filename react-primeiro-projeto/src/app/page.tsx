"use client"

import axios from "axios";

const Page = () => {

  const handleGetPosts = async () => {
    const requestParams = {
      postId: 1,
      sort: 'desc'
    }

    const response = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=1',{
      params: requestParams
    });
    
    console.log(response.data)
  }
  
  return (
      <div className="container mx-auto">
        <button onClick={handleGetPosts}>Pegar Posts</button>
      </div>
  );
}

export default Page;