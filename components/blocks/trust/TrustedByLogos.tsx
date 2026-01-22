import { AutoImage } from '@/components/AutoImage'
import { cn } from '@/lib/utils'

interface TrustedByLogosProps {
  /** Testo introduttivo */
  text?: string
  /** Numero di loghi da mostrare */
  logoCount?: number
  /** Animazione scroll infinito */
  animated?: boolean
  /** Classi aggiuntive */
  className?: string
}

/**
 * TrustedByLogos - Barra loghi clienti
 * 
 * QUESTO COMPONENTE VA MONTATO SOLO SE IL BRIEF INCLUDE CLIENTI
 * 
 * L'agente deve inserire i file client-1.png, client-2.png, etc. in public/images/
 */
export function TrustedByLogos({
  text = 'Trusted by industry leaders',
  logoCount = 5,
  animated = false,
  className,
}: TrustedByLogosProps) {
  const logos = Array.from({ length: logoCount }, (_, i) => `client-${i + 1}`)

  return (
    <div className={cn('py-12 px-4', className)}>
      <div className="container mx-auto max-w-5xl">
        {/* Label */}
        <p className="text-xs font-medium text-muted-foreground mb-8 uppercase tracking-[0.25em] text-center font-mono">
          {text}
        </p>
        
        {/* Logos */}
        <div className={cn(
          'flex flex-wrap justify-center items-center gap-x-12 gap-y-6',
          animated && 'animate-scroll'
        )}>
          {logos.map((baseName) => (
            <div 
              key={baseName}
              className="opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              <AutoImage
                baseName={baseName}
                alt={`Client logo`}
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

