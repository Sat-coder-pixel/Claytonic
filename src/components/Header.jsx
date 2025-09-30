import { useEffect, useState } from "react"
import { useNavigate,Link } from 'react-router-dom'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
 const handleClick = (e) => {
    e.preventDefault();
    navigate("/"); // go home
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to Hero
  };
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
  
  const goToHash = (hash) => {
    // If already on home, just set location.hash so RouterWrapper handles it
    if (window.location.pathname === '/') {
      window.location.hash = hash ? `#${hash}` : '#'
      return
    }
    // navigate to home with the hash
    navigate('/#' + (hash || ''))
  }

  return (
    <header
      className={`fixed w-full z-40 transition-colors duration-300 ease-in-out ${
        // when scrolled show the light header; when mobile menu open force an opaque header
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md rounded-b-2xl"
          : open
          ? "bg-white backdrop-blur-md shadow-md"
          : "md:bg-transparent bg-black/40 md:backdrop-blur-0 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
  <Link
        to="/"
        onClick={handleClick}
        className={`${scrolled || open ? 'text-2xl font-extrabold bg-gradient-to-r from-slate-600 via-gray-700 to-slate-900 bg-clip-text text-transparent inline-block' : 'text-2xl font-extrabold text-white inline-block'}`}
      >
        Claytonic
      </Link>
  {/* <span className="hidden md:inline-block text-sm text-slate-600">
    Modern homes &amp; trusted construction
  </span> */}
</div>


        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <button
              key={l.name}
              onClick={() => goToHash(l.href.replace('#',''))}
              className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300
              hover:bg-gradient-to-r hover:from-slate-500 hover:to-slate-700 hover:text-slate-100
              group ${scrolled || open ? 'text-slate-700' : 'text-white md:text-slate-700'}`}
            >
              {l.name}
              {/* underline animation */}
              <span className="absolute left-1/2 -bottom-1 h-0.5 w-0 bg-slate-300 transition-all duration-300 group-hover:w-3/4 group-hover:left-1/4"></span>
            </button>

          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={`p-2 rounded-md hover:bg-slate-200 transition ${scrolled || open ? 'text-slate-700' : 'text-white'}`}
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
  className={`md:hidden fixed inset-0 h-full w-full bg-white z-50 shadow-lg transform transition-transform duration-300 ${
    open ? "translate-x-0" : "translate-x-full"
  }`}
>
  <div className="p-6">
    <div className="flex items-center justify-between mb-6">
      <a
        href="#"
        className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text "
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

    {/* Links */}
    <nav className="flex flex-col gap-2 bg-white">
      {links.map((l) => (
        <button
          key={l.name}
          onClick={() => {
            setOpen(false)
            goToHash(l.href.replace('#', ''))
          }}
          className="w-full text-left px-4 py-3 rounded-lg text-slate-700 font-medium 
                     hover:bg-slate-100 hover:text-indigo-600 transition"
        >
          {l.name}
        </button>
      ))}
    </nav>

    <div className="mt-6">
      <button
        onClick={() => { setOpen(false); goToHash('contact') }}
        className="inline-block w-full px-4 py-3 rounded-lg bg-gradient-to-r 
                   from-indigo-600 to-orange-500 text-white font-semibold shadow 
                   hover:shadow-lg transition"
      >
        Get a Quote
      </button>
    </div>
  </div>
</div>


    </header>
  )
}
