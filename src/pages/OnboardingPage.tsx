import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, ArrowRight, ArrowLeft, Check, Building2, Target, BookOpen, Users, Shield, Rocket } from 'lucide-react';

const steps = [
  { id: 1, title: 'Welcome', icon: Bot },
  { id: 2, title: 'Business Info', icon: Building2 },
  { id: 3, title: 'Goals', icon: Target },
  { id: 4, title: 'Knowledge', icon: BookOpen },
  { id: 5, title: 'AI Employees', icon: Users },
  { id: 6, title: 'Permissions', icon: Shield },
  { id: 7, title: 'Launch', icon: Rocket },
];

const industries = [
  'Coaching Institute', 'Gym / Fitness', 'Restaurant', 'Salon / Spa',
  'Clinic / Healthcare', 'Real Estate', 'Retail', 'Professional Services',
  'Repair Services', 'Other'
];

const goalOptions = [
  'Customer support', 'Lead generation', 'Sales follow-up',
  'Appointment booking', 'Order management', 'Business analytics', 'Customer retention'
];

const employeeOptions = [
  { id: 'receptionist', name: 'AI Receptionist', desc: 'Handles FAQs, captures leads, first-contact conversations' },
  { id: 'sales', name: 'AI Sales Employee', desc: 'Qualifies leads, tracks intent, recommends follow-ups' },
  { id: 'support', name: 'AI Support Employee', desc: 'Handles repetitive support, escalates complex issues' },
  { id: 'analyst', name: 'AI Business Analyst', desc: 'Analyzes data, generates insights and reports' },
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [businessName, setBusinessName] = useState('');
  const [industry, setIndustry] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [businessHours, setBusinessHours] = useState('9:00 AM - 6:00 PM');
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [selectedEmployees, setSelectedEmployees] = useState<string[]>(['receptionist']);
  const navigate = useNavigate();

  const toggleGoal = (goal: string) => {
    setSelectedGoals(prev => prev.includes(goal) ? prev.filter(g => g !== goal) : [...prev, goal]);
  };

  const toggleEmployee = (id: string) => {
    setSelectedEmployees(prev => prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]);
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 7));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleLaunch = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-surface-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-surface-200 px-4 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-surface-900">AI Employee</span>
          </div>
          <span className="text-sm text-surface-500">Step {currentStep} of {steps.length}</span>
        </div>
      </div>

      {/* Progress */}
      <div className="bg-white border-b border-surface-100 px-4 py-3">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-1">
            {steps.map((step, idx) => (
              <div key={step.id} className="flex-1 flex items-center">
                <div className={`h-1.5 flex-1 rounded-full transition-colors ${
                  step.id <= currentStep ? 'bg-primary-500' : 'bg-surface-200'
                }`} />
                {idx < steps.length - 1 && <div className="w-1" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-2xl">
          {/* Step 1: Welcome */}
          {currentStep === 1 && (
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Bot className="w-8 h-8 text-primary-600" />
              </div>
              <h1 className="text-3xl font-bold text-surface-900">Meet your new AI employee.</h1>
              <p className="mt-4 text-lg text-surface-500 max-w-lg mx-auto">
                Your AI will learn your business, handle customer conversations, capture leads, 
                manage appointments, and provide insights — all while you stay in control.
              </p>
              <p className="mt-3 text-sm text-surface-400">Let's set it up in a few simple steps.</p>
            </div>
          )}

          {/* Step 2: Business Info */}
          {currentStep === 2 && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-surface-900">Tell us about your business</h2>
              <p className="text-sm text-surface-500 mt-2">This helps your AI employee understand your business context.</p>
              
              <div className="mt-8 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-1.5">Business Name *</label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g., FitZone Gym"
                    className="w-full px-4 py-2.5 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-1.5">Industry *</label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full px-4 py-2.5 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                  >
                    <option value="">Select your industry</option>
                    {industries.map(i => <option key={i} value={i}>{i}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-1.5">Business Description</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Briefly describe what your business does..."
                    rows={3}
                    className="w-full px-4 py-2.5 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-surface-700 mb-1.5">Location</label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="City, State"
                      className="w-full px-4 py-2.5 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-surface-700 mb-1.5">Phone</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-surface-700 mb-1.5">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="contact@business.com"
                      className="w-full px-4 py-2.5 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-surface-700 mb-1.5">Business Hours</label>
                    <input
                      type="text"
                      value={businessHours}
                      onChange={(e) => setBusinessHours(e.target.value)}
                      placeholder="9:00 AM - 6:00 PM"
                      className="w-full px-4 py-2.5 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Goals */}
          {currentStep === 3 && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-surface-900">What are your business goals?</h2>
              <p className="text-sm text-surface-500 mt-2">Select all that apply. Your AI employee will be configured accordingly.</p>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {goalOptions.map(goal => (
                  <button
                    key={goal}
                    onClick={() => toggleGoal(goal)}
                    className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all ${
                      selectedGoals.includes(goal)
                        ? 'border-primary-300 bg-primary-50 text-primary-800'
                        : 'border-surface-200 bg-white hover:border-surface-300 text-surface-700'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 ${
                      selectedGoals.includes(goal) ? 'border-primary-500 bg-primary-500' : 'border-surface-300'
                    }`}>
                      {selectedGoals.includes(goal) && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <span className="text-sm font-medium">{goal}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Knowledge */}
          {currentStep === 4 && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-surface-900">Teach your AI about your business</h2>
              <p className="text-sm text-surface-500 mt-2">Upload documents and add information your AI should know. You can always add more later.</p>
              
              <div className="mt-8 space-y-4">
                <div className="border-2 border-dashed border-surface-200 rounded-xl p-8 text-center hover:border-primary-300 transition-colors cursor-pointer">
                  <BookOpen className="w-8 h-8 text-surface-300 mx-auto mb-3" />
                  <p className="text-sm font-medium text-surface-700">Drop files here or click to upload</p>
                  <p className="text-xs text-surface-400 mt-1">PDF, DOC, TXT supported (max 10MB each)</p>
                </div>

                <div className="bg-white border border-surface-200 rounded-xl p-5">
                  <h3 className="text-sm font-semibold text-surface-900 mb-3">Quick FAQs</h3>
                  <p className="text-xs text-surface-500 mb-3">Add common questions your customers ask.</p>
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Question: What are your business hours?"
                      className="w-full px-3 py-2 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <input
                      type="text"
                      placeholder="Answer: We're open Mon-Sat, 9 AM to 6 PM"
                      className="w-full px-3 py-2 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <button className="mt-3 text-xs text-primary-600 hover:text-primary-700 font-medium">+ Add another FAQ</button>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: AI Employees */}
          {currentStep === 5 && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-surface-900">Choose your AI employees</h2>
              <p className="text-sm text-surface-500 mt-2">Select the roles your AI team should handle. You can customize later.</p>
              
              <div className="mt-8 space-y-3">
                {employeeOptions.map(emp => (
                  <button
                    key={emp.id}
                    onClick={() => toggleEmployee(emp.id)}
                    className={`w-full flex items-start gap-4 p-5 rounded-xl border text-left transition-all ${
                      selectedEmployees.includes(emp.id)
                        ? 'border-primary-300 bg-primary-50'
                        : 'border-surface-200 bg-white hover:border-surface-300'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      selectedEmployees.includes(emp.id) ? 'border-primary-500 bg-primary-500' : 'border-surface-300'
                    }`}>
                      {selectedEmployees.includes(emp.id) && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-surface-900">{emp.name}</p>
                      <p className="text-xs text-surface-500 mt-0.5">{emp.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 6: Permissions */}
          {currentStep === 6 && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-surface-900">Set permissions</h2>
              <p className="text-sm text-surface-500 mt-2">Control what your AI can do autonomously and what needs your approval.</p>
              
              <div className="mt-8 space-y-6">
                <div className="bg-white border border-surface-200 rounded-xl p-5">
                  <h3 className="text-sm font-semibold text-surface-900 mb-1">Allowed Actions</h3>
                  <p className="text-xs text-surface-500 mb-4">Your AI can do these without asking.</p>
                  <div className="space-y-2">
                    {['Answer FAQs', 'Capture leads', 'Check availability', 'Create appointments'].map(action => (
                      <label key={action} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-surface-300 text-primary-600 focus:ring-primary-500" />
                        <span className="text-sm text-surface-700">{action}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="bg-white border border-surface-200 rounded-xl p-5">
                  <h3 className="text-sm font-semibold text-surface-900 mb-1">Requires Approval</h3>
                  <p className="text-xs text-surface-500 mb-4">Your AI must ask you before doing these.</p>
                  <div className="space-y-2">
                    {['Apply discounts', 'Process refunds', 'Send external communications', 'Cancel appointments'].map(action => (
                      <label key={action} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-surface-300 text-warning-500 focus:ring-warning-500" />
                        <span className="text-sm text-surface-700">{action}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 7: Launch */}
          {currentStep === 7 && (
            <div className="text-center animate-fade-in">
              <div className="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-10 h-10 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold text-surface-900">Your AI employee is ready!</h2>
              <p className="mt-4 text-lg text-surface-500 max-w-md mx-auto">
                {businessName ? `${businessName}'s` : 'Your'} AI employee has been configured and is ready to start working.
              </p>
              
              <div className="mt-8 bg-white border border-surface-200 rounded-xl p-6 max-w-sm mx-auto text-left">
                <h3 className="text-sm font-semibold text-surface-900 mb-3">Setup Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-surface-500">Industry</span>
                    <span className="text-surface-900 font-medium">{industry || 'Not set'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-surface-500">Goals</span>
                    <span className="text-surface-900 font-medium">{selectedGoals.length} selected</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-surface-500">AI Employees</span>
                    <span className="text-surface-900 font-medium">{selectedEmployees.length} active</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="bg-white border-t border-surface-200 px-4 py-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          {currentStep > 1 ? (
            <button
              onClick={prevStep}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-surface-600 hover:text-surface-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
          ) : <div />}

          {currentStep < 7 ? (
            <button
              onClick={nextStep}
              className="flex items-center gap-2 px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Continue <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleLaunch}
              className="flex items-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Go to Dashboard <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
