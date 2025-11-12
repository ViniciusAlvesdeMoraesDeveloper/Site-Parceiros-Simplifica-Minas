"use client";

import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { AboutContainer } from "@/components/about/about_container";
import { AboutTile } from "@/components/about/about_title";
import { AboutDescription } from "@/components/about/about_description";
import { AboutInfoContainer } from "@/components/about/about_info_container";
import { AboutCard, AboutCardProps } from "@/components/about/about_card";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

export function About() {
    const autoplay = useRef(
        Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
    );

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollTo = (index: number) => {
        if (emblaApi) emblaApi.scrollTo(index);
    };

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        emblaApi.on("select", onSelect);
        onSelect();
    }, [emblaApi]);

    const aboutCards: AboutCardProps[] = [
        {
            cardAbsolute: {
                title: { title: "Nossa Proposta de Valor" },
                description: {
                    description:
                        "O Colégio Técnico Simplifica Minas EAD oferece uma parceria estratégica para instituições que desejam expandir sua oferta educacional com qualidade e credibilidade. Com metodologia moderna, plataforma tecnológica robusta e suporte integral, garantimos excelência no ensino técnico profissionalizante para seus alunos.",
                },
            },
            img: {
                src: "/about/students.jpg",
                alt: "Parceria educacional",
            },
        },
        {
            cardAbsolute: {
                title: { title: "Vantagens para Parceiros" },
                description: {
                    description:
                        "Como parceiro, você oferece cursos técnicos reconhecidos pelo MEC com nossa estrutura completa: material didático exclusivo, plataforma EAD de última geração, suporte pedagógico especializado e todo o respaldo institucional para expandir seu portfólio educacional sem investimentos pesados.",
                },
            },
            img: {
                src: "/about/group_students.jpg",
                alt: "Vantagens para instituições parceiras",
            },
        },
        {
            cardAbsolute: {
                title: { title: "Certificação Reconhecida" },
                description: {
                    description:
                        "Todos os cursos técnicos do Colégio Simplifica Minas possuem validade nacional e reconhecimento do MEC. Seus alunos recebem certificados que ampliam suas oportunidades no mercado de trabalho, enquanto sua instituição fortalece sua reputação com cursos de qualidade comprovada.",
                },
            },
            img: {
                src: "/about/certificated.jpg",
                alt: "Certificação técnica reconhecida",
            },
        },
        {
            cardAbsolute: {
                title: { title: "Plataforma Tecnológica Completa" },
                description: {
                    description:
                        "Oferecemos uma plataforma EAD intuitiva e completa, com recursos multimídia, biblioteca virtual, ambiente virtual de aprendizagem e ferramentas de gestão educacional. Tudo para que sua instituição possa focar no que faz de melhor: educar e transformar vidas.",
                },
            },
            img: {
                src: "/about/online_learning.jpg",
                alt: "Plataforma EAD do Colégio Técnico",
            },
        },
        {
            cardAbsolute: {
                title: { title: "Suporte Pedagógico Integral" },
                description: {
                    description:
                        "Nossa equipe de especialistas acompanha sua instituição em todas as etapas: da implantação dos cursos à capacitação de tutores. Garantimos suporte contínuo, atualização curricular constante e materiais didáticos alinhados com as demandas do mercado de trabalho.",
                },
            },
            img: {
                src: "/about/teacher.webp",
                alt: "Suporte pedagógico para parceiros",
            },
        },
    ];

    return (
        <AboutContainer>
            <AboutTile title="Sobre o Colégio Técnico Simplifica Minas EAD" />
            <AboutDescription
                description="Conectamos instituições de ensino a oportunidades de crescimento através de parcerias estratégicas em educação técnica profissionalizante. Juntos, transformamos vidas e construímos futuros."
            />

            {/* AboutInfoContainer contendo apenas o carrossel */}
            <AboutInfoContainer>
                <div className="overflow-hidden w-full" ref={emblaRef}>
                    <div className="flex">
                        {aboutCards.map((card, index) => (
                            <div
                                key={index}
                                className="min-w-full flex justify-center items-center px-4 py-8"
                            >
                                <div className="max-w-6xl w-full">
                                    <AboutCard {...card} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </AboutInfoContainer>

            {/* Dots e setas movidos para fora do AboutInfoContainer */}
            <div className="flex flex-col items-center gap-4 mt-6">
                {/* Indicadores (dots) */}
                <div className="flex justify-center gap-2">
                    {aboutCards.map((_, index) => (
                        <button
                            key={index}
                            title="botão"
                            onClick={() => scrollTo(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${selectedIndex === index ? "bg-green-600 scale-110" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>

                {/* Setas de navegação */}
                <div className="flex justify-center gap-8">
                    <button
                        title="botão"
                        onClick={() => emblaApi?.scrollPrev()}
                        className="text-2xl hover:scale-125 transition p-2 md:p-3"
                    >
                        <ArrowBigLeft className="text-gray-700 h-8 w-8" />
                    </button>
                    <button
                        title="botão"
                        onClick={() => emblaApi?.scrollNext()}
                        className="text-2xl hover:scale-125 transition p-2 md:p-3"
                    >
                        <ArrowBigRight className="text-gray-700 h-8 w-8" />
                    </button>
                </div>
            </div>
        </AboutContainer>
    );
}