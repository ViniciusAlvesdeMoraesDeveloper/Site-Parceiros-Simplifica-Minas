// header_logo_image/index.tsx
import Image from "next/image";

interface HeaderLogoImageProps {
    mobileSize?: string;
    desktopSize?: string;
}

export function HeaderLogoImage({
    mobileSize = "h-18",  
    desktopSize = "h-24", 
}: HeaderLogoImageProps) {
    return (
        <Image
            src="/header_logo.png"
            alt="Logo Simplifica Minas"
            className={`${mobileSize} md:${desktopSize} w-auto object-contain transition-all duration-300`}
            width={180}
            height={80}
            priority
        />
    );
}