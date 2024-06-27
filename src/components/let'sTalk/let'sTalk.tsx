'use client'
import logoButton from '../../assets/images/sparkles.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';

const LetsTalk = () => {
    const [hover, setHover] = useState(false);

    return (
        <button 
            className="flex items-center justify-center flex-row backgound-button px-2.5 py-2 rounded-lg text-stone-800 relative overflow-hidden"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Image className="mr-1.5" width={14} height={14} alt="button logo" src={logoButton} />
            <div className={`link-text-container ${hover ? 'hover' : ''}`}>
                <Link target="_blank" href="https://www.linkedin.com/in/soleyflores/" className="font-medium text-[16px] link-text">
                    Available for work
                </Link>
                <Link target="_blank" href="https://www.linkedin.com/in/soleyflores/" className="font-medium text-[16px] link-text hover-text">
                    Say hello, let’s talk
                </Link>
            </div>
        </button>
    )
}

export default LetsTalk;