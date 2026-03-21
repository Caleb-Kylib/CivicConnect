import { useState } from 'react';
import { events } from '../data/mockData';
import EventCard from '../components/EventCard';
import { Landmark, PenBox, MessageSquareShare, Calendar, CheckCircle2, ChevronRight, Globe, Users, PenTool } from 'lucide-react';

export default function Participate() {
    const [formData, setFormData] = useState({ name: '', email: '', opinion: '', topic: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.opinion.trim()) {
            setSubmitted(true);
            setFormData({ name: '', email: '', opinion: '', topic: '' });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="container mx-auto px-4 md:px-6 space-y-24 pb-24 pt-12">
            {/* Header */}
            <section className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-bold tracking-widest uppercase mb-4 shadow-sm border border-primary-100">
                    <Landmark size={14} />
                    <span>Exercise Your Power</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 leading-tight">
                    Public Participation Events 📢
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
                    Under Article 118 of the Constitution, Parliament must facilitate public participation. Join upcoming forums and share your views.
                </p>

                <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                    <div className="flex -space-x-3 items-center group cursor-pointer transition-transform hover:scale-105">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden ring-1 ring-slate-100 flex items-center justify-center">
                                <Users size={20} className="text-slate-400" />
                            </div>
                        ))}
                        <div className="px-3 pl-6 py-1 text-sm font-bold text-slate-600 uppercase tracking-widest whitespace-nowrap">
                            + 1,200 Kenyans participating
                        </div>
                    </div>
                </div>
            </section>

            <div className="grid lg:grid-cols-5 gap-16 max-w-7xl mx-auto">
                {/* Events List */}
                <section className="lg:col-span-3 space-y-10 order-2 lg:order-1">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-3xl font-display font-bold text-slate-800 flex items-center gap-3">
                            <Calendar className="text-primary-600" size={28} />
                            Upcoming Events
                        </h2>
                    </div>

                    <div className="grid gap-8">
                        {events.map((event) => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </div>

                    <div className="mt-12 p-8 bg-slate-50 border border-slate-100 rounded-3xl flex items-center justify-between gap-6 group hover:bg-white hover:shadow-premium hover:border-white transition-all duration-300">
                        <div className="space-y-2">
                            <h4 className="text-xl font-display font-bold text-slate-800 transition-colors group-hover:text-primary-600">Missed an event?</h4>
                            <p className="text-slate-600 font-medium">You can still review the transcripts and recordings of past parliamentary forums.</p>
                        </div>
                        <button className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-400 group-hover:text-primary-600 group-hover:bg-primary-50 transition-all">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </section>

                {/* Participation Form Sidebar */}
                <aside className="lg:col-span-2 order-1 lg:order-2">
                    {!submitted ? (
                        <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-slate-200 border border-slate-100 space-y-10 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-full flex items-center justify-center -z-0 group-hover:scale-110 transition-transform -translate-y-4 translate-x-4 opacity-50">
                                <PenTool size={40} className="text-primary-200 -mt-10 -mr-10" />
                            </div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-primary-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary-200 mb-8 transform group-hover:scale-105 transition-transform">
                                    <MessageSquareShare size={28} />
                                </div>
                                <h2 className="text-3xl font-display font-bold text-slate-800 mb-4">Submit Your Voice</h2>
                                <p className="text-slate-600 font-medium leading-relaxed">
                                    Can't attend in person? Submit your memo or general opinion on any ongoing legislative process below.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                                <div className="grid gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 uppercase tracking-widest px-1">Name (Optional)</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-800 focus:bg-white focus:ring-4 focus:ring-primary-100 focus:border-primary-400 outline-none transition-all font-medium"
                                            placeholder="Jane Doe"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 uppercase tracking-widest px-1">Topic / Bill Title</label>
                                        <input
                                            type="text"
                                            name="topic"
                                            value={formData.topic}
                                            onChange={handleChange}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-800 focus:bg-white focus:ring-4 focus:ring-primary-100 focus:border-primary-400 outline-none transition-all font-medium"
                                            placeholder="e.g. Finance Bill 2024"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 uppercase tracking-widest px-1">Your detailed opinion</label>
                                        <textarea
                                            name="opinion"
                                            value={formData.opinion}
                                            onChange={handleChange}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-800 focus:bg-white focus:ring-4 focus:ring-primary-100 focus:border-primary-400 outline-none transition-all resize-none min-h-[220px] font-medium"
                                            placeholder="Express your views, concerns, or support..."
                                            required
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-5 bg-primary-600 text-white font-bold rounded-2xl hover:bg-primary-700 active:scale-95 transition-all shadow-xl shadow-primary-200 flex items-center justify-center gap-3 text-lg group/form"
                                >
                                    <PenBox size={22} className="group-hover/form:translate-x-1 group-hover/form:-translate-y-1 transition-transform" />
                                    Submit Memo
                                </button>
                            </form>

                            <div className="relative z-10 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-white rounded-lg shadow-sm">
                                        <Globe size={20} className="text-primary-500" />
                                    </div>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed">
                                        By submitting, you agree that your opinion will be part of the public record for the selected legislative process.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-emerald-600 text-white rounded-[2.5rem] p-12 text-center shadow-2xl shadow-emerald-200 animate-in zoom-in duration-500 space-y-10">
                            <div className="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-lg transform rotate-6 animate-pulse">
                                <CheckCircle2 size={50} className="text-emerald-600" />
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-4xl font-display font-bold">Opinion Received!</h2>
                                <p className="text-emerald-100 text-xl font-medium leading-relaxed">
                                    Your memo has been successfully received and added to the public participation record for this topic.
                                </p>
                            </div>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="w-full py-5 bg-white text-emerald-700 font-bold rounded-2xl hover:bg-emerald-50 active:scale-95 transition-all shadow-xl"
                            >
                                Submit another Memo
                            </button>
                        </div>
                    )}
                </aside>
            </div>
        </div>
    );
}
