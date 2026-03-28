import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Landmark, Search, BookText, PenBox, GraduationCap, Users2, Globe } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const navLinks = [
    { name: 'bills', path: '/bills', icon: Landmark },
    { name: 'knowRights', path: '/rights', icon: BookText },
    { name: 'participate', path: '/participate', icon: PenBox },
    { name: 'learn', path: '/learn', icon: GraduationCap },
    { name: 'findLeaders', path: '/find-leaders', icon: Users2 },
];

export default function Navbar() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav
            className={twMerge(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
                scrolled
                    ? 'bg-white/80 backdrop-blur-md border-slate-200 py-3'
                    : 'bg-transparent border-transparent py-5'
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="bg-primary-600 p-2 rounded-xl text-white group-hover:bg-primary-500 transition-colors shadow-lg shadow-primary-200">
                        <Landmark size={24} />
                    </div>
                    <span className="text-xl font-display font-bold tracking-tight text-slate-800">
                        Civic<span className="text-primary-600">Connect</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) => clsx(
                                'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2',
                                isActive
                                    ? 'bg-primary-50 text-primary-700'
                                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                            )}
                        >
                            <link.icon size={18} className="opacity-70" />
                            {t(link.name)}
                        </NavLink>
                    ))}
                    <div className="ml-4 pl-4 border-l border-slate-200 flex items-center gap-3">
                        <LanguageSwitcher />
                        <button className="btn-primary py-2 px-5 text-sm h-10">
                            {t("getStarted")}
                        </button>
                    </div>
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <div
                className={clsx(
                    'md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-4 transition-all duration-300 origin-top shadow-xl',
                    isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
                )}
            >
                <div className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) => clsx(
                                'px-4 py-3 rounded-xl text-base font-medium transition-all flex items-center gap-3',
                                isActive
                                    ? 'bg-primary-50 text-primary-700'
                                    : 'text-slate-600 hover:bg-slate-50'
                            )}
                        >
                            <link.icon size={20} />
                            {t(link.name)}
                        </NavLink>
                    ))}
                    <div className="mt-2 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Language</span>
                        <LanguageSwitcher />
                    </div>
                    <div className="mt-4">
                        <button className="w-full btn-primary py-3">
                            {t("getStarted")}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
