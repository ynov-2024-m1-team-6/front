"use client";

import Footer from "@/layout/footer";
import NavBar from "@/layout/navbar";
import { useParams } from "next/navigation";

export default function Index() {
  const params = useParams();

  return (
    <>
      <NavBar />
      <div className="h-screen flex justify-center items-center">
        <p>Ma commande {params.id}</p>
      </div>
      <Footer />
    </>
  );
}
