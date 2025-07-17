import React from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  console.log('Current language:', i18n.changeLanguage)

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <div className="">
      <select
        onChange={changeLanguage}
        value={i18n.language}
        className="p-2 border rounded text-gray-500"
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="mk">Македонски</option>
      </select>
    </div>
  )
}

export default LanguageSwitcher
