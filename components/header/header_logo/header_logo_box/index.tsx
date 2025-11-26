// header_logo_box/index.tsx
import { ReactNode } from "react";

export function HeaderLogoBox({ children }: { children: ReactNode }) {
    return (
        <div className="flex items-center justify-center">
            {children}
        </div>
    );
}