import { useState } from 'react';
import { Building2, Bot, Shield, Bell, Users, Globe, Save } from 'lucide-react';

const sections = [
  { id: 'business', label: 'Business', icon: Building2 },
  { id: 'ai', label: 'AI Configuration', icon: Bot },
  { id: 'permissions', label: 'Permissions', icon: Shield },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'team', label: 'Team', icon: Users },
  { id: 'integrations', label: 'Integrations', icon: Globe },
];

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState('business');

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-surface-900">Settings</h1>
        <p className="text-sm text-surface-500 mt-1">Configure your business profile and AI employee settings.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Section Nav */}
        <div className="lg:col-span-1">
          <nav className="bg-white rounded-xl border border-surface-200 p-2 space-y-0.5">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
                  activeSection === section.id
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-surface-600 hover:bg-surface-50'
                }`}
              >
                <section.icon className={`w-4 h-4 ${activeSection === section.id ? 'text-primary-600' : 'text-surface-400'}`} />
                {section.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Section Content */}
        <div className="lg:col-span-3">
          {activeSection === 'business' && (
            <div className="bg-white rounded-xl border border-surface-200 p-6">
              <h2 className="text-base font-semibold text-surface-900 mb-5">Business Information</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-surface-700 mb-1.5">Business Name</label>
                    <input type="text" defaultValue="FitZone Gym" className="w-full px-4 py-2.5 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-surface-700 mb-1.5">Industry</label>
                    <select defaultValue="Gym / Fitness" className="w-full px-4 py-2.5 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white">
                      <option>Coaching Institute</option>
                      <option>Gym / Fitness</option>
                      <option>Restaurant</option>
                      <option>Salon / Spa</option>
                      <option>Clinic / Healthcare</option>
                      <option>Real Estate</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-1.5">Description</label>
                  <textarea defaultValue="Premium fitness center with modern equipment and expert trainers." rows={3} className="w-full px-4 py-2.5 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-surface-700 mb-1.5">Phone</label>
                    <input type="tel" defaultValue="+91 98765 43210" className="w-full px-4 py-2.5 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-surface-700 mb-1.5">Email</label>
                    <input type="email" defaultValue="info@fitzonegym.com" className="w-full px-4 py-2.5 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-surface-700 mb-1.5">Location</label>
                    <input type="text" defaultValue="Mumbai, Maharashtra" className="w-full px-4 py-2.5 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-surface-700 mb-1.5">Business Hours</label>
                    <input type="text" defaultValue="Mon-Sat: 6 AM - 10 PM" className="w-full px-4 py-2.5 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-1.5">Website</label>
                  <input type="url" defaultValue="https://fitzonegym.com" className="w-full px-4 py-2.5 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button className="flex items-center gap-1.5 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors">
                  <Save className="w-4 h-4" /> Save Changes
                </button>
              </div>
            </div>
          )}

          {activeSection === 'ai' && (
            <div className="bg-white rounded-xl border border-surface-200 p-6">
              <h2 className="text-base font-semibold text-surface-900 mb-5">AI Configuration</h2>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-1.5">Response Tone</label>
                  <select defaultValue="professional" className="w-full px-4 py-2.5 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white">
                    <option value="professional">Professional</option>
                    <option value="friendly">Friendly</option>
                    <option value="casual">Casual</option>
                    <option value="formal">Formal</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-1.5">Language</label>
                  <select defaultValue="english" className="w-full px-4 py-2.5 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white">
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                    <option value="hinglish">Hinglish</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-2">AI Guardrails</label>
                  <div className="space-y-2">
                    {[
                      { label: 'Only use approved business knowledge', checked: true },
                      { label: 'Never invent pricing or availability', checked: true },
                      { label: 'Escalate when confidence is low', checked: true },
                      { label: 'Ask for human review on exceptions', checked: true },
                    ].map(rule => (
                      <label key={rule.label} className="flex items-center gap-2.5 cursor-pointer">
                        <input type="checkbox" defaultChecked={rule.checked} className="w-4 h-4 rounded border-surface-300 text-primary-600 focus:ring-primary-500" />
                        <span className="text-sm text-surface-700">{rule.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-1.5">Custom Instructions</label>
                  <textarea placeholder="Add any specific instructions for your AI employee..." rows={3} className="w-full px-4 py-2.5 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none" />
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button className="flex items-center gap-1.5 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors">
                  <Save className="w-4 h-4" /> Save Changes
                </button>
              </div>
            </div>
          )}

          {activeSection === 'permissions' && (
            <div className="bg-white rounded-xl border border-surface-200 p-6">
              <h2 className="text-base font-semibold text-surface-900 mb-5">Permissions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-surface-700 mb-3">Autonomous Actions</h3>
                  <p className="text-xs text-surface-500 mb-3">AI can perform these without asking for approval.</p>
                  <div className="space-y-2">
                    {['Answer FAQs', 'Capture leads', 'Check availability', 'Create appointments', 'Send appointment confirmations'].map(action => (
                      <label key={action} className="flex items-center gap-2.5 cursor-pointer">
                        <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-surface-300 text-primary-600 focus:ring-primary-500" />
                        <span className="text-sm text-surface-700">{action}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="border-t border-surface-100 pt-5">
                  <h3 className="text-sm font-medium text-surface-700 mb-3">Approval Required</h3>
                  <p className="text-xs text-surface-500 mb-3">AI must get your approval before performing these.</p>
                  <div className="space-y-2">
                    {['Apply discounts', 'Process refunds', 'Cancel appointments', 'Send external communications', 'Make exceptions'].map(action => (
                      <label key={action} className="flex items-center gap-2.5 cursor-pointer">
                        <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-surface-300 text-amber-500 focus:ring-amber-500" />
                        <span className="text-sm text-surface-700">{action}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button className="flex items-center gap-1.5 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors">
                  <Save className="w-4 h-4" /> Save Changes
                </button>
              </div>
            </div>
          )}

          {(activeSection === 'notifications' || activeSection === 'team' || activeSection === 'integrations') && (
            <div className="bg-white rounded-xl border border-surface-200 p-6">
              <h2 className="text-base font-semibold text-surface-900 mb-2">
                {sections.find(s => s.id === activeSection)?.label}
              </h2>
              <p className="text-sm text-surface-500">
                Configuration for this section will be available once connected to your backend.
              </p>
              <div className="mt-8 p-8 text-center border-2 border-dashed border-surface-200 rounded-xl">
                <p className="text-sm text-surface-400">Coming soon — connect your backend to enable this feature.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
