import Image from "next/image"
import svg from "../../assets/images/C1.svg"

export default function Svg() {
    return (
        <>
            <Image alt="svg" src={svg} className="mb-1 ml-1.2 w-7 h-7 sm:w-9 sm:h-9" />
        </>
    )
}