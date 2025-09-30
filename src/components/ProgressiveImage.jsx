import { useState } from 'react'

export default function ProgressiveImage({ src, alt = '', className = '', style = {}, ...rest }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      {/* placeholder skeleton */}
      <div
        aria-hidden
        className={`absolute inset-0 bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 transition-opacity duration-700 ${loaded ? 'opacity-0' : 'opacity-100'}`}
      />

      {/* low-overhead image */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-transform duration-700 ${loaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}`}
        {...rest}
      />
    </div>
  )
}
