import Image from "next/image";

export function HeaderLogoImage() {
    return (
        <Image
            src="/header_logo.png"
            alt="Logo"
            fill
            priority
            className="h-16 w-auto md:h-24 lg:h-28 xl:h-32"
        />
    );
}
