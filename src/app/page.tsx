import Footer from "@/components/Footer/Footer";
import About from "@/components/Home/About";
import Banner from "@/components/Home/Banner";
import PartnerAndBuy from "@/components/Home/PartnerAndBuy";
import Questions from "@/components/Home/Questions";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <div className="relative">
      <NavBar />
      <Banner />
      <About />
      <PartnerAndBuy />
      <Questions />
      <Footer />
    </div>
  );
}
