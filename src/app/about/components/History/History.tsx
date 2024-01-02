/* eslint-disable react/no-unescaped-entities */
'use client'
import { aboutInfo } from "@/assets";
import Image, { StaticImageData } from "next/image";

type ImageType = StaticImageData | string;

export default function History() {
    return (
        <section id="angry-grid" className="flex flex-col px-8 md:px-24 lg:px-36 xl:px-11 relative z-30">
            {aboutInfo.map(({ content, paragraphs }, index) => (
                <div key={index} id={`item-${index}`}>&nbsp;
                    {typeof content === 'string' ? (
                        <p className="paragraph text-base mb-10 not-italic text-gray-800  md:w-3/4">{content}</p>
                    ) : (
                        <Image alt={`image-${index}`} src={content as ImageType} />
                    )}
                    {paragraphs && Array.isArray(paragraphs) && (
                        <div>
                            {paragraphs.map((paragraph, paragraphIndex) => (
                                <p key={paragraphIndex} className=" paragraph text-base mb-10 not-italic text-gray-800">
                                    {Object.values(paragraph).join(' ')}
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </section>
    );
}
