import Footer from "@/layout/footer";
import NavBar from "@/layout/navbar";

export default function Index() {
  return (
    <>
      <NavBar />
      <div className="h-screen flex justify-center items-center">
        <p>Mes commandes</p>
      </div>
      <Footer />
    </>
  );
}
