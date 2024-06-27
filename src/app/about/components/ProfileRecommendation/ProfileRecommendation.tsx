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
            <section className="flex flex-col gap-12 w-full px-8 md:px-24 lg:px-36 xl:px-[250px] py-28 justify-center items-center border-b relative">
                <div className="absolute right-40 top-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="468" height="468" viewBox="0 0 468 468" fill="none">
                        <g filter="url(#filter0_f_746_501)">
                            <circle cx="234" cy="234" r="74" fill="#E9FC88" />
                        </g>
                        <defs>
                            <filter id="filter0_f_746_501" x="0" y="0" width="468" height="468" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="80" result="effect1_foregroundBlur_746_501" />
                            </filter>
                        </defs>
                    </svg>
                </div>
                <h2 className={`${myFont.className} md:leading-normal text-start text-base sm:text-xl md:text-3xl lg:text-[48px] text-[#2D2D2D] font-light`}>I’m open to feedback and enjoy working in a collaborative environment.</h2>
                <h2 className={`${myFont.className} md:leading-normal text-start text-base sm:text-xl md:text-3xl lg:text-[48px] text-[#2D2D2D] font-light`}>Feel free to contact me. Thanks for coming over!</h2>
                <Image className="absolute right-52 vector-1 w-40 xl:w-48" alt="vector" src={vector} />
            </section>
        </>
    )
}