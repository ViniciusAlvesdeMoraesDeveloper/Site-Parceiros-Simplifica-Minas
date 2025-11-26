import Link from "next/link"
export function BannerFloatButton() {
    return (
        <Link
            href="#contato"
            className=" bg-gradient-to-r from-green-900 to-green-800 p-4  h-16 text-2xl font-sans font-medium rounded-xl shadow-md shadow-[#13e281] text-white cursor-pointer
                hover:scale-105
                ">
            Seja um Parceiro!
        </Link>
    )
}