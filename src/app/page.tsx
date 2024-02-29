import Navbar from "@/layout/navbar";
import Footer from "@/layout/footer";
import Image from "next/image";
import Hero from "@/components/hero";

import HomePic from "p/img/home.jpg";
import fight from "p/img/fight.png";
import home2 from "p/img/fight2.jpeg";
import fight2 from "p/img/second.jpg";
import fight3 from "p/img/third.jpg";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-col justify-center w-4/5 py-10">
        <h1 className="text-4xl font-bold text-center">Welcome to Uber Bagare</h1>
        <p className="text-xl mt-4"> Bienvenue sur Uber Bagarre ! Louez des sportifs de haut de niveau pour des combats intenses et violents. 
        Dominez l&apos;arène avec puissance et style. Vous n&apos;aurez plus jamais de probleme du a l&apos;harcelement parce que vous avez la flemme de 
        soulevez des charges a la salle , Contactez Nous et on Bagarre </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
         <Image className="flex-col rounded-md" src={HomePic} alt="home" width={1100} height={300} />
         <a href="/products" className="mt-10">
            <div className="h-[50px] min-w-52 px-8 flex rounded-xl items-center text-white bg-black "> 
              <p>Decouvrez nos Combatants</p>
            </div>
          </a>
        </div>
        <p className="text-2xl text-center font-bold p-5 mt-10"> Decouvrer nos combattants les plus populaires</p>

        <div className="flex flex-row gap-x-8 w-4/5 p-10 mb-8">

        <div className="h-[250px] w-[300px] bg-gray-300 flex flex-col justify-center items-center rounded-2xl p-6">
                <Image className="rounded-xl" src={fight} alt="home" width={300} height={800} />
                
                <div className='flex text-white bg-black h-[40px] w-[100px] rounded-xl p-3 m-2 justify-center items-center'>
                    <p>Fighter 1</p>
                </div>
        </div>

        <div className="h-[250px] w-[300px] bg-gray-300 flex flex-col justify-center items-center rounded-2xl p-6">
                <Image className="rounded-xl" src={fight} alt="home" width={300} height={800} />
                
                <div className='flex text-white bg-black h-[40px] w-[100px] rounded-xl p-3 m-2 justify-center items-center'>
                    <p>Fighter 1</p>
                </div>
        </div>

        <div className="h-[250px] w-[300px] bg-gray-300 flex flex-col justify-center items-center rounded-2xl p-6">
                <Image className="rounded-xl" src={fight} alt="home" width={300} height={800} />
                
                <div className='flex text-white bg-black h-[40px] w-[100px] rounded-xl p-3 m-2 justify-center items-center'>
                    <p>Fighter 1</p>
                </div>
        </div>

        <div className="h-[250px] w-[300px] bg-gray-300 flex flex-col justify-center items-center rounded-2xl p-6">
                <Image className="rounded-xl" src={fight} alt="home" width={300} height={800} />
                
                <div className='flex text-white bg-black h-[40px] w-[100px] rounded-xl p-3 m-2 justify-center items-center'>
                    <p>Fighter 1</p>
                </div>
        </div>

        <div className="h-[250px] w-[300px] bg-gray-300 flex flex-col justify-center items-center rounded-2xl p-6">
                <Image className="rounded-xl" src={fight} alt="home" width={300} height={800} />
                
                <div className='flex text-white bg-black h-[40px] w-[100px] rounded-xl p-3 m-2 justify-center items-center'>
                    <p>Fighter 1</p>
                </div>
        </div>


        </div>
        
      </div>
      <Footer />
    </main>
  );
}
