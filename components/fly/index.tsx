import React from "react";
import Image from "next/image";

export default function CourseBanner() {
    
    return (
        <section className="w-full py-12 bg-gradient-to-br from-gray-400 to-gray-50">
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 overflow-hidden max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row">
                        
                        
                        <div className="lg:w-2/3 flex items-center justify-center p-4 lg:p-8 bg-gradient-to-b from-blue-50 to-indigo-50 relative">
                            <div >
                                <Image
                                    src="/cursos.png"
                                    alt="Parceria em Cursos - Oportunidade para Parceiros"
                                    fill
                                    className="object-cover drop-shadow-lg"
                                    priority
                                />
                            </div>
                        </div>

                        
                        <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                            
                            
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-900 to-green-800 text-green-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                <span>⭐</span>
                                OPORTUNIDADE PARA PARCEIROS
                            </div>

                            
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                Seja Nosso <span className="text-green-800">Parceiro</span> em Cursos
                            </h2>

                            
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Junte-se a nós e ofereça cursos de alta qualidade para sua audiência. 
                                <span className="font-semibold text-green-800"> Ganhe comissões atrativas</span> e cresça junto conosco.
                            </p>

                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-green-800">💰</span>
                                    </div>
                                    <span className="text-gray-700">Comissões competitivas</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-green-800">🛠️</span>
                                    </div>
                                    <span className="text-gray-700">Material de marketing</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-purple-600">📊</span>
                                    </div>
                                    <span className="text-gray-700">Dashboard de performance</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-orange-600">🎯</span>
                                    </div>
                                    <span className="text-gray-700">Suporte dedicado</span>
                                </div>
                            </div>

                            
                            <div className="bg-gray-50 rounded-xl p-6 mb-8">
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div>
                                        <div className="text-2xl font-bold text-green-600">500+</div>
                                        <div className="text-sm text-gray-600">Parceiros Ativos</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-green-800">R$ 2M+</div>
                                        <div className="text-sm text-gray-600">Em Comissões</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-green-900">95%</div>
                                        <div className="text-sm text-gray-600">Satisfação</div>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a 
                                    href="#contato" 
                                    className="flex-1 bg-gradient-to-r from-green-900 to-green-800 text-white text-center py-4 px-6 rounded-xl font-semibold text-lg hover:from-green-800 hover:to-green-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                                >
                                    Quero Ser Parceiro
                                </a>
                                <a 
                                    href="#contato" 
                                    className="flex-1 border border-green-600 text-green-600 text-center py-4 px-6 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300"
                                >
                                    Saber Mais
                                </a>
                            </div>

                            
                            <div className="mt-6 text-center">
                                <p className="text-sm text-gray-500">
                                    ⚡ Cadastro gratuito • ⏱️ Processo rápido • 📞 Suporte personalizado
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );    
}