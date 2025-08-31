import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

// Replace these with the paths to your actual flag images
const languages = [
  { code: "en", label: "English", flag: "/uk-flag.png" },
  { code: "bn", label: "বাংলা", flag: "/france-flag.webp" },
  // add more languages here
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  const currentLanguage = languages.find((l) => l.code === i18n.language) || languages[0];

  return (
    <div className="relative inline-block text-left">
      {/* Flag + arrow */}
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center justify-center h-6 transition rounded-sm w-15"
      >
        <img
          src={currentLanguage.flag}
          alt={currentLanguage.label}
          className="object-cover w-6 h-4" // square flag
        />
        <ChevronDown className="w-4 h-4 ml-1" />
      </button>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute right-0 z-50 w-40 mt-2 bg-white border rounded-md shadow-lg border-stone-200">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="flex items-center w-full gap-2 px-4 py-2 text-left transition hover:bg-stone-100"
            >
              <img
                src={lang.flag}
                alt={lang.label}
                className="object-cover w-6 h-4" // square flag
              />
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
