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
            <div className="flex flex-col w-full h-48 lg:h-56 py-5 px-8 md:px-24 lg:px-36 xl:px-11 xl:h-96 justify-center">
                <section>
                    <h2 className="text-start text-md md:text-2xl lg:text-3xl xl:text-7xl w-full">SOLEY</h2>
                </section>
                <section className="flex flex-row justify-start items-start">
                    <h2 className="text-start text-md md:text-2xl lg:text-3xl xl:text-7xl mr-2"><strong>FLORES</strong></h2>
                    <Svg />
                </section>
                <section>
                    <h2 className="text-start text-md md:text-2xl lg:text-3xl xl:text-7xl">UI/UX &GRAPHIC <span className={`${fraunces.className}`}>designer</span > BASED <span className={`${fraunces.className}`}>in</span> BUENOS AIRES, ARGENTINA.</h2>
                </section>
            </div>
        </>
    )
}