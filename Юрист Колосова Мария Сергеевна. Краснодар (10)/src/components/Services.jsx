import { useState } from 'react';

const physicalServices = [
  'Юридические консультации',
  'Правовой анализ документов',
  'Подготовка правовой стратегии',
  'Помощь в урегулировании споров в досудебном порядке',
  'Представление интересов в суде',
  'Представление интересов в органах прокуратуры',
  'Представление интересов в государственных и муниципальных органах',
  'Абонентское обслуживание «Семейный адвокат»',
];

const legalServices = [
  'Юридические консультации',
  'Правовой анализ документов',
  'Подготовка правовой стратегии',
  'Помощь урегулирования споров в досудебном порядке',
  'Представление интересов в суде',
  'Представление интересов в органах прокуратуры',
  'Представление интересов в государственных и муниципальных органах',
  'Абонентское обслуживание «Корпоративный адвокат»',
];

const directions = [
  {
    title: 'Оказание юридической помощи по гражданским делам',
    items: [
      { title: 'Взыскание долга в судебном порядке', detail: 'по договорам займа, распискам' },
      { title: 'Взыскание ущерба, причиненного в результате ДТП', detail: '' },
      { title: 'Взыскание ущерба, причиненного имуществу', detail: 'залитием, пожаром и т.д.' },
      { title: 'Жилищные споры', detail: 'определение порядка пользования жилым помещением, о признании гражданина утратившим право пользования жилым помещением и т.д.' },
      { title: 'Семейные споры', detail: 'расторжение брака, взыскание алиментов, определение места жительства ребенка, определение порядка общения ребенка с родителем/бабушкой/дедушкой, усыновление, лишение родительских прав, установление отцовства, раздел имущества супругов' },
      { title: 'Наследственные дела', detail: 'признание завещания недействительным, признание наследника незаконным, признание фактически принявшим наследство и т.д.' },
      { title: 'Защита прав потребителя', detail: 'взыскание денежных средств за услугу/товар ненадлежащего качества, взыскание неустойки, компенсации морального вреда и штрафа, взыскание неустойки с застройщика, взыскание неустойки с ресурсоснабжающей организации' },
      { title: 'Земельные споры', detail: 'об устранении препятствий в пользовании земельным участком, сервитут, о сносе самовольной постройки, о приведении части земельного участка в соответствие, об освобождении самовольно занятого земельного участка и т.д.' },
      { title: 'Установление факта, имеющего юридическое значение', detail: 'установление факта родства, установление факта принадлежности документа, установления наличия ошибки в документе' },
      { title: 'Оспаривание действий/бездействий судебных приставов', detail: '' },
      { title: 'Оспаривание решений органов государственной власти', detail: '' },
    ],
  },
  {
    title: 'Оказание юридической помощи по арбитражным спорам',
    items: [
      { title: 'Хозяйственные споры', detail: '' },
      { title: 'Банкротство', detail: '' },
      { title: 'Обособленные споры', detail: '' },
    ],
  },
  {
    title: 'Защита интересов по уголовным делам',
    items: [
      { title: 'Защита на всех стадиях производства по уголовному делу', detail: '' },
    ],
  },
];

function DirectionItem({ title, detail }) {
  const [open, setOpen] = useState(false);
  const hasDetail = !!detail;
  return (
    <div className="border-b border-[#2a2a2a] last:border-0">
      <button
        type="button"
        onClick={() => hasDetail && setOpen((o) => !o)}
        className={`flex w-full items-start gap-3 py-3 text-left transition-colors ${hasDetail ? 'cursor-pointer hover:text-[#d4af37]' : 'cursor-default'}`}
      >
        <span className="mt-0.5 shrink-0 text-[#d4af37]">✅</span>
        <span className="font-semibold text-[#eee]">{title}</span>
        {hasDetail && (
          <span
            className="ml-auto shrink-0 text-[#666] transition-transform duration-200"
            style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >▾</span>
        )}
      </button>
      {hasDetail && open && (
        <p className="pb-3 pl-8 text-sm leading-relaxed text-[#aaa]">{detail}</p>
      )}
    </div>
  );
}

function DirectionAccordion({ title, items }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-xl border border-[#333] bg-[#1a1a1a] transition-colors hover:border-[#d4af37]/40">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-[#eee] transition-colors hover:text-[#d4af37] md:text-lg"
      >
        <span>{title}</span>
        <span
          className="shrink-0 text-xl text-[#d4af37] transition-transform duration-300"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >+</span>
      </button>
      {open && (
        <div className="px-6 pb-5">
          {items.map((item) => (
            <DirectionItem key={item.title} {...item} />
          ))}
        </div>
      )}
    </div>
  );
}

export function Services() {
  const [activeTab, setActiveTab] = useState('physical');
  const list = activeTab === 'physical' ? physicalServices : legalServices;

  return (
    <>
      {/* ── Услуги ── */}
      <section id="services" className="reveal bg-[#0d0d0d] px-4 py-14 md:px-6 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-[#d4af37] md:text-3xl">Услуги</h2>
          <div className="mb-6 flex overflow-hidden rounded-xl border border-[#333]">
            <button
              type="button"
              onClick={() => setActiveTab('physical')}
              className={`flex-1 px-4 py-3 text-sm font-semibold transition-colors md:text-base ${activeTab === 'physical' ? 'bg-[#d4af37] text-[#111]' : 'bg-[#1a1a1a] text-[#999] hover:text-[#eee]'}`}
            >
              Услуги для физических лиц
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('legal')}
              className={`flex-1 px-4 py-3 text-sm font-semibold transition-colors md:text-base ${activeTab === 'legal' ? 'bg-[#d4af37] text-[#111]' : 'bg-[#1a1a1a] text-[#999] hover:text-[#eee]'}`}
            >
              Услуги для юридических лиц
            </button>
          </div>
          <ul className="space-y-2">
            {list.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#ccc]">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d4af37]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Направления деятельности ── */}
      <section id="directions" className="reveal px-4 py-14 md:px-6 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-[#d4af37] md:text-3xl">Направления деятельности</h2>
          <div className="space-y-3">
            {directions.map((dir) => (
              <DirectionAccordion key={dir.title} {...dir} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
