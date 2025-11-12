import {CarouselCardContainer} from "@/components/carousel/carousel_card/carousel_card_container";
import Image from "next/image";

interface CarouselCardProps {
    alt: string
    src: string
    title: string
}

export function CarouselCard(props: CarouselCardProps) {
    return (
        <CarouselCardContainer>
            <div className="w-full h-full relative flex items-center justify-center">
                    <Image
                        alt={props.alt}
                        src={props.src}
                        fill
                        className="object-contain rounded-b-md"
                    />
            </div>
            <div className="w-full flex flex-col p-2">
                <h1 className="text-gray-500 text-center hover:text-black font-semibold">{props.title}</h1>
            </div>
        </CarouselCardContainer>
    )
}
