import { Search, X } from 'lucide-react';

export default function SearchBar({ value, onChange, placeholder = "Search for topics...", onClear }) {
    return (
        <div className="relative group max-w-2xl mx-auto w-full">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-primary-600">
                <Search size={20} className="text-slate-400 group-focus-within:text-primary-500 transition-colors" />
            </div>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-white border border-slate-200 text-slate-700 rounded-2xl shadow-sm focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition-all outline-none font-medium placeholder:text-slate-400"
                placeholder={placeholder}
            />
            {value && (
                <button
                    onClick={onClear}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                    aria-label="Clear search"
                >
                    <X size={20} />
                </button>
            )}
        </div>
    );
}
