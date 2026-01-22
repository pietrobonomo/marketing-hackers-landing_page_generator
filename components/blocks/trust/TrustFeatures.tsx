import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { DynamicIcon } from '@/components/blocks/icons'
import { cn } from '@/lib/utils'
import { CheckCircle } from 'lucide-react'

interface TrustFeature {
  id: string
  title: string
  description: string
}

interface TrustFeaturesProps {
  /** Titolo della sezione */
  title: string
  /** Sottotitolo */
  subtitle?: string
  /** Lista delle trust features */
  features: TrustFeature[]
  /** Mostra badge "Verified" */
  showBadge?: boolean
  /** Classi aggiuntive */
  className?: string
}

/**
 * TrustFeatures - Griglia di elementi di fiducia
 * 
 * Ideale per: Social proof, certificazioni, garanzie
 */
export function TrustFeatures({
  title,
  subtitle,
  features,
  showBadge = true,
  className,
}: TrustFeaturesProps) {
  return (
    <section className={cn('py-24 px-4 bg-surface/30', className)}>
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

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card 
              key={feature.id} 
              className="bg-background/50 border-border/50 text-center hover:border-primary/30 transition-all duration-300"
            >
              <CardHeader className="pb-3">
                {showBadge && (
                  <div className="flex justify-center mb-3">
                    <Badge 
                      variant="outline" 
                      className="font-mono text-xs border-primary/30 text-primary"
                    >
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  </div>
                )}
                <CardTitle className="text-lg font-semibold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

