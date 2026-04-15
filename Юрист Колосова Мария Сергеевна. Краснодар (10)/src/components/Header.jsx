import { useState } from 'react';

const navLinks = [
  { href: '#about', label: 'Обо мне' },
  { href: '#education', label: 'Образование' },
  { href: '#services', label: 'Услуги' },
  { href: '#pricing', label: 'Работа по договору' },
  { href: '#reviews', label: 'Отзывы' },
  { href: '#contacts', label: 'Контакты' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[1000] bg-[#222] px-4 py-5 text-center shadow-lg md:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between md:justify-center">
        <h1 className="text-xl font-bold text-[#eee] md:text-2xl">
          Адвокат Колосова М.С.
        </h1>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#333] text-[#eee] transition-colors hover:bg-[#444] md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Меню"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      <nav
        className={`mt-4 overflow-hidden transition-all duration-300 md:mt-3 md:block ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 md:max-h-none md:opacity-100'
        }`}
      >
        <ul className="flex flex-col gap-2 md:flex-row md:justify-center md:gap-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="block font-semibold text-[#eee] no-underline transition-colors hover:text-[#d4af37] md:inline-block"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
