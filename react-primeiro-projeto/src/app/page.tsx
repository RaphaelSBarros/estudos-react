import { Card } from "@/components/Card";

const Page = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá Mundo</h1>
      <h3>Algum outro texto</h3>
      
      <Card
        phrase="Frase legal"
      />
    </div>
  );
}

export default Page;