import { Square, Circle } from '@/components/Shapes';

const Page = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá Mundo</h1>
      <h3>Algum outro texto</h3>
      
      <Square/>
      <Circle/>
    </div>
  );
}

export default Page;