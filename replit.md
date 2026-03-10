# MIllI - AI Beyond Human Limits

## Project Overview
A React + TypeScript + Vite frontend application for MIllI, an AI solutions platform. Features Firebase authentication, Tailwind CSS styling, Framer Motion animations, and PWA support.

## Tech Stack
- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, PostCSS
- **Auth/Backend**: Firebase (Auth, Firestore)
- **Animations**: Framer Motion
- **PWA**: vite-plugin-pwa, Workbox
- **Routing**: React Router DOM v7
- **Forms**: React Hook Form + Zod validation

## Project Structure
```
src/
  components/     # UI components (Auth, Dashboard, Pricing, UserProfile)
  components/ui/  # Reusable UI primitives
  config/         # Firebase config and constants
  contexts/       # React contexts (Auth, Theme)
  hooks/          # Custom hooks (useAuth, useTheme)
  lib/            # Utilities
  pages/          # Route pages (About, Privacy, Terms, etc.)
  types/          # TypeScript types
public/           # Static assets (logos, icons, PWA manifests)
docs/             # Project documentation
```

## Development Setup
- **Dev server**: `npm run dev` on port 5000 (0.0.0.0)
- **Build**: `npm run build` (tsc + vite build)
- **Workflow**: "Start application" → `npm run dev` → port 5000

## Environment Variables
Stored in `.env`:
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`

## Secrets
Stored securely in Replit Secrets:
- `ELEVENLABS_API_KEY` - For text-to-speech audio generation features

## Deployment
- Target: Static site
- Build command: `npm run build`
- Public directory: `dist`
