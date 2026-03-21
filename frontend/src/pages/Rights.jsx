import { useState, useMemo } from 'react';
import { rights } from '../data/mockData';
import SearchBar from '../components/SearchBar';
import { BookText, Scale, Search, ArrowRight, ShieldCheck, Gavel, Globe, Info } from 'lucide-react';
import { clsx } from 'clsx';

export default function Rights() {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState('All');

    const topics = ['All', ...new Set(rights.map(r => r.topic))];

    const filteredRights = useMemo(() => {
        return rights.filter(right => {
            const matchesSearch = right.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                right.explanation.toLowerCase().includes(searchTerm.toLowerCase()) ||
                right.topic.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesTab = activeTab === 'All' || right.topic === activeTab;
            return matchesSearch && matchesTab;
        });
    }, [searchTerm, activeTab]);

    return (
        <div className="container mx-auto px-4 md:px-6 space-y-20 pb-24 relative">
            {/* Search Header */}
            <section className="max-w-4xl mx-auto text-center space-y-12">
                <div className="space-y-6 pt-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-50 text-accent-700 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                        <Scale size={14} />
                        <span>Bill of Rights</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 leading-tight">
                        Know Your Constitutional Rights
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Every Kenyan has fundamental rights and freedoms. We've simplified the Constitution to help you understand them.
                    </p>
                </div>

                <div className="relative max-w-3xl mx-auto">
                    <div className="absolute -top-12 -left-12 w-24 h-24 bg-primary-100/40 blur-[50px] rounded-full -z-10 transition-transform duration-700 group-hover:scale-150 animate-pulse"></div>
                    <SearchBar
                        value={searchTerm}
                        onChange={setSearchTerm}
                        onClear={() => setSearchTerm('')}
                        placeholder="Search for topics like 'Land ownership', 'Succession', 'Freedom of speech'..."
                    />
                </div>

                {/* Dynamic Filters */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                    {topics.map(topic => (
                        <button
                            key={topic}
                            onClick={() => setActiveTab(topic)}
                            className={clsx(
                                "px-6 py-3 rounded-2xl text-sm font-bold transition-all shadow-sm border whitespace-nowrap active:scale-95",
                                activeTab === topic
                                    ? "bg-primary-600 text-white border-primary-600 shadow-primary-200"
                                    : "bg-white text-slate-600 border-slate-200 hover:border-primary-400 hover:text-primary-600"
                            )}
                        >
                            {topic}
                        </button>
                    ))}
                </div>
            </section>

            {/* Rights Grid */}
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredRights.map((right) => (
                    <div key={right.id} className="glass-card group hover:translate-y-[-8px] transition-all transform-gpu relative overflow-hidden flex flex-col h-full bg-white/40 border border-white/40 ring-1 ring-slate-100">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-full flex items-center justify-center -z-0 opacity-50 group-hover:scale-110 transition-transform">
                            <ShieldCheck size={40} className="text-primary-200 -mt-10 -mr-10" />
                        </div>

                        <div className="relative z-10 space-y-4 mb-8">
                            <div className="w-14 h-14 bg-white shadow-premium rounded-2xl flex items-center justify-center text-primary-600 border border-slate-50 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 transform group-hover:-rotate-3">
                                <Gavel size={26} strokeWidth={1.5} />
                            </div>
                            <div className="px-2 py-0.5 bg-primary-50 text-primary-700 text-[10px] font-bold tracking-[0.2em] uppercase rounded-md inline-block">
                                {right.topic}
                            </div>
                            <h3 className="text-2xl font-display font-bold text-slate-800 transition-colors group-hover:text-primary-700">
                                {right.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                {right.explanation}
                            </p>
                        </div>

                        <div className="relative z-10 flex-grow pt-6 border-t border-slate-100 flex flex-col">
                            <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-5 flex items-center gap-2">
                                <Info size={16} className="text-primary-500" />
                                Key Rights Protected:
                            </h4>
                            <ul className="space-y-4 flex-grow">
                                {right.keyRights.map((item, idx) => (
                                    <li key={idx} className="flex gap-3 group/li">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0 group-hover/li:scale-150 transition-transform" />
                                        <span className="text-slate-600 text-sm font-medium leading-relaxed group-hover/li:text-slate-900 transition-colors">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-10 p-4 bg-slate-50 rounded-xl border border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-3">
                                <Globe size={14} className="text-primary-300" />
                                <span>{right.legalContext}</span>
                            </div>
                        </div>
                    </div>
                ))}

                {filteredRights.length === 0 && (
                    <div className="col-span-full py-24 text-center max-w-xl mx-auto space-y-6">
                        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto text-slate-300 border-2 border-dashed border-slate-200">
                            <Search size={40} />
                        </div>
                        <h3 className="text-2xl font-display font-bold text-slate-800">No results found</h3>
                        <p className="text-slate-600 leading-relaxed font-bold px-8">
                            We couldn't find any rights or legal topics matching your search. Try different keywords.
                        </p>
                    </div>
                )}
            </section>

            {/* Legal Help CTA */}
            <section className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 w-[40%] h-full bg-primary-600/10 -skew-x-12 translate-x-20"></div>
                <div className="absolute bottom-[-50%] left-[-10%] w-[300px] h-[300px] bg-primary-500/10 blur-[80px] rounded-full"></div>

                <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
                        Need Legal Assistance? ⚖️
                    </h2>
                    <p className="text-slate-400 text-xl font-medium leading-relaxed">
                        Understanding your rights is the first step. If you believe your rights have been violated, we can help connect you with legal aid organizations.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                        <button className="px-10 py-5 bg-white text-slate-900 text-lg font-bold rounded-2xl hover:bg-primary-50 transition-all duration-300 shadow-xl active:scale-95 group/cta flex items-center gap-2">
                            Find Legal Aid
                            <ArrowRight size={20} className="group-hover/cta:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
