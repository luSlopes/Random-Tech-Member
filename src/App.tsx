import { useState } from "react";
import type { TechMember } from "./api/database";
import { generateRandomTechMember } from "./functions/generateRandomTechMember";
import "./index.css";
import { InfoCard } from "./cards/InfoCard";
import { PictureCard } from "./cards/PictureCard";
import FocusImg from "@assets/Focus-logo.png";

export function App() {
  const [techMember, setTechMember] = useState<TechMember | null>(null);

  const chooseTechMember = () => {
    //Lógica de geração, impedir que o membro gerado seja o mesmo do atual
    let generatedTechMember = null;

    do {
      generatedTechMember = generateRandomTechMember();
    } while (generatedTechMember === techMember);

    setTechMember(generatedTechMember);
  };

  return (
    <div className="bg-gray-200 w-screen h-screen layout">
      <header className="flex flex-col items-center bg-blue-500 rounded-[30px] w-[40%] shadows">
        <h1 className="text-4xl my-3">Random picker</h1>
        <h2 className="my-1 text-white text-lg">
          Clica no botão e escolha um mebro aleatório de tecnologia
        </h2>
        <img
          src={FocusImg}
          alt="Logo da Focus"
          className="absolute w-[100px] h-[100px] left-[70px] top-[70px] logo"
        />
      </header>
      <button
        type="button"
        className="bg-green-400 w-[200px] h-[40px] rounded-2xl hover:bg-green-500 cursor-pointer shadow-2xl"
        onClick={() => chooseTechMember()}
      >
        Gerar
      </button>
      <main className="flex gap-[100px] items-center">
        {techMember === null ? undefined : (
          <>
            <PictureCard
              pictureUrl={techMember.imgUrl}
              name={techMember.name}
            />
            <InfoCard
              name={techMember.name}
              onCompanySince={techMember.onCompanySince}
              role={techMember.role}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
