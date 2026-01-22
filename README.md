# 🚀 AI Landing Page Generator by Marketing Hackers

<p align="center">
  <strong>Genera landing page professionali in minuti, non giorni.</strong>
</p>

<p align="center">
  <a href="https://marketinghackers.it">
    <img src="https://img.shields.io/badge/Made%20by-Marketing%20Hackers-blue?style=for-the-badge" alt="Made by Marketing Hackers">
  </a>
  <a href="https://github.com/pietrobonomo/marketing-hackers-landing_page_generator/stargazers">
    <img src="https://img.shields.io/github/stars/pietrobonomo/marketing-hackers-landing_page_generator?style=for-the-badge&color=yellow" alt="GitHub Stars">
  </a>
  <a href="https://nextjs.org/">
    <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js">
  </a>
  <a href="https://vercel.com">
    <img src="https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel" alt="Deploy with Vercel">
  </a>
</p>

<p align="center">
  <b>⭐ Se questo progetto ti è utile, lascia una stella! Ci aiuta a crescere.</b>
</p>

---

Un sistema modulare che permette a qualsiasi AI agent (anche modelli locali) di creare landing page complete partendo da un semplice brief testuale.

---

## 🎯 Cos'è e a Chi Serve

Questo repository è uno **skeleton intelligente**: una struttura vuota che un AI agent popola automaticamente leggendo il tuo brief di marketing.

### Perfetto per:

- **Imprenditori digitali** che vogliono landing page di qualità senza dipendere da agenzie
- **Marketing Manager** che devono lanciare campagne velocemente
- **Freelancer** che vogliono scalare la produzione di landing page
- **Agenzie** che cercano un sistema ripetibile per i clienti

### Il Problema che Risolve

| ❌ Metodo Tradizionale | ✅ Con Questo Sistema |
|------------------------|----------------------|
| Settimane di attesa per l'agenzia | Minuti con un brief |
| €2.000-5.000 per landing page | Costo zero (solo hosting) |
| Revisioni infinite | Output coerente al brief |
| Dipendenza da designer/dev | Autonomia totale |

---

## 🧠 La Scienza Dietro

### Architettura "Agent-First"

Questo sistema è progettato con una filosofia **Agent-First**: ogni istruzione è scritta per essere eseguita da un AI agent, non letta da un umano.

```
.cursor/rules/
├── agent-workflow.mdc     ← Workflow step-by-step
├── parsing-brief.mdc      ← Regole di estrazione testi
├── fonts.mdc              ← Configurazione tipografia
├── colors.mdc             ← Configurazione palette
├── hero-blocks.mdc        ← Istruzioni Hero section
├── features-blocks.mdc    ← Istruzioni Features
├── trust-blocks.mdc       ← Istruzioni Trust elements
└── content-blocks.mdc     ← Istruzioni Blog/Content
```

### Componenti Atomici

Ogni sezione è un **componente riutilizzabile** che l'agent monta solo se richiesto nel brief:

```tsx
// L'agent importa SOLO ciò che serve
import { HeroCentered, FeaturesGrid, TrustFeatures } from '@/components/blocks'
```

### Parsing Meccanico

Le istruzioni sono **meccaniche, non interpretative**:

```
Brief dice: "Main Categories: Aesthetic Engine • Brandbook • Agenti"
Agent fa: split('•') → 3 features con name esatto
```

**Zero interpretazione = Zero errori.**

---

## ⚡ Quick Start

### 1. Clona il Repository

```bash
git clone https://github.com/pietrobonomo/marketing-hackers-landing_page_generator.git
cd marketing-hackers-landing_page_generator
```

### 2. Installa le Dipendenze

```bash
npm install
```

> ⚠️ **Requisito**: Node.js 18, 20 o 22 LTS. Non usare Node.js 24.

### 3. Avvia il Server di Sviluppo

```bash
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) - vedrai lo skeleton vuoto.

### 4. Incolla il Brief

Apri la chat con il tuo AI agent (Cursor, Windsurf, etc.) e incolla il tuo brief nel formato:

```
==== HERO SECTION ====
Strapline: Il tuo messaggio qui
Headline: Il titolo principale
Subheadline: La descrizione
CTA: Testo del bottone

==== PRODUCT OFFERING ====
Section Title: Cosa Offriamo
Main Categories: Feature 1 • Feature 2 • Feature 3

==== TRUST & REASSURANCE ====
Trust Header: Perché Sceglierci
Social Proof: **• Punto 1:** Descrizione...

==== CONTENT / BLOG ====
Header: Le Nostre Risorse
Topic Ideas: • **Titolo 1:** Descrizione...
```

### 5. Deploy su Vercel

```bash
git add .
git commit -m "Landing page generata"
git push origin main
```

Collega il repository a [Vercel](https://vercel.com) per deploy automatico.

---

## 📁 Struttura del Progetto

```
marketing-hackers-landing_page_generator/
├── .cursor/rules/          ← Istruzioni per l'AI agent
├── app/
│   ├── layout.tsx          ← Font e configurazione
│   ├── page.tsx            ← Pagina principale (skeleton)
│   └── globals.css         ← Stili globali
├── components/
│   ├── blocks/             ← Componenti modulari
│   │   ├── hero/           ← HeroCentered, HeroSplit
│   │   ├── features/       ← FeaturesGrid, Features2x2
│   │   ├── trust/          ← TrustFeatures, Guarantee
│   │   └── content/        ← ArticlesList, ArticlesMasonry
│   ├── ui/                 ← Componenti shadcn/ui
│   └── AutoImage.tsx       ← Gestione immagini automatica
├── config/
│   └── design-tokens.css   ← Colori e tipografia
├── public/images/          ← Le tue immagini
├── AGENTS.md               ← Guida rapida per l'agent
└── README.md               ← Questo file
```

---

## 🎨 Personalizzazione Design

### Colori

L'agent modifica automaticamente `config/design-tokens.css`:

```css
.dark {
  --dt-background: #09090B;  /* Sfondo */
  --dt-surface: #18181B;     /* Cards */
  --dt-primary: #3B82F6;     /* Accent/CTA */
  --dt-text: #FAFAFA;        /* Testo principale */
}
```

### Font

L'agent modifica `app/layout.tsx` per importare i font richiesti da Google Fonts.

### Immagini

Inserisci le tue immagini in `public/images/` con nomi convenzionali:
- `logo.png` - Logo del brand
- `hero-background.jpg` - Sfondo hero
- `article-1.jpg`, `article-2.jpg` - Thumbnail articoli

Il componente `AutoImage` le trova automaticamente.

---

## 🔧 Componenti Disponibili

| Componente | Uso | Props Principali |
|------------|-----|------------------|
| `HeroCentered` | Hero monumentale centrato | headline, subheadline, ctaText |
| `HeroSplit` | Hero 50/50 con immagine | headline, image |
| `FeaturesGrid` | Griglia 2-3-4 colonne | features[], columns |
| `Features2x2` | Griglia 2x2 | features[] (4 items) |
| `TrustFeatures` | Trust elements | features[] con title+description |
| `TrustedByLogos` | Barra loghi clienti | clients[] |
| `Guarantee` | Blocco garanzia | title, description, days |
| `ArticlesList` | Lista editoriale | articles[] |
| `ArticlesMasonry` | Layout magazine | articles[] |

---

## 📋 Template Brief Completo

Copia questo template e personalizzalo:

```markdown
==== DESIGN TOKENS ====
Theme: Dark
Primary Color: #3B82F6
Font Headings: Inter (Sans-serif)
Font Body: Inter

==== HERO SECTION ====
Strapline: [La tua strapline]
Headline: [Il titolo principale - max 10 parole]
Subheadline: [La descrizione - 2-3 righe]
CTA Text: [Testo del bottone]

==== PRODUCT OFFERING ====
Section Title: [Titolo sezione]
Main Categories: [Cat 1] • [Cat 2] • [Cat 3]

==== TRUST & REASSURANCE ====
Trust Header: [Titolo sezione trust]
Social Proof:
**• [Punto 1]:** [Descrizione punto 1]
**• [Punto 2]:** [Descrizione punto 2]
**• [Punto 3]:** [Descrizione punto 3]

==== CONTENT / BLOG ====
Header: [Titolo sezione contenuti]
Topic Ideas:
• **[Titolo articolo 1]:** [Descrizione]
• **[Titolo articolo 2]:** [Descrizione]
• **[Titolo articolo 3]:** [Descrizione]
```

---

## 🤖 Agent Compatibili

Testato con:
- ✅ **Cursor** (Claude, GPT-4)
- ✅ **Windsurf**
- ✅ **Cline**
- ✅ **Aider**
- ⚠️ **Modelli locali** (Devstral, Codestral) - funziona con istruzioni più dettagliate

---

## 🚀 Vantaggi Chiave

1. **Velocità**: Da brief a landing in 5-10 minuti
2. **Coerenza**: Output sempre allineato al brief
3. **Scalabilità**: Crea 10 landing al giorno se vuoi
4. **Costo Zero**: Nessun abbonamento, solo hosting
5. **Controllo Totale**: Codice tuo, modificabile
6. **SEO-Ready**: Next.js con SSR/SSG
7. **Mobile-First**: Responsive di default
8. **Performance**: Score Lighthouse 95+

---

## 📚 Risorse

- [Documentazione Next.js](https://nextjs.org/docs)
- [Componenti shadcn/ui](https://ui.shadcn.com/)
- [Deploy su Vercel](https://vercel.com/docs)

---

## 🏢 Chi Siamo

Questo progetto è sviluppato da **[Marketing Hackers](https://marketinghackers.it)** - il tuo reparto marketing AI-native.

Aiutiamo imprenditori e brand a scalare la produzione di contenuti marketing con sistemi intelligenti che eliminano la fatica operativa.

### 🔗 Link Utili

- 🌐 **Website**: [marketinghackers.it](https://marketinghackers.it)
- 📧 **Contatto**: [info@marketinghackers.it](mailto:info@marketinghackers.it)

---

## ⭐ Supporta il Progetto

Se questo strumento ti è utile:

1. **Lascia una ⭐ stella** su GitHub - ci aiuta a crescere!
2. **Condividilo** con altri marketer e imprenditori
3. **Seguici** su [marketinghackers.it](https://marketinghackers.it) per altri strumenti AI

---

## 📄 Licenza

MIT License - Usa, modifica, distribuisci liberamente.

---

<p align="center">
  <strong>Fatto con ❤️ da <a href="https://marketinghackers.it">Marketing Hackers</a></strong>
  <br><br>
  <a href="https://github.com/pietrobonomo/marketing-hackers-landing_page_generator/stargazers">
    <img src="https://img.shields.io/github/stars/pietrobonomo/marketing-hackers-landing_page_generator?style=social" alt="GitHub Stars">
  </a>
</p>
