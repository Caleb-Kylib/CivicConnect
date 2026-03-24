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

                    <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
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

            {/* About Us Section */}
            <section className="container mx-auto px-4 md:px-6 relative">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative order-2 lg:order-1">
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary-100 rounded-full blur-3xl opacity-60"></div>
                        <div className="relative bg-white rounded-[3rem] p-4 shadow-premium border border-slate-100 transform -rotate-2 hover:rotate-0 transition-transform duration-700 cursor-pointer group">
                            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-100 relative">
                                <img
                                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
                                    alt="Collaborative Citizenship"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest w-fit mb-3">Our Core Vision</div>
                                    <h4 className="text-2xl font-display font-bold leading-tight">Empowering 50 Million+ Voices</h4>
                                </div>
                            </div>
                        </div>
                        {/* Decorative Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-accent-500 text-white p-8 rounded-[2rem] shadow-xl border-4 border-white animate-bounce-subtle">
                            <Users size={32} />
                            <div className="mt-2 font-bold leading-none">Unity in <br /> Purpose</div>
                        </div>
                    </div>

                    <div className="space-y-8 order-1 lg:order-2">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-bold tracking-widest uppercase">
                                <Users size={14} />
                                <span>About Us</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
                                Bridging the Gap Between <span className="text-primary-600">Parliament & People</span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
                            <p>
                                CivicConnect was born out of a simple but powerful idea: that every Kenyan citizen deserves to understand the laws that govern them, without needing a law degree.
                            </p>
                            <p>
                                We believe that transparency is the bedrock of democracy. Our platform acts as a digital bridge, translating complex legislative documents into actionable knowledge, and providing a direct channel for public participation in the legislative process.
                            </p>
                            <p className="border-l-4 border-primary-600 pl-6 italic text-slate-800">
                                "Our mission is to foster a more inclusive, informed, and active citizenry through technology that serves the public interest."
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 pt-4">
                            <div className="space-y-2">
                                <h4 className="text-3xl font-display font-bold text-slate-900">100%</h4>
                                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest leading-none">Transparent</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-3xl font-display font-bold text-slate-900">Real-time</h4>
                                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest leading-none">Data Sync</p>
                            </div>
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
                        <p className="text-slate-600 max-w-2xl text-lg font-medium">
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

            {/* Step-by-Step Guide Section */}
            <section className="bg-slate-950 py-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/10 blur-[150px] rounded-full -mr-64 -mt-64"></div>
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center mb-24 space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 text-primary-400 rounded-full border border-white/10 text-xs font-bold tracking-widest uppercase">
                            <ArrowRight size={14} />
                            <span>User Guide</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-white">How to use <span className="text-primary-400">CivicConnect</span></h2>
                        <p className="text-xl text-slate-400 font-medium">Your 4-step roadmap to becoming an active citizen in less than 5 minutes.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {/* Step 1 */}
                        <div className="group space-y-8 p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all duration-500">
                            <div className="w-20 h-20 bg-primary-600 text-white rounded-[1.5rem] flex items-center justify-center text-3xl font-display font-bold shadow-xl shadow-primary-900/40 transform group-hover:-rotate-6 transition-transform">
                                01
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-display font-bold text-white group-hover:text-primary-400 transition-colors">Find a Bill</h3>
                                <p className="text-slate-400 leading-relaxed font-medium">
                                    Head to the **Bills** section and search for laws that interest you—from Health to Finance.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="group space-y-8 p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all duration-500">
                            <div className="w-20 h-20 bg-indigo-600 text-white rounded-[1.5rem] flex items-center justify-center text-3xl font-display font-bold shadow-xl shadow-indigo-900/40 transform group-hover:rotate-6 transition-transform">
                                02
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-display font-bold text-white group-hover:text-indigo-400 transition-colors">Read Simply</h3>
                                <p className="text-slate-400 leading-relaxed font-medium">
                                    We break down the "legalese" into clear points, showing you exactly how the law impacts you.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="group space-y-8 p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all duration-500">
                            <div className="w-20 h-20 bg-accent-600 text-white rounded-[1.5rem] flex items-center justify-center text-3xl font-display font-bold shadow-xl shadow-accent-900/40 transform group-hover:-rotate-6 transition-transform">
                                03
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-display font-bold text-white group-hover:text-accent-400 transition-colors">Speak Up</h3>
                                <p className="text-slate-400 leading-relaxed font-medium">
                                    Use the **Participate** forms to submit your views directly to the relevant Parliamentary committee.
                                </p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="group space-y-8 p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all duration-500">
                            <div className="w-20 h-20 bg-emerald-600 text-white rounded-[1.5rem] flex items-center justify-center text-3xl font-display font-bold shadow-xl shadow-emerald-900/40 transform group-hover:rotate-6 transition-transform">
                                04
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-display font-bold text-white group-hover:text-emerald-400 transition-colors">Contact Leaders</h3>
                                <p className="text-slate-400 leading-relaxed font-medium">
                                    Use the **Leader Finder** to send messages or emails to your MP or Senator about the bill.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 text-center">
                        <Link to="/bills" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-900 font-bold rounded-2xl hover:bg-primary-50 transition-all shadow-xl active:scale-95 group/guide">
                            Start My First Search
                            <ArrowRight size={20} className="group-hover/guide:translate-x-1 transition-transform" />
                        </Link>
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
