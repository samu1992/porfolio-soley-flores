'use client'
import { routes } from "@/assets"
import Link from "next/link"
import { useState } from "react"
import LetsTalk from "@/components/let'sTalk/let'sTalk"
import { FiMenu } from "react-icons/fi"


const NavbarResponsive = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };
    return (
        <>
            <FiMenu onClick={() => setMenuOpen(!menuOpen)} size='2em' className="absolute right-8 sm:hidden" />
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