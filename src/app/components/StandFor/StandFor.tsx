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
        <article className="flex justify-center items-center flex-col relative py-20 px-20 gap-20">
            <div className="relative z-30 w-full flex items-center flex-row justify-start gap-4">
                <Image alt="point" src={point} />
                <p>WHAT I STAND<span className={`${fraunces.className} lowercase`}>for</span></p>
            </div>
            <section className="flex flex-col items-center justify-center gap-6 md:flex-row">
                {standFor.map(({ title, subtitle, description, video }, index) => {
                    return (
                        <div key={index} className="flex justify-end items-start flex-col relative z-30 w-56 h-52 rounded-3xl overflow-hidden
                         md:w-60 md:h-56 xl:w-96 xl:h-80">
                            <section className="absolute z-10 w-full h-full">
                                <div className="filter" />
                                <video autoPlay loop muted id="video">
                                    <source src={video} type="video/mp4" />
                                </video>
                            </section>
                            <section className="z-40 p-10">
                                <h3 className="text-start w-full text-xl xl:text-4xl text-red-50">{title}</h3>
                                <h5 className={`${fraunces.className} text-start w-full text-red-50 text-xl xl:text-4xl`}>{subtitle}</h5>
                                {/* <p className="text-start w-full text-red-50 text-xs w-3/4">{description}</p> */}
                            </section>
                        </div>
                    )
                })}
            </section>
        </article>
    )
}