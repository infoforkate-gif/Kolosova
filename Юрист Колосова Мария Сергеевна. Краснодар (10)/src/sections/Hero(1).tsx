import { Phone, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";

export function Hero() {
  const [showScales, setShowScales] = useState(false);

  const openPhone = () => {
    window.location.href = 'tel:+79189034717';
  };

  const openEmail = () => {
    window.location.href = 'mailto:89189034717@mail.ru';
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/+79189034717", "_blank");
  };

  const openTelegram = () => {
    window.open("https://t.me/+79189034717", "_blank");
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#F8F4EF]">
      {/* Фемида фон */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1622987182830-3546866bebf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWR5JTIwanVzdGljZSUyMHN0YXR1ZSUyMHRoZW1pcyUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzY5NjYyNTI4fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Фемида"
          className="w-full h-full object-cover opacity-30 brightness-125"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="text-center lg:text-left space-y-6">
            <div className="flex justify-center lg:justify-start">
              <img
                src="/images/logo.png"
                alt="Колосова Мария Сергеевна"
                className="w-48 h-auto object-contain drop-shadow-2xl"
              />
            </div>
            
            <div className="space-y-3 max-w-[600px] mx-auto lg:mx-0">
              <p className="text-base text-[#4A3020]/70 font-medium">Адвокат</p>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-[#2A1810]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 600,
                }}
              >
                Колосова<br/>
                Мария Сергеевна
              </h1>
            </div>

            {/* Кнопки */}
            <div className="flex flex-col gap-3 max-w-[500px] mx-auto lg:mx-0">
              <div className="grid grid-cols-2 gap-3 w-full">
                <button
                  onClick={openPhone}
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#A34827] to-[#B87333] hover:from-[#B87333] hover:to-[#C8A676] transition-all duration-300 rounded-xl shadow-lg shadow-[#A34827]/30 text-[#EDE7DC]"
                >
                  <Phone className="w-5 h-5" />
                  <span>Позвонить</span>
                </button>
                <button
                  onClick={openEmail}
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#A34827] to-[#B87333] hover:from-[#B87333] hover:to-[#C8A676] transition-all duration-300 rounded-xl shadow-lg shadow-[#A34827]/30 text-[#EDE7DC]"
                >
                  <Mail className="w-5 h-5" />
                  <span>Написать</span>
                </button>
              </div>
              <button
                onClick={openWhatsApp}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#A34827] to-[#B87333] hover:from-[#B87333] hover:to-[#C8A676] transition-all duration-300 rounded-xl shadow-lg shadow-[#A34827]/30 text-[#EDE7DC]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </button>
              <button
                onClick={openTelegram}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#A34827] to-[#B87333] hover:from-[#B87333] hover:to-[#C8A676] transition-all duration-300 rounded-xl shadow-lg shadow-[#A34827]/30 text-[#EDE7DC]"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                <span>Telegram</span>
              </button>
            </div>
          </div>

          {/* Right Column - фото с анимацией весов */}
          <div className="flex justify-center lg:justify-end">
            <div 
              className="relative cursor-pointer group"
              onMouseEnter={() => setShowScales(true)}
              onMouseLeave={() => setShowScales(false)}
              onClick={() => setShowScales(!showScales)}
            >
              {/* Весы Фемиды - за фото */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] max-h-[400px] -z-10 transition-all duration-700 ${showScales ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <img
                  src="/images/femida-scales.png"
                  alt="Весы правосудия"
                  className="w-full h-full object-contain"
                  style={{ 
                    filter: 'brightness(0.7) drop-shadow(0 25px 25px rgba(0, 0, 0, 0.5))',
                    animation: 'scales-swing 3s ease-in-out infinite',
                    transformOrigin: 'center 20%'
                  }}
                />
              </div>
              
              <img
                src="/images/lawyer-hero.jpg"
                alt="Колосова Мария Сергеевна"
                className="w-full max-w-md rounded-3xl shadow-2xl shadow-[#4A3020]/40 h-auto transition-transform duration-300 group-hover:scale-[1.02] relative z-10"
              />
              <div className="absolute -top-8 -left-8 w-full h-full rounded-3xl bg-gradient-to-br from-[#4A3020]/20 to-transparent blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scales-swing {
          0%, 100% { transform: translate(-50%, -50%) rotate(-2deg); }
          50% { transform: translate(-50%, -50%) rotate(2deg); }
        }
      `}</style>
    </section>
  );
}
