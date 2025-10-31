import { useEffect, useState } from 'react'
import uhd_30fps from '../assets/uhd_30fps.mp4'; // Replace with your video path
export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background video - replace src with your own MP4 or use a hosted asset */}
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
        <source src={uhd_30fps} type="video/mp4" />
      </video>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/60" />

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-3xl text-center text-white">
           <h1
    className={`text-4xl sm:text-5xl md:text-5xl font-extrabold leading-snug md:leading-tight tracking-tight 
      ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} 
      transition-all duration-700`}
  >
    We’re in beta! <br className="hidden sm:block" />
    You’re getting an early look <br className="hidden sm:block" />
    while we polish things up — <br className="hidden md:block" />
    <span className="text-amber-400">thanks for your patience.</span>
  </h1>

          {/* <p className={`mt-4 text-lg sm:text-xl text-slate-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-800`}>Trusted builder with modern designs and quality construction.</p> */}

          <div className={`mt-8 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-900`}>
            <a href="#portfolio" className="inline-block bg-amber-500 text-slate-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transform transition">Explore Projects</a>
          </div>
        </div>
      </div>
    </section>
  )
}
