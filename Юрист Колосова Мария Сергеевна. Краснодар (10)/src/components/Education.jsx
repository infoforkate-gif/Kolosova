import { useState } from 'react';

/*
  Заполни массивы своими данными.
  diplomas — фотографии дипломов / удостоверений.
  education — текстовые записи об образовании.
  activity   — сведения об адвокатской деятельности.
*/

const diplomas = [
  // Раскомментируй и заполни когда загрузишь фото в папку public/diplomas/
  // { src: '/diplomas/diploma1.jpg', caption: 'Диплом о высшем юридическом образовании' },
  // { src: '/diplomas/diploma2.jpg', caption: 'Удостоверение адвоката' },
  // { src: '/diplomas/diploma3.jpg', caption: 'Повышение квалификации' },
];

const education = [
  {
    year: '', // например '2010'
    title: '', // например 'Кубанский государственный университет'
    detail: '', // например 'Юридический факультет, специальность «Юриспруденция»'
  },
];

const activity = [
  {
    year: '',   // например '2015 — н.в.'
    title: '',  // например 'Адвокат Адвокатской палаты Краснодарского края'
    detail: '', // например 'Регистрационный номер …'
  },
];

/* ── Лайтбокс для просмотра фото ── */
function Lightbox({ src, caption, onClose }) {
  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-[#999] hover:text-white text-2xl"
          aria-label="Закрыть"
        >
          ✕
        </button>
        <img
          src={src}
          alt={caption}
          className="w-full rounded-xl object-contain max-h-[80vh]"
        />
        {caption && (
          <p className="mt-3 text-center text-sm text-[#aaa]">{caption}</p>
        )}
      </div>
    </div>
  );
}

/* ── Карточка диплома ── */
function DiplomaCard({ src, caption }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative overflow-hidden rounded-xl border border-[#333] bg-[#1a1a1a] transition-all hover:border-[#d4af37]/60 hover:shadow-lg hover:shadow-black/40"
      >
        <img
          src={src}
          alt={caption}
          className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.target.src = 'https://placehold.co/400x300/1a1a1a/555?text=Диплом';
          }}
        />
        <div className="px-4 py-3">
          <p className="text-sm text-[#aaa] leading-snug">{caption}</p>
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all group-hover:bg-black/30">
          <span className="scale-0 rounded-full bg-[#d4af37] px-4 py-1.5 text-xs font-bold text-[#111] transition-transform group-hover:scale-100">
            Увеличить
          </span>
        </div>
      </button>
      {open && <Lightbox src={src} caption={caption} onClose={() => setOpen(false)} />}
    </>
  );
}

/* ── Строка таймлайна ── */
function TimelineItem({ year, title, detail }) {
  if (!title) return null;
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="h-3 w-3 shrink-0 rounded-full bg-[#d4af37] mt-1" />
        <div className="w-px flex-1 bg-[#333]" />
      </div>
      <div className="pb-6">
        {year && (
          <span className="mb-1 inline-block text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
            {year}
          </span>
        )}
        <p className="font-semibold text-[#eee]">{title}</p>
        {detail && <p className="mt-0.5 text-sm text-[#aaa]">{detail}</p>}
      </div>
    </div>
  );
}

export function Education() {
  const hasDiplomas = diplomas.length > 0;
  const hasEducation = education.some((e) => e.title);
  const hasActivity = activity.some((a) => a.title);

  return (
    <section id="education" className="reveal bg-[#0d0d0d] px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-10 text-2xl font-bold text-[#d4af37] md:text-3xl">
          Образование и деятельность
        </h2>

        {/* ── Образование ── */}
        {(hasEducation || !hasDiplomas) && (
          <div className="mb-10">
            <h3 className="mb-5 text-lg font-semibold text-[#eee]">Образование</h3>
            {hasEducation ? (
              <div>
                {education.map((item, i) => (
                  <TimelineItem key={i} {...item} />
                ))}
              </div>
            ) : (
              <p className="text-sm text-[#555] italic">— данные будут добавлены —</p>
            )}
          </div>
        )}

        {/* ── Адвокатская деятельность ── */}
        {(hasActivity || !hasDiplomas) && (
          <div className="mb-10">
            <h3 className="mb-5 text-lg font-semibold text-[#eee]">Адвокатская деятельность</h3>
            {hasActivity ? (
              <div>
                {activity.map((item, i) => (
                  <TimelineItem key={i} {...item} />
                ))}
              </div>
            ) : (
              <p className="text-sm text-[#555] italic">— данные будут добавлены —</p>
            )}
          </div>
        )}

        {/* ── Дипломы и удостоверения ── */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-[#eee]">Дипломы и удостоверения</h3>
          {hasDiplomas ? (
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {diplomas.map((d, i) => (
                <DiplomaCard key={i} {...d} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-[#333] px-6 py-10 text-center">
              <p className="text-[#555] text-sm">
                Загрузи фото дипломов в папку{' '}
                <code className="rounded bg-[#222] px-1 py-0.5 text-[#888]">public/diplomas/</code>{' '}
                и заполни массив <code className="rounded bg-[#222] px-1 py-0.5 text-[#888]">diplomas</code> в файле{' '}
                <code className="rounded bg-[#222] px-1 py-0.5 text-[#888]">Education.jsx</code>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
