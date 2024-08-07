import React from 'react'
import ShoppingBag from '@/components/Shoppingcart'
import CreditCard from '@/components/CreditCard'
import Navbar from '@/components/Navbar'

function page() {
  return (
    <div>
       <Navbar/>
      <ShoppingBag/>
      <CreditCard/>
      
    </div>
  )
}

export default page
