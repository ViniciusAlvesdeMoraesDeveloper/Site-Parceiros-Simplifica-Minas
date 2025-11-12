"use client";

import React, { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type EmblaCarouselProps = {
    children: React.ReactNode;
    options?: object;
    className?: string;
};

export const EmblaCarousel = ({ children, options, className = "" }: EmblaCarouselProps) => {
    const autoplay = useRef(
        Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
    );

    const [emblaRef] = useEmblaCarousel(options, [autoplay.current]);

    return (
        <div className={`overflow-hidden ${className}`} ref={emblaRef}>
            <div className="flex">
                {React.Children.map(children, (child) => (
                    <div className="min-w-full">{child}</div>
                ))}
            </div>
        </div>
    );
};
