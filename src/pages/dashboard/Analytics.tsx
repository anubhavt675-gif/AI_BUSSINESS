import { BarChart3, TrendingUp, Users, MessageSquare, Calendar, Bot, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const weeklyData = [
  { day: 'Mon', conversations: 18, leads: 4 },
  { day: 'Tue', conversations: 22, leads: 6 },
  { day: 'Wed', conversations: 28, leads: 5 },
  { day: 'Thu', conversations: 24, leads: 7 },
  { day: 'Fri', conversations: 32, leads: 8 },
  { day: 'Sat', conversations: 20, leads: 3 },
  { day: 'Sun', conversations: 8, leads: 1 },
];

const maxConversations = Math.max(...weeklyData.map(d => d.conversations));

export default function AnalyticsPage() {
  return (
    <div className="animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-surface-900">Analytics</h1>
          <p className="text-sm text-surface-500 mt-1">AI-powered business insights and performance metrics.</p>
        </div>
        <div className="flex items-center gap-2">
          {['Today', '7 Days', '30 Days', 'Custom'].map((period, idx) => (
            <button
              key={period}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                idx === 1 ? 'bg-primary-50 text-primary-700 border border-primary-200' : 'text-surface-500 border border-surface-200 hover:bg-surface-50'
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Conversations', value: '152', change: '+23%', up: true, icon: MessageSquare, color: 'blue' },
          { label: 'New Leads', value: '34', change: '+12%', up: true, icon: Users, color: 'emerald' },
          { label: 'Appointments Booked', value: '18', change: '+8%', up: true, icon: Calendar, color: 'violet' },
          { label: 'Conversion Rate', value: '22%', change: '-2%', up: false, icon: TrendingUp, color: 'amber' },
        ].map(kpi => (
          <div key={kpi.label} className="bg-white rounded-xl border border-surface-200 p-5">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center bg-${kpi.color}-50`}>
                <kpi.icon className={`w-4 h-4 text-${kpi.color}-600`} />
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

      {/* Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white rounded-xl border border-surface-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-base font-semibold text-surface-900">Conversations & Leads (This Week)</h3>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-xs text-surface-500">
                <span className="w-2.5 h-2.5 bg-primary-500 rounded-full" /> Conversations
              </span>
              <span className="flex items-center gap-1.5 text-xs text-surface-500">
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full" /> Leads
              </span>
            </div>
          </div>
          
          <div className="flex items-end justify-between gap-2 h-48">
            {weeklyData.map((data) => (
              <div key={data.day} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full flex flex-col items-center gap-0.5" style={{ height: '160px' }}>
                  <div className="w-full flex items-end justify-center gap-1 flex-1">
                    <div 
                      className="w-3 sm:w-5 bg-primary-500 rounded-t-sm transition-all"
                      style={{ height: `${(data.conversations / maxConversations) * 100}%` }}
                    />
                    <div 
                      className="w-3 sm:w-5 bg-emerald-500 rounded-t-sm transition-all"
                      style={{ height: `${(data.leads / maxConversations) * 100}%` }}
                    />
                  </div>
                </div>
                <span className="text-xs text-surface-400 mt-1">{data.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Distribution */}
        <div className="bg-white rounded-xl border border-surface-200 p-6">
          <h3 className="text-base font-semibold text-surface-900 mb-6">Lead Distribution</h3>
          <div className="space-y-4">
            {[
              { label: 'Hot Leads', value: 12, total: 34, color: 'bg-rose-500' },
              { label: 'Warm Leads', value: 15, total: 34, color: 'bg-amber-500' },
              { label: 'Cold Leads', value: 7, total: 34, color: 'bg-blue-500' },
            ].map(item => (
              <div key={item.label}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm text-surface-700">{item.label}</span>
                  <span className="text-sm font-semibold text-surface-900">{item.value}</span>
                </div>
                <div className="h-2 bg-surface-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${item.color} rounded-full transition-all`}
                    style={{ width: `${(item.value / item.total) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-surface-100">
            <p className="text-xs text-surface-500">Top Source</p>
            <p className="text-sm font-semibold text-surface-900 mt-0.5">Website Chat (68%)</p>
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-white rounded-xl border border-surface-200 p-6">
        <div className="flex items-center gap-2 mb-5">
          <Bot className="w-4 h-4 text-primary-600" />
          <h3 className="text-base font-semibold text-surface-900">AI Business Analyst Insights</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: 'Most Asked Topic', desc: 'Pricing and membership plans accounted for 42% of all conversations this week.', type: 'info' },
            { title: 'Peak Hours', desc: '10 AM - 12 PM generates 35% of daily enquiries. Consider staffing accordingly.', type: 'warning' },
            { title: 'Lead Quality', desc: 'Hot leads increased 18% compared to last week. Follow-up rate is at 72%.', type: 'success' },
            { title: 'Service Interest', desc: 'Personal training enquiries up 25%. Consider promoting this service more.', type: 'info' },
          ].map((insight, idx) => (
            <div key={idx} className={`p-4 rounded-lg border ${
              insight.type === 'warning' ? 'bg-amber-50 border-amber-100' :
              insight.type === 'success' ? 'bg-emerald-50 border-emerald-100' :
              'bg-surface-50 border-surface-100'
            }`}>
              <p className="text-sm font-semibold text-surface-900 mb-1">{insight.title}</p>
              <p className="text-xs text-surface-600 leading-relaxed">{insight.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
