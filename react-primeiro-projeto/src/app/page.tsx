"use client"

import { useEffect } from "react";

const Page = () => {

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        console.log(json);
      })
  }, []);

  return (
      <div className="container mx-auto max-w-lg px-2">
        <h1>Lista de Usuários</h1>
      </div>
  );
}

export default Page;