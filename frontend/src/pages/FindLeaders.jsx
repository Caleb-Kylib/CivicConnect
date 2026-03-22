import React, { useState, useMemo } from 'react';
import { counties, leaders } from '../data/mockData';
import {
    Search,
    MapPin,
    User,
    Mail,
    Phone,
    Twitter,
    ChevronDown,
    Filter,
    CheckCircle2,
    Building2,
    Users2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';

const leaderTypes = ['All', 'Governor', 'Senator', 'Woman Rep', 'MP', 'MCA'];

export default function FindLeaders() {
    const [selectedCounty, setSelectedCounty] = useState('047'); // Default to Nairobi
    const [selectedType, setSelectedType] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const currentCounty = counties.find(c => c.id === selectedCounty);

    const filteredLeaders = useMemo(() => {
        return leaders.filter(leader => {
            const matchCounty = leader.countyId === selectedCounty;
            const matchType = selectedType === 'All' || leader.title === selectedType;
            const matchSearch = leader.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                leader.constituency.toLowerCase().includes(searchQuery.toLowerCase());
            return matchCounty && matchType && matchSearch;
        });
    }, [selectedCounty, selectedType, searchQuery]);

    return (
        <div className="min-h-screen bg-slate-50/50 pb-24 pt-12">
            <div className="container mx-auto px-4 md:px-6 space-y-12">
                {/* Header Section */}
                <section className="max-w-4xl mx-auto text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-bold tracking-widest uppercase mb-2">
                        <Users2 size={14} />
                        <span>Leadership Directory</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 tracking-tight">
                        Find Your Leaders
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Select your county to find your Governor, Senator, MP, and MCA. Hold them accountable by reaching out directly.
                    </p>
                </section>

                {/* Search & Filter Bar */}
                <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] p-4 shadow-xl shadow-slate-200/60 border border-slate-100 sticky top-24 z-30">
                    <div className="grid md:grid-cols-12 gap-4 items-center">
                        {/* County Selector */}
                        <div className="md:col-span-4 relative group">
                            <label className="absolute -top-3 left-4 px-2 bg-white text-[10px] font-bold text-primary-600 uppercase tracking-widest z-10 transition-colors group-focus-within:text-primary-700">
                                County
                            </label>
                            <div className="relative">
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-500 transition-colors" size={18} />
                                <select
                                    value={selectedCounty}
                                    onChange={(e) => setSelectedCounty(e.target.value)}
                                    className="w-full pl-11 pr-10 py-4 bg-slate-50 border border-slate-100 rounded-2xl appearance-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all font-semibold text-slate-700 cursor-pointer"
                                >
                                    {counties.map(county => (
                                        <option key={county.id} value={county.id}>
                                            {county.name} ({county.id})
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                            </div>
                        </div>

                        {/* Leader Type Switcher */}
                        <div className="md:col-span-5 flex items-center bg-slate-50 p-1 rounded-2xl border border-slate-100 overflow-x-auto no-scrollbar">
                            {leaderTypes.map(type => (
                                <button
                                    key={type}
                                    onClick={() => setSelectedType(type)}
                                    className={clsx(
                                        "flex-1 px-4 py-3 rounded-xl text-xs font-bold whitespace-nowrap transition-all",
                                        selectedType === type
                                            ? "bg-white text-primary-700 shadow-sm border border-slate-100"
                                            : "text-slate-500 hover:text-slate-700 hover:bg-white/50"
                                    )}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>

                        {/* Search Input */}
                        <div className="md:col-span-3 relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-500 transition-colors" size={18} />
                            <input
                                type="text"
                                placeholder="Search name..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all font-semibold text-slate-700"
                            />
                        </div>
                    </div>
                </div>

                {/* Results Section */}
                <div className="max-w-6xl mx-auto space-y-10">
                    <div className="flex items-center justify-between px-4">
                        <h2 className="text-2xl font-display font-bold text-slate-800 flex items-center gap-3">
                            Leaders in {currentCounty?.name} County
                            <span className="text-sm font-medium text-slate-400">({filteredLeaders.length} found)</span>
                        </h2>
                    </div>

                    <AnimatePresence mode="wait">
                        {filteredLeaders.length > 0 ? (
                            <motion.div
                                layout
                                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {filteredLeaders.map((leader) => (
                                    <motion.div
                                        key={leader.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="bg-white rounded-[2.5rem] p-6 shadow-premium border border-slate-100 group hover:border-primary-200 transition-all duration-500"
                                    >
                                        <div className="flex items-start gap-6">
                                            <div className="relative shrink-0">
                                                <div className="w-24 h-24 rounded-3xl overflow-hidden shadow-lg border-4 border-white transform rotate-2 group-hover:rotate-0 transition-transform duration-500">
                                                    <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                                                </div>
                                                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary-600 text-white rounded-xl flex items-center justify-center border-2 border-white shadow-md">
                                                    <CheckCircle2 size={14} />
                                                </div>
                                            </div>

                                            <div className="space-y-1 pt-2">
                                                <div className="px-2 py-0.5 bg-primary-50 text-primary-700 text-[10px] font-bold rounded-lg w-fit uppercase tracking-wider mb-1">
                                                    {leader.title}
                                                </div>
                                                <h3 className="text-xl font-display font-bold text-slate-900 leading-tight group-hover:text-primary-700 transition-colors">
                                                    {leader.name}
                                                </h3>
                                                <p className="text-sm text-slate-500 font-medium flex items-center gap-1.5">
                                                    <MapPin size={12} className="text-slate-400" />
                                                    {leader.constituency}
                                                </p>
                                                <div className="pt-2">
                                                    <span className="text-[10px] font-bold px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md">
                                                        {leader.party} Party
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                                            <div className="flex gap-2">
                                                {leader.contact.twitter && (
                                                    <a href={`https://twitter.com/${leader.contact.twitter}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center hover:bg-sky-50 hover:text-sky-500 transition-all">
                                                        <Twitter size={18} />
                                                    </a>
                                                )}
                                                {leader.contact.email && (
                                                    <a href={`mailto:${leader.contact.email}`} className="w-10 h-10 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 transition-all">
                                                        <Mail size={18} />
                                                    </a>
                                                )}
                                                {leader.contact.phone && (
                                                    <a href={`tel:${leader.contact.phone}`} className="w-10 h-10 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center hover:bg-emerald-50 hover:text-emerald-500 transition-all">
                                                        <Phone size={18} />
                                                    </a>
                                                )}
                                            </div>

                                            <button className="px-5 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-primary-600 active:scale-95 transition-all shadow-lg shadow-black/5">
                                                View Activity
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="bg-white rounded-[3rem] p-20 text-center space-y-4 border border-slate-100 shadow-sm"
                            >
                                <div className="w-20 h-20 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <User size={40} />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-slate-900">No leaders found</h3>
                                <p className="text-slate-500 max-w-sm mx-auto">
                                    We don't have records for this category yet. We are updating our database for all 47 counties.
                                </p>
                                <button
                                    onClick={() => { setSelectedType('All'); setSearchQuery(''); }}
                                    className="mt-4 text-primary-600 font-bold hover:underline"
                                >
                                    Clear filters
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Info Section */}
                <section className="max-w-4xl mx-auto pt-12">
                    <div className="bg-gradient-to-br from-primary-600 to-indigo-700 rounded-[3rem] p-10 md:p-14 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-display font-bold leading-tight">Why contact your leaders?</h2>
                                <p className="text-indigo-100 leading-relaxed font-medium">
                                    Democracy works best when leaders hear from their constituents. Whether it's a concern about a new bill or a local issue in your ward, your voice matters.
                                </p>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
                                            <CheckCircle2 size={14} />
                                        </div>
                                        <span className="text-sm font-semibold">Influence policy decisions</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
                                            <CheckCircle2 size={14} />
                                        </div>
                                        <span className="text-sm font-semibold">Demand accountability on funds</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-[2.5rem] p-8 space-y-6 border border-white/20">
                                <Building2 className="text-primary-300" size={40} />
                                <h4 className="text-xl font-bold">Leader Roles</h4>
                                <div className="space-y-4">
                                    <div className="p-4 bg-white/5 rounded-2xl">
                                        <p className="text-xs font-bold text-primary-300 uppercase tracking-widest mb-1">Governor</p>
                                        <p className="text-xs text-indigo-100">Executive head of the county government.</p>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-2xl">
                                        <p className="text-xs font-bold text-primary-300 uppercase tracking-widest mb-1">Senator</p>
                                        <p className="text-xs text-indigo-100">Protects county interests at the national level.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
