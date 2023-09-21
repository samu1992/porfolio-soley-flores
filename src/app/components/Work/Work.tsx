import { dataProject } from "@/assets/constants/constants"
import Image from "next/image"
import Link from "next/link"
import svgButton from '../../../assets/images/Work/cursor-arrow-rays.svg'
import { Fraunces } from "next/font/google"

const fraunces = Fraunces({
    subsets: ['latin'],
    display: 'swap',
    style: 'italic'
  })



export default function Work() {
    return (
        <main className="work flex flex-col justify-center items-center p-40 relative w-full gap-36">
            <div className="filter absolute w-full h-full z-10"/>
            {dataProject.map(({ img, linkWeb, title, span, tags, subTitle, description }, index) => {
                const classNa = index === 1 || index === 3 ? 'flex-row-reverse' : 'flex-row';
                return (
                    <section key={index} className={`${classNa} flex justify-between items-start relative z-20 w-full gap-5`}>
                        <article className="relative">
                            <Image className="object-cover rounded-3xl max-w-md" alt="picture project" src={img} />
                            <button className="link-work absolute left-7 bottom-7 flex flex-row justify-center items-center py-2 px-5">
                                <Link href={linkWeb} className=" text-white">See Project</Link>
                                <Image src={svgButton} alt="icon button" />
                            </button>
                        </article>
                        <article className="flex items-start flex-col justify-start gap-10">
                            <div >
                                <h3 className="text-4xl uppercase">{title} <span className={`${fraunces.className} lowercase`}>{span}</span></h3>
                                <section className="flex flex-row items-center justify-center gap-6">
                                    {tags.map(({ text, link }, index) =>
                                        <div className="border-black border-3xl"  key={index}><Link href={link}>{text}</Link></div>
                                    )}
                                </section>
                            </div>
                            <div>
                                <h4>{subTitle}</h4>
                                <p className="max-w-md">{description}</p>
                            </div>
                        </article>
                    </section>
                )
            })}
        </main>
    )
}