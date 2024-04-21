import Footer from "@/components/Footer/Footer";
import Banner from "@/components/Home/Banner";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <div className="relative">
      <NavBar />
      <Banner />
      <Footer />
    </div>
  );
}
