const guarantees = [
  { title: 'Юридические гарантии', icon: '⚖️', text: 'Полное соблюдение требований законодательства на каждом этапе работы.' },
  { title: 'Адвокатская тайна', icon: '🔒', text: 'Все сведения, переданные в рамках оказания юридической помощи, являются охраняемой тайной.' },
  { title: 'Индивидуальная стратегия', icon: '🎯', text: 'Для каждого дела разрабатывается персональная правовая позиция с учётом всех обстоятельств.' },
];

export function Pricing() {
  return (
    <section id="pricing" className="reveal px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-6 text-2xl font-bold text-[#d4af37] md:text-3xl">Работа по договору</h2>
        <p className="mb-4 leading-relaxed text-[#ccc]">
          Адвокат Колосова Мария Сергеевна предоставляет полный спектр юридических услуг
          в г. Краснодаре, Краснодарском крае и г. Москве.
        </p>
        <p className="mb-10 leading-relaxed text-[#ccc]">
          Вся работа ведётся исключительно по договору (соглашению), в котором чётко
          фиксируются условия сотрудничества, стоимость услуг, что обеспечивает
          прозрачность взаимоотношений и защиту интересов обеих сторон на всех этапах работы.
        </p>
        <div className="grid gap-5 sm:grid-cols-3">
          {guarantees.map(({ title, icon, text }) => (
            <div
              key={title}
              className="rounded-xl border border-[#333] bg-[#1a1a1a] p-5 transition-colors hover:border-[#d4af37]/40 hover:bg-[#222]"
            >
              <div className="mb-3 text-3xl">{icon}</div>
              <h3 className="mb-2 font-semibold text-[#d4af37]">{title}</h3>
              <p className="text-sm leading-relaxed text-[#aaa]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
