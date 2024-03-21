import Image from "next/image";
import imagem from "../../public/foto.png";
import ContactLinks from "../ui/contact-links";
import { useGlobalContext } from "../Context/store";


export default function Profile() {
  const nome = "Matheus Henrique Saldias Palacios Pietro Biasi";
  const profissao = "Fullstack Software Developer"; 
  const { theme } = useGlobalContext();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="mt-4 text-center">
        <Image src={imagem} alt="Foto" width={200} height={200} className="m-auto rounded-full"/>
        <h1 className="text-3xl font-bold mt-4">{nome}</h1>
        <p className="text-lg text-gray-600 mt-2">{profissao}</p>
        <ContactLinks/>
      </div>
    </div>
  );
}
