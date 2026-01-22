import { Button } from '@/components/ui/button'
import { AutoImage } from '@/components/AutoImage'
import { cn } from '@/lib/utils'

interface HeroSplitProps {
  /** Logo testuale o nome brand */
  logo?: string
  /** Strapline sopra la headline */
  strapline?: string
  /** Headline principale */
  headline: string
  /** Subheadline descrittiva */
  subheadline: string
  /** Testo del pulsante CTA */
  ctaText: string
  /** Link del CTA */
  ctaLink?: string
  /** Microcopy sotto il CTA */
  microcopy?: string
  /** Nome base immagine hero (senza estensione) */
  heroImage?: string
  /** Direzione: immagine a destra o sinistra */
  imagePosition?: 'left' | 'right'
  /** Classi aggiuntive */
  className?: string
}

/**
 * Hero Split - Layout 50/50 con immagine
 * 
 * Ideale per: Prodotti visivi, e-commerce, app showcase
 */
export function HeroSplit({
  logo,
  strapline,
  headline,
  subheadline,
  ctaText,
  ctaLink = '#signup',
  microcopy,
  heroImage = 'hero',
  imagePosition = 'right',
  className,
}: HeroSplitProps) {
  return (
    <header 
      className={cn(
        'min-h-[80vh] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 py-16',
        className
      )}
    >
      {/* Content */}
      <div className={cn(
        'flex flex-col justify-center',
        imagePosition === 'left' && 'lg:order-2'
      )}>
        {/* Logo */}
        {logo && (
          <span className="text-sm font-semibold tracking-[0.3em] uppercase text-primary mb-6">
            {logo}
          </span>
        )}

        {/* Strapline */}
        {strapline && (
          <p className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-[0.2em] font-mono">
            {strapline}
          </p>
        )}

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-[0.95] tracking-tight font-heading">
          {headline}
        </h1>

        {/* Subheadline */}
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
          {subheadline}
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <Button 
            size="lg" 
            className="text-base px-8 py-6 rounded-full bg-foreground text-background hover:bg-foreground/90"
            asChild
          >
            <a href={ctaLink}>
              {ctaText}
            </a>
          </Button>
          
          {microcopy && (
            <p className="text-sm text-muted-foreground font-mono self-center">
              {microcopy}
            </p>
          )}
        </div>
      </div>

      {/* Image */}
      <div className={cn(
        'relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden',
        imagePosition === 'left' && 'lg:order-1'
      )}>
        <AutoImage
          baseName={heroImage}
          alt="Hero"
          fill
          className="object-cover"
          priority
        />
      </div>
    </header>
  )
}

