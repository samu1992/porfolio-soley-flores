/* eslint-disable react/no-unescaped-entities */
'use client'
import Image from "next/image"
import logo from "../../assets/images/Youdidit.svg"
import cursorLogo from '../../assets/images/cursor-arrow-rays.svg'
import Link from "next/link"
import { IoLogoLinkedin } from "react-icons/io5";
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";




export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center gap-12 p-36">
            <picture>
                <Image className="min-w-64" src={logo} alt="logo footer" />
            </picture>
            <section className="flex flex-col items-center justify-center gap-10">
                <h2 className="font-bold text-md md:text-2xl">Wondering if we're a match? Reach Out!</h2>
                <Link className="link-footer flex flex-row items-center justify-center gap-4 py-2 px-6 text-lg" href='mailto:soleyflores.ar@gmail.com'>soleyflores.ar@gmail.com  <Image src={cursorLogo} alt="cursor logo" /></Link>
                <div className="flex flex-row items-center justify-center gap-10">
                    <Link target="_blank" href="https://www.linkedin.com/in/soleyflores/">
                        <IoLogoLinkedin size={50} className="icon"/>
                    </Link>
                    <Link target="_blank" href="https://www.behance.net/soleyflores">
                        <FaBehance size={50} className="icon"/>
                    </Link>
                    <Link target="_blank" href="https://www.instagram.com/baxs_20/">
                        <FaInstagram size={50} className="icon"/>
                    </Link>
                </div>
            </section>
        </footer>
    )
}