'use client'
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from 'react'
import logo from "../../assets/images/Logo.svg"
import { Route } from "@/app/models"
import { routes } from "@/assets/constants/constants"
import { usePathname } from 'next/navigation'
import NavbarResponsive from "@/components/Navbar/navbarComponents/NavbarResponsive/NavbarResponsive"
import LetsTalk from "../let'sTalk/let'sTalk"


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
            <nav className={`${navbarActive} w-full h-10 flex  items-center justify-between py-8 sticky top-0 z-50 px-6 sm:px-8`}>
                <section>
                    <Link href='./'>
                        <Image alt="Personalice Logo" src={logo} />
                    </Link>
                </section>
                <section className="hidden items-center justify-center flex-row flex-gap sm:flex">
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
                    <LetsTalk />
                </section>
                <NavbarResponsive />
            </nav>
        </>
    )
}