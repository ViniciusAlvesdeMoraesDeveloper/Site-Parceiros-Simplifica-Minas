
export interface AboutCardAbsoluteDescriptionProps {
    description: string
}

export function AboutCardAbsoluteDescription({description}: AboutCardAbsoluteDescriptionProps) {
    return (
        <p className="text-white mb-6 text-sm md:text-base">
            {description}
        </p>
    )
}