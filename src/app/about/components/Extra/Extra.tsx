import point from '../../../../assets/images/Vector (1).svg'
import Image from 'next/image'
import { Fraunces } from "next/font/google"
import { extraInfo } from '@/assets'

const fraunces = Fraunces({
    subsets: ['latin'],
    display: 'swap',
    style: 'italic'
})


export default function Extra(){
    return(
        <>
        <section className="flex justify-center flex-col items-center w-full p-40 gap-10 bg-indigo-300 relative z-20">
            <div className="w-full flex flex-row gap-4 items-center justify-start">
                <Image alt="bullet point" src={point}/>
                <h4 className='text-white'>FUN <span className={`${fraunces.className}`}>Facts</span></h4>
            </div>
            <div className='flex flex-row items-start justify-center gap-12'>
                {extraInfo.map(({text},index)=>{
                    return(
                        <article key={index} className='flex flex-col gap-10 w-60 h-64 bg-white rounded-xl py-7 px-8'>
                            <div className='index bg-indigo-300 p-5  flex justify-center items-center'><p className='text-white'>{index+1}</p></div>
                            <p className='text-indigo-300 text-sm font-normal'>{text}</p>
                        </article>
                    )
                })}
            </div>
        </section>
        </>
    )
}