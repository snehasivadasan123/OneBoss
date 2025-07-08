import 'i18next'
declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation'
    resources: {
      translation: {
        dashboard: Record<string, string>

      }
    }
  }
}