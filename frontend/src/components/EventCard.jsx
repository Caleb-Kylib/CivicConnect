import { Calendar, MapPin, Building2, ExternalLink } from 'lucide-react';

export default function EventCard({ event }) {
    return (
        <div className="glass-card flex flex-col md:flex-row gap-6 hover:translate-x-1 border-l-4 border-l-primary-500">
            <div className="flex-1">
                <div className="flex flex-wrap items-center gap-4 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600">
                    <div className="flex items-center gap-1.5 px-2 py-0.5 bg-primary-50 rounded-md">
                        <Building2 size={14} />
                        <span>{event.organizer}</span>
                    </div>
                </div>

                <h3 className="text-xl font-display font-bold mb-3 text-slate-800 leading-tight">
                    {event.title}
                </h3>

                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                    {event.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                    <div className="flex items-start gap-2.5 text-slate-500 text-sm">
                        <Calendar size={18} className="text-primary-500 mt-0.5 shrink-0" />
                        <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-slate-500 text-sm">
                        <MapPin size={18} className="text-primary-500 mt-0.5 shrink-0" />
                        <span className="font-medium">{event.location}</span>
                    </div>
                </div>
            </div>

            <div className="md:w-48 shrink-0 flex items-center">
                <button className="btn-primary w-full py-2.5 text-sm gap-2">
                    <span>Join Now</span>
                    <ExternalLink size={16} />
                </button>
            </div>
        </div>
    );
}
