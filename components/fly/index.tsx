import React from "react";
import Image from "next/image";

export default function CourseBanner() {
    
    return (
        <section className="w-full py-8 bg-gray-50">
            <div className="container mx-auto px-4 flex justify-center">
                <a href="#cursos" aria-label="Confira nossos cursos disponíveis">
                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 p-4 max-w-md">
                        <Image
                            src="/flysimplificaminas.png"
                            alt="Banner de cursos"
                            width={400}
                            height={200}
                            className="w-full h-auto object-contain" // Imagem 100% completa
                        />
                    </div>
                </a>
            </div>
        </section>
    );    
}