'use client'
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from 'react';
import logo from "../../assets/images/Logo.svg"
import { Route } from "@/app/models"
import { routes } from "@/assets/constants/constants"
import { usePathname } from 'next/navigation'
import logoButton from "../../assets/images/sparkles.svg"
import { Fraunces } from "next/font/google"

const fraunces = Fraunces({
    subsets: ['latin'],
    display: 'swap',
})

export default function Navbar() {
    const [navbarActive, setNavbarActive] = useState('')

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 50) {
                setNavbarActive('navbar--active');
            } else {
                setNavbarActive('');
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const pathname = usePathname() as Route;
    return (
        <>
            <nav className={`${navbarActive} w-full h-10 flex  items-center justify-between px-12 py-8 sticky top-0 z-50`}>
                <section>
                    <Link href='./'>
                        <Image alt="Personalice Logo" src={logo} />
                    </Link>
                </section>
                <section className="flex items-center justify-center flex-row flex-gap">
                    <ul className='flex items-center justify-center flex-row flex-gap text-stone-800'>
                        {routes.map(({ route, name }) => {
                            const isActive = pathname === route;
                            return (
                                <li key={name} className="text-stone-800">
                                    <Link className={isActive ? 'underline underline-offset-8 text-xs' : 'text-xs text-slate-800 cursor-pointer'} href={route}>{name}</Link>
                                </li>
                            )
                        }
                        )}
                    </ul>
                    <button className="flex items-center justify-center flex-row  backgound-button px-2.5 py-1 rounded-lg text-stone-800">
                        <Image className="mr-1.5" width={14} height={14} alt="button logo" src={logoButton} />
                        <Link target="_blank" href="https://www.linkedin.com/in/soleyflores/">LET’S TAL<span className={fraunces.className}>k</span></Link>
                    </button>
                </section>
            </nav>
        </>
    )
}