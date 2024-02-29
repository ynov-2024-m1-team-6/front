
import next from "next";
import Image from "next/image";

function NavBar() {
  return (
    <div className="h-[100px] px-3 border-b-2 border-bottom border-black flex justify-between items-center text-black px-8 ">
      <div className="flex gap-8 p-4">
        <a href="/store">Store</a>
        <a href="/contact">Contact</a>
      </div>
      <h1 className="flex-1 text-center text-3xl font-bold">Uber Bagare</h1>
      <div className="flex items-center gap-12">
        <div className="h-[50px] min-w-28 px-4 flex rounded-3xl bg-neutral-200 ">
          <button className="flex flex-row items-center gap-2">
            <Image src="/search.svg" alt="Icon 1" width={24} height={24} />
            <p className="text-[#0D0D0D]">Search</p>
          </button>
        </div>
        <div className="flex gap-8">         
          <Image src="/heart.svg" alt="Icon 3" width={24} height={24} />
          <Image src="/bag.svg" alt="Icon 2" width={24} height={24} />
          <div className="h-[50px] w-[50px] flex bg-slate-300 p-3 rounded-full">
            <Image src="/user.svg" alt="Icon 1" width={24} height={24} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
