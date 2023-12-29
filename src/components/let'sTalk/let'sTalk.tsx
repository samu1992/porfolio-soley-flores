import logoButton from '../../assets/images/sparkles.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Fraunces } from "next/font/google"


const fraunces = Fraunces({
    subsets: ['latin'],
    display: 'swap',
})

const LetsTalk = () => {
    return (
        <button className="flex items-center justify-center flex-row  backgound-button px-2.5 py-1 rounded-lg text-stone-800">
            <Image className="mr-1.5" width={14} height={14} alt="button logo" src={logoButton} />
            <Link target="_blank" href="https://www.linkedin.com/in/soleyflores/">LET’S TAL<span className={fraunces.className}>k</span></Link>
        </button>
    )
}

export default LetsTalk
