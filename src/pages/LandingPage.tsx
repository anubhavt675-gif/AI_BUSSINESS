import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, MessageSquare, Calendar, TrendingUp, Users, Shield, 
  ArrowRight, Check, Star, ChevronDown, Menu, X, Zap,
  Building2, Heart, Dumbbell, UtensilsCrossed, Scissors, Stethoscope, Home
} from 'lucide-react';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-surface-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-surface-900 text-lg">AI Employee</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-sm text-surface-600 hover:text-surface-900 transition-colors">How It Works</a>
              <a href="#features" className="text-sm text-surface-600 hover:text-surface-900 transition-colors">Features</a>
              <a href="#industries" className="text-sm text-surface-600 hover:text-surface-900 transition-colors">Industries</a>
              <a href="#pricing" className="text-sm text-surface-600 hover:text-surface-900 transition-colors">Pricing</a>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <Link to="/login" className="text-sm font-medium text-surface-700 hover:text-surface-900 px-4 py-2 transition-colors">
                Log in
              </Link>
              <Link to="/signup" className="text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-lg transition-colors">
                Get Started
              </Link>
            </div>

            <button 
              className="md:hidden p-2 text-surface-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-surface-100 bg-white">
            <div className="px-4 py-4 space-y-3">
              <a href="#how-it-works" className="block text-sm text-surface-600 py-2">How It Works</a>
              <a href="#features" className="block text-sm text-surface-600 py-2">Features</a>
              <a href="#industries" className="block text-sm text-surface-600 py-2">Industries</a>
              <a href="#pricing" className="block text-sm text-surface-600 py-2">Pricing</a>
              <div className="pt-3 border-t border-surface-100 flex flex-col gap-2">
                <Link to="/login" className="text-sm font-medium text-surface-700 py-2">Log in</Link>
                <Link to="/signup" className="text-sm font-medium text-white bg-primary-600 px-4 py-2 rounded-lg text-center">Get Started</Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-50 border border-primary-100 rounded-full mb-6">
              <Zap className="w-3.5 h-3.5 text-primary-600" />
              <span className="text-xs font-medium text-primary-700">Your business just hired an AI employee</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-surface-900 tracking-tight leading-tight">
              One AI employee.{' '}
              <span className="text-primary-600">Built around your business.</span>
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl text-surface-500 max-w-2xl mx-auto leading-relaxed">
              AI that answers customers, captures leads, manages follow-ups, handles appointments, 
              and turns business data into useful decisions.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/signup" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all shadow-lg shadow-primary-600/20"
              >
                Build Your AI Employee
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a 
                href="#how-it-works"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-surface-50 hover:bg-surface-100 text-surface-700 font-medium rounded-lg border border-surface-200 transition-colors"
              >
                See How It Works
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center gap-6 text-sm text-surface-400">
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-success-500" /> No credit card required</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-success-500" /> 14-day free trial</span>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-b from-surface-50 to-white border border-surface-200 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-surface-900/5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl border border-surface-200 p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-surface-900">Customer Conversations</p>
                      <p className="text-xs text-surface-400">Handled today</p>
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-surface-900">24</p>
                  <p className="text-xs text-success-500 mt-1">↑ 12% from yesterday</p>
                </div>

                <div className="bg-white rounded-xl border border-surface-200 p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-surface-900">New Leads</p>
                      <p className="text-xs text-surface-400">Captured today</p>
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-surface-900">8</p>
                  <p className="text-xs text-success-500 mt-1">3 high-intent</p>
                </div>

                <div className="bg-white rounded-xl border border-surface-200 p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-violet-50 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-violet-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-surface-900">Appointments</p>
                      <p className="text-xs text-surface-400">Booked today</p>
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-surface-900">5</p>
                  <p className="text-xs text-surface-400 mt-1">2 pending confirmation</p>
                </div>
              </div>

              <div className="mt-4 bg-white rounded-xl border border-surface-200 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Bot className="w-4 h-4 text-primary-600" />
                  <p className="text-sm font-semibold text-surface-900">AI Insight</p>
                </div>
                <p className="text-sm text-surface-600">
                  "Pricing was the most frequently asked question today. 3 high-intent leads haven't received follow-up yet. 
                  Consider prioritizing follow-ups before end of day."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900">How It Works</h2>
            <p className="mt-4 text-lg text-surface-500 max-w-2xl mx-auto">
              Set up your AI employee in minutes, not months.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Connect your business', desc: 'Add your business information, hours, and contact details.' },
              { step: '02', title: 'Teach your AI', desc: 'Upload documents, FAQs, pricing, and service information.' },
              { step: '03', title: 'Set permissions', desc: 'Choose what your AI can do and what needs your approval.' },
              { step: '04', title: 'Let it work', desc: 'Your AI employee handles customers while you focus on growth.' },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="text-5xl font-bold text-primary-100 mb-4">{item.step}</div>
                <h3 className="text-lg font-semibold text-surface-900 mb-2">{item.title}</h3>
                <p className="text-sm text-surface-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Just a Chatbot */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900">Not Just a Chatbot</h2>
            <p className="mt-4 text-lg text-surface-500 max-w-2xl mx-auto">
              Traditional chatbots answer questions and stop. Your AI employee understands, acts, and reports back.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-surface-50 rounded-2xl p-8 border border-surface-200">
              <h3 className="text-lg font-semibold text-surface-400 mb-6">Traditional Chatbot</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-surface-500">
                  <span className="w-1.5 h-1.5 bg-surface-300 rounded-full"></span>
                  Answer questions
                </li>
                <li className="flex items-center gap-3 text-sm text-surface-500">
                  <span className="w-1.5 h-1.5 bg-surface-300 rounded-full"></span>
                  Conversation ends
                </li>
                <li className="flex items-center gap-3 text-sm text-surface-500">
                  <span className="w-1.5 h-1.5 bg-surface-300 rounded-full"></span>
                  No business context
                </li>
                <li className="flex items-center gap-3 text-sm text-surface-500">
                  <span className="w-1.5 h-1.5 bg-surface-300 rounded-full"></span>
                  No follow-up
                </li>
              </ul>
            </div>

            <div className="bg-primary-50 rounded-2xl p-8 border border-primary-100">
              <h3 className="text-lg font-semibold text-primary-700 mb-6">AI Business Employee</h3>
              <ul className="space-y-3">
                {[
                  'Understands your business',
                  'Retrieves approved information',
                  'Takes authorized actions',
                  'Captures and qualifies leads',
                  'Follows up automatically',
                  'Reports business insights'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-primary-800">
                    <Check className="w-4 h-4 text-primary-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900">Built for Real Business</h2>
            <p className="mt-4 text-lg text-surface-500 max-w-2xl mx-auto">
              Every feature solves a real business problem. No gimmicks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: MessageSquare, title: 'Understands Your Business', desc: 'Grounded in your approved business knowledge. Never invents information.' },
              { icon: Users, title: 'Captures Every Lead', desc: 'Turns customer conversations into structured, actionable opportunities.' },
              { icon: Zap, title: 'Follows Up', desc: 'Ensures valuable leads are never forgotten with intelligent follow-up reminders.' },
              { icon: Calendar, title: 'Books Appointments', desc: 'Uses your actual availability to schedule and manage appointments.' },
              { icon: TrendingUp, title: 'Business Insights', desc: 'Turns raw data into useful insights you can act on.' },
              { icon: Shield, title: 'Human Control', desc: 'Sensitive actions require your approval. You stay in control.' },
            ].map((feature) => (
              <div key={feature.title} className="bg-white rounded-xl p-6 border border-surface-200 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-600/5 transition-all duration-300">
                <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-base font-semibold text-surface-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-surface-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900">Built for Your Industry</h2>
            <p className="mt-4 text-lg text-surface-500 max-w-2xl mx-auto">
              Pre-configured AI employees for your specific business type.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { icon: Building2, name: 'Coaching Institutes', desc: 'Admissions & enquiries' },
              { icon: Dumbbell, name: 'Gyms & Fitness', desc: 'Memberships & trials' },
              { icon: UtensilsCrossed, name: 'Restaurants', desc: 'Orders & reservations' },
              { icon: Scissors, name: 'Salons & Spas', desc: 'Bookings & services' },
              { icon: Stethoscope, name: 'Clinics', desc: 'Appointments & FAQs' },
              { icon: Home, name: 'Real Estate', desc: 'Properties & site visits' },
              { icon: Heart, name: 'Healthcare', desc: 'Patient support' },
              { icon: Building2, name: 'Service Businesses', desc: 'Requests & scheduling' },
            ].map((industry) => (
              <div key={industry.name} className="bg-surface-50 rounded-xl p-5 border border-surface-200 hover:border-primary-200 transition-colors cursor-pointer group">
                <industry.icon className="w-6 h-6 text-surface-400 group-hover:text-primary-600 transition-colors mb-3" />
                <h3 className="text-sm font-semibold text-surface-900">{industry.name}</h3>
                <p className="text-xs text-surface-400 mt-1">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900">Simple, Transparent Pricing</h2>
            <p className="mt-4 text-lg text-surface-500 max-w-2xl mx-auto">
              Start free. Scale as your business grows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: 'Starter', price: '₹999', period: '/month', features: ['Website AI', 'Knowledge base', 'Lead capture', 'Basic analytics'], popular: false },
              { name: 'Growth', price: '₹2,499', period: '/month', features: ['Everything in Starter', 'WhatsApp architecture', 'Lead management', 'Follow-ups', 'Appointments', 'Advanced analytics'], popular: true },
              { name: 'Pro', price: '₹4,999', period: '/month', features: ['Everything in Growth', 'Voice AI architecture', 'Advanced AI insights', 'Multiple AI employees', 'Advanced automation'], popular: false },
              { name: 'Enterprise', price: 'Custom', period: '', features: ['Multiple businesses', 'Custom integrations', 'Advanced controls', 'Priority support'], popular: false },
            ].map((plan) => (
              <div key={plan.name} className={`bg-white rounded-2xl p-6 border ${plan.popular ? 'border-primary-300 ring-2 ring-primary-100 shadow-lg' : 'border-surface-200'}`}>
                {plan.popular && (
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary-50 text-primary-700 text-xs font-medium rounded-full mb-4">
                    <Star className="w-3 h-3" /> Most Popular
                  </div>
                )}
                <h3 className="text-lg font-semibold text-surface-900">{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-surface-900">{plan.price}</span>
                  <span className="text-sm text-surface-400">{plan.period}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-surface-600">
                      <Check className="w-4 h-4 text-primary-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/signup" 
                  className={`mt-6 w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    plan.popular 
                      ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                      : 'bg-surface-50 hover:bg-surface-100 text-surface-700 border border-surface-200'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-12 h-12 text-primary-600 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-900">Trust & Security</h2>
          <p className="mt-4 text-lg text-surface-500 max-w-2xl mx-auto">
            Your business data is isolated, encrypted, and never shared. You maintain full control over what your AI employee can do.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: 'Data Isolation', desc: 'Each business is a separate tenant. No cross-contamination.' },
              { title: 'Human Approval', desc: 'Sensitive actions require your explicit approval.' },
              { title: 'Audit Trail', desc: 'Every AI action is logged and visible to you.' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-sm font-semibold text-surface-900 mb-1">{item.title}</h3>
                <p className="text-xs text-surface-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to hire your AI employee?</h2>
          <p className="mt-4 text-lg text-surface-300 max-w-2xl mx-auto">
            Set up in minutes. Start handling customers immediately.
          </p>
          <Link 
            to="/signup" 
            className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-lg transition-colors shadow-lg"
          >
            Get Started Free
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-surface-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-primary-600 rounded-lg flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-surface-900">AI Business Employee</span>
            </div>
            <p className="text-sm text-surface-400">© 2026 AI Business Employee. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
