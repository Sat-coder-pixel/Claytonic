import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import projects from '../data/projects'
import { motion } from 'framer-motion'

// Small count-up hook (no dependency) — animates from 0 to target when `start` becomes true
function useCountUp(target, duration = 900, start = true) {
  const [value, setValue] = useState(0)
  const raf = useRef(null)

  useEffect(() => {
    if (!start) return
    let startTs = null
    const step = (ts) => {
      if (!startTs) startTs = ts
      const progress = Math.min((ts - startTs) / duration, 1)
      setValue(Math.round(progress * target))
      if (progress < 1) raf.current = requestAnimationFrame(step)
    }
    raf.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf.current)
  }, [target, duration, start])

  return value
}

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find((p) => p.id === id)

  if (!project) return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Project not found.</p>
      <Link to="/">Back home</Link>
    </div>
  )

  // Ensure we start at top when navigating to this page
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [id])

  return (
    <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }} className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto p-6">

        <motion.div layout className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
          {/* Back button - fixed so it remains visible while scrolling */}
          <button onClick={() => navigate(-1)} aria-label="Go back" className="fixed left-4 top-4 z-50 inline-flex items-center gap-3 bg-white/95 text-slate-800 px-4 py-2 rounded-md shadow-md text-base font-medium hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400">
            <span className="text-2xl leading-none">←</span>
            <span>Back</span>
          </button>

          <div className="relative h-56 md:h-72">
            <motion.img src={project.hero} alt={project.title} className="w-full h-full object-cover" initial={{ scale: 1.08, y: -8, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} transition={{ duration: 0.9 }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute left-6 bottom-6 text-white">
              <h1 className="text-2xl md:text-3xl font-extrabold">{project.title}</h1>
              <p className="text-sm mt-1">{project.location} • {project.year}</p>
            </div>
          </div>

          <div className="p-6 md:p-12 grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <motion.h2 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="text-2xl font-bold mb-4">Project Overview</motion.h2>
              <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-slate-700 leading-relaxed">{project.desc} This sample project page demonstrates an animated layout with image hero, project facts, and features. Replace this dummy content with the real project narrative, architect notes, and construction details.</motion.p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="p-4 bg-slate-50 rounded-lg">
                  <h4 className="text-sm text-slate-500">Area</h4>
                  <p className="font-semibold">{project.area}</p>
                </motion.div>
                <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.35 }} className="p-4 bg-slate-50 rounded-lg">
                  <h4 className="text-sm text-slate-500">Estimated Cost</h4>
                  <p className="font-semibold">{project.cost}</p>
                </motion.div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {project.features.map((f) => (
                    <motion.li key={f} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex items-center gap-3 bg-slate-50 p-3 rounded-md">
                      <div className="w-9 h-9 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                      <span className="text-slate-700">{f}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              {/* Stats - animated count-up */}
              {project.stats && (
                <div className="mt-10">
                  <h3 className="text-lg font-semibold mb-4">Project Statistics</h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {project.stats.map((s, idx) => {
                      const val = useCountUp(s.value, 900 + idx * 120, true)
                      return (
                        <motion.div key={s.label} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + idx * 0.08 }} className="p-4 bg-white border rounded-lg shadow-sm">
                          <div className="text-2xl font-bold text-slate-800">{val}</div>
                          <div className="text-sm text-slate-500">{s.label}</div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>

            <aside>
              <div className="p-6 bg-gradient-to-b from-slate-900 to-slate-800 text-white rounded-xl shadow-lg">
                <h4 className="text-sm text-amber-300">Project Facts</h4>
                <div className="mt-4 space-y-4">
                  <div>
                    <div className="text-xs text-slate-200">Completion</div>
                    <div className="font-semibold">{project.year}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-200">Location</div>
                    <div className="font-semibold">{project.location}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-200">Area</div>
                    <div className="font-semibold">{project.area}</div>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="w-full bg-amber-400 text-slate-900 py-2 rounded-full font-semibold hover:scale-105 transform transition">Request Brochure</button>
                </div>
              </div>

              {/* Timeline */}
              {project.timeline && (
                <div className="mt-6 text-sm">
                  <h4 className="mb-3 font-semibold">Project Timeline</h4>
                  <ol className="border-l border-slate-200 dark:border-slate-700 ml-4">
                    {project.timeline.map((t, i) => (
                      <motion.li key={t.title} className="mb-6 pl-4 relative" initial={{ opacity: 0, x: 6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.08 }}>
                        <div className="absolute -left-6 top-0 w-3 h-3 bg-amber-400 rounded-full shadow" />
                        <div className="text-xs text-slate-700">{t.year}</div>
                        <div className="font-medium text-slate-500">{t.title}</div>
                      </motion.li>
                    ))}
                  </ol>
                </div>
              )}
            </aside>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
