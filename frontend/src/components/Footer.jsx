import { Link } from 'react-router-dom';
import { Landmark, Mail, Phone, MapPin, Twitter, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-400 pt-20 pb-10 mt-auto border-t border-slate-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-full md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-6 group">
                            <div className="bg-primary-600 p-2 rounded-xl text-white group-hover:bg-primary-500 transition-colors shadow-lg shadow-primary-900/40">
                                <Landmark size={24} />
                            </div>
                            <span className="text-xl font-display font-bold tracking-tight text-white">
                                Civic<span className="text-primary-500">Connect</span>
                            </span>
                        </Link>
                        <p className="mb-6 leading-relaxed">
                            Empowering Kenyans with simplified legal information and platforms for meaningful civic participation.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-primary-600 hover:text-white transition-all">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-primary-600 hover:text-white transition-all">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-primary-600 hover:text-white transition-all">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Explore</h4>
                        <ul className="space-y-4">
                            <li><Link to="/bills" className="hover:text-primary-500 transition-colors">Parliamentary Bills</Link></li>
                            <li><Link to="/rights" className="hover:text-primary-500 transition-colors">Constitutional Rights</Link></li>
                            <li><Link to="/participate" className="hover:text-primary-500 transition-colors">Public Participation</Link></li>
                            <li><Link to="/learn" className="hover:text-primary-500 transition-colors">Civic Education</Link></li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Resources</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-primary-500 transition-colors">The Constitution</a></li>
                            <li><a href="#" className="hover:text-primary-500 transition-colors">Hansard Records</a></li>
                            <li><a href="#" className="hover:text-primary-500 transition-colors">Gazette Notices</a></li>
                            <li><a href="#" className="hover:text-primary-500 transition-colors">Find Your MP</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Mail size={18} className="mt-1" />
                                <span>info@civicconnect.ke</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone size={18} className="mt-1" />
                                <span>+254 700 000000</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="mt-1" />
                                <span>Nairobi, Kenya<br />123 Civic Plaza</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p>© {currentYear} CivicConnect. Built with and for the People of Kenya.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
