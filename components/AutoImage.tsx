'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface AutoImageProps {
  /** Nome base del file senza estensione (es. "logo" cerca logo.png, logo.jpg, logo.svg) */
  baseName: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
}

// Ordine di priorità delle estensioni
const EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp', '.svg']

/**
 * Componente immagine automatico
 * 
 * Cerca automaticamente il file con diverse estensioni:
 * 1. logo.png
 * 2. logo.jpg
 * 3. logo.jpeg
 * 4. logo.webp
 * 5. logo.svg
 * 
 * Basta mettere il file in public/images/ con il nome corretto!
 */
export function AutoImage({
  baseName,
  alt,
  width = 400,
  height = 300,
  className,
  priority = false,
  fill = false,
}: AutoImageProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [allFailed, setAllFailed] = useState(false)

  // Reset quando cambia baseName
  useEffect(() => {
    setCurrentIndex(0)
    setIsLoaded(false)
    setAllFailed(false)
  }, [baseName])

  // Se tutte le estensioni falliscono, non mostrare nulla
  if (allFailed) {
    return null
  }

  const currentSrc = `/images/${baseName}${EXTENSIONS[currentIndex]}`

  const handleError = () => {
    if (currentIndex < EXTENSIONS.length - 1) {
      // Prova la prossima estensione
      setCurrentIndex(prev => prev + 1)
    } else {
      // Tutte le estensioni fallite
      setAllFailed(true)
    }
  }

  return (
    <Image
      key={currentSrc} // Forza re-render quando cambia src
      src={currentSrc}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      className={cn(
        'transition-opacity duration-300',
        isLoaded ? 'opacity-100' : 'opacity-0',
        className
      )}
      priority={priority}
      quality={90}
      onError={handleError}
      onLoad={() => setIsLoaded(true)}
    />
  )
}
