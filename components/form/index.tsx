"use client"

import { useState } from "react"
import { User, Phone, Mail, Map } from "lucide-react"
import Image from "next/image"

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        nome: "",
        telefone: "",
        email: "",
        estado: "",
        cidade: "",
        areaInteresse: "",
        experiencia: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmitForm = async (e?: React.FormEvent) => {
        if (e) e.preventDefault()
        setIsSubmitting(true)

        const whatsappNumber = "5531973334204"
        const whatsappMessage = `Olá, meu nome é ${formData.nome}. Gostaria de mais informações sobre como me tornar parceiro da Simplifica Minas EAD. Meu e-mail é ${formData.email} e meu telefone é ${formData.telefone}. Sou de: ${formData.estado}, da cidade: ${formData.cidade}.
        Minha área de interesse é: ${formData.areaInteresse}. Minha experiência é: ${formData.experiencia}. Aguardo o contato de vocês. Obrigado!`

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
            <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 items-center">
                {/* Coluna de Imagens - Lado Esquerdo */}
                <div className="space-y-6 order-1">
                    <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/imgform.jpg" 
                            alt="Imagem 1 - Parceria EAD"
                            className="object-cover"
                            fill
                        />
                    </div>
                    <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/formado.png" 
                            alt="Imagem 2 - Educação Digital"
                            className="object-cover"
                            fill
                        />
                    </div>
                </div>

                {/* Formulário - Centro */}
                <form
                    onSubmit={handleSubmitForm}
                    className="bg-white p-8 rounded-2xl shadow-xl order-2 md:order-2"
                >
                    <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-4">
                        Entre em Contato
                    </h2>
                    <p className="text-center text-gray-500 mb-8 text-base">
                        Preencha os dados abaixo e retornaremos em breve.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Coluna 1 */}
                        <div className="space-y-6">
                            {/* Nome */}
                            <div>
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
                            <div>
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
                            <div>
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
                        </div>

                        
                        <div className="space-y-6">
                            {/* Cidade */}
                            <div>
                                <label className="block text-gray-700 mb-2 font-medium">Cidade</label>
                                <div className="relative">
                                    <Map className="absolute left-3 top-3 text-gray-400" size={22} />
                                    <input
                                        type="text"
                                        name="cidade"
                                        placeholder="Cidade"
                                        value={formData.cidade}
                                        onChange={handleChange}
                                        required
                                        className="w-full border rounded-xl px-12 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#267F94] transition"
                                    />
                                </div>
                            </div>

                            {/* Estado */}
                            <div>
                                <label className="block text-gray-700 mb-2 font-medium">Selecione seu Estado</label>
                                <select
                                    name="estado"
                                    title="estado"
                                    value={formData.estado}
                                    onChange={handleChange}
                                    className="w-full border rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#267F94] transition"
                                >
                                    <option value="" disabled>Selecione seu Estado</option>
                                    <option value="Acre">Acre</option>
                                    <option value="Alagoas">Alagoas</option>
                                    <option value="Amapá">Amapá</option>
                                    <option value="Amazonas">Amazonas</option>
                                    <option value="Bahia">Bahia</option>
                                    <option value="Ceará">Ceará</option>
                                    <option value="Distrito Federal">Distrito Federal</option>
                                    <option value="Espírito Santo">Espírito Santo</option>
                                    <option value="Goiás">Goiás</option>
                                    <option value="Maranhão">Maranhão</option>
                                    <option value="Mato Grosso">Mato Grosso</option>
                                    <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                                    <option value="Minas Gerais">Minas Gerais</option>
                                    <option value="Pará">Pará</option>
                                    <option value="Paraíba">Paraíba</option>
                                    <option value="Paraná">Paraná</option>
                                    <option value="Pernambuco">Pernambuco</option>
                                    <option value="Piauí">Piauí</option>
                                    <option value="Rio de Janeiro">Rio de Janeiro</option>
                                    <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                                    <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                                    <option value="Rondônia">Rondônia</option>
                                    <option value="Roraima">Roraima</option>
                                    <option value="Santa Catarina">Santa Catarina</option>
                                    <option value="São Paulo">São Paulo</option>
                                    <option value="Sergipe">Sergipe</option>
                                    <option value="Tocantins">Tocantins</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    
                    <div className="mt-6 space-y-6">
                        {/* Área de Interesse */}
                        <div>
                            <label className="block text-gray-700 mb-2 font-medium">Selecione sua área de Interesse</label>
                            <select
                                name="areaInteresse"
                                title="area-interesse"
                                value={formData.areaInteresse}
                                onChange={handleChange}
                                className="w-full border rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#267F94] transition"
                            >
                                <option value="" disabled>Selecione sua Área</option>
                                <option value="Vendedor de Cursos EAD">Vendedor de Cursos EAD</option>
                                <option value="Polo Pequeno (até 50 alunos)">Polo Pequeno (até 50 alunos)</option>
                                <option value="Polo Médio (50 - 150 alunos)">Polo Médio (50 - 150 alunos)</option>
                                <option value="Polo Grande (mais de 150 alunos)">Polo Grande (mais de 150 alunos)</option>
                                <option value="Não sei ainda - quero orientação">Não sei ainda - quero orientação</option>
                            </select>
                        </div>

                        {/* Experiência */}
                        <div>
                            <label className="block text-gray-700 mb-2 font-medium">Sua experiência</label>
                            <select
                                name="experiencia"
                                title="experiencia"
                                value={formData.experiencia}
                                onChange={handleChange}
                                className="w-full border rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#267F94] transition"
                            >
                                <option value="" disabled>Selecione seu nível</option>
                                <option value="Já trabalho com eduucação">Já trabalho com educação</option>
                                <option value="Tenho experiência com vendas">Tenho experiência com vendas</option>
                                <option value="Sou empreendedor">Sou empreendedor</option>
                                <option value="Sou funcionário CLT">Sou funcionário CLT</option>
                                <option value="Não tenho experiência na área">Não tenho experiência na área</option>
                            </select>
                        </div>
                    </div>

                    {/* Botão */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full mt-8 bg-gradient-to-r from-[#02483E] to-[#267F94] text-white py-4 rounded-xl text-lg font-semibold hover:from-[#02352e] hover:to-[#1e6a80] transition cursor-pointer disabled:opacity-50"
                    >
                        {isSubmitting ? "Enviando..." : "Enviar"}
                    </button>
                </form>

                {/* Coluna de Imagens - Lado Direito */}
                <div className="space-y-6 order-3">
                    <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/atendimento.png" 
                            alt="Imagem 3 - Sucesso Acadêmico"
                            className="object-cover"
                            fill
                        />
                    </div>
                    <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/parceria.png" 
                            alt="Imagem 4 - Tecnologia Educacional"
                            className="object-cover"
                            fill
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}