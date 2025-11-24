import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Font: carregando com display: swap e usando variable corretamente
const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display: "swap",
});

// Metadata otimizada
export const metadata: Metadata = {
    title: "Colégio Técnico Simplifica Minas EAD",
    description: "Educação a distância de qualidade para todos",
    authors: [
        { name: "RJ Digital", url: "https://rjdigital.com.br" },
        { name: "Felipe Fernandes", url: "https://github.com/FelipeFernandes777" },
    ],
    keywords: [
        "CLoégio Técnico Simplifica Minas EaD",
        "Simplifica Minas",
        "Colégio EAD",
        "Curso Técnico EAD",
        "Educação a distância",
        "Cursos online",
        "Engenharia",
        "Administração",
    ],
    category: "education",
    generator: "Next.js",
    applicationName: "FAME EaD",
    creator: "RJ Digital",
    publisher: "Hostinger",
    referrer: "origin",
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: "/logo_branca.png",
        apple: "/logo_branca.png",
    },
    manifest: "/manifest.json",
    openGraph: {
        title: "Colégio Técnico Simplifica Minas EaD",
        description: "Seu técnico está aqui. Venha fazer parte da Simplifica Minas EaD!",
        url: "https://site.com.br",
        siteName: "Simplifica Minas EaD",
        images: [
            {
                url: "/header_logo.png",
                width: 500,
                height: 600,
                alt: "Logo da Faculdade",
            },
        ],
        locale: "pt_BR",
        type: "website",
    },
    metadataBase: new URL("https://site.com.br"),
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br" className={poppins.variable}>
        <body className="antialiased overflow-x-hidden">
        <main className="bg-white w-full text-black min-h-screen">
            {children}
        </main>
        </body>
        </html>
    );
}
