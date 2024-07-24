"use client"

import { useEffect, useState } from "react";

const Page = () => {
  const [name, setName] = useState('Raphael');
  const [age, setAge] = useState(90);

  useEffect(() => {
    console.log('RODOU O EFFECT...')
  }, [age])

  return (
    <div className="">
      <p>Meu nome é {name} e eu tenho {age} anos.</p>
      <hr />
      <button className="border border-blue-400 m-3 p-3" onClick={() => setName('Pedro')}>Mudar nome para Pedro</button>
      <button className="border border-blue-400 m-3 p-3" onClick={() => setName('João')}>Mudar nome para João</button>
      <button className="border border-blue-400 m-3 p-3" onClick={() => setAge(30)}>Mudar idade para 30</button>
      <button className="border border-blue-400 m-3 p-3" onClick={() => setAge(70)}>Mudar idade para 70</button>
    </div>
  );
}

export default Page;