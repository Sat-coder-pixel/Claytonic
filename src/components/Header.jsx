import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/Logo.jpg";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/"); // go home
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleContactClick = () => {
    navigate("/contact"); // navigate to contact page
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const goToHash = (hash) => {
    if (window.location.pathname === "/") {
      window.location.hash = hash ? `#${hash}` : "#";
      return;
    }
    navigate("/#" + (hash || ""));
  };

  return (
    <header
      className={`fixed w-full z-40 transition-colors duration-300 ease-in-out ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md rounded-b-2xl"
          : "md:bg-transparent bg-black/40 md:backdrop-blur-0 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Company Name */}
        <Link
          to="/"
          onClick={handleClick}
          className="flex items-center gap-3"
        >
          <img
            src={Logo}
            alt="Claytonic logo"
            className="h-8 md:h-10 w-auto rounded-sm"
          />
          <span
            className={`text-lg md:text-2xl font-extrabold ${
              scrolled ? "text-slate-800" : "text-white md:text-slate-700"
            }`}
          >
            Claytonic
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <button
              key={l.name}
              onClick={() => goToHash(l.href.replace("#", ""))}
              className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300
                hover:bg-gradient-to-r hover:from-slate-500 hover:to-slate-700 hover:text-slate-100
                ${scrolled ? "text-slate-700" : "text-white md:text-slate-700"}`}
            >
              {l.name}
              <span className="absolute left-1/2 -bottom-1 h-0.5 w-0 bg-slate-300 transition-all duration-300 group-hover:w-3/4 group-hover:left-1/4"></span>
            </button>
          ))}
        </div>

        {/* Mobile Contact Button */}
        <div className="md:hidden">
          <button
            onClick={handleContactClick}
            className="bg-amber-500 text-slate-900 px-4 py-2 rounded-lg"
          >
            Contact Us
          </button>
        </div>
      </nav>
    </header>
  );
}
