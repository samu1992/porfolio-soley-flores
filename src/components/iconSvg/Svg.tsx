import Image from "next/image"
import svg from "../../assets/images/C1.svg"

export default function Svg() {
    return (
        <>
            <Image width={52} height={52} alt="svg" src={svg} className="mb-1 ml-1.2" />
        </>
    )
}