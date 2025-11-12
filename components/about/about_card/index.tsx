import {AboutInfoContainer} from "@/components/about/about_card/about_card_container";
import {AboutCardImage, AboutCardImageProps} from "@/components/about/about_card/about_card_image";
import {AboutCardAbsolute, AboutCardAbsoluteProps} from "@/components/about/about_card/about_card_absolute";

export interface AboutCardProps {
    img: AboutCardImageProps
    cardAbsolute: AboutCardAbsoluteProps
}

export function AboutCard({img, cardAbsolute}: AboutCardProps) {
    return (
        <AboutInfoContainer>
            <AboutCardImage {...img}/>
            <AboutCardAbsolute {...cardAbsolute}/>
        </AboutInfoContainer>
    )
}