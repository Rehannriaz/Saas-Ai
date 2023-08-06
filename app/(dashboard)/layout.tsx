import {UserButton} from '@clerk/nextjs'
import React from 'react';
import NavBar from '@/components/navbar'
export default function DashboardLayout({
    children
}: {children: React.ReactNode;}) {
  return (
    <>
     <div className="h-full relative">
        <div className='hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900'>
            Hello SideBar
        </div>
        <main className='md:pl-72'> Hello Content
        <NavBar/> 
        {children}
        </main>
     </div>
    </>
  );
}
