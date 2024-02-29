import Navbar from "@/layout/navbar";
import Footer from "@/layout/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex min-h-screen flex-col items-center justify-between p-24"></div>
      <Footer />
    </main>
  );
}
