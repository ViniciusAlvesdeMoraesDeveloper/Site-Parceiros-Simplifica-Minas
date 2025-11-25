import { ReactNode } from "react";

export function HeaderLogoBox({ children }: { children: ReactNode }) {
    return (
        <div className="h-20 w-full flex items-center justify-start md:justify-center relative px-2 mt-4 md- 3">
            {children}
        </div>
    );
}