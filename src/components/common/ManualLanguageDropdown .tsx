import { useEffect } from 'react'
declare global {
  interface Window {
    google?: {
      translate: {
        TranslateElement: new (
          options: { pageLanguage: string },
          elementId: string
        ) => void
      }
    }
    googleTranslateElementInit?: () => void
  }
}


const languages = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'mk', label: 'Македонски' },
  { code: 'es', label: 'Español' },
  { code: 'de', label: 'Deutsch' }
]

const ManualLanguageDropdown = () => {
  useEffect(() => {

    if (!window.google?.translate?.TranslateElement) {
      const script = document.createElement('script')
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      script.async = true
      document.body.appendChild(script)

      window.googleTranslateElementInit = () => {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement(
            { pageLanguage: 'en' },
            'google_translate_element'
          )
        }
      }
    }
  }, [])

  const changeLanguage = (lang: string) => {
    const selectEl = document.querySelector<HTMLSelectElement>('.goog-te-combo')
    if (selectEl) {
      selectEl.value = lang
      selectEl.dispatchEvent(new Event('change'))
    }
  }

  return (
    <div className="">

      <select
        onChange={(e) => changeLanguage(e.target.value)}
        defaultValue="en"
        className="p-2 border rounded"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default ManualLanguageDropdown
