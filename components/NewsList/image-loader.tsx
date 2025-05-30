"use client"
import Image from "next/image";

interface configImage {
    src: string,
    quality: string,
    width: string
}

interface ImageLoaderProps {
    src: string,
    alt: string
}

const imageLoader = (config: configImage) => {
    const urlStarted = config.src.split("upload/")[0];
    const urlEnd = config.src.split("upload/")[1];
    const transformation = `w_200,q_${config.quality}`;
    return `${urlStarted}upload/${transformation}/${urlEnd}`;
}
export function ImageLoader({ src, alt }: ImageLoaderProps) {

    return (
        <Image loader={imageLoader} src={src} alt={alt} fill quality={70} />
    )
}