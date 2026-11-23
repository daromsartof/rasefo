import { defineManifest } from '@daroms/lib/manifest-schema'

// Configuration de l'app : lue par app.config.ts (build) et getManifest() (runtime).
// Réécrit par la CLI daroms (module add, g screen...) : garder des valeurs littérales.
export default defineManifest({
  name: 'Rasefo',
  slug: 'rasefo',
  bundleId: 'com.daroms.rasefo',
  version: '1.0.0',
  variant: 'blank',
  locales: ['fr', 'en'],
  defaultLocale: 'fr',
  orientation: 'portrait',
  screens: ['home'],
  tabs: [
    {
      name: 'index',
      icon: 'House',
      titleKey: 'tabs.home',
    },
  ],
  modules: {},
  monetization: {
    model: 'free',
    entitlement: 'pro',
    trialDays: 0,
  },
  supabase: {},
  eas: {},
  store: {},
})
