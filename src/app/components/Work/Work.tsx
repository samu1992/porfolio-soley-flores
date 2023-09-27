import { dataProject } from "@/assets/constants/constants"
import Image from "next/image"
import Link from "next/link"
import svgButton from '../../../assets/images/Work/cursor-arrow-rays.svg'
import point from '../../../assets/images/Vector.svg'
import { Fraunces } from "next/font/google"

const fraunces = Fraunces({
    subsets: ['latin'],
    display: 'swap',
    style: 'italic'
})



export default function Work() {
    return (
        <main className="work flex flex-col justify-center items-center py-40 px-44 relative w-full gap-44">
            <div className="filter1 absolute w-full h-full z-10" />
            <article className="relative z-30 w-full flex items-center flex-row justify-start gap-4">
                <Image alt="point" src={point} />
                <p>WOR<span className={`${fraunces.className} lowercase`}>k</span></p>
            </article>
            {dataProject.map(({ img, vector, vector1, linkWeb, title, span, tags, subTitle, description }, index) => {
                const classNa = index === 1 || index === 3 ? 'flex-row-reverse' : 'flex-row';
                return (
                    <section key={index} className={`${classNa} flex justify-between items-start relative z-20 w-full gap-24`}>
                        <article className="relative">
                            {vector && <Image id="vector" alt="vector" src={vector} />}
                            {vector1 && <Image id="vector1" alt="vector" src={vector1} />}
                            <Image className="object-cover rounded-3xl max-w-md" alt="picture project" src={img} />
                            <button className="link-work absolute left-7 bottom-7 flex flex-row justify-center items-center py-2 px-5">
                                <Link href={linkWeb} className=" text-white">See Project</Link>
                                <Image src={svgButton} alt="icon button" />
                            </button>
                        </article>
                        <article className="flex items-start flex-col justify-start gap-10">
                            <div className="flex items-start flex-col justify-start gap-4">
                                <h3 className="text-4xl uppercase">{title} <span className={`${fraunces.className} lowercase`}>{span}</span></h3>
                                <section className="flex flex-row items-center justify-center gap-6">
                                    {tags.map(({ text, link }, index) =>
                                        <div className="details flex justify-center items-center" key={index}>
                                            <Link className="font-bold text-sm" href={link}>
                                                {text}
                                            </Link>
                                        </div>
                                    )}
                                </section>
                            </div>
                            <div>
                                <h4 className="text-slate-600 font-extrabold text-base mb-2.5">{subTitle}</h4>
                                <p className="max-w-md text-base font-normal">{description}</p>
                            </div>
                        </article>
                    </section>
                )
            })}
        </main>
    )
}