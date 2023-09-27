import { Fraunces } from "next/font/google"
import vector from '../../../../assets/images/Fun waving 1.svg'
import Image from "next/image"
const fraunces = Fraunces({
    subsets: ['latin'],
    display: 'swap',
    style: 'italic'
})


export default function ProfileRecommendation(){
    return(
        <>
        <section className="flex flex-col gap-12 w-full p-40 justify-center items-center border-b relative">
            <h2 className="text-start text-6xl text-gray-800">She is open to <span className={`${fraunces.className}`}>feedback</span> and enjoys working <span className={`${fraunces.className}`}>in</span> a collaborative environment.</h2>
            <h2 className="text-start text-6xl text-gray-800">Feel free <span className={`${fraunces.className}`}>to</span> contact her. <span className={`${fraunces.className}`}>Thanks</span> for coming over!</h2>
                <Image className="absolute right-52 vector-1" alt="vector" src={vector}/>
        </section>
        </>
    )
}