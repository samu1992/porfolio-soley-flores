'use client'
import { dataProject } from "@/assets/constants/constants"
import Image from "next/image"
import Link from "next/link"
import svgButton from '../../../assets/images/Work/cursor-arrow-rays.svg'
import point from '../../../assets/images/Vector.svg'
import { Space_Grotesk } from "next/font/google"
import { useState } from "react"

const myFont = Space_Grotesk({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "300", "400", "500", "600", "700"]
})

export default function Work() {
    const [hoverImg, setHoverImg] = useState(Array(dataProject.length).fill(false))

    const handleMouseEnter = (index: number) => {
        const newHoverImg = [...hoverImg]
        newHoverImg[index] = true
        setHoverImg(newHoverImg)
    }

    const handleMouseLeave = (index: number) => {
        const newHoverImg = [...hoverImg]
        newHoverImg[index] = false
        setHoverImg(newHoverImg)
    }

    return (
        <main id="work" className="work flex flex-col justify-center items-center py-40 px-6 xl:px-24 relative w-full gap-44 2xl:px-40">
            <div className="filter1 absolute w-full h-full z-10" />
            <article className="relative z-30 w-full flex items-center flex-row justify-center gap-4 mt-9">
                <Image alt="point" src={point} />
                <p>Projects</p>
            </article>
            <section className="flex gap-4 gap-y-14 items-center justify-start flex-row flex-wrap">
                {dataProject.map(({ img, vector, vector1, linkWeb, title, span, tags, subTitle, description }, index) => {
                    return (
                        <Link key={index} href={linkWeb} target="_blank">
                            <div className="flex flex-col relative z-20"
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={() => handleMouseLeave(index)}>
                                <div className="overflow-hidden rounded-[15px]">
                                    <Image className={`object-cover w-96 md:w-auto 2xl:w-96 ${hoverImg[index] ? 'transition-transform duration-300 ease-in-out transform scale-110' : ''}`} alt="picture project" src={img} />
                                </div>
                                <h3 className={`${myFont.className} text-[32px] font-normal text-[#202124]`}>{title}</h3>
                                <section className="flex flex-row gap-3">
                                    {tags.map(({ text }, i) =>
                                        <div className="details flex justify-center items-center rounded-[100px] min-w-[60px] px-2" key={i}>
                                            <p className="font-normal text-xs text-center p-3 text-[#202124]">
                                                {text}
                                            </p>
                                        </div>
                                    )}
                                </section>
                            </div>
                        </Link>
                    )
                })}
            </section>
        </main>
    )
}
