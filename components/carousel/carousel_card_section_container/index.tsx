import { ReactNode } from "react";
import {EmblaViewportRefType} from "embla-carousel-react";

interface CarouselCardSectionContainerProps {
    children: ReactNode;
    ref?: EmblaViewportRefType
}

export function CarouselCardSectionContainer({children, ref}: CarouselCardSectionContainerProps) {
    return (
        <div className="w-8/12 py-5 touch-auto" ref={ref}>
            {children}
        </div>
    );
}
