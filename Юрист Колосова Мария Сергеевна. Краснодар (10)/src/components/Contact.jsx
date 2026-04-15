export function Contact() {
  return (
    <section id="contacts" className="reveal bg-[#0d0d0d] px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-2xl font-bold text-[#d4af37] md:text-3xl">Контакты</h2>
        <div className="space-y-3 text-[#ccc]">
          <p>
            Телефон:{' '}
            <a href="tel:+79189034717" className="text-[#d4af37] transition-colors hover:text-[#b8912e]">
              +7 918 903-47-17
            </a>
          </p>
          <p>
            Email:{' '}
            <a href="mailto:89189034717@mail.ru" className="text-[#d4af37] underline transition-colors hover:text-[#b8912e]">
              89189034717@mail.ru
            </a>
          </p>
          <p>Адрес: г. Краснодар, Сады Калинина, ул. Средняя, д. 20/1</p>
        </div>
      </div>
    </section>
  );
}
