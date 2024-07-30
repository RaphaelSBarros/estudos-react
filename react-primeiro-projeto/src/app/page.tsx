"use client"

import { User } from "@/types/User";
import { useEffect, useState } from "react";

const Page = () => {
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
        console.log("FINALIZOU TUDO")
      })
  }, []);

  return (
      <div className="container mx-auto">
        <h1 className="text-3xl">Lista de Usuários</h1>
        {users.length <= 0 && "Carregando..."}
        {users.length > 0 &&
          <ul>
            {users.map(item => (
              <li key={item.id}>{item.name} ({item.email})</li>
            ))}
          </ul>
        } 
      </div>
  );
}

export default Page;