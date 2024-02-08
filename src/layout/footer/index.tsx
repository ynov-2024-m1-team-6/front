import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image
            src="/uberbaggare.svg"
            alt="Uber Bagare Logo"
            width={50}
            height={50}
          />
        </div>
        <div className="flex-1 text-center">
          <h2>Uber Bagare</h2>
          <p>La meilleure qualité de bagare pour tous vos besoins.</p>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://facebook.com" className="text-white">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" className="text-white">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" className="text-white">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="border-t border-gray-600 my-3 mr-1 ml-2"></div>
      <div className="text-center">
        <p>© 2024 Uber Bagare</p>
      </div>
    </footer>
  );
}

export default Footer;
