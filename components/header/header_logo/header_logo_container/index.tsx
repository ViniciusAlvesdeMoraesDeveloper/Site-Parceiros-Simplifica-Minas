import { ReactNode } from "react";

export function HeaderLogoContainer({ children }: { children: ReactNode }) {
    return (
        <div className=" md:w-2/11   ml-14">
            {children}
        </div>
    );
}