import React from 'react'
import Navbar from '@/components/Navbar'
import Herocontainer from "@/components/Herocontainer";
import ShoppingContent from "@/components/ShoppingContent";

function page() {
  return (
    <div>
      <Navbar />
      <Herocontainer />
      <ShoppingContent/>
    </div>
  );
}

export default page
