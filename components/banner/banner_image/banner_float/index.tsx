import { BannerFloatContainer } from "@/components/banner/banner_image/banner_float/banner_float_container";
import { BannerFloatText } from "@/components/banner/banner_image/banner_float/banner_float_text";
import { BannerFloatButton } from "@/components/banner/banner_image/banner_float/banner_float_button";

export function BannerFloat() {
  return (
    <BannerFloatContainer>
      <div className="flex flex-col items-center md:items-start gap-6 md:gap-8 px-6 sm:px-8 md:px-12 lg:px-20 py-12 md:py-20 text-white rounded-2xl">

        <BannerFloatText className="text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-left leading-tight">
          Colégio Técnico Simplifica Minas EAD
        </BannerFloatText>

        <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12">
          <BannerFloatText className="text-base sm:text-lg md:text-xl leading-relaxed text-center md:text-left">
            O Colégio Técnico Simplifica Minas EAD é uma instituição comprometida com o desenvolvimento profissional dos brasileiros, oferecendo cursos técnicos 100% a distância, com qualidade, flexibilidade e valores acessíveis.
            Nosso propósito é transformar vidas por meio da educação técnica e profissional, unindo excelência acadêmica a um modelo de ensino moderno, prático e adaptado à sua rotina.
          </BannerFloatText>
        </div>

        <div className="mt-6 md:mt-8 flex justify-center md:justify-start">
          <BannerFloatButton />
        </div>
      </div>
    </BannerFloatContainer>
  );
}
