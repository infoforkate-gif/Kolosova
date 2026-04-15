import { Phone, MessageCircle } from "lucide-react";

export function Header() {
  const openPhone = () => {
    window.location.href = 'tel:+79189034717';
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/+79189034717', '_blank');
  };

  const openTelegram = () => {
    window.open('https://t.me/+79189034717', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A]/80 backdrop-blur-md border-b border-[#C8A676]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/images/logo.png" 
              alt="Колосова Мария Сергеевна" 
              className="h-12 w-auto object-contain"
            />
            <div className="flex flex-col">
              <p className="text-xs text-[#EDE7DC]/90 tracking-wide leading-tight">
                Адвокат Колосова Мария Сергеевна
              </p>
              <p className="text-[10px] text-[#C8A676] italic leading-tight">
                Личная ответственность за результат
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={openWhatsApp}
              className="p-2.5 bg-[#A34827]/80 hover:bg-[#B87333] transition-all duration-300 rounded-lg"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-white" />
            </button>
            
            <button
              onClick={openTelegram}
              className="p-2.5 bg-[#A34827]/80 hover:bg-[#B87333] transition-all duration-300 rounded-lg"
              aria-label="Telegram"
            >
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
              </svg>
            </button>
            
            <button
              onClick={openPhone}
              className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#A34827] to-[#B87333] hover:from-[#B87333] hover:to-[#C8A676] transition-all duration-300 rounded-lg shadow-lg shadow-[#A34827]/30 text-white"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Позвонить</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
