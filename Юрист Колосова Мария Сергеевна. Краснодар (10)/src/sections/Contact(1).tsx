import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  const openMap = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=Краснодар,+Сады+Калинина,+ул.+Средняя,+20/1', '_blank');
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1A1A1A] via-[#130A06] to-[#1A1A1A]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl text-center mb-16 text-[#EDE7DC]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
          Контакты
        </h2>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#A34827]/30 to-[#C8A676]/20 rounded-xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-[#C8A676]" />
            </div>
            <div>
              <h3 className="mb-1 text-[#EDE7DC]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>Адрес</h3>
              <button 
                onClick={openMap}
                className="text-[#EDE7DC]/80 hover:text-[#C8A676] transition-colors text-left"
              >
                г. Краснодар, Сады Калинина, ул. Средняя, д. 20/1
              </button>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#A34827]/30 to-[#C8A676]/20 rounded-xl flex items-center justify-center">
              <Phone className="w-6 h-6 text-[#C8A676]" />
            </div>
            <div>
              <h3 className="mb-1 text-[#EDE7DC]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>Телефон</h3>
              <a href="tel:+79189034717" className="text-[#EDE7DC]/80 hover:text-[#C8A676] transition-colors">
                +7 (918) 903-47-17
              </a>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#A34827]/30 to-[#C8A676]/20 rounded-xl flex items-center justify-center">
              <Mail className="w-6 h-6 text-[#C8A676]" />
            </div>
            <div>
              <h3 className="mb-1 text-[#EDE7DC]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>Email</h3>
              <a href="mailto:89189034717@mail.ru" className="text-[#EDE7DC]/80 hover:text-[#C8A676] transition-colors">
                89189034717@mail.ru
              </a>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#A34827]/30 to-[#C8A676]/20 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-[#C8A676]" />
            </div>
            <div>
              <h3 className="mb-1 text-[#EDE7DC]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>Часы работы</h3>
              <p className="text-[#EDE7DC]/80">Ежедневно с 9:00 до 19:00</p>
            </div>
          </div>
        </div>

        {/* Карта */}
        <div className="mt-10 w-full h-[360px] bg-[#2D2D2D] rounded-2xl overflow-hidden border border-[#C8A676]/20 shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2820.8326!2d38.9745!3d45.0428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f04f5c3b8f7f7f%3A0x7f7f7f7f7f7f7f7f!2z0YPQu9C40YbQsCDQoNCw0YjQv9C40LvQtdCy0YHQutCw0Y8sIDIwLzEsINCa0YDQsNGB0L3QvtC00LDRgA!5e0!3m2!1sru!2sru!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Карта офиса адвоката Колосовой М.С."
          ></iframe>
        </div>
      </div>
    </section>
  );
}
