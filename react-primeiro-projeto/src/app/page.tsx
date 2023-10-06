import { Person } from "@/components/Person";

const Page = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá Mundo</h1>
      <h3>Algum outro texto</h3>
      
      <Person
        name="Elon Musk"
        avatar="https://classic.exame.com/wp-content/uploads/2021/04/Elon-Musk.jpg"
        roles={['CEO da Tesla', 'CEO da SpaceX']}
      />
      <Person
        name="Jeff Bezos"
        avatar="https://classic.exame.com/wp-content/uploads/2021/09/GettyImages-1036099078-1.jpg?quality=70&strip=info&w=1024"
        roles={['CEO da Amazon', 'CEO da Blue Origin']}
      />
    </div>
  );
}

export default Page;