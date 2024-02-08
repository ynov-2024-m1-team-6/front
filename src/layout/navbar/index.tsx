import next from "next";
import Image from "next/image";

function NavBar() {
  return (
    <div className="p-3 border-b-2 border-bottom border-black flex justify-between items-center text-black ">
      <div className="flex gap-4 p-4">
        <a href="/store">Store</a>
        <a href="/contact">Contact</a>
      </div>
      <h1 className="flex-1 text-center">Uber Bagare</h1>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2">
          <Image src="/search.svg" alt="Icon 1" width={24} height={24} />
          <p className="text-[#0D0D0D]">Search</p>
        </button>
        <Image src="/user.svg" alt="Icon 1" width={24} height={24} />
        <Image src="/bag.svg" alt="Icon 2" width={24} height={24} />
        <Image src="/heart.svg" alt="Icon 3" width={24} height={24} />
      </div>
    </div>
  );
}

export default NavBar;
