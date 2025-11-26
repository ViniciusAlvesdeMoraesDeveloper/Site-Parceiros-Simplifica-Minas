import {ReactNode} from "react";

export function AboutCardAbsoluteContainer({children}: { children: ReactNode }) {
    return (
        <div
            className="static md:absolute md:top-1/2 md:right-[-130px] md:transform md:-translate-y-1/2 md:translate-x-1/4 bg-gradient-to-r from-green-900 to-green-800 p-6 md:p-10 rounded-lg shadow-lg w-full sm:w-[400px] max-w-full md:h-8/12 flex flex-col mt-4 md:mt-0">
            {children}
        </div>
    )
}