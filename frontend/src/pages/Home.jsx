import { Link } from 'react-router-dom';
import { Landmark, ArrowRight, BookText, PenBox, GraduationCap, CheckCircle2, ChevronRight, Globe, Users, FileText } from 'lucide-react';
import { bills } from '../data/mockData';
import BillCard from '../components/BillCard';

export default function Home() {
    const featuredBills = bills.slice(0, 3);

    return (
        <div className="flex flex-col gap-24 relative overflow-hidden">
            {/* Decorative Blur and Background elements */}
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[400px] bg-primary-100/30 blur-[130px] rounded-full -z-10 animate-pulse"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[400px] bg-accent-100/30 blur-[130px] rounded-full -z-10"></div>

            {/* Hero Section */}
            <section className="container mx-auto px-4 md:px-6 pt-12 md:pt-20">
                <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-full border border-primary-100 text-sm font-semibold tracking-wide uppercase shadow-sm">
                        <Globe size={16} />
                        <span>Kenya's Premier Civic Tech Platform</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 leading-[1.1] tracking-tight">
                        Understand Laws. <br />
                        <span className="text-primary-600 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">Participate. Be Heard.</span>
                    </h1>

                    <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Democratizing legal information for every Kenyan. Track upcoming bills, understand your constitutional rights, and join the conversation that shapes our nation's future.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link to="/bills" className="btn-primary py-4 px-10 text-lg w-full sm:w-auto gap-2">
                            Explore Bills
                            <ArrowRight size={20} className="stroke-[2.5px]" />
                        </Link>
                        <Link to="/rights" className="btn-outline py-4 px-10 text-lg w-full sm:w-auto gap-2 border-primary-100 text-primary-700 hover:bg-primary-50">
                            <BookText size={20} />
                            Know Your Rights
                        </Link>
                    </div>

                    <div className="pt-12 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 border-t border-slate-100 mt-8 opacity-70">
                        <div className="flex flex-col items-center gap-1 group transition-transform hover:scale-105">
                            <span className="text-3xl font-display font-bold text-slate-800">50+</span>
                            <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Active Bills</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 group transition-transform hover:scale-105">
                            <span className="text-3xl font-display font-bold text-slate-800">10k+</span>
                            <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Citizen Views</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 group transition-transform hover:scale-105">
                            <span className="text-3xl font-display font-bold text-slate-800">100%</span>
                            <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Free Access</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 group transition-transform hover:scale-105">
                            <span className="text-3xl font-display font-bold text-slate-800">2024</span>
                            <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">E-Government</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Bills */}
            <section className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-50 text-accent-700 rounded-full text-xs font-bold tracking-widest uppercase">
                            <Landmark size={14} />
                            <span>In Focus</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 leading-tight">
                            Featured Legislative Bills
                        </h2>
                        <p className="text-slate-600 max-w-2xl text-lg">
                            Critical legislation currently under discussion in Parliament that will impact your daily life.
                        </p>
                    </div>
                    <Link to="/bills" className="group flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition-colors uppercase tracking-wider text-sm whitespace-nowrap mb-2">
                        View All Bills
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredBills.map((bill) => (
                        <BillCard key={bill.id} bill={bill} />
                    ))}
                </div>
            </section>

            {/* How It Works */}
            <section className="bg-slate-50 py-24 border-y border-slate-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
                        <h2 className="text-4xl font-display font-bold text-slate-900">How CivicConnect Works</h2>
                        <p className="text-lg text-slate-600">Making the legislative process accessible and transparent for everyone.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        {/* Step 1 */}
                        <div className="relative p-10 bg-white rounded-3xl shadow-premium group hover:shadow-premium-hover transition-all duration-300">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary-50 rounded-bl-[100px] -z-10 group-hover:bg-primary-100 transition-colors"></div>
                            <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 transform group-hover:-rotate-3">
                                <FileText size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-display font-bold text-slate-800 mb-4 transition-colors group-hover:text-primary-700">1. Learn & Discover</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                We translate complex legal jargon into simple, everyday language that anyone can understand.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="relative p-10 bg-white rounded-3xl shadow-premium group hover:shadow-premium-hover transition-all duration-300">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-accent-50 rounded-bl-[100px] -z-10 group-hover:bg-accent-100 transition-colors"></div>
                            <div className="w-16 h-16 bg-accent-100 text-accent-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-accent-600 group-hover:text-white transition-all duration-300 transform group-hover:rotate-3">
                                <Users size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-display font-bold text-slate-800 mb-4 transition-colors group-hover:text-accent-700">2. Public Participation</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                Submit your opinions on upcoming bills directly through our platform to making your voice heard.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="relative p-10 bg-white rounded-3xl shadow-premium group hover:shadow-premium-hover transition-all duration-300">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-[100px] -z-10 group-hover:bg-indigo-100 transition-colors"></div>
                            <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 transform group-hover:-rotate-3">
                                <CheckCircle2 size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-display font-bold text-slate-800 mb-4 transition-colors group-hover:text-indigo-700">3. Stay Informed</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                Receive updates as bills progress through Parliament and learn about how these laws affect you.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-4 md:px-6 mb-24">
                <div className="bg-gradient-to-br from-primary-600 to-primary-900 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden group shadow-2xl shadow-primary-200">
                    <div className="absolute top-0 right-0 w-[40%] h-full bg-white/5 skew-x-12 transform-gpu -z-0"></div>
                    <div className="absolute bottom-[-50%] left-[-10%] w-[300px] h-[300px] bg-accent-500/20 blur-[100px] rounded-full"></div>

                    <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                            Ready to take part in <br />
                            shaping Kenya's future?
                        </h2>
                        <p className="text-primary-100 text-xl font-medium leading-relaxed">
                            Join thousands of citizens who are already using CivicConnect to stay informed and exercise their democratic rights.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                            <button className="px-10 py-5 bg-white text-primary-700 text-lg font-bold rounded-2xl hover:bg-primary-50 transition-all duration-300 shadow-xl active:scale-95 group/cta flex items-center gap-2">
                                Join CivicConnect
                                <ChevronRight size={20} className="group-hover/cta:translate-x-1 transition-transform" />
                            </button>
                            <Link to="/learn" className="px-8 py-5 border border-white/30 text-white text-lg font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300">
                                Civic Education Guide
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
