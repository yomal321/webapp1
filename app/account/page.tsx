import React from 'react'
import Loginpage from '@/components/Loginpage';
import Navbar from '@/components/Navbar';
import AccountCreate from '@/components/AccountCreate';

function page() {
  return (
      <div>
       <Navbar/>
       <Loginpage/>
       <AccountCreate/>
      </div>
  );
};


export default page
