import {ReactNode} from "react";

export function AboutInfoContainer({children}: {children: ReactNode}) {
    return (
        <div className="relative w-full md:w-10/12 max-w-4xl overflow-visible flex flex-col lg:flex-row gap-8 items-center">{children}</div>
    )
}