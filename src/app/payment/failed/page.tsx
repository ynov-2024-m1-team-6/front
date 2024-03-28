import Footer from "@/layout/footer";
import NavBar from "@/layout/navbar";

export default function Index() {
  return (
    <>
      <NavBar />
      <div className="h-screen flex justify-center items-center">
        <p>
          Une erreur s&apos;est produite, veuillez réessayer dans un instant
        </p>
      </div>
      <Footer />
    </>
  );
}
