import { useState } from 'react';
import { Search, Filter, Flame, Thermometer, Snowflake, ArrowRight, MessageSquare, Calendar, Clock, Bot, User, ChevronRight } from 'lucide-react';

const leads = [
  {
    id: '1',
    name: 'Rahul Sharma',
    email: 'rahul@email.com',
    phone: '+91 98765 43210',
    source: 'Website Chat',
    status: 'hot' as const,
    interestedIn: 'Annual Membership',
    lastInteraction: '2 min ago',
    aiSummary: 'Customer asked about annual pricing, availability, and requested a demo session.',
    recommendedAction: 'Follow up today with demo confirmation.',
    followUpStatus: 'due_today' as const,
    createdAt: 'Today',
  },
  {
    id: '2',
    name: 'Amit Kumar',
    email: 'amit@company.com',
    phone: '+91 87654 32109',
    source: 'Website Chat',
    status: 'hot' as const,
    interestedIn: 'Corporate Bulk Package',
    lastInteraction: '32 min ago',
    aiSummary: 'Asked about corporate packages for 50+ employees. High budget, decision maker.',
    recommendedAction: 'Schedule call with sales team.',
    followUpStatus: 'due_today' as const,
    createdAt: 'Today',
  },
  {
    id: '3',
    name: 'Priya Patel',
    email: 'priya@email.com',
    phone: '+91 76543 21098',
    source: 'WhatsApp',
    status: 'warm' as const,
    interestedIn: 'Monthly Membership',
    lastInteraction: '1 hr ago',
    aiSummary: 'Interested in monthly plan. Asked about personal training availability.',
    recommendedAction: 'Send pricing details and trainer availability.',
    followUpStatus: 'scheduled' as const,
    createdAt: 'Yesterday',
  },
  {
    id: '4',
    name: 'Sneha Reddy',
    email: 'sneha@email.com',
    phone: '+91 65432 10987',
    source: 'Website Chat',
    status: 'warm' as const,
    interestedIn: 'Group Classes',
    lastInteraction: '3 hrs ago',
    aiSummary: 'Asked about yoga and Zumba class schedules. Compared with other gyms.',
    recommendedAction: 'Share class schedule and offer free trial.',
    followUpStatus: 'scheduled' as const,
    createdAt: '2 days ago',
  },
  {
    id: '5',
    name: 'Vikram Singh',
    email: 'vikram@email.com',
    phone: '+91 54321 09876',
    source: 'Website Chat',
    status: 'cold' as const,
    interestedIn: 'General Inquiry',
    lastInteraction: '1 day ago',
    aiSummary: 'Asked about operating hours and location. No specific plan interest yet.',
    recommendedAction: 'Send general information brochure.',
    followUpStatus: 'completed' as const,
    createdAt: '3 days ago',
  },
];

const statusConfig = {
  hot: { icon: Flame, label: 'Hot', color: 'text-rose-600 bg-rose-50' },
  warm: { icon: Thermometer, label: 'Warm', color: 'text-amber-600 bg-amber-50' },
  cold: { icon: Snowflake, label: 'Cold', color: 'text-blue-600 bg-blue-50' },
};

const followUpConfig = {
  due_today: { label: 'Due Today', color: 'bg-rose-50 text-rose-700 border-rose-200' },
  overdue: { label: 'Overdue', color: 'bg-red-50 text-red-700 border-red-200' },
  scheduled: { label: 'Scheduled', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  completed: { label: 'Completed', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
};

export default function LeadsPage() {
  const [selectedLead, setSelectedLead] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const selected = leads.find(l => l.id === selectedLead);

  const filteredLeads = filter === 'all' ? leads : leads.filter(l => l.status === filter);

  return (
    <div className="animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-surface-900">Leads</h1>
          <p className="text-sm text-surface-500 mt-1">AI-captured and qualified leads from customer interactions.</p>
        </div>
        <div className="flex items-center gap-2">
          {['all', 'hot', 'warm', 'cold'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                filter === f ? 'bg-primary-50 text-primary-700 border border-primary-200' : 'text-surface-500 hover:bg-surface-50 border border-surface-200'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Lead List */}
        <div className="lg:col-span-2 space-y-3">
          {filteredLeads.map(lead => {
            const status = statusConfig[lead.status];
            const followUp = followUpConfig[lead.followUpStatus];
            const StatusIcon = status.icon;

            return (
              <button
                key={lead.id}
                onClick={() => setSelectedLead(lead.id)}
                className={`w-full text-left bg-white rounded-xl border p-4 sm:p-5 transition-all hover:shadow-md ${
                  selectedLead === lead.id ? 'border-primary-300 ring-1 ring-primary-100' : 'border-surface-200'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-surface-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-surface-600">
                        {lead.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-surface-900">{lead.name}</p>
                      <p className="text-xs text-surface-400">{lead.source} • {lead.lastInteraction}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${status.color}`}>
                      <StatusIcon className="w-3 h-3" />
                      {status.label}
                    </span>
                    <ChevronRight className="w-4 h-4 text-surface-300 hidden sm:block" />
                  </div>
                </div>

                <div className="mt-3 ml-13">
                  <p className="text-sm text-surface-600">{lead.interestedIn}</p>
                  <p className="text-xs text-surface-400 mt-1 line-clamp-1">{lead.aiSummary}</p>
                </div>

                <div className="mt-3 flex items-center gap-2 flex-wrap">
                  <span className={`inline-flex px-2 py-0.5 rounded border text-[10px] font-medium ${followUp.color}`}>
                    {followUp.label}
                  </span>
                  <span className="text-xs text-primary-600 font-medium">{lead.recommendedAction}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Lead Detail */}
        <div className="hidden lg:block">
          {selected ? (
            <div className="bg-white rounded-xl border border-surface-200 p-5 sticky top-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center">
                  <span className="text-base font-bold text-primary-700">
                    {selected.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-base font-semibold text-surface-900">{selected.name}</p>
                  <p className="text-xs text-surface-400">{selected.email}</p>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-surface-50">
                  <span className="text-surface-500">Status</span>
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${statusConfig[selected.status].color}`}>
                    {statusConfig[selected.status].label} Lead
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-surface-50">
                  <span className="text-surface-500">Interested In</span>
                  <span className="text-surface-900 font-medium">{selected.interestedIn}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-surface-50">
                  <span className="text-surface-500">Source</span>
                  <span className="text-surface-900 font-medium">{selected.source}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-surface-50">
                  <span className="text-surface-500">Last Interaction</span>
                  <span className="text-surface-900 font-medium">{selected.lastInteraction}</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-primary-50 rounded-lg border border-primary-100">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Bot className="w-3.5 h-3.5 text-primary-600" />
                  <span className="text-xs font-semibold text-primary-700">AI Summary</span>
                </div>
                <p className="text-xs text-primary-800 leading-relaxed">{selected.aiSummary}</p>
              </div>

              <div className="mt-3 p-3 bg-amber-50 rounded-lg border border-amber-100">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
                  <span className="text-xs font-semibold text-amber-700">Recommended Action</span>
                </div>
                <p className="text-xs text-amber-800">{selected.recommendedAction}</p>
              </div>

              <div className="mt-4 flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-primary-600 hover:bg-primary-700 text-white text-xs font-medium rounded-lg transition-colors">
                  <MessageSquare className="w-3.5 h-3.5" /> Follow Up
                </button>
                <button className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 border border-surface-200 text-surface-700 text-xs font-medium rounded-lg hover:bg-surface-50 transition-colors">
                  <Calendar className="w-3.5 h-3.5" /> Schedule
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-surface-200 p-8 text-center">
              <User className="w-10 h-10 text-surface-200 mx-auto mb-3" />
              <p className="text-sm text-surface-500">Select a lead to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
