import { useParams, Link } from 'react-router-dom';
import { fetchBillById, voteOnBill } from '../utils/api';
import {
    ArrowLeft,
    Calendar,
    Tag,
    CheckCircle2,
    Info,
    TrendingUp,
    AlertCircle,
    MessageSquareShare,
    PenBox,
    FileText,
    Share2,
    Bookmark,
    Loader2,
    Users2,
    ThumbsUp,
    ThumbsDown
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { translateText } from '../utils/translate';

export default function BillDetails() {
    const { t, i18n } = useTranslation();
    const { id } = useParams();
    const [bill, setBill] = useState(null);
    const [translatedBill, setTranslatedBill] = useState(null);
    const [loading, setLoading] = useState(true);
    const [translating, setTranslating] = useState(false);
    const [error, setError] = useState(null);
    const [opinion, setOpinion] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [translationCache, setTranslationCache] = useState({});
    const [voted, setVoted] = useState(false);

    useEffect(() => {
        // Check if user has already voted for this bill in this session
        const hasVoted = localStorage.getItem(`voted_${id}`);
        if (hasVoted) setVoted(true);
    }, [id]);

    const handleVote = async (voteType) => {
        if (voted) return;
        try {
            const updatedBill = await voteOnBill(id, voteType);
            setBill(updatedBill);
            setVoted(true);
            localStorage.setItem(`voted_${id}`, 'true');
        } catch (err) {
            console.error("Voting failed", err);
        }
    };

    useEffect(() => {
        const getBill = async () => {
            try {
                const data = await fetchBillById(id);
                setBill(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        getBill();
    }, [id]);

    useEffect(() => {
        const handleTranslation = async () => {
            if (!bill || i18n.language === 'en') {
                setTranslatedBill(null);
                return;
            }

            const cacheKey = `${id}-${i18n.language}`;
            if (translationCache[cacheKey]) {
                setTranslatedBill(translationCache[cacheKey]);
                return;
            }

            setTranslating(true);
            try {
                const [
                    translatedTitle,
                    translatedShortDesc,
                    translatedFullExpl,
                    translatedPros,
                    translatedConcerns,
                    translatedKeyPoints
                ] = await Promise.all([
                    translateText(bill.title, i18n.language),
                    translateText(bill.shortDescription, i18n.language),
                    translateText(bill.fullExplanation, i18n.language),
                    Promise.all(bill.pros.map(p => translateText(p, i18n.language))),
                    Promise.all(bill.concerns.map(c => translateText(c, i18n.language))),
                    Promise.all(bill.keyPoints.map(k => translateText(k, i18n.language)))
                ]);

                const translatedData = {
                    ...bill,
                    title: translatedTitle,
                    shortDescription: translatedShortDesc,
                    fullExplanation: translatedFullExpl,
                    pros: translatedPros,
                    concerns: translatedConcerns,
                    keyPoints: translatedKeyPoints
                };

                setTranslationCache(prev => ({ ...prev, [cacheKey]: translatedData }));
                setTranslatedBill(translatedData);
            } catch (err) {
                console.error("Translation failed", err);
            } finally {
                setTranslating(false);
            }
        };

        handleTranslation();
    }, [bill, i18n.language, id, translationCache]);

    const displayBill = translatedBill || bill;

    if (loading) {
        return (
            <div className="min-h-[80vh] flex flex-col items-center justify-center gap-4">
                <Loader2 className="animate-spin text-primary-600" size={48} />
                <p className="text-slate-500 font-bold animate-pulse">{t("analyzingBill")}</p>
            </div>
        );
    }

    if (error || !bill) {
        return (
            <div className="container mx-auto px-4 py-24 text-center space-y-8">
                <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto">
                    <AlertCircle size={40} />
                </div>
                <h2 className="text-4xl font-display font-bold text-slate-900">{t("billNotFound")}</h2>
                <p className="text-xl text-slate-600 font-medium">{error || "The bill you're looking for doesn't exist in our records."}</p>
                <Link to="/bills" className="btn-primary inline-flex gap-2 mx-auto">
                    <ArrowLeft size={20} />
                    {t("backToBills")}
                </Link>
            </div>
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (opinion.trim()) {
            setSubmitted(true);
            setOpinion('');
        }
    };

    const statusColors = {
        'upcoming': 'bg-amber-100 text-amber-700 border-amber-200',
        'active': 'bg-emerald-100 text-emerald-700 border-emerald-200',
        'passed': 'bg-indigo-100 text-indigo-700 border-indigo-200'
    };

    return (
        <div className="container mx-auto px-4 md:px-6 max-w-6xl pb-24">
            {/* Navigation and Actions */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 py-12 mb-4 border-b border-slate-100 animate-in fade-in duration-500">
                <Link to="/bills" className="group flex items-center gap-2 text-slate-600 font-bold hover:text-primary-600 transition-all uppercase tracking-wider text-sm">
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    {t("backToList")}
                </Link>

                <div className="flex items-center gap-4">
                    {translating && (
                        <div className="flex items-center gap-2 text-primary-600 text-xs font-bold animate-pulse px-3 py-1 bg-primary-50 rounded-lg">
                            <Loader2 size={12} className="animate-spin" />
                            Translating...
                        </div>
                    )}
                    <div className="flex items-center gap-3 print:hidden">
                        <button className="p-3 bg-white border border-slate-200 rounded-xl text-slate-500 hover:text-primary-600 hover:border-primary-200 hover:shadow-md transition-all">
                            <Share2 size={20} />
                        </button>
                        <button className="p-3 bg-white border border-slate-200 rounded-xl text-slate-500 hover:text-primary-600 hover:border-primary-200 hover:shadow-md transition-all">
                            <Bookmark size={20} />
                        </button>
                        {bill.pdfUrl ? (
                            <a
                                href={bill.pdfUrl}
                                download
                                className="btn-primary py-2.5 px-6 text-sm gap-2"
                            >
                                <FileText size={18} />
                                Download Gazette PDF
                            </a>
                        ) : (
                            <button
                                onClick={() => window.print()}
                                className="btn-primary py-2.5 px-6 text-sm gap-2"
                            >
                                <FileText size={18} />
                                Download PDF Summary
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @media print {
                    .print\\:hidden { display: none !important; }
                    body { background: white; }
                    .container { max-width: 100% !important; padding: 0 !important; margin: 0 !important; }
                    .shadow-premium { box-shadow: none !important; border: 1px solid #e2e8f0 !important; }
                }
            `}} />

            <div className="grid lg:grid-cols-3 gap-12 mt-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                    {/* Header Info */}
                    <div className="space-y-6">
                        <div className="flex flex-wrap items-center gap-4">
                            <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border transition-all ${statusColors[displayBill.status.toLowerCase()] || 'bg-slate-100'}`}>
                                {displayBill.status} Status
                            </span>
                            <div className="flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold tracking-widest uppercase">
                                <Tag size={14} />
                                <span>{displayBill.category}</span>
                            </div>
                            {displayBill.sponsor && (
                                <div className="flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-bold tracking-widest uppercase">
                                    <Users2 size={14} />
                                    <span>Sponsor: {displayBill.sponsor}</span>
                                </div>
                            )}
                            <div className="flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold tracking-widest uppercase">
                                <Calendar size={14} />
                                <span>Published: {new Date(displayBill.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-[1.15] tracking-tight">
                            {displayBill.title}
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium">
                            {displayBill.shortDescription}
                        </p>
                    </div>

                    {/* Simplified Explanation Section */}
                    <div className="bg-white rounded-[2.5rem] p-10 shadow-premium border border-slate-100 space-y-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-[100px] flex items-center justify-center -z-0">
                            <Info size={40} className="text-primary-200 -mt-8 -mr-8" />
                        </div>

                        <div className="relative z-10 flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-primary-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary-200">
                                <FileText size={24} />
                            </div>
                            <h2 className="text-3xl font-display font-bold text-slate-800">{t("simplifiedExplanation")}</h2>
                        </div>

                        <p className="relative z-10 text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
                            {displayBill.fullExplanation}
                        </p>

                        <div className="relative z-10 grid sm:grid-cols-2 gap-8 pt-6">
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 text-emerald-600 font-bold uppercase tracking-wider text-sm">
                                    <TrendingUp size={20} />
                                    <span>{t("pros")}</span>
                                </div>
                                <ul className="space-y-4">
                                    {displayBill.pros.map((pro, index) => (
                                        <li key={index} className="flex gap-3 group">
                                            <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1 transition-transform group-hover:scale-110" />
                                            <span className="text-slate-700 font-medium leading-relaxed">{pro}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-3 text-amber-600 font-bold uppercase tracking-wider text-sm">
                                    <AlertCircle size={20} />
                                    <span>{t("concerns")}</span>
                                </div>
                                <ul className="space-y-4">
                                    {displayBill.concerns.map((concern, index) => (
                                        <li key={index} className="flex gap-3 group">
                                            <div className="w-4 h-4 rounded-full border-2 border-amber-500 mt-1.5 shrink-0 group-hover:bg-amber-500 transition-colors" />
                                            <span className="text-slate-700 font-medium leading-relaxed">{concern}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Voting Section */}
                    <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl space-y-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/10 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>

                        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                            <div className="space-y-2">
                                <h3 className="text-3xl font-display font-bold">{t("whatIsYourStance")}</h3>
                                <p className="text-slate-400 font-medium">Your vote helps represent the public's opinion to legislators.</p>
                            </div>

                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => handleVote('support')}
                                    disabled={voted}
                                    className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all ${voted ? 'bg-slate-800 text-slate-500 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-500 hover:scale-105 active:scale-95 shadow-lg shadow-emerald-900/40'}`}
                                >
                                    <ThumbsUp size={20} />
                                    {t("support")}
                                </button>
                                <button
                                    onClick={() => handleVote('oppose')}
                                    disabled={voted}
                                    className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all ${voted ? 'bg-slate-800 text-slate-500 cursor-not-allowed' : 'bg-rose-600 hover:bg-rose-500 hover:scale-105 active:scale-95 shadow-lg shadow-rose-900/40'}`}
                                >
                                    <ThumbsDown size={20} />
                                    {t("oppose")}
                                </button>
                            </div>
                        </div>

                        {/* Results Bar */}
                        <div className="relative z-10 space-y-4 pt-4">
                            <div className="flex justify-between text-sm font-bold uppercase tracking-widest">
                                <span className="text-emerald-400">{displayBill.votesSupport || 0} {t("supportVotes")}</span>
                                <span className="text-rose-400">{displayBill.votesOppose || 0} {t("opposeVotes")}</span>
                            </div>
                            <div className="h-4 bg-slate-800 rounded-full overflow-hidden flex">
                                <div
                                    className="h-full bg-emerald-500 transition-all duration-1000 ease-out"
                                    style={{ width: `${((displayBill.votesSupport || 0) / ((displayBill.votesSupport || 0) + (displayBill.votesOppose || 0) || 1)) * 100}%` }}
                                ></div>
                                <div
                                    className="h-full bg-rose-500 transition-all duration-1000 ease-out"
                                    style={{ width: `${((displayBill.votesOppose || 0) / ((displayBill.votesSupport || 0) + (displayBill.votesOppose || 0) || 1)) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    {/* Key Points Section */}
                    <div className="space-y-8 animate-in slide-in-from-bottom-6 duration-700">
                        <h3 className="text-3xl font-display font-bold text-slate-800 flex items-center gap-3">
                            <CheckCircle2 className="text-primary-600" size={28} />
                            {t("keyProvisions")}
                        </h3>
                        <div className="grid gap-4">
                            {displayBill.keyPoints.map((point, index) => (
                                <div key={index} className="p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-white hover:shadow-premium hover:border-white transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="flex items-start gap-5">
                                        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-100 text-primary-700 font-bold text-sm shrink-0">
                                            {index + 1}
                                        </span>
                                        <p className="text-slate-700 font-semibold leading-relaxed pt-0.5">
                                            {point}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar Actions */}
                <div className="space-y-8">
                    {/* Public Participation Card */}
                    <div className="bg-indigo-600 text-white rounded-[2.5rem] p-8 space-y-8 sticky top-32 shadow-2xl shadow-indigo-200 overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full translate-x-10 -translate-y-10 group-hover:-translate-x-4 group-hover:translate-y-4 transition-all duration-700 -z-0"></div>

                        <div className="relative z-10 flex items-center gap-3 mb-2">
                            <PenBox size={24} className="text-indigo-200" />
                            <h3 className="text-2xl font-display font-bold">{t("haveYourSay")}</h3>
                        </div>

                        <p className="relative z-10 text-indigo-100 font-medium leading-relaxed">
                            Public participation is your constitutional right under Article 118. Share your opinion on this bill.
                        </p>

                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
                                <textarea
                                    value={opinion}
                                    onChange={(e) => setOpinion(e.target.value)}
                                    className="w-full bg-white/10 border border-white/20 rounded-2xl p-4 text-white placeholder:text-white/50 focus:bg-white/20 focus:outline-none transition-all resize-none min-h-[160px] font-medium"
                                    placeholder="Tell us what you think about this bill..."
                                    required
                                />
                                <button
                                    type="submit"
                                    className="w-full py-4 bg-white text-indigo-700 font-bold rounded-2xl hover:bg-white/90 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-2 group/submit"
                                >
                                    <MessageSquareShare size={20} className="group-hover/submit:scale-110 transition-transform" />
                                    {t("submitOpinion")}
                                </button>
                                <p className="text-center text-xs text-indigo-200 mt-4 leading-relaxed font-medium">
                                    Your feedback is aggregated and shared with the relevant Parliamentary Committee.
                                </p>
                            </form>
                        ) : (
                            <div className="relative z-10 bg-white/10 border border-white/20 rounded-2xl p-8 text-center animate-in zoom-in duration-300">
                                <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-900/40">
                                    <CheckCircle2 size={32} className="text-white" />
                                </div>
                                <h4 className="text-2xl font-display font-bold mb-3">{t("opinionReceived")}</h4>
                                <p className="text-indigo-100 font-medium leading-relaxed mb-6">Thank you for participating. Your voice helps strengthen democracy.</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="text-white font-bold underline hover:text-indigo-200 transition-colors"
                                >
                                    Submit another response
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Related Resources */}
                    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-premium space-y-6">
                        <h4 className="text-lg font-display font-bold text-slate-800 uppercase tracking-wider">Related Resources</h4>
                        <div className="grid gap-3">
                            {['Official Gazette Notice', 'Parliamentary Hansard', 'Committee Report', 'Comparison with Active Law'].map((item) => (
                                <a key={item} href="#" className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all font-medium text-slate-700 text-sm group">
                                    {item}
                                    <ArrowLeft size={16} className="rotate-180 opacity-0 group-hover:opacity-100 transition-all" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
