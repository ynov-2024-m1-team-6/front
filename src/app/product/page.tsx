import Image from "next/image";

interface Product {
  description: string; // Daghestanais d'origine, je me suis entrainé avec Khabib Nurmagomedov.
  price: number; // 299.99
  username: string; // EnormeZboubDu92
  height: number; // 185
  weight: number; // 105
  ratio: string; // '10-0'
}

export default function Index() {
  const products = [...Array(12)];

  return (
    <div className="min-h-screen flex justify-center">
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {products.map((_, index) => {
          return (
            <div
              key={index}
              className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            >
              <a href="#">
                <Image
                  src="https://images.unsplash.com/photo-1491756975177-a13d74ed1e2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZpZ2h0ZXJ8ZW58MHx8MHx8fDA%3D"
                  alt="Product"
                  className="h-80 w-72 object-cover rounded-t-xl"
                  width={320}
                  height={300}
                  priority
                />
                <div className="px-4 py-3 w-72">
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    EnormeZboubDu92
                  </p>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    10-0
                  </p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      299.99€
                    </p>
                    <div className="ml-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-bag-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </section>
    </div>
  );
}
