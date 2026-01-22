import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DynamicIcon } from '@/components/blocks/icons'
import { cn } from '@/lib/utils'

interface Feature {
  id: string
  name: string
  description?: string
}

interface Features2x2Props {
  /** Titolo della sezione */
  title: string
  /** Sottotitolo */
  subtitle?: string
  /** Lista delle 4 features */
  features: Feature[]
  /** Classi aggiuntive */
  className?: string
}

/**
 * Features 2x2 - Layout griglia 2 colonne x 2 righe
 * 
 * Ideale per: Esattamente 4 features principali, pillars di valore
 * Come specificato nel brief Design Team.
 */
export function Features2x2({
  title,
  subtitle,
  features,
  className,
}: Features2x2Props) {
  // Prendi solo le prime 4 features
  const displayFeatures = features.slice(0, 4)

  return (
    <section className={cn('py-24 px-4', className)}>
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight font-heading">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayFeatures.map((feature, index) => (
            <Card 
              key={feature.id} 
              className="bg-surface/50 border-border/50 hover:border-primary/30 transition-all duration-300 group p-8"
            >
              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <DynamicIcon 
                    name={feature.name} 
                    size={28} 
                    strokeWidth={1.25}
                    className="text-primary"
                  />
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-heading">
                    {feature.name}
                  </h3>
                  {feature.description && (
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

