/* eslint-disable react/no-unescaped-entities */
'use client'
import { Svg } from "@/components"
import { Fraunces } from "next/font/google"

const fraunces = Fraunces({
    subsets: ['latin'],
    display: 'swap',
    style: 'italic'
})
export default function BannerAbout() {
    return (
        <>
            <div className="flex   h-48 lg:h-56 py-5 px-8 md:px-24 lg:px-[250px] xl:h-96 justify-center items-center">
                <h2 className="text-start  text-md md:text-2xl lg:text-3xl xl:text-7xl">I'M A UI/UX &GRAPHIC
                    <span className={`${fraunces.className}`}> designer </span >
                    BASED <span className={`${fraunces.className}`}> in </span>
                    BUENOS AIRES, ARGENTINA.</h2>
            </div>
        </>
    )
}