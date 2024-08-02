import Image from "next/image";
import Header from "@/components/Header";
import NavBar from "@/components/Navbar";
import ShoppingContent from "@/components/ShoppingContent";
import Itemselling from "@/components/Itemselling";
import WinterCollection from "@/components/WinterCollection";
import Countdown from "@/components/Countdown";
import BlogFashion from "@/components/BlogFashion";
import PhotoBar from "@/components/PhotoBar";
import OutfitMange1 from "@/components/OutfitMange1";
import Outfitmange2 from "@/components/OutfitMange2"; 
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main>
      <NavBar />
      <Header />
      <ShoppingContent />
      <Itemselling />
      <WinterCollection />
      <Countdown />
      <BlogFashion />
      <PhotoBar />
      <OutfitMange1 />
      <Outfitmange2 />
      <Footer />
    </main>
  );
}
