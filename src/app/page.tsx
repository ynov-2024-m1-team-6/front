import Navbar from "@/layout/navbar";
import Footer from "@/layout/footer";
import Image from "next/image";

import Hero from "@/components/hero";
import ModalUser from "@/components/modalNavbar";

import HomePic from "p/img/home.jpg";
import fight from "p/img/fight.png";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero
            img={HomePic.src}
            title="Sauvetage avec Uber Bagarre"
            description="
            Bienvenue sur Uber Bagarre ! Louez des sportifs de haut de niveau
            pour des combats intenses et violents. Dominez l&apos;arène avec
            puissance et style. Vous n&apos;aurez plus jamais de probleme du a
            l&apos;harcelement parce que vous avez la flemme de soulevez des
            charges a la salle , Contactez Nous et on Bagarre"
            link="/product"
            link_text="Decouvrez nos Combatants"
        />
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-2xl text-center font-bold p-5 mt-10">
          {" "}
          Decouvrer nos combattants les plus populaires
        </p>

        <div className="flex flex-row gap-x-8 w-4/5 p-10 mb-8">
          
        </div>
      </div>
      <Footer />
    </main>
  );
}
