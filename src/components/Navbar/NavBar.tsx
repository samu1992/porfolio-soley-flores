'use client'
import Image from "next/image"
import Link from "next/link"
import logo from "../../assets/images/Logo.svg"
import { Route } from "@/app/models/route.module"
import { routes } from "@/assets/constants/constants"
import { usePathname } from 'next/navigation'
import logoButton from "../../assets/images/sparkles.svg"
import { Fraunces } from "next/font/google"

const fraunces = Fraunces({
    subsets: ['latin'],
    display: 'swap',
  })

export default function Navbar() {
    const pathname = usePathname();
    return (
        <>
            <nav className='w-full h-10 flex  items-center justify-between p-12 mb-26 sm-px-4 xl:p-8 xl:mt-4 fixed top-0 z-40'>
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
                                    <Link className={isActive ? 'underline underline-offset-8 text-xs' : 'text-xs text-slate-800'} href={route}>{name}</Link>
                                </li>
                            )
                        }
                        )}
                    </ul>
                    <button className="flex items-center justify-center flex-row  backgound-button px-2.5 py-1 rounded-lg text-stone-800">
                        <Image className="mr-1.5" width={14} height={14} alt="button logo" src={logoButton} />
                        LET’S TAL<span className={fraunces.className}>k</span>
                    </button>
                </section>
            </nav>
        </>
    )
}