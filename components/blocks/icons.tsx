'use client'

import {
  Layers,
  Sparkles,
  Shield,
  Zap,
  Brain,
  Target,
  Palette,
  Users,
  Rocket,
  Lock,
  Award,
  TrendingUp,
  Eye,
  Wand2,
  Compass,
  Crown,
  Diamond,
  Gem,
  Star,
  Heart,
  type LucideIcon,
} from 'lucide-react'

// Mappa keyword → icona
const iconMap: Record<string, LucideIcon> = {
  // Creatività e Design
  'orchestrazione': Layers,
  'creativ': Palette,
  'design': Palette,
  'visuale': Eye,
  'visual': Eye,
  'estetica': Sparkles,
  
  // Brand e Coerenza
  'brand': Shield,
  'coerenza': Shield,
  'identità': Shield,
  'memoria': Brain,
  'memory': Brain,
  
  // Velocità e Performance
  'velocità': Zap,
  'speed': Zap,
  'omnichannel': Zap,
  'esecuzione': Rocket,
  'execution': Rocket,
  
  // Qualità e Lusso
  'élite': Crown,
  'elite': Crown,
  'lusso': Diamond,
  'luxury': Diamond,
  'premium': Gem,
  'qualità': Award,
  'quality': Award,
  
  // Strategia
  'strategia': Compass,
  'strategy': Compass,
  'target': Target,
  'obiettivo': Target,
  
  // AI e Tech
  'ai': Brain,
  'intelligenza': Brain,
  'automazione': Wand2,
  'automation': Wand2,
  
  // Team e Community
  'team': Users,
  'community': Users,
  'collaborazione': Users,
  
  // Crescita
  'crescita': TrendingUp,
  'growth': TrendingUp,
  'risultati': TrendingUp,
  
  // Trust
  'sicurezza': Lock,
  'security': Lock,
  'protezione': Lock,
  'fiducia': Heart,
  'trust': Heart,
  
  // Default
  'default': Star,
}

/**
 * Restituisce l'icona Lucide appropriata per un testo
 */
export function getIconForText(text: string): LucideIcon {
  const lowerText = text.toLowerCase()
  
  for (const [keyword, icon] of Object.entries(iconMap)) {
    if (lowerText.includes(keyword)) {
      return icon
    }
  }
  
  return iconMap['default']
}

/**
 * Componente icona dinamica
 */
interface DynamicIconProps {
  name: string
  size?: number
  strokeWidth?: number
  className?: string
}

export function DynamicIcon({ 
  name, 
  size = 24, 
  strokeWidth = 1.5,
  className = ''
}: DynamicIconProps) {
  const IconComponent = getIconForText(name)
  
  return (
    <IconComponent 
      size={size} 
      strokeWidth={strokeWidth}
      className={className}
    />
  )
}

// Export di tutte le icone per uso diretto
export {
  Layers,
  Sparkles,
  Shield,
  Zap,
  Brain,
  Target,
  Palette,
  Users,
  Rocket,
  Lock,
  Award,
  TrendingUp,
  Eye,
  Wand2,
  Compass,
  Crown,
  Diamond,
  Gem,
  Star,
  Heart,
}

