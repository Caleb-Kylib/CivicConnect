import { useState, useMemo, useEffect } from 'react';
import { fetchBills } from '../utils/api';
import BillCard from '../components/BillCard';
import SearchBar from '../components/SearchBar';
import { Landmark, Filter, ChevronDown, CheckCircle2, LayoutGrid, List, Loader2 } from 'lucide-react';
import { clsx } from 'clsx';

export default function Bills() {
    const [bills, setBills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [categoryFilter, setCategoryFilter] = useState('All');
    const [viewMode, setViewMode] = useState('grid');

    useEffect(() => {
        const getBills = async () => {
            try {
                const data = await fetchBills();
                setBills(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        getBills();
    }, []);

    const categories = ['All', ...new Set(bills.map(b => b.category))];
    const statuses = ['All', 'Upcoming', 'Active', 'Passed'];

    const filteredBills = useMemo(() => {
        return bills.filter(bill => {
            const matchesSearch = bill.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                bill.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesStatus = statusFilter === 'All' || bill.status === statusFilter;
            const matchesCategory = categoryFilter === 'All' || bill.category === categoryFilter;
            return matchesSearch && matchesStatus && matchesCategory;
        });
    }, [bills, searchTerm, statusFilter, categoryFilter]);

    if (loading) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
                <Loader2 className="animate-spin text-primary-600" size={48} />
                <p className="text-slate-500 font-bold animate-pulse">Loading Parliamentary Bills...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto px-4 py-24 text-center space-y-6">
                <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto">
                    <Landmark size={40} />
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900">Unable to load bills</h3>
                <p className="text-slate-600 max-w-sm mx-auto font-medium">{error}. Please check if your backend server is running.</p>
                <button onClick={() => window.location.reload()} className="btn-primary">Try Again</button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 md:px-6 space-y-16">
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center space-y-6 pt-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                    <Landmark size={14} />
                    <span>Legislative Tracker</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 leading-tight">
                    Explore Parliamentary Bills
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                    Stay informed about the laws shaping Kenya. Search and filter through current, upcoming, and past legislation.
                </p>
            </div>

            {/* Search and Filters */}
            <div className="max-w-6xl mx-auto space-y-8 bg-white p-8 rounded-[2rem] shadow-premium border border-slate-100">
                <div className="flex flex-col lg:flex-row gap-6 items-center">
                    <div className="flex-grow w-full">
                        <SearchBar
                            value={searchTerm}
                            onChange={setSearchTerm}
                            onClear={() => setSearchTerm('')}
                            placeholder="Search by title or keyword..."
                        />
                    </div>

                    <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto shrink-0">
                        <div className="relative group w-full sm:w-auto">
                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="appearance-none w-full sm:w-44 px-4 py-4 bg-slate-50 border border-slate-200 text-slate-700 rounded-2xl focus:ring-4 focus:ring-primary-100 focus:border-primary-400 outline-none font-medium cursor-pointer transition-all"
                            >
                                {statuses.map(s => <option key={s} value={s}>{s} Status</option>)}
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-focus-within:text-primary-500 transition-colors" size={18} />
                        </div>

                        <div className="relative group w-full sm:w-auto">
                            <select
                                value={categoryFilter}
                                onChange={(e) => setCategoryFilter(e.target.value)}
                                className="appearance-none w-full sm:w-44 px-4 py-4 bg-slate-50 border border-slate-200 text-slate-700 rounded-2xl focus:ring-4 focus:ring-primary-100 focus:border-primary-400 outline-none font-medium cursor-pointer transition-all"
                            >
                                {categories.map(c => <option key={c} value={c}>{c} Category</option>)}
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-focus-within:text-primary-500 transition-colors" size={18} />
                        </div>

                        <div className="hidden sm:flex bg-slate-100 p-1 rounded-xl gap-1">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={clsx(
                                    "p-2.5 rounded-lg transition-all",
                                    viewMode === 'grid' ? "bg-white shadow-sm text-primary-600" : "text-slate-500 hover:text-slate-800"
                                )}
                            >
                                <LayoutGrid size={20} />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={clsx(
                                    "p-2.5 rounded-lg transition-all",
                                    viewMode === 'list' ? "bg-white shadow-sm text-primary-600" : "text-slate-500 hover:text-slate-800"
                                )}
                            >
                                <List size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Results Info */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                    <p className="text-slate-500 text-sm font-medium">
                        Showing <span className="text-primary-600 font-bold">{filteredBills.length}</span> bills
                        {(statusFilter !== 'All' || categoryFilter !== 'All' || searchTerm) && " for selected filters"}
                    </p>
                    {(statusFilter !== 'All' || categoryFilter !== 'All' || searchTerm) && (
                        <button
                            onClick={() => {
                                setStatusFilter('All');
                                setCategoryFilter('All');
                                setSearchTerm('');
                            }}
                            className="text-primary-600 text-sm font-bold hover:text-primary-700 hover:underline transition-all"
                        >
                            Clear all filters
                        </button>
                    )}
                </div>
            </div>

            {/* Grid Content */}
            <div className={viewMode === 'grid'
                ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "flex flex-col gap-6"
            }>
                {filteredBills.map((bill) => (
                    <BillCard key={bill.id} bill={bill} />
                ))}
            </div>

            {/* Empty State */}
            {filteredBills.length === 0 && (
                <div className="py-24 text-center max-w-xl mx-auto space-y-6 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
                    <div className="w-20 h-20 bg-white shadow-sm rounded-full flex items-center justify-center mx-auto text-slate-300">
                        <Landmark size={40} />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-slate-800">No bills found</h3>
                    <p className="text-slate-600 leading-relaxed font-medium px-8">
                        We couldn't find any bills matching your current search or filter criteria. Try searching for something else or clearing your filters.
                    </p>
                    <button
                        onClick={() => {
                            setStatusFilter('All');
                            setCategoryFilter('All');
                            setSearchTerm('');
                        }}
                        className="btn-primary"
                    >
                        Reset All Filters
                    </button>
                </div>
            )}

            {/* Call to action */}
            <div className="bg-indigo-600 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl shadow-indigo-100 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-full bg-white/5 -skew-x-12 translate-x-20"></div>
                <div className="relative z-10 max-w-2xl text-center md:text-left space-y-6">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">Can't find the bill <br /> you are looking for?</h2>
                    <p className="text-indigo-100 text-lg font-medium">We update our database daily with new legislative records from the National Assembly and the Senate.</p>
                </div>
                <button className="relative z-10 px-8 py-4 bg-white text-indigo-700 font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all active:scale-95 whitespace-nowrap">
                    Notify me of updates
                </button>
            </div>
        </div>
    );
}
