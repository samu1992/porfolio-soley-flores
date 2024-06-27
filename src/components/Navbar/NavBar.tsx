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
                <section className="flex flex-row items-center justify-center gap-6">
                    <Link href='./' className="flex flex-row items-center justify-center gap-2">
                        <Image alt="Personalice Logo" src={logo} />
                        <h2 className=" font-semibold">SOLEY FLORES</h2>
                    </Link>
                    <h2 className="font-light">UX/UI DESIGNER</h2>
                </section>
                <section className="hidden items-center justify-center flex-row flex-gap sm:flex">
                    <ul className='flex items-center justify-center flex-row flex-gap text-stone-800'>
                        {routes.map(({ route, name }) => {
                            const isActive = pathname === route;
                            return (
                                <li key={name} className="text-stone-800 font-normal">
                                    <Link  className={isActive ? 'underline underline-offset-8  text-[18px] font-normal' : ' text-slate-800 cursor-pointer font-normal'} href={route}>{name}</Link>
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