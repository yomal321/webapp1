import React from 'react'
import Image from "next/image";
import OutfitMange1 from "@/components/OutfitMange1";
import Outfitmange2 from "@/components/OutfitMange2";
import Footer from "@/components/Footer";
import Navbar from '@/components/Navbar';


function page() {
  return (
    <div>
      <Navbar/>
      <Outfitmange2 />
      <Footer />
    </div>
  );
}

export default page
