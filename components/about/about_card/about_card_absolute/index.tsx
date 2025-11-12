import {
    AboutCardAbsoluteContainer
} from "@/components/about/about_card/about_card_absolute/about_card_absolute_container";
import {
    AboutCardAbsoluteTitle,
    AboutCardAbsoluteTitleProps
} from "@/components/about/about_card/about_card_absolute/about_card_absolute_title";
import {
    AboutCardAbsoluteDescription, AboutCardAbsoluteDescriptionProps
} from "@/components/about/about_card/about_card_absolute/about_card_absolute_description";

export interface AboutCardAbsoluteProps {
    title: AboutCardAbsoluteTitleProps
    description: AboutCardAbsoluteDescriptionProps
}

export function AboutCardAbsolute({title, description}: AboutCardAbsoluteProps) {
    return (
        <AboutCardAbsoluteContainer>
            <h4 className="uppercase text-gray-500 mb-2">Informações Simplifica Minas</h4>
            <AboutCardAbsoluteTitle {...title}/>
            <AboutCardAbsoluteDescription {...description}/>
        </AboutCardAbsoluteContainer>
    )
}