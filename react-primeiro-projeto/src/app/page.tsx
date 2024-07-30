"use client"

import { User } from "@/types/User";
import { useEffect, useState } from "react";

const Page = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        setUsers(json);
      })
      .catch(() => {
        console.log("DEU ALGUM ERRO")
      })
      .finally(() => {
        setLoading(false)
      })
  }, []);

  return (
      <div className="container mx-auto">
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