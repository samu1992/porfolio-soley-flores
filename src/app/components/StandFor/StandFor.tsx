'use client'
import { standFor } from "@/assets/constants/constants"
import point from '../../../assets/images/Vector.svg'
import Image from "next/image"
import { Fraunces } from "next/font/google"

const fraunces = Fraunces({
    subsets: ['latin'],
    display: 'swap',
    style: 'italic'
})



export default function StandFor() {
    return (
        <article className="flex justify-center items-center flex-col relative py-20 px-20 gap-20 bg-[#E9FC88]">
            <div className="relative z-30 w-full flex items-center flex-row justify-center gap-4">
                <Image alt="point" src={point} />
                <p>What I stan for</p>
            </div>
            <section className="flex  xl:w-[50%] flex-col content-start gap-[80px]">
                {standFor.map(({ title, subtitle, description }, index) => {
                    return (
                        <div key={index} className="flex  justify-between items-end flex-row relative z-30 overflow-hidden">
                            <section className="z-40 gap-5 flex justify-between items-end flex-col">
                                <h3 className="text-start font-bold w-full text-xl xl:text-[40px] text-[#000]">{title}</h3>
                                <h5 className={`${fraunces.className} text-start font-light w-full text-[#000] text-xl xl:text-4xl`}>{subtitle}</h5>
                            </section>
                            <div className=" flex h-full">
                                <p className="text-start w-[350px] text-[#000] text-[14px]">{description}</p>
                            </div>
                        </div>
                    )
                })}
            </section>
        </article>
    )
}