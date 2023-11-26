"use client"

import { useState } from "react";

const Page = () => {

  const [count, setCount] = useState(0);

  const handleBtnClick = () => {
    setCount(count +2);
    setCount(c => c + 2);
    setCount(c => c + 2);
  }
  
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <p>{count}</p>
      <button onClick={handleBtnClick} className="bg-blue-700 text-white p-3 rounded-md">+6</button>
    </div>
  );
}

export default Page;