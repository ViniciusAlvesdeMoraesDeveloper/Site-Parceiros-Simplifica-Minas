import {ReactNode} from "react";

export function CarouselCardContainer({ children }: { children:ReactNode }) {
    return (
        <div className="flex-[0_0_auto] mr-4 shadow-lg w-64 h-56 flex flex-col items-center justify-between rounded-lg overflow-hidden border border-black/20 py-1 px-2 cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg">{children}</div>
    )
}