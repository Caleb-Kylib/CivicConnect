import React, { useState } from 'react';
import { educationTopics } from '../data/mockData';
import {
    ArrowRight,
    GraduationCap,
    Gavel,
    Scale,
    Globe,
    BookText,
    Users,
    PlayCircle,
    ShieldCheck,
    PenTool,
    FileText,
    Video,
    ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';

const iconMap = {
    'how-voting-works': Users,
    'role-of-mps': Scale,
    'how-laws-are-passed': Gavel,
};

export default function Learn() {
    const [activeTab, setActiveTab] = useState(educationTopics[0].id);

    const activeTopic = educationTopics.find(t => t.id === activeTab);

    return (
        <div className="container mx-auto px-4 md:px-6 space-y-24 pb-24 pt-12 relative overflow-hidden">
            {/* Search Header */}
            <section className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-bold tracking-widest uppercase mb-4 shadow-sm border border-primary-100">
                    <GraduationCap size={14} />
                    <span>Knowledge Hub</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 leading-tight tracking-tight">
                    Civic Education Guide 🇰🇪
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
                    Empowering you with the knowledge to navigate the Kenyan legal and political system. Your journey to active citizenship starts here.
                </p>
            </section>

            <div className="grid lg:grid-cols-4 gap-12 max-w-7xl mx-auto relative">
                {/* Sidebar Navigation */}
                <div className="lg:col-span-1 space-y-4 sticky top-32 h-fit order-2 lg:order-1">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest px-4 mb-6">Learning Streams</h3>
                    <div className="space-y-3">
                        {educationTopics.map((topic) => {
                            const Icon = iconMap[topic.id] || BookText;
                            const isActive = activeTab === topic.id;

                            return (
                                <button
                                    key={topic.id}
                                    onClick={() => setActiveTab(topic.id)}
                                    className={clsx(
                                        "w-full p-5 rounded-[1.5rem] text-left transition-all duration-300 flex items-center gap-4 group",
                                        isActive
                                            ? "bg-primary-600 text-white shadow-xl shadow-primary-100"
                                            : "bg-white text-slate-600 border border-slate-100 hover:bg-slate-50 hover:border-primary-100"
                                    )}
                                >
                                    <div className={clsx(
                                        "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors",
                                        isActive ? "bg-white/20" : "bg-primary-50 text-primary-600 group-hover:bg-primary-600 group-hover:text-white"
                                    )}>
                                        <Icon size={24} />
                                    </div>
                                    <div className="space-y-0.5">
                                        <span className="block font-bold leading-tight group-hover:translate-x-1 transition-transform">{topic.title}</span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    <div className="pt-8 border-t border-slate-100 mt-8 space-y-6">
                        <div className="px-6 py-8 bg-gradient-to-br from-indigo-50 to-primary-50 rounded-[2rem] border border-indigo-100 relative overflow-hidden group/card shadow-sm">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-white/40 rounded-bl-full flex items-center justify-center -z-10 group-hover/card:scale-110 transition-transform">
                                <BookText size={18} className="text-indigo-300" />
                            </div>
                            <p className="text-slate-800 font-bold mb-4 leading-relaxed">Download our complete Citizen's Guide for offline reading.</p>
                            <button className="text-indigo-600 font-bold text-sm uppercase tracking-widest hover:text-indigo-800 transition-colors inline-flex items-center gap-2 group">
                                Download PDF
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <div className="flex items-center gap-4 px-4 py-2 text-slate-500 font-bold text-sm uppercase tracking-wider group cursor-pointer hover:text-primary-600 transition-colors">
                            <PlayCircle size={20} className="group-hover:scale-110 text-primary-500 transition-transform" />
                            <span>Full Video Playlist</span>
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="lg:col-span-3 order-1 lg:order-2">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="bg-white rounded-[3rem] p-10 md:p-16 lg:p-20 shadow-premium border border-slate-100 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-bl-[150px] -z-0 opacity-50 transition-all pointer-events-none">
                                {/* Background watermark icon */}
                                {activeTopic && iconMap[activeTopic.id] && (() => {
                                    const Icon = iconMap[activeTopic.id];
                                    return <Icon size={200} className="text-primary-100 absolute bottom-0 right-0 -mb-24 -mr-24 rotate-12 opacity-40 group-hover:scale-110 transition-transform duration-700" />;
                                })()}
                            </div>

                            <div className="relative z-10 space-y-8">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-4">
                                    <div className="w-20 h-20 bg-primary-600 text-white rounded-[1.5rem] flex items-center justify-center shadow-lg shadow-primary-200 transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                                        {activeTopic && (() => {
                                            const Icon = iconMap[activeTopic.id] || BookText;
                                            return <Icon size={40} />;
                                        })()}
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                                        <Video size={14} className="text-primary-400" />
                                        <span>Video Available</span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1] tracking-tight">
                                        {activeTopic.title}
                                    </h2>
                                    <p className="text-2xl text-slate-600 font-medium leading-relaxed max-w-2xl">
                                        {activeTopic.description}
                                    </p>
                                </div>
                            </div>

                            <div className="relative z-10 mt-16 pt-16 border-t border-slate-100 space-y-20">
                                {/* Detailed Content Area */}
                                <div className="grid lg:grid-cols-12 gap-16 items-start">
                                    <div className="lg:col-span-7 space-y-12">
                                        <div className="space-y-6">
                                            <h4 className="text-xl font-display font-bold text-slate-800 flex items-center gap-3">
                                                Overview
                                                <div className="h-0.5 w-12 bg-primary-200 rounded-full" />
                                            </h4>
                                            <p className="text-xl text-slate-700 leading-relaxed font-medium leading-[1.8]">
                                                {activeTopic.content}
                                            </p>
                                        </div>

                                        {/* Process Steps */}
                                        <div className="space-y-12 pt-4">
                                            <h4 className="text-xl font-display font-bold text-slate-800 flex items-center gap-3">
                                                Step-by-Step Guide
                                                <div className="h-0.5 w-12 bg-primary-200 rounded-full" />
                                            </h4>
                                            <div className="relative space-y-12 pl-12 border-l-[3px] border-slate-100">
                                                {activeTopic.steps.map((step, idx) => (
                                                    <div key={idx} className="relative group/step">
                                                        <motion.div
                                                            whileHover={{ scale: 1.1 }}
                                                            className="absolute -left-[64px] top-0 w-12 h-12 bg-white border-[3px] border-primary-600 rounded-2xl flex items-center justify-center text-primary-600 font-bold shadow-sm group-hover/step:bg-primary-600 group-hover/step:text-white transition-all duration-300 transform -rotate-3 group-hover/step:rotate-0"
                                                        >
                                                            {idx + 1}
                                                        </motion.div>
                                                        <div className="space-y-4 pt-1">
                                                            <h5 className="text-2xl font-display font-bold text-slate-900 leading-none group-hover/step:text-primary-700 transition-colors">{step.title}</h5>
                                                            <p className="text-lg text-slate-600 font-medium leading-relaxed">{step.description}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Enhanced Expert Advice Sidebar */}
                                    <div className="lg:col-span-5 space-y-10">
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="bg-[#0f172a] text-white rounded-[3rem] p-10 lg:p-12 space-y-12 shadow-2xl relative overflow-hidden group/tips border border-slate-800"
                                        >
                                            {/* Decorative background elements */}
                                            <div className="absolute top-0 right-0 w-48 h-48 bg-primary-500/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 group-hover/tips:bg-primary-500/20 transition-all duration-700"></div>
                                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-[40px] translate-y-1/2 -translate-x-1/2"></div>

                                            <div className="relative z-10 flex items-center justify-between">
                                                <div className="space-y-2">
                                                    <h4 className="text-sm font-bold text-primary-400 uppercase tracking-[0.25em] flex items-center gap-3">
                                                        <ShieldCheck size={18} className="animate-pulse" />
                                                        Expert Insights
                                                    </h4>
                                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Legal Advisory Panel</p>
                                                </div>
                                                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover/tips:border-primary-500/50 transition-colors">
                                                    <PenTool size={20} className="text-primary-400" />
                                                </div>
                                            </div>

                                            <div className="relative z-10 space-y-8">
                                                {activeTopic.expertTips.map((tip, i) => (
                                                    <motion.div
                                                        key={i}
                                                        whileHover={{ x: 8 }}
                                                        className="flex gap-6 group/li p-4 -m-4 rounded-2xl hover:bg-white/[0.03] transition-all duration-300"
                                                    >
                                                        <div className="flex-shrink-0 mt-1">
                                                            <div className="w-8 h-8 rounded-xl bg-primary-600/20 text-primary-400 flex items-center justify-center border border-primary-500/30 group-hover/li:bg-primary-600 group-hover/li:text-white transition-all">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-current" />
                                                            </div>
                                                        </div>
                                                        <span className="text-slate-300 font-medium text-lg leading-[1.6] group-hover/li:text-white transition-colors">
                                                            {tip}
                                                        </span>
                                                    </motion.div>
                                                ))}
                                            </div>

                                            <div className="relative z-10 pt-6">
                                                <button className="w-full py-5 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold rounded-2xl hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary-600/30 active:scale-95 transition-all flex items-center justify-center gap-3 group/btn text-sm uppercase tracking-widest">
                                                    Consult Legal Expert
                                                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                                </button>
                                                <p className="text-center text-[10px] text-slate-500 mt-6 font-bold uppercase tracking-widest opacity-60">
                                                    Official Legal Aid Partnership
                                                </p>
                                            </div>
                                        </motion.div>

                                        {/* Video Guide Card */}
                                        <div className="bg-slate-50 rounded-[3rem] p-10 border border-slate-200 group/video shadow-sm hover:shadow-md transition-all">
                                            <div className="flex items-center justify-between mb-8">
                                                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-[0.15em]">Tutorial Hub</h4>
                                                <div className="px-3 py-1 bg-primary-50 text-primary-700 text-[10px] font-bold rounded-full border border-primary-100 uppercase tracking-widest">
                                                    HD Video
                                                </div>
                                            </div>
                                            <div className="aspect-video bg-white rounded-[2rem] flex items-center justify-center relative shadow-sm border border-slate-200 overflow-hidden cursor-pointer group-hover/video:border-primary-200">
                                                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-indigo-600/5 transition-opacity group-hover/video:opacity-100 opacity-60"></div>
                                                <Video className="text-slate-200 group-hover/video:scale-110 transition-transform duration-1000" size={64} strokeWidth={1} />
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl transform group-hover/video:scale-110 transition-all duration-300">
                                                        <PlayCircle className="text-primary-600 ml-1" size={36} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-8 flex items-center justify-between">
                                                <div className="space-y-1">
                                                    <span className="block font-bold text-slate-800 text-lg group-hover/video:text-primary-700 transition-colors">
                                                        {activeTopic.title} Simplified
                                                    </span>
                                                    <span className="block text-xs text-slate-500 font-medium">Duration: 04:20 • 12k Views</span>
                                                </div>
                                                <button className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:text-primary-600 hover:border-primary-100 transition-all">
                                                    <ArrowRight size={20} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Actions */}
                                <div className="relative z-10 pt-16 flex flex-col md:flex-row items-center justify-between gap-12 border-t border-slate-100">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center shadow-sm">
                                            <Globe size={30} />
                                        </div>
                                        <div className="space-y-1">
                                            <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] leading-none">Lesson Source</span>
                                            <span className="block text-xl font-bold text-slate-800">Kenyan Constitution & Hansard</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-center gap-6">
                                        <span className="text-slate-400 font-bold text-sm uppercase tracking-widest">Helpful?</span>
                                        <div className="flex gap-4">
                                            <button className="px-8 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-all flex items-center gap-2">
                                                Yes
                                                <ShieldCheck size={18} />
                                            </button>
                                            <button className="px-8 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-600 hover:bg-rose-50 hover:text-rose-700 hover:border-rose-200 transition-all">
                                                Need more info
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Quick Quiz CTA */}
            <section className="container mx-auto px-4 md:px-6 max-w-6xl">
                <div className="bg-gradient-to-br from-indigo-600 to-primary-800 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-indigo-200 group">
                    <div className="absolute top-0 left-0 w-full h-full bg-white/5 skew-x-12 transform-gpu pointer-events-none"></div>
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent-500/20 blur-[100px] rounded-full pointer-events-none animate-pulse"></div>

                    <div className="relative z-10 max-w-3xl mx-auto space-y-10">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                            Ready to test your knowledge? 🧠
                        </h2>
                        <p className="text-indigo-100 text-xl font-medium leading-relaxed">
                            Take a quick 5-minute quiz to see how well you understand the Kenyan governance structures and earn your **Active Citizen Badge**.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                            <button className="px-12 py-5 bg-white text-indigo-700 text-lg font-bold rounded-[1.5rem] hover:bg-slate-50 transition-all duration-300 shadow-xl active:scale-95 group/quiz flex items-center gap-3">
                                Start Citizen Quiz
                                <ChevronRight size={20} className="group-hover/quiz:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-10 py-5 border border-white/30 text-white text-lg font-semibold rounded-[1.5rem] hover:bg-white/10 transition-all duration-300">
                                Leaderboard
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
