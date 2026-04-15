import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const physicalServices = [
  "Юридические консультации",
  "Правовой анализ документов",
  "Подготовка правовой стратегии",
  "Помощь в урегулировании споров в досудебном порядке",
  "Представление интересов в суде",
  "Представление интересов в органах прокуратуры",
  "Представление интересов в государственных и муниципальных органах",
  "Абонентское обслуживание «Семейный адвокат»",
];

const legalServices = [
  "Юридические консультации",
  "Правовой анализ документов",
  "Подготовка правовой стратегии",
  "Помощь урегулирования споров в досудебном порядке",
  "Представление интересов в суде",
  "Представление интересов в органах прокуратуры",
  "Представление интересов в государственных и муниципальных органах",
  "Абонентское обслуживание «Корпоративный адвокат»",
];

const directions = [
  {
    title: "Оказание юридической помощи по гражданским делам",
    items: [
      { title: "Взыскание долга в судебном порядке", detail: "по договорам займа, распискам" },
      { title: "Взыскание ущерба, причиненного в результате ДТП", detail: "" },
      { title: "Взыскание ущерба, причиненного имуществу", detail: "залитием, пожаром и т.д." },
      { title: "Жилищные споры", detail: "определение порядка пользования жилым помещением, о признании гражданина утратившим право пользования жилым помещением и т.д." },
      { title: "Семейные споры", detail: "расторжение брака, взыскание алиментов, определение места жительства ребенка, определение порядка общения ребенка с родителем/бабушкой/дедушкой, усыновление, лишение родительских прав, установление отцовства, раздел имущества супругов" },
      { title: "Наследственные дела", detail: "признание завещания недействительным, признание наследника незаконным, признание фактически принявшим наследство и т.д." },
      { title: "Защита прав потребителя", detail: "взыскание денежных средств за услугу/товар ненадлежащего качества, взыскание неустойки, компенсации морального вреда и штрафа, взыскание неустойки с застройщика, взыскание неустойки с ресурсоснабжающей организации" },
      { title: "Земельные споры", detail: "об устранении препятствий в пользовании земельным участком, сервитут, о сносе самовольной постройки, о приведении части земельного участка в соответствие, об освобождении самовольно занятого земельного участка и т.д." },
      { title: "Установление факта, имеющего юридическое значение", detail: "установление факта родства, установление факта принадлежности документа, установления наличия ошибки в документе" },
      { title: "Оспаривание действий/бездействий судебных приставов", detail: "" },
      { title: "Оспаривание решений органов государственной власти", detail: "" },
    ],
  },
  {
    title: "Оказание юридической помощи по арбитражным спорам",
    items: [
      { title: "Хозяйственные споры", detail: "" },
      { title: "Банкротство", detail: "" },
      { title: "Обособленные споры", detail: "" },
    ],
  },
  {
    title: "Защита интересов по уголовным делам",
    items: [
      { title: "Защита на всех стадиях производства по уголовному делу", detail: "" },
    ],
  },
];

function DirectionItem({ title, detail }: { title: string; detail: string }) {
  const [open, setOpen] = useState(false);
  const hasDetail = !!detail;

  return (
    <div className="border-b border-[#C8A676]/10 last:border-0">
      <button
        type="button"
        onClick={() => hasDetail && setOpen((o) => !o)}
        className={`flex w-full items-start gap-3 py-3 text-left transition-colors ${hasDetail ? "cursor-pointer hover:text-[#C8A676]" : "cursor-default"}`}
      >
        <span className="mt-0.5 shrink-0 text-[#C8A676]">✅</span>
        <span className="font-semibold text-[#EDE7DC] flex-1">{title}</span>
        {hasDetail && (
          open
            ? <ChevronUp className="w-4 h-4 text-[#C8A676] shrink-0 mt-0.5" />
            : <ChevronDown className="w-4 h-4 text-[#C8A676] shrink-0 mt-0.5" />
        )}
      </button>
      {hasDetail && open && (
        <p className="pb-3 pl-8 text-sm text-[#EDE7DC]/70 leading-relaxed">{detail}</p>
      )}
    </div>
  );
}

function DirectionAccordion({ title, items }: { title: string; items: { title: string; detail: string }[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-[#2D2D2D] to-[#130A06] rounded-2xl border border-[#C8A676]/20 hover:border-[#C8A676]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#A34827]/20 overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:text-[#C8A676]"
      >
        <h3 className="text-lg text-[#EDE7DC]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>
          {title}
        </h3>
        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#A34827]/30 to-[#C8A676]/20 rounded-xl flex items-center justify-center">
          {open
            ? <ChevronUp className="w-5 h-5 text-[#C8A676]" />
            : <ChevronDown className="w-5 h-5 text-[#C8A676]" />
          }
        </div>
      </button>
      {open && (
        <div className="px-6 pb-4">
          {items.map((item) => (
            <DirectionItem key={item.title} {...item} />
          ))}
        </div>
      )}
    </div>
  );
}

export function Services() {
  const [activeTab, setActiveTab] = useState<"physical" | "legal">("physical");
  const list = activeTab === "physical" ? physicalServices : legalServices;

  return (
    <>
      {/* ── Услуги ── */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#130A06] via-[#2D2D2D] to-[#130A06]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center mb-12 text-[#EDE7DC]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
            Услуги
          </h2>

          {/* Табы */}
          <div className="flex mb-8 rounded-2xl border border-[#C8A676]/20 overflow-hidden">
            <button
              type="button"
              onClick={() => setActiveTab("physical")}
              className={`flex-1 py-4 px-4 text-sm font-semibold transition-all duration-300 ${
                activeTab === "physical"
                  ? "bg-gradient-to-r from-[#A34827] to-[#B87333] text-[#EDE7DC] shadow-lg"
                  : "bg-[#1A1A1A] text-[#EDE7DC]/60 hover:text-[#EDE7DC]"
              }`}
            >
              Услуги для физических лиц
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("legal")}
              className={`flex-1 py-4 px-4 text-sm font-semibold transition-all duration-300 ${
                activeTab === "legal"
                  ? "bg-gradient-to-r from-[#A34827] to-[#B87333] text-[#EDE7DC] shadow-lg"
                  : "bg-[#1A1A1A] text-[#EDE7DC]/60 hover:text-[#EDE7DC]"
              }`}
            >
              Услуги для юридических лиц
            </button>
          </div>

          {/* Список */}
          <div className="bg-gradient-to-br from-[#2D2D2D] to-[#130A06] p-8 rounded-2xl border border-[#C8A676]/20">
            <ul className="space-y-3">
              {list.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#EDE7DC]/90">
                  <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-[#C8A676]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Направления деятельности ── */}
      <section id="directions" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#130A06] via-[#1A1A1A] to-[#130A06]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center mb-12 text-[#EDE7DC]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
            Направления деятельности
          </h2>
          <div className="space-y-4">
            {directions.map((dir) => (
              <DirectionAccordion key={dir.title} {...dir} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
