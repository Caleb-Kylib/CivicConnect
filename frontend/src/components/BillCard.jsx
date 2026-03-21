import { Link } from 'react-router-dom';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';

export default function BillCard({ bill }) {
    const getStatusBadge = (status) => {
        switch (status.toLowerCase()) {
            case 'upcoming':
                return <span className="badge-upcoming">Upcoming</span>;
            case 'active':
                return <span className="badge-active">Active</span>;
            case 'passed':
                return <span className="badge-passed">Passed</span>;
            default:
                return null;
        }
    };

    return (
        <div className="glass-card flex flex-col h-full group hover:translate-y-[-4px] transform-gpu">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2 text-primary-600">
                    <Tag size={16} />
                    <span className="text-xs font-semibold uppercase tracking-wider">{bill.category}</span>
                </div>
                {getStatusBadge(bill.status)}
            </div>

            <h3 className="text-xl font-display font-bold mb-3 text-slate-800 line-clamp-2 leading-tight group-hover:text-primary-700 transition-colors">
                {bill.title}
            </h3>

            <p className="text-slate-600 mb-6 line-clamp-3 text-sm flex-grow">
                {bill.shortDescription}
            </p>

            <div className="flex items-center gap-4 py-4 border-t border-slate-100 text-slate-500 text-sm mb-4">
                <div className="flex items-center gap-1.5">
                    <Calendar size={16} />
                    <span>{new Date(bill.date).toLocaleDateString()}</span>
                </div>
            </div>

            <Link
                to={`/bills/${bill.id}`}
                className="btn-outline flex items-center justify-between group/btn bg-slate-50 border-transparent hover:bg-primary-50 hover:text-primary-700 hover:border-primary-100"
            >
                <span>View Details</span>
                <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
            </Link>
        </div>
    );
}
