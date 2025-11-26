import { ReactNode } from "react";

export function HeaderContainer({ children }: { children: ReactNode }) {
    return (
        <header className="w-full min-h-24 flex flex-col md:flex-row bg-gradient-to-r from-green-900 to-green-800 gap-0">
            {children}
        </header>
    );
}