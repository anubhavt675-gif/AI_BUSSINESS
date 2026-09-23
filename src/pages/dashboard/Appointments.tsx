import { useState } from 'react';
import { Calendar, Clock, User, Check, X, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const appointments = [
  { id: '1', customerName: 'Priya Patel', customerEmail: 'priya@email.com', customerPhone: '+91 98765 43210', date: '2026-01-15', time: '10:00 AM', duration: 60, status: 'confirmed' as const, notes: 'First visit - interested in annual plan', service: 'Demo Session' },
  { id: '2', customerName: 'Rahul Sharma', customerEmail: 'rahul@email.com', customerPhone: '+91 87654 32109', date: '2026-01-15', time: '2:00 PM', duration: 45, status: 'scheduled' as const, notes: 'Follow-up from website chat', service: 'Consultation' },
  { id: '3', customerName: 'Amit Kumar', customerEmail: 'amit@company.com', customerPhone: '+91 76543 21098', date: '2026-01-16', time: '11:00 AM', duration: 60, status: 'scheduled' as const, notes: 'Corporate package discussion', service: 'Meeting' },
  { id: '4', customerName: 'Sneha Reddy', customerEmail: 'sneha@email.com', customerPhone: '+91 65432 10987', date: '2026-01-14', time: '3:00 PM', duration: 30, status: 'completed' as const, notes: 'Completed trial session', service: 'Trial Session' },
  { id: '5', customerName: 'Vikram Singh', customerEmail: 'vikram@email.com', customerPhone: '+91 54321 09876', date: '2026-01-13', time: '4:00 PM', duration: 30, status: 'cancelled' as const, notes: 'Customer rescheduled', service: 'Consultation' },
];

const statusConfig = {
  scheduled: { label: 'Scheduled', color: 'bg-blue-50 text-blue-700 border-blue-200', icon: Clock },
  confirmed: { label: 'Confirmed', color: 'bg-emerald-50 text-emerald-700 border-emerald-200', icon: Check },
  completed: { label: 'Completed', color: 'bg-surface-50 text-surface-600 border-surface-200', icon: Check },
  cancelled: { label: 'Cancelled', color: 'bg-rose-50 text-rose-700 border-rose-200', icon: X },
  rescheduled: { label: 'Rescheduled', color: 'bg-amber-50 text-amber-700 border-amber-200', icon: AlertCircle },
};

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
];

export default function AppointmentsPage() {
  const [view, setView] = useState<'list' | 'calendar'>('list');
  const [filter, setFilter] = useState<string>('all');

  const filteredAppointments = filter === 'all' 
    ? appointments 
    : appointments.filter(a => a.status === filter);

  return (
    <div className="animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-surface-900">Appointments</h1>
          <p className="text-sm text-surface-500 mt-1">Manage bookings, availability, and scheduling.</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setView('list')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              view === 'list' ? 'bg-primary-50 text-primary-700 border border-primary-200' : 'text-surface-500 border border-surface-200'
            }`}
          >
            List
          </button>
          <button
            onClick={() => setView('calendar')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              view === 'calendar' ? 'bg-primary-50 text-primary-700 border border-primary-200' : 'text-surface-500 border border-surface-200'
            }`}
          >
            Calendar
          </button>
          <button className="px-4 py-1.5 bg-primary-600 hover:bg-primary-700 text-white text-xs font-medium rounded-lg transition-colors">
            + New Appointment
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Today', value: '2', color: 'text-blue-600' },
          { label: 'This Week', value: '8', color: 'text-emerald-600' },
          { label: 'Confirmed', value: '5', color: 'text-violet-600' },
          { label: 'Pending', value: '3', color: 'text-amber-600' },
        ].map(stat => (
          <div key={stat.label} className="bg-white rounded-xl border border-surface-200 p-4">
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            <p className="text-xs text-surface-500 mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      {view === 'list' ? (
        <div className="bg-white rounded-xl border border-surface-200 overflow-hidden">
          {/* Filter tabs */}
          <div className="px-4 py-3 border-b border-surface-100 flex items-center gap-2 overflow-x-auto">
            {['all', 'scheduled', 'confirmed', 'completed', 'cancelled'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                  filter === f ? 'bg-primary-50 text-primary-700' : 'text-surface-500 hover:bg-surface-50'
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>

          {/* Appointment list */}
          <div className="divide-y divide-surface-100">
            {filteredAppointments.map(apt => {
              const status = statusConfig[apt.status];
              const StatusIcon = status.icon;
              return (
                <div key={apt.id} className="p-4 sm:p-5 hover:bg-surface-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-surface-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-semibold text-surface-600">
                          {apt.customerName.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-surface-900">{apt.customerName}</p>
                        <p className="text-xs text-surface-500 mt-0.5">{apt.service} • {apt.duration} min</p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="inline-flex items-center gap-1 text-xs text-surface-500">
                            <Calendar className="w-3 h-3" /> {apt.date}
                          </span>
                          <span className="inline-flex items-center gap-1 text-xs text-surface-500">
                            <Clock className="w-3 h-3" /> {apt.time}
                          </span>
                        </div>
                        {apt.notes && (
                          <p className="text-xs text-surface-400 mt-1.5">{apt.notes}</p>
                        )}
                      </div>
                    </div>
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border ${status.color}`}>
                      <StatusIcon className="w-3 h-3" />
                      {status.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Calendar View */
        <div className="bg-white rounded-xl border border-surface-200 p-4 sm:p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-base font-semibold text-surface-900">January 2026</h3>
            <div className="flex items-center gap-2">
              <button className="p-1.5 hover:bg-surface-50 rounded-lg"><ChevronLeft className="w-4 h-4 text-surface-600" /></button>
              <button className="p-1.5 hover:bg-surface-50 rounded-lg"><ChevronRight className="w-4 h-4 text-surface-600" /></button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-px bg-surface-200 rounded-lg overflow-hidden">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
              <div key={day} className="bg-surface-50 py-2 text-center text-xs font-medium text-surface-500">{day}</div>
            ))}
            {Array.from({ length: 35 }, (_, i) => {
              const day = i - 2; // offset for starting day
              const isCurrentMonth = day >= 1 && day <= 31;
              const isToday = day === 15;
              const hasAppointment = [13, 14, 15, 16].includes(day);
              return (
                <div key={i} className={`bg-white min-h-[70px] p-1.5 ${!isCurrentMonth ? 'opacity-30' : ''}`}>
                  <span className={`text-xs font-medium ${isToday ? 'w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center' : 'text-surface-600'}`}>
                    {isCurrentMonth ? day : ''}
                  </span>
                  {hasAppointment && isCurrentMonth && (
                    <div className="mt-1 px-1 py-0.5 bg-primary-50 rounded text-[10px] text-primary-700 font-medium truncate">
                      {day === 15 ? '2 appts' : '1 appt'}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
