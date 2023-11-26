"use client"

import { Person } from "@/types/Person";
import { useState } from "react";

const Page = () => {

  const [fullName, setFullName] = useState<Person>({ name: '', lastName: ''});

  const handleClearButton = () => {
    setFullName({ name: '', lastName: '' })
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <input
        type="text"
        placeholder="Nome"
        className="border border-black p-3 text-2xl text-black rounded-md mb-3" 
        value={fullName.name}
        onChange={e => setFullName({ ...fullName, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Sobrenome"
        className="border border-black p-3 text-2xl text-black rounded-md mb-3" 
        value={fullName.lastName}
        onChange={e => setFullName({ ...fullName, lastName: e.target.value})}
      />

      <p>Meu nome completo é:</p>
      <p>{fullName.name} {fullName.lastName}</p>

      <button onClick={handleClearButton} className="bg-blue-700 rounded-md p-3 mt-2">Limpar Tudo</button>
    </div>
  );
}

export default Page;