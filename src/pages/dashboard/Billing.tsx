import { CreditCard, Check, Zap, ArrowUpRight } from 'lucide-react';

export default function BillingPage() {
  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-surface-900">Billing</h1>
        <p className="text-sm text-surface-500 mt-1">Manage your subscription and usage.</p>
      </div>

      {/* Current Plan */}
      <div className="bg-white rounded-xl border border-surface-200 p-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-lg font-bold text-surface-900">Growth Plan</h2>
              <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full">Active</span>
            </div>
            <p className="text-sm text-surface-500">₹2,499/month • Renews on Feb 15, 2026</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 border border-surface-200 text-surface-700 text-sm font-medium rounded-lg hover:bg-surface-50 transition-colors">
              Change Plan
            </button>
            <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors">
              <span className="flex items-center gap-1.5"><ArrowUpRight className="w-3.5 h-3.5" /> Upgrade</span>
            </button>
          </div>
        </div>
      </div>

      {/* Usage */}
      <div className="bg-white rounded-xl border border-surface-200 p-6 mb-6">
        <h2 className="text-base font-semibold text-surface-900 mb-5">Usage This Month</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { label: 'AI Conversations', used: 742, total: 1000, unit: 'messages' },
            { label: 'Voice Minutes', used: 84, total: 100, unit: 'minutes' },
            { label: 'Documents', used: 18, total: 25, unit: 'files' },
          ].map(usage => {
            const percentage = (usage.used / usage.total) * 100;
            const isHigh = percentage > 80;
            return (
              <div key={usage.label}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-surface-700">{usage.label}</span>
                  <span className={`text-sm font-semibold ${isHigh ? 'text-amber-600' : 'text-surface-900'}`}>
                    {usage.used} / {usage.total}
                  </span>
                </div>
                <div className="h-2 bg-surface-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all ${isHigh ? 'bg-amber-500' : 'bg-primary-500'}`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <p className="text-xs text-surface-400 mt-1.5">{usage.unit}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Plans Comparison */}
      <div className="bg-white rounded-xl border border-surface-200 p-6">
        <h2 className="text-base font-semibold text-surface-900 mb-5">Available Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: 'Starter', price: '₹999/mo', features: ['Website AI', 'Knowledge base', 'Lead capture', 'Basic analytics'], current: false },
            { name: 'Growth', price: '₹2,499/mo', features: ['Everything in Starter', 'WhatsApp architecture', 'Follow-ups', 'Appointments', 'Advanced analytics'], current: true },
            { name: 'Pro', price: '₹4,999/mo', features: ['Everything in Growth', 'Voice AI', 'Multiple AI employees', 'Advanced automation'], current: false },
          ].map(plan => (
            <div key={plan.name} className={`p-5 rounded-xl border ${plan.current ? 'border-primary-300 bg-primary-50' : 'border-surface-200'}`}>
              {plan.current && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary-100 text-primary-700 text-xs font-medium rounded-full mb-3">
                  <Check className="w-3 h-3" /> Current Plan
                </span>
              )}
              <h3 className="text-base font-semibold text-surface-900">{plan.name}</h3>
              <p className="text-lg font-bold text-surface-900 mt-1">{plan.price}</p>
              <ul className="mt-4 space-y-2">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-surface-600">
                    <Check className="w-3.5 h-3.5 text-primary-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              {!plan.current && (
                <button className="mt-4 w-full py-2 border border-surface-200 text-surface-700 text-sm font-medium rounded-lg hover:bg-surface-50 transition-colors">
                  {plan.name === 'Starter' ? 'Downgrade' : 'Upgrade'}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
