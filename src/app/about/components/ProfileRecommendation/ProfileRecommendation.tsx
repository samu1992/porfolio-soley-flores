import { Manrope } from "next/font/google"
import vector from '../../../../assets/images/Fun waving 1.svg'
import Image from "next/image"

const myFont = Manrope({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "300"]
})



export default function ProfileRecommendation() {
    return (
        <>
            <section className="flex flex-col  gap-12 w-full px-8 md:px-24 lg:px-36 xl:px-[250px] py-28 justify-center items-center border-b relative">
                <h2 className={`${myFont.className} md:leading-normal text-start text-base sm:text-xl md:text-3xl lg:text-[48px] text-[#2D2D2D] font-light`}>She is open to feedback and enjoys working in a collaborative environment.</h2>
                <h2 className={`${myFont.className} md:leading-normal text-start text-base sm:text-xl md:text-3xl lg:text-[48px] text-[#2D2D2D] font-light`}>Feel free to contact her. Thanks for coming over!</h2>
                <Image className="absolute right-52 vector-1 w-40 xl:w-48" alt="vector" src={vector} />
            </section>
        </>
    )
}