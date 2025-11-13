"use client"

import { useState } from "react"
import { User, Phone, Mail } from "lucide-react"
import Image from "next/image"

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        nome: "",
        telefone: "",
        email: "",
        graduado: "sim",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmitForm = async (e?: React.FormEvent) => {
        if (e) e.preventDefault()
        setIsSubmitting(true)

        const whatsappNumber = "5531973334204"
        const whatsappMessage = `Olá, meu nome é ${formData.nome}. Gostaria de mais informações sobre como me tornar parceiro da Simplifica Minas EAD. Meu e-mail é ${formData.email} e meu telefone é ${formData.telefone}. Sou graduado: ${formData.graduado}.`

        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
        try {

            window.open(whatsappURL, "_blank")

            alert("Solicitação enviada com sucesso! Entraremos em contato em breve.")
        } catch (error) {
            console.error("Erro ao enviar a solicitação:", error)
            const errorMessage = error instanceof Error ? error.message : "Ocorreu um erro. Tente novamente mais tarde."
            alert("Erro ao enviar a solicitação: " + errorMessage)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className="py-20 bg-[#CBCDCF]" id="contato">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                {/* Formulário - AGORA NA ESQUERDA */}
                <form
                    onSubmit={handleSubmitForm}
                    className="bg-white shadow-2xl rounded-3xl p-12 w-full max-w-2xl mx-auto border border-gray-200 order-2 md:order-1"
                >
                    <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-4">
                        Entre em Contato
                    </h2>
                    <p className="text-center text-gray-500 mb-10 text-base">
                        Preencha os dados abaixo e retornaremos em breve.
                    </p>

                    {/* Nome */}
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2 font-medium">Nome</label>
                        <div className="relative">
                            <User className="absolute left-3 top-3 text-gray-400" size={22} />
                            <input
                                type="text"
                                name="nome"
                                placeholder="Nome"
                                value={formData.nome}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-xl px-12 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#267F94] transition"
                            />
                        </div>
                    </div>

                    {/* Telefone */}
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2 font-medium">Telefone</label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-3 text-gray-400" size={22} />
                            <input
                                type="tel"
                                name="telefone"
                                placeholder="(XX) XXXXX-XXXX"
                                value={formData.telefone}
                                onChange={handleChange}
                                onInput={(e) => {
                                    const target = e.target as HTMLInputElement;
                                    target.value = target.value.replace(/[^\d]/g, '').replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d)/, '$1-$2').replace(/(-\d{4})\d+?$/, '$1');
                                }}
                                required
                                className="w-full border rounded-xl px-12 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#267F94] transition"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2 font-medium">E-mail</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 text-gray-400" size={22} />
                            <input
                                type="email"
                                name="email"
                                placeholder="email@dominio.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-xl px-12 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#267F94] transition"
                            />
                        </div>
                    </div>

                    {/* Graduado */}
                    <div className="mb-10">
                        <label className="block text-gray-700 mb-2 font-medium">Você é graduado?</label>
                        <select
                            name="graduado"
                            title="graduação"
                            value={formData.graduado}
                            onChange={handleChange}
                            className="w-full border rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#267F94] transition"
                        >
                            <option value="não">Não</option>
                            <option value="sim">Sim</option>
                        </select>
                    </div>

                    {/* Botão */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-[#02483E] to-[#267F94] text-white py-4 rounded-xl text-lg font-semibold hover:from-[#02352e] hover:to-[#1e6a80] transition cursor-pointer disabled:opacity-50"
                    >
                        {isSubmitting ? "Enviando..." : "Enviar"}
                    </button>
                </form>

                {/* Imagem - AGORA NA DIREITA */}
                <div className="flex justify-center relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl order-1 md:order-2">
                    <Image
                        src="/imgForm.jpg"
                        alt="Entre em Contato"
                        className="object-cover"
                        fill
                    />
                </div>
            </div>
        </section>
    )
}