'use client'
import { Svg } from "@/components"
export default function BannerDescription() {
    return (
        <>
            <section className="flex items-center justify-start w-full p-40 relative flex-col z-50 h-2/4">
                <h1 className="text-8xl text-stone-800 font-black w-full text-left">UI/UX &GRAPHIC</h1>
                <div className="flex items-center justify-start flex-row w-full gap-5">
                    <h1 className="text-8xl text-stone-800"><strong>DESIGNER</strong></h1>
                    <Svg />
                </div>
            </section>
        </>
    )
}