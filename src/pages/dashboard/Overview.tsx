import { MessageSquare, Users, TrendingUp, Calendar, Clock, DollarSign, Bot, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function DashboardOverview() {
  const kpis = [
    { label: 'Customer Conversations', value: '24', change: '+12%', up: true, icon: MessageSquare, color: 'blue' },
    { label: 'New Leads', value: '8', change: '+3', up: true, icon: Users, color: 'emerald' },
    { label: 'High-Intent Leads', value: '3', change: '+1', up: true, icon: TrendingUp, color: 'violet' },
    { label: 'Appointments', value: '5', change: '-1', up: false, icon: Calendar, color: 'amber' },
    { label: 'Pending Follow-Ups', value: '6', change: '+2', up: true, icon: Clock, color: 'rose' },
    { label: 'Sales Pipeline', value: '₹2.4L', change: '+18%', up: true, icon: DollarSign, color: 'teal' },
  ];

  const insights = [
    { type: 'info', text: 'Pricing was the most frequently asked question today.', icon: '💡' },
    { type: 'warning', text: '3 high-intent leads have not received follow-up yet.', icon: '⚠️' },
    { type: 'success', text: 'Conversations increased 12% compared to yesterday.', icon: '📈' },
    { type: 'info', text: '10 AM - 12 PM slot has the highest appointment demand.', icon: '🕐' },
  ];

  const recentActivity = [
    { time: '2 min ago', action: 'Captured new lead', detail: 'Rahul Sharma — interested in Annual Plan', employee: 'AI Sales' },
    { time: '15 min ago', action: 'Booked appointment', detail: 'Priya Patel — Demo session, Tomorrow 3 PM', employee: 'AI Receptionist' },
    { time: '32 min ago', action: 'Answered FAQ', detail: 'Pricing inquiry from website visitor', employee: 'AI Receptionist' },
    { time: '1 hr ago', action: 'Identified high intent', detail: 'Amit Kumar — asked about bulk pricing', employee: 'AI Sales' },
    { time: '2 hrs ago', action: 'Generated insight', detail: 'Peak enquiry time: 10 AM - 12 PM', employee: 'AI Analyst' },
  ];

  const colorMap: Record<string, string> = {
    blue: 'bg-blue-50 text-blue-600',
    emerald: 'bg-emerald-50 text-emerald-600',
    violet: 'bg-violet-50 text-violet-600',
    amber: 'bg-amber-50 text-amber-600',
    rose: 'bg-rose-50 text-rose-600',
    teal: 'bg-teal-50 text-teal-600',
  };

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-surface-900">
          Good morning, FitZone
        </h1>
        <p className="text-sm text-surface-500 mt-1">Here's what your AI employee handled today.</p>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
        {kpis.map(kpi => (
          <div key={kpi.label} className="bg-white rounded-xl border border-surface-200 p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${colorMap[kpi.color]}`}>
                <kpi.icon className="w-4 h-4" />
              </div>
              <span className={`text-xs font-medium flex items-center gap-0.5 ${kpi.up ? 'text-emerald-600' : 'text-rose-500'}`}>
                {kpi.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {kpi.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-surface-900">{kpi.value}</p>
            <p className="text-xs text-surface-500 mt-0.5">{kpi.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AI Insights */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-surface-200 p-6">
          <div className="flex items-center gap-2 mb-5">
            <Bot className="w-4 h-4 text-primary-600" />
            <h2 className="text-base font-semibold text-surface-900">AI Insights</h2>
          </div>
          <div className="space-y-3">
            {insights.map((insight, idx) => (
              <div key={idx} className={`flex items-start gap-3 p-3 rounded-lg ${
                insight.type === 'warning' ? 'bg-amber-50 border border-amber-100' :
                insight.type === 'success' ? 'bg-emerald-50 border border-emerald-100' :
                'bg-surface-50 border border-surface-100'
              }`}>
                <span className="text-base flex-shrink-0">{insight.icon}</span>
                <p className="text-sm text-surface-700">{insight.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl border border-surface-200 p-6">
          <h2 className="text-base font-semibold text-surface-900 mb-5">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, idx) => (
              <div key={idx} className="relative pl-4">
                <div className="absolute left-0 top-1.5 w-2 h-2 bg-primary-400 rounded-full" />
                {idx < recentActivity.length - 1 && (
                  <div className="absolute left-[3px] top-4 w-0.5 h-[calc(100%+4px)] bg-surface-100" />
                )}
                <p className="text-sm font-medium text-surface-900">{activity.action}</p>
                <p className="text-xs text-surface-500 mt-0.5">{activity.detail}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-surface-400">{activity.time}</span>
                  <span className="text-xs text-primary-600 font-medium">{activity.employee}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
