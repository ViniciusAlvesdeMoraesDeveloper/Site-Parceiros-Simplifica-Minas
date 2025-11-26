'use client'

import { Instagram, MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface FooterProps {
    onAbrirPoliticaPrivacidade?: () => void;
    onAbrirPoliticaCookies?: () => void;
}

export function Footer({ onAbrirPoliticaPrivacidade, onAbrirPoliticaCookies }: FooterProps) {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container mx-auto px-6">
                {/* Logo e Descrição */}
                <div className="flex flex-col items-center text-center mb-8">
                    <Image
                        src="/header_logo.png"
                        alt="Logo Simplifica Minas"
                        className="h-14 mb-4"
                        width={150}
                        height={80}
                    />
                    <p className="text-gray-400 max-w-md text-lg leading-relaxed">
                        Inovação, qualidade e flexibilidade: o caminho para o seu sucesso profissional.
                    </p>
                </div>

                {/* Informações de Contato - TODOS ALINHADOS NA MESMA LINHA */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {/* Endereço */}
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-green-800 p-3 rounded-full mb-3">
                            <MapPin size={20} className="text-white" />
                        </div>
                        <h4 className="font-semibold text-white mb-2 text-sm">Endereço</h4>
                        <p className=" leading-tight">
                            R.Luiz Rodrigues dos Santos, 44 - Todos Os Santos<br />
                            Cel. Fabriciano - MG
                        </p>
                    </div>

                    {/* Telefone */}
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-green-700 p-3 rounded-full mb-3">
                            <Phone size={20} className="text-white" />
                        </div>
                        <h4 className="font-semibold text-white mb-2 text-sm">Telefone</h4>
                        <p >+55 (31) 9733-34204</p>
                    </div>

                    {/* E-mail */}
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-green-800 p-3 rounded-full mb-3">
                            <Mail size={20} className="text-white" />
                        </div>
                        <h4 className="font-semibold text-white mb-2 text-sm">E-mail</h4>
                        <p className="break-words">simplificaminas@gmail.com</p>
                    </div>

                    {/* Redes Sociais */}
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-green-700 p-3 rounded-full mb-3">
                            <Instagram size={20} className="text-white" />
                        </div>
                        <h4 className="font-semibold text-white mb-2 text-sm">Siga-nos</h4>
                        <Link
                            href="https://www.instagram.com/simplificaminas/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-white transition-colors mt-1"
                        >
                            <Instagram size={16} />
                            <span>@simplificaminas</span>
                        </Link>
                    </div>
                </div>

                {/* Divisor e Copyright */}
                <div className="border-t border-gray-700 mt-12 pt-6 text-center">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Colégio Técnico Simplifica Minas. Todos os direitos reservados.
                    </p>
                    <div className="mt-4 space-x-4">
                        <button
                            onClick={onAbrirPoliticaPrivacidade}
                            className="text-sm hover:text-white transition-colors"
                        >
                            Política de Privacidade
                        </button>
                        <span className="text-gray-500">|</span>
                        <button
                            onClick={onAbrirPoliticaCookies}
                            className="text-sm hover:text-white transition-colors"
                        >
                            Política de Cookies
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}