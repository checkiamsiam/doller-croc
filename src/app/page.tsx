import Footer from "@/components/Footer/Footer";
import Banner from "@/components/Home/Banner";
import Questions from "@/components/Home/Questions";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <div className="relative">
      <NavBar />
      <Banner />
      <Questions />
      <Footer />
    </div>
  );
}
