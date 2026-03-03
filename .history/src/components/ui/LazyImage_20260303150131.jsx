import React, { useState } from 'react'

const LazyImage = ({ src, alt, className, style }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative overflow-hidden w-full h-full">

      {/* Shimmer placeholder — shows while image loads */}
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`${className} transition-opacity duration-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={style}
      />
    </div>
  )
}

export default LazyImage