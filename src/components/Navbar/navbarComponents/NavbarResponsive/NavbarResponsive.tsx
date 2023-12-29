'use client'
import { routes } from "@/assets"
import Link from "next/link"
import { useState } from "react"
import LetsTalk from "@/components/let'sTalk/let'sTalk"

const NavbarResponsive = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };
    return (
        <>
            <button className='absolute right-8 flex items-center justify-center flex-col gap-2 sm:hidden' onClick={() => setMenuOpen(!menuOpen)}>
                <div className='h-1 bg-zinc-800	rounded-lg w-8'></div>
                <div className='h-1 bg-zinc-800	rounded-lg w-8'></div>
                <div className='h-1 bg-zinc-800	rounded-lg w-8'></div>
            </button>
            <nav className={`navbar--Responsive ${menuOpen ? 'navbar--Open' : 'navbar--Closed'}`}>
                <section className="flex items-center justify-center">
                    <ul className='flex items-center justify-center flex-col flex-gap text-stone-800 mb-6'>
                        {routes.map(({ route, name }) => {
                            return (
                                <li key={name} className="text-stone-800 text-xs cursor-pointer">
                                    <Link onClick={handleLinkClick} href={route}>{name}</Link>
                                </li>
                            )
                        }
                        )}
                    </ul>
                </section>
                <LetsTalk />
            </nav> 
        </> 
    ) 
}

export default NavbarResponsive