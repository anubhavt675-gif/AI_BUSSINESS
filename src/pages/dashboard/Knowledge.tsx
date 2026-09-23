import { useState } from 'react';
import { BookOpen, FileText, HelpCircle, Globe, Plus, Upload, Search, Check, Clock, AlertCircle } from 'lucide-react';

const knowledgeItems = [
  { id: '1', type: 'document' as const, title: 'Membership Plans & Pricing.pdf', category: 'Pricing', status: 'active' as const, updatedAt: '2 days ago', size: '2.4 MB' },
  { id: '2', type: 'document' as const, title: 'Gym Facilities Guide.pdf', category: 'Services', status: 'active' as const, updatedAt: '3 days ago', size: '5.1 MB' },
  { id: '3', type: 'faq' as const, title: 'What are your operating hours?', category: 'General', status: 'active' as const, updatedAt: '1 day ago', size: null },
  { id: '4', type: 'faq' as const, title: 'Do you offer personal training?', category: 'Services', status: 'active' as const, updatedAt: '1 day ago', size: null },
  { id: '5', type: 'faq' as const, title: 'What is your cancellation policy?', category: 'Policies', status: 'active' as const, updatedAt: '5 days ago', size: null },
  { id: '6', type: 'business_info' as const, title: 'Business Hours & Location', category: 'General', status: 'active' as const, updatedAt: '1 week ago', size: null },
  { id: '7', type: 'document' as const, title: 'Trainer Profiles.docx', category: 'Team', status: 'processing' as const, updatedAt: 'Just now', size: '1.8 MB' },
  { id: '8', type: 'website' as const, title: 'Website: fitzonegym.com', category: 'Web', status: 'active' as const, updatedAt: '4 days ago', size: null },
];

const typeConfig = {
  document: { icon: FileText, label: 'Document', color: 'text-blue-600 bg-blue-50' },
  faq: { icon: HelpCircle, label: 'FAQ', color: 'text-violet-600 bg-violet-50' },
  business_info: { icon: BookOpen, label: 'Business Info', color: 'text-emerald-600 bg-emerald-50' },
  website: { icon: Globe, label: 'Website', color: 'text-amber-600 bg-amber-50' },
};

const statusConfig = {
  active: { label: 'Active', color: 'text-emerald-700 bg-emerald-50', icon: Check },
  processing: { label: 'Processing', color: 'text-amber-700 bg-amber-50', icon: Clock },
  archived: { label: 'Archived', color: 'text-surface-500 bg-surface-50', icon: AlertCircle },
};

export default function KnowledgePage() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [showUpload, setShowUpload] = useState(false);

  const filteredItems = activeTab === 'all' 
    ? knowledgeItems 
    : knowledgeItems.filter(item => item.type === activeTab);

  return (
    <div className="animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-surface-900">Knowledge Base</h1>
          <p className="text-sm text-surface-500 mt-1">Manage the information your AI employee uses to answer customers.</p>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setShowUpload(!showUpload)}
            className="flex items-center gap-1.5 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" /> Add Knowledge
          </button>
        </div>
      </div>

      {/* Upload Panel */}
      {showUpload && (
        <div className="bg-white rounded-xl border border-surface-200 p-6 mb-6 animate-fade-in">
          <h3 className="text-base font-semibold text-surface-900 mb-4">Add New Knowledge</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-2 border-dashed border-surface-200 rounded-xl p-6 text-center hover:border-primary-300 transition-colors cursor-pointer">
              <Upload className="w-8 h-8 text-surface-300 mx-auto mb-2" />
              <p className="text-sm font-medium text-surface-700">Upload Document</p>
              <p className="text-xs text-surface-400 mt-1">PDF, DOC, TXT (max 10MB)</p>
            </div>

            <div className="border-2 border-dashed border-surface-200 rounded-xl p-6 text-center hover:border-primary-300 transition-colors cursor-pointer">
              <HelpCircle className="w-8 h-8 text-surface-300 mx-auto mb-2" />
              <p className="text-sm font-medium text-surface-700">Add FAQ</p>
              <p className="text-xs text-surface-400 mt-1">Question & Answer pairs</p>
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-surface-700 mb-1.5">Website URL (for crawling)</label>
            <div className="flex gap-2">
              <input
                type="url"
                placeholder="https://yourbusiness.com"
                className="flex-1 px-4 py-2 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="px-4 py-2 bg-surface-100 hover:bg-surface-200 text-surface-700 text-sm font-medium rounded-lg transition-colors">
                Import
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Documents', value: '3', icon: FileText },
          { label: 'FAQs', value: '3', icon: HelpCircle },
          { label: 'Business Info', value: '1', icon: BookOpen },
          { label: 'Processing', value: '1', icon: Clock },
        ].map(stat => (
          <div key={stat.label} className="bg-white rounded-xl border border-surface-200 p-4 flex items-center gap-3">
            <div className="w-9 h-9 bg-surface-50 rounded-lg flex items-center justify-center">
              <stat.icon className="w-4 h-4 text-surface-500" />
            </div>
            <div>
              <p className="text-lg font-bold text-surface-900">{stat.value}</p>
              <p className="text-xs text-surface-500">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-1">
        {[
          { id: 'all', label: 'All' },
          { id: 'document', label: 'Documents' },
          { id: 'faq', label: 'FAQs' },
          { id: 'business_info', label: 'Business Info' },
          { id: 'website', label: 'Website' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
              activeTab === tab.id ? 'bg-primary-50 text-primary-700 border border-primary-200' : 'text-surface-500 hover:bg-surface-50 border border-surface-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Knowledge List */}
      <div className="bg-white rounded-xl border border-surface-200 overflow-hidden">
        <div className="divide-y divide-surface-100">
          {filteredItems.map(item => {
            const type = typeConfig[item.type];
            const status = statusConfig[item.status];
            const TypeIcon = type.icon;
            const StatusIcon = status.icon;

            return (
              <div key={item.id} className="p-4 sm:p-5 hover:bg-surface-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${type.color}`}>
                      <TypeIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-surface-900">{item.title}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs text-surface-400">{item.category}</span>
                        {item.size && <span className="text-xs text-surface-300">•</span>}
                        {item.size && <span className="text-xs text-surface-400">{item.size}</span>}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium ${status.color}`}>
                      <StatusIcon className="w-3 h-3" />
                      {status.label}
                    </span>
                    <span className="text-xs text-surface-400 hidden sm:block">{item.updatedAt}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
