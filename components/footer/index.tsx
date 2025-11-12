"use client"

import { Instagram, MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
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

                {/* Informações de Contato */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {/* Endereço */}
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-blue-600 p-3 rounded-full mb-3">
                            <MapPin size={20} className="text-white" />
                        </div>
                        <h4 className="font-semibold text-white mb-2">Endereço</h4>
                        <p className="text-sm leading-relaxed">
                            R. Luiz Rodrigues dos Santos, 44 - Todos Os Santos<br />
                            Cel. Fabriciano - MG
                        </p>
                    </div>

                    {/* Contato */}
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-green-600 p-3 rounded-full mb-3">
                            <Phone size={20} className="text-white" />
                        </div>
                        <h4 className="font-semibold text-white mb-2">Telefone</h4>
                        <p className="text-sm">+55 (31) 9733-34204</p>

                        <div className="mt-4">
                            <div className="bg-red-600 p-3 rounded-full mb-3 inline-block">
                                <Mail size={20} className="text-white" />
                            </div>
                            <h4 className="font-semibold text-white mb-2">E-mail</h4>
                            <p className="text-sm">simplificaminas@gmail.com</p>
                        </div>
                    </div>

                    {/* Redes Sociais */}
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-pink-600 p-3 rounded-full mb-3">
                            <Instagram size={20} className="text-white" />
                        </div>
                        <h4 className="font-semibold text-white mb-2">Siga-nos</h4>
                        <Link
                            href="https://www.instagram.com/simplificaminas/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-white transition-colors mt-2"
                        >
                            <Instagram size={18} />
                            <span className="text-sm">@simplificaminas</span>
                        </Link>
                    </div>
                </div>

                {/* Divisor e Copyright */}
                <div className="border-t border-gray-700 mt-12 pt-6 text-center">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Colégio Técnico Simplifica Minas. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}