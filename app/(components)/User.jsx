'use client';
import {signOut} from 'next-auth/react';

const buttonClass="px-6 py-3 bg-red-500 rounded text-white";

const User = () => {
  const signOutHandler = async()=>{
    await signOut({
      redirect:false
    });
    console.log("its logout");
  }

  return (
    <div>
      <h1>User is login</h1>
      <button onClick={signOutHandler} className={buttonClass}>Logout</button>

    </div>
  )
}

export default User;