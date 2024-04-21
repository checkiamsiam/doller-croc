import Footer from "@/components/Footer/Footer";
import About from "@/components/Home/About";
import Banner from "@/components/Home/Banner";
import PartnerBuyNTokenomics from "@/components/Home/PartnerBuyNTokenomics";
import Questions from "@/components/Home/Questions";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <div className="relative">
      <NavBar />
      <Banner />
      <About />
      <PartnerBuyNTokenomics />
      <Questions />
      <Footer />
    </div>
  );
}
