import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    name: "Александр Петров",
    text: "Мария Сергеевна профессионально провела дело о разделе имущества. Благодарен за внимательное отношение и отличный результат.",
    rating: 5,
    case: "Семейное право"
  },
  {
    name: "Елена Смирнова",
    text: "Обратилась по вопросу недвижимости. Получила квалифицированную помощь и грамотную юридическую поддержку на всех этапах.",
    rating: 5,
    case: "Недвижимость"
  },
  {
    name: "Игорь Волков",
    text: "Отличный адвокат! Выиграли сложное арбитражное дело. Профессионализм и ответственность на высшем уровне.",
    rating: 5,
    case: "Арбитражные споры"
  },
  {
    name: "Наталья Соколова",
    text: "Рекомендую Марию Сергеевну как надежного защитника интересов. Помогла в сложной ситуации, всегда была на связи.",
    rating: 5,
    case: "Гражданское право"
  }
];

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#130A06] via-[#2D2D2D] to-[#1A1A1A]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl text-center mb-16 text-[#EDE7DC]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
          Отзывы клиентов
        </h2>
        
        <div className="relative">
          {/* Review Card */}
          <div className="bg-gradient-to-br from-[#130A06] to-[#2D2D2D] p-8 sm:p-12 rounded-2xl border border-[#C8A676]/20 shadow-xl">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#C8A676] text-[#C8A676]" />
              ))}
            </div>
            
            <p className="text-lg text-[#EDE7DC]/90 leading-relaxed mb-6 min-h-[120px]">
              "{reviews[currentIndex].text}"
            </p>
            
            <div className="border-t border-[#C8A676]/20 pt-4">
              <p className="font-bold text-[#EDE7DC]">
                {reviews[currentIndex].name}
              </p>
              <p className="text-sm text-[#C8A676]">
                {reviews[currentIndex].case}
              </p>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevReview}
              className="p-3 bg-gradient-to-r from-[#A34827] to-[#B87333] hover:from-[#B87333] hover:to-[#C8A676] transition-all duration-300 rounded-xl shadow-lg shadow-[#A34827]/30 text-white"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-[#C8A676] w-8' 
                      : 'bg-[#C8A676]/30 w-2'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextReview}
              className="p-3 bg-gradient-to-r from-[#A34827] to-[#B87333] hover:from-[#B87333] hover:to-[#C8A676] transition-all duration-300 rounded-xl shadow-lg shadow-[#A34827]/30 text-white"
              aria-label="Next review"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
