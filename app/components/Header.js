import React from 'react'
import Link from 'next/link'
import Image from 'next/image';


export default function Header(){
    return(
        <header>
            <nav className="bg-red-400" >
            <Link className='inline-flex items-center px-2 mr-4' href='/'>
                    <Image 
                    src='/assets/coologo.png'
                    width={50}
                    height={50}
                    alt="cookie logo"
                    >
                    </Image>
                    <span className='text-xl font-bold tracking-wide text-white'>Cookie Stand Admin</span>
                </Link>

            </nav>

        </header>

)
}