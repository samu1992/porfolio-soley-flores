'use client'
import { Svg } from "@/components"
export default function BannerDescription() {
    return (
        <>
            <section className="flex items-center justify-start w-full px-6 xl:px-24 mt-28 mb-12 relative flex-col z-40 h-2/4 2xl:px-40">
                <h1 className="text-5xl text-stone-800 font-black w-full text-left  md:text-7xl">UI/UX &GRAPHIC</h1>
                <div className="flex items-center justify-start flex-row w-full gap-5">
                    <h1 className="text-5xl md:text-7xl text-stone-800"><strong>DESIGNER</strong></h1>
                    <Svg />
                </div>
            </section>
        </>
    )
}