import Card from "@/components/card";
import Footer from "@/layout/footer";
import NavBar from "@/layout/navbar";

export default function Index() {
  const product = {
    id: 1,
    description:
      "Daghestanais d'origine, je me suis entrainé avec Khabib Nurmagomedov.",
    price: 299.99,
    username: "EnormeZboubDu92",
    height: 185,
    weight: 105,
    ratio: "10-0",
    thumbnail:
      "https://images.unsplash.com/photo-1491756975177-a13d74ed1e2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZpZ2h0ZXJ8ZW58MHx8MHx8fDA%3D",
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen flex justify-center my-10 gap-10">
        <Card product={product} />
        <div>
          <span className="flex items-center">
            <i className="w-2 h-2 bg-green-600 rounded-full mr-2"></i>
            Disponible
          </span>
          <p>{product.description}</p>
          <p>Taille: {product.height}cm</p>
          <p>Poids: {product.weight}kg</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
