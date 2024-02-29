import React from 'react'
import Card from '../../../components/card'

function page() {
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
      const products = [
        product,
        product,
        product,
        product,
        product,
        product,
        product,
      ];
  return (
    <div className="min-h-screen flex justify-center">
    <section
      id="Projects"
      className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
    >
      {products.map((prod, index) => {
        return <Card key={index} product={prod} isInWishlist={false} />;
      })}
    </section>
  </div>
  )
}

export default page