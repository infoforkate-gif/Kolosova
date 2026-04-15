export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#2D2D2D] via-[#2D2D2D] to-[#130A06]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl text-[#EDE7DC] mb-10" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
          Обо мне
        </h2>
        
        <div className="space-y-4 text-lg text-[#EDE7DC]/90 leading-relaxed text-justify">
          <p>
            Профессиональный адвокат с многолетним опытом защиты интересов клиентов в различных правовых областях.
          </p>
          
          <p>
            Специализируюсь на индивидуальном подходе к каждому делу, гарантируя максимальную защиту прав и интересов моих клиентов.
          </p>
          
          <p>
            Моя практика основана на глубоком знании законодательства, внимательном отношении к деталям и стремлении к достижению наилучшего результата для каждого клиента.
          </p>
          
          <p className="text-[#C8A676] font-semibold">
            Доверьте защиту своих интересов профессионалу.
          </p>
        </div>
      </div>
    </section>
  );
}
