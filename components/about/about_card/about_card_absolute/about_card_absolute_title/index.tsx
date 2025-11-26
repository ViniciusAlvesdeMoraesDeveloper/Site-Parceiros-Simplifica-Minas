
export interface AboutCardAbsoluteTitleProps {
    title: string
}


export function AboutCardAbsoluteTitle({title}: AboutCardAbsoluteTitleProps) {
    return (
        <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{title}</h3>
    )
}