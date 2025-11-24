'use client'

import React, { useState } from "react";
import { Header } from "@/components/header";
import { Banner } from "@/components/banner";
import { WhatsAppFloatButton } from "@/components/whatsapp_float_button";
import ContactForm from "@/components/form";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { X } from "lucide-react";
import PoliticaPrivacidade from "./politica-privacidade/page";
import PoliticaCookies from "./politica-cookies/page";
import Fly from "@/components/fly";

type ModalType = 'privacidade' | 'cookies' | null;

export default function Home() {
    const [modalAberto, setModalAberto] = useState<ModalType>(null);

    const abrirModal = (tipo: ModalType) => setModalAberto(tipo);
    const fecharModal = () => setModalAberto(null);

    return (
        <div className="w-full flex flex-col min-h-screen h-auto">
            <Header />
            <Banner />
            <About />
            <Fly/>
            <ContactForm />
            <Footer 
                onAbrirPoliticaPrivacidade={() => abrirModal('privacidade')}
                onAbrirPoliticaCookies={() => abrirModal('cookies')}
            />
            
            <WhatsAppFloatButton />

            {/* Modal de Política de Privacidade */}
            {modalAberto === 'privacidade' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-opacity-50 animate-fadeIn">
                    <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-scaleIn">
                        <div className="flex justify-between items-center p-6 border-b bg-[#02483E] text-white">
                            <h2 className="text-2xl font-bold">
                                Política de Privacidade
                            </h2>
                            <button
                                onClick={fecharModal}
                                title="politica-privacidade"
                                className="p-2 hover:bg-gray-700 rounded-full transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
                            <PoliticaPrivacidade />
                        </div>
                    </div>
                </div>
            )}

            {/* Modal de Política de Cookies */}
            {modalAberto === 'cookies' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4  bg-opacity-50 animate-fadeIn">
                    <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-scaleIn">
                        <div className="flex justify-between items-center p-6 border-b bg-[#02483E] text-white">
                            <h2 className="text-2xl font-bold">
                                Política de Cookies
                            </h2>
                            <button
                                onClick={fecharModal}
                                title="politica-cookies"
                                className="p-2 hover:bg-gray-700 rounded-full transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
                            <PoliticaCookies />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}