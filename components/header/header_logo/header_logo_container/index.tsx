import { ReactNode } from "react";

export function HeaderLogoContainer({ children }: { children: ReactNode }) {
    return (
        <div className=" md:w-2/10   ml-20">
            {children}
        </div>
    );
}