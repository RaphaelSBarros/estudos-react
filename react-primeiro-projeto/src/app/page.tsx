"use client"

import { User } from "@/types/User";
import { useEffect, useState } from "react";

const Page = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = async () => {
    setLoading(true)
    try{
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const json = await res.json()
      setUsers(json)
    } catch(err) {
      console.log('DEU ERRO')
    }
    setLoading(false)
  }

  useEffect(() => {
    getUsers()
  }, []);

  const handleAddNewPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; chatset=UTF-8'
      },
      body: JSON.stringify({
        title: 'Post de teste',
        body: 'Corpo de teste',
        userId: 99
      })
    });
    const json = await res.json();

    console.log(json);
  }

  return (
      <div className="container mx-auto">
        <button onClick={handleAddNewPost}>Adicionar novo Post</button>

        <h1 className="text-3xl">Lista de Usuários</h1>
        {loading && "Carregando..."}
        {!loading && users.length > 0 &&
          <ul>
            {users.map(item => (
              <li key={item.id}>{item.name} ({item.email})</li>
            ))}
          </ul>
        } 
        {!loading && users.length === 0 && "Não há usuários para exibir"}
      </div>
  );
}

export default Page;