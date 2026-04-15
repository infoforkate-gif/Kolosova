import { FileCheck, Shield, Lock, Award } from "lucide-react";

export function Guarantees() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#130A06] via-[#1A1A1A] to-[#2D2D2D]">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-[#2D2D2D] to-[#130A06] p-8 sm:p-12 rounded-3xl border border-[#C8A676]/30 shadow-2xl">
          <div className="flex items-start gap-6 mb-8">
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#A34827]/40 to-[#C8A676]/30 rounded-2xl flex items-center justify-center">
              <FileCheck className="w-8 h-8 text-[#C8A676]" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl text-[#EDE7DC] mb-4" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
                Работа по договору
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#A34827] to-[#C8A676] rounded-full"></div>
            </div>
          </div>
          
          <div className="space-y-6 mb-8">
            <p className="text-lg text-[#EDE7DC]/95 leading-relaxed text-justify">
              Адвокат Колосова Мария Сергеевна предоставляет полный спектр юридических услуг
              в г. Краснодаре, Краснодарском крае и г. Москве.
            </p>
            
            <p className="text-lg text-[#EDE7DC]/95 leading-relaxed font-semibold text-justify">
              Вся работа ведётся исключительно по договору (соглашению), в котором чётко
              фиксируются условия сотрудничества, стоимость услуг, что обеспечивает
              прозрачность взаимоотношений и защиту интересов обеих сторон на всех этапах работы.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#A34827]/20 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#C8A676]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#EDE7DC] mb-2">Юридические гарантии</h3>
                <p className="text-sm text-[#EDE7DC]/80">
                  Все обязательства закреплены договором
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#A34827]/20 rounded-xl flex items-center justify-center">
                <Lock className="w-6 h-6 text-[#C8A676]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#EDE7DC] mb-2">Адвокатская тайна</h3>
                <p className="text-sm text-[#EDE7DC]/80">
                  Конфиденциальность гарантирована законом
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#A34827]/20 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-[#C8A676]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#EDE7DC] mb-2">Индивидуальная стратегия</h3>
                <p className="text-sm text-[#EDE7DC]/80">
                  Персональный подход к каждому делу
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
