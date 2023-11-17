'use client';
import User from "./(components)/User";
import {signIn} from 'next-auth/react';




const mainDiv="w-full min-h-screen flex justify-center items-center flex-col";
const buttonClass="px-6 py-3 bg-red-500 rounded text-white";

export default function Home() {
  
  return (
   <>
    <div className={mainDiv}>
      <div className="w-1/2 mx-auto">
       <button onClick={signIn} className={buttonClass}>Login</button>
      </div>
      <User/>
    </div>
    
   </>
  )
}
