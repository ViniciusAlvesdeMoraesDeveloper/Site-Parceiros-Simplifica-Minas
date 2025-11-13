import { ReactNode } from "react";

export function HeaderContainer({ children }: { children: ReactNode }) {
    return (
        <header className="w-full min-h-24 flex flex-col md:flex-row bg-[#067565] gap-0">
            {children}
        </header>
    );
}