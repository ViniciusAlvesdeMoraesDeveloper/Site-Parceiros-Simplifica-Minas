import Image from "next/image";
import Link from "next/link";

export function WhatsAppFloatButton(){
       const whatsappNumber = "5531973334204"; 
       const message = "Olá, gostaria de mais informações, sobre como me tornar um parceiro.";
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
     
        <div className="h-16 w-16 rounded-full right-3 bottom-2 cursor-pointer overflow-hidden fixed">
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer"
            className="h-full w-full relative block"
            >
            <Image alt={"Icone do whatsapp"} src={"whatsapp_logo.svg"} fill className="object-cover"/>
            
        </Link>
        </div>
    )
}