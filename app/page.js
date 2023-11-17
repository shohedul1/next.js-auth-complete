'use client';
import { useState } from "react";
import User from "./(components)/User";
import { signIn, useSession } from 'next-auth/react';




const mainDiv = "w-full min-h-screen flex justify-center items-center flex-col";
const buttonClass = "px-6 py-3 bg-red-500 rounded text-white mt-2";
const inputClass = "border bg-white text-black w-full py-3 px-5";

export default function Home() {
  const { data: session } = useSession();
  console.log({ session });

  const [email, setEmail] = useState('');

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signIn('credentials', {
        email: email,
        redirect: false,
        callbackUrl: '/'
      })
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <div className={mainDiv}>
        {/* <div className="w-1/2 mx-auto">
       <button onClick={signIn} className={buttonClass}>Login</button>
      </div> */}
        {/* {session?.user?.email && <User/>} */}

        <div className="w-1/2 mx-auto">
          <form onSubmit={handlerSubmit} className="mb-3 my-2">
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" className={inputClass} />
            <button type="submit" className={buttonClass}>Login</button>
          </form>
              {session?.user?.email && <User/>}
        </div>
      </div>


    </>
  )
}
