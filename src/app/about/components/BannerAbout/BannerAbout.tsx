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
            <div className="flex flex-col w-full px-40 py-48 h-96 justify-center iyems-center mb-">
                <section>
                    <h2 className="text-start text-7xl w-full">SOLEY</h2>
                </section>
                <section className="flex flex-row justify-start items-start">
                    <h2 className="text-start text-7xl mr-2"><strong>FLORES</strong></h2>
                    <Svg />
                </section>
                <section>
                    <h2 className="text-start text-7xl">UI/UX &GRAPHIC <span className={`${fraunces.className}`}>designer</span > BASED <span className={`${fraunces.className}`}>in</span> BUENOS AIRES, ARGENTINA.</h2>
                </section>
            </div>
        </>
    )
}