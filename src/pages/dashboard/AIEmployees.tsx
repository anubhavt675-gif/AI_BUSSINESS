import { Bot, MessageSquare, Users, Calendar, BarChart3, Mic, Clock, Settings, ToggleLeft, ToggleRight } from 'lucide-react';
import { useState } from 'react';

const employees = [
  {
    id: 'receptionist',
    name: 'AI Receptionist',
    icon: MessageSquare,
    status: 'active' as const,
    description: 'Handles customer FAQs, captures leads, and manages first-contact conversations.',
    responsibilities: ['Answer FAQs', 'Provide business info', 'Capture leads', 'Handle first contact'],
    conversationsHandled: 142,
    actionsToday: 8,
    color: 'blue',
  },
  {
    id: 'sales',
    name: 'AI Sales Employee',
    icon: Users,
    status: 'active' as const,
    description: 'Identifies high-intent leads, qualifies prospects, and recommends follow-up actions.',
    responsibilities: ['Qualify leads', 'Track intent signals', 'Recommend follow-ups', 'Support sales process'],
    conversationsHandled: 89,
    actionsToday: 5,
    color: 'emerald',
  },
  {
    id: 'support',
    name: 'AI Support Employee',
    icon: Bot,
    status: 'active' as const,
    description: 'Handles repetitive support questions and escalates complex issues to humans.',
    responsibilities: ['Handle support queries', 'Retrieve customer info', 'Provide guidance', 'Escalate complex issues'],
    conversationsHandled: 67,
    actionsToday: 3,
    color: 'violet',
  },
  {
    id: 'appointment',
    name: 'AI Appointment Manager',
    icon: Calendar,
    status: 'active' as const,
    description: 'Checks availability, creates and manages appointments, sends confirmations.',
    responsibilities: ['Check availability', 'Book appointments', 'Handle rescheduling', 'Send confirmations'],
    conversationsHandled: 45,
    actionsToday: 2,
    color: 'amber',
  },
  {
    id: 'analyst',
    name: 'AI Business Analyst',
    icon: BarChart3,
    status: 'active' as const,
    description: 'Analyzes business data, generates insights, and creates daily reports.',
    responsibilities: ['Analyze data', 'Generate insights', 'Summarize activity', 'Create reports'],
    conversationsHandled: 0,
    actionsToday: 4,
    color: 'teal',
  },
  {
    id: 'voice',
    name: 'AI Voice Employee',
    icon: Mic,
    status: 'setup' as const,
    description: 'Handles voice interactions using speech-to-text and text-to-speech capabilities.',
    responsibilities: ['Handle voice calls', 'Speech-to-text', 'Business tool access', 'Escalate when needed'],
    conversationsHandled: 0,
    actionsToday: 0,
    color: 'rose',
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-100' },
  violet: { bg: 'bg-violet-50', text: 'text-violet-600', border: 'border-violet-100' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-100' },
  teal: { bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-100' },
  rose: { bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-100' },
};

export default function AIEmployeesPage() {
  const [enabledEmployees, setEnabledEmployees] = useState<Set<string>>(
    new Set(['receptionist', 'sales', 'support', 'appointment', 'analyst'])
  );

  const toggleEmployee = (id: string) => {
    setEnabledEmployees(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-surface-900">Your AI Team</h1>
        <p className="text-sm text-surface-500 mt-1">Manage your AI employees, their roles, and permissions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {employees.map(emp => {
          const colors = colorMap[emp.color];
          const isEnabled = enabledEmployees.has(emp.id);
          
          return (
            <div key={emp.id} className={`bg-white rounded-xl border transition-all ${
              isEnabled ? 'border-surface-200 hover:shadow-md' : 'border-surface-100 opacity-60'
            }`}>
              <div className="p-5">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${colors.bg}`}>
                    <emp.icon className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                      emp.status === 'active' ? 'bg-emerald-50 text-emerald-700' :
                      emp.status === 'setup' ? 'bg-amber-50 text-amber-700' :
                      'bg-surface-100 text-surface-500'
                    }`}>
                      {emp.status === 'active' ? 'Active' : emp.status === 'setup' ? 'Setup' : 'Inactive'}
                    </span>
                    <button onClick={() => toggleEmployee(emp.id)} className="text-surface-400 hover:text-surface-600">
                      {isEnabled ? (
                        <ToggleRight className="w-6 h-6 text-primary-600" />
                      ) : (
                        <ToggleLeft className="w-6 h-6" />
                      )}
                    </button>
                  </div>
                </div>

                <h3 className="text-base font-semibold text-surface-900">{emp.name}</h3>
                <p className="text-sm text-surface-500 mt-1 leading-relaxed">{emp.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {emp.responsibilities.map(r => (
                    <span key={r} className="inline-flex px-2 py-0.5 bg-surface-50 border border-surface-100 rounded-md text-xs text-surface-600">
                      {r}
                    </span>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-surface-100 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-lg font-bold text-surface-900">{emp.conversationsHandled}</p>
                      <p className="text-xs text-surface-400">Conversations</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-surface-900">{emp.actionsToday}</p>
                      <p className="text-xs text-surface-400">Today</p>
                    </div>
                  </div>
                  <button className="p-2 text-surface-400 hover:text-surface-600 hover:bg-surface-50 rounded-lg transition-colors">
                    <Settings className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
