/* eslint-disable react/no-unescaped-entities */
'use client'
import Image from "next/image"
import logo from "../../assets/images/Youdidit.svg"
import cursorLogo from '../../assets/images/cursor-arrow-rays.svg'
import { networks } from "@/assets"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center gap-12 p-36">
            <picture>
                <Image src={logo} alt="logo footer" />
            </picture>
            <section className="flex flex-col items-center justify-center gap-10">
                <h2 className="font-bold text-2xl">Wondering if we're a match? Reach Out!</h2>
                <button className="link-footer flex flex-row items-center justify-center gap-4 py-2 px-6 text-lg">
                    soleyflores.ar@gmail.com
                    <Image src={cursorLogo} alt="cursor logo"/>
                </button>
                <div className="flex flex-row items-center justify-center gap-10">
                {networks.map(({logo, route},index)=>{
                    return(
                        <Link target="_blank" key={index} href={route}>
                        <Image alt="logo" src={logo} />
                        </Link>
                    )
                })}
                </div>
            </section>
        </footer>
    )
}