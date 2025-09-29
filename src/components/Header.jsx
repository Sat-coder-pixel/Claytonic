import { useEffect, useState } from "react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md rounded-b-2xl"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="text-2xl font-extrabold bg-gradient-to-r from-slate-600 via-gray-700 to-slate-900 bg-clip-text text-transparent"
          >
            HomeBuilder
          </a>
          <span className="hidden md:inline-block text-sm text-slate-600">
            Modern homes & trusted construction
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
  key={l.name}
  href={l.href}
  className="relative px-4 py-2 rounded-full text-slate-700 font-medium transition-all duration-300
  hover:bg-gradient-to-r hover:from-slate-500 hover:to-slate-700 hover:text-slate-100
  group"
>
  {l.name}
  {/* underline animation */}
  <span className="absolute left-1/2 -bottom-1 h-0.5 w-0 bg-slate-300 transition-all duration-300 group-hover:w-3/4 group-hover:left-1/4"></span>
</a>

          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md text-slate-700 hover:bg-slate-200 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  open
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile slide-out */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white/95 backdrop-blur-md shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <a
              href="#"
              className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text text-transparent"
            >
              HomeBuilder
            </a>
            <button
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="p-2 rounded-md hover:bg-slate-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-md text-slate-700 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-orange-400 hover:text-white transition"
              >
                {l.name}
              </a>
            ))}
          </nav>

          <div className="mt-6">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-orange-500 text-white font-medium shadow hover:shadow-lg transition"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
