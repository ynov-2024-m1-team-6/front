import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="h-[350px] bg-black text-white p-8 px-16">
      <div className="h-4/5 flex justify-between items-center">
        <div className="h-full ml-25px flex items-center gap-4">
          <Image
            src="/uberbaggare.svg"
            alt="Uber Bagare Logo"
            width={300}
            height={200}
          />
        </div>
        <div className="flex-1 text-center">
          <h2>Uber Bagare</h2>
          <p>La meilleure qualité de bagare pour tous vos besoins.</p>
        </div>
        <div className="h-full w-[300px] flex flex-col gap-4 justify-start py-12">
          <div  className="flex ">
            <p className="font-bold text-3xl">Reseaux</p>
          </div>
          <div className="flex flex-row gap-8 mt-4">
            <a href="https://facebook.com" className="text-white">
              <FaFacebookF size={30} />
            </a>
            <a href="https://twitter.com" className="text-white">
              <FaTwitter size={30} />
            </a>
            <a href="https://instagram.com" className="text-white">
              <FaInstagram  size={30} />
            </a>
            <a href="https://youtube.com" className="text-white">
              <FaYoutube size={30} />
            </a>
            <a href="https://linkedin.com" className="text-white">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-600 my-3 mr-1 ml-2"></div>
      <div className="h-1/5 text-center">
        <p>© 2024 Uber Bagare</p>
      </div>
    </footer>
  );
}

export default Footer;
