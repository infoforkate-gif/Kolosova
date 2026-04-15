import { Phone, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1A1A1A] to-[#130A06] border-t border-[#C8A676]/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg mb-4 text-[#EDE7DC]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
              Адвокат Колосова Мария Сергеевна
            </h3>
            <p className="text-[#EDE7DC]/70">
              Профессиональная защита Ваших интересов в Краснодаре, Краснодарском крае, Москве
            </p>
          </div>
          
          <div>
            <h3 className="text-lg mb-4 text-[#EDE7DC]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
              Контакты
            </h3>
            <div className="space-y-2">
              <a href="tel:+79189034717" className="flex items-center gap-2 text-[#EDE7DC]/70 hover:text-[#C8A676] transition-colors">
                <Phone className="w-4 h-4" />
                <span>+7 (918) 903-47-17</span>
              </a>
              <a href="mailto:89189034717@mail.ru" className="flex items-center gap-2 text-[#EDE7DC]/70 hover:text-[#C8A676] transition-colors">
                <Mail className="w-4 h-4" />
                <span>89189034717@mail.ru</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg mb-4 text-[#EDE7DC]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
              Режим работы
            </h3>
            <div className="space-y-1 text-[#EDE7DC]/70">
              <p>Ежедневно с 9:00 до 19:00</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#C8A676]/20 pt-8 text-center text-[#EDE7DC]/50 text-sm">
          <p>© {currentYear} Адвокат Колосова Мария Сергеевна. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
