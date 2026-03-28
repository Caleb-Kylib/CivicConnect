import { useTranslation } from 'react-i18next';
import { clsx } from 'clsx';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const currentLanguage = i18n.language;

    return (
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 shadow-sm">
            <button
                onClick={() => changeLanguage('en')}
                className={clsx(
                    'px-3 py-1.5 text-xs font-bold rounded-lg transition-all duration-200 uppercase tracking-wider',
                    currentLanguage === 'en'
                        ? 'bg-white text-primary-600 shadow-sm ring-1 ring-slate-200'
                        : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'
                )}
            >
                EN
            </button>
            <button
                onClick={() => changeLanguage('sw')}
                className={clsx(
                    'px-3 py-1.5 text-xs font-bold rounded-lg transition-all duration-200 uppercase tracking-wider',
                    currentLanguage === 'sw'
                        ? 'bg-white text-primary-600 shadow-sm ring-1 ring-slate-200'
                        : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'
                )}
            >
                SW
            </button>
        </div>
    );
}
