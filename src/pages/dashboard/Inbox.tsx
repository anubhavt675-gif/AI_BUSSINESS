import { useState } from 'react';
import { MessageSquare, Search, Filter, Globe, Phone, Mail, Mic, Bot, User, ArrowLeft, Send, MoreHorizontal } from 'lucide-react';

const conversations = [
  {
    id: '1',
    customer: 'Rahul Sharma',
    channel: 'website' as const,
    lastMessage: 'What are your annual membership plans?',
    status: 'ai_handling' as const,
    unread: true,
    priority: 'high' as const,
    tags: ['pricing', 'high-intent'],
    leadStatus: 'hot' as const,
    time: '2 min ago',
  },
  {
    id: '2',
    customer: 'Priya Patel',
    channel: 'whatsapp' as const,
    lastMessage: 'Can I reschedule my appointment to Friday?',
    status: 'ai_handling' as const,
    unread: true,
    priority: 'medium' as const,
    tags: ['appointment'],
    time: '15 min ago',
  },
  {
    id: '3',
    customer: 'Amit Kumar',
    channel: 'website' as const,
    lastMessage: 'Do you offer corporate bulk packages?',
    status: 'escalated' as const,
    unread: false,
    priority: 'high' as const,
    tags: ['sales', 'escalated'],
    leadStatus: 'hot' as const,
    time: '32 min ago',
  },
  {
    id: '4',
    customer: 'Sneha Reddy',
    channel: 'email' as const,
    lastMessage: 'Thanks for the information about your services.',
    status: 'resolved' as const,
    unread: false,
    priority: 'low' as const,
    tags: ['general'],
    time: '1 hr ago',
  },
  {
    id: '5',
    customer: 'Vikram Singh',
    channel: 'website' as const,
    lastMessage: 'What time do you open on Sundays?',
    status: 'ai_handling' as const,
    unread: false,
    priority: 'low' as const,
    tags: ['faq'],
    time: '2 hrs ago',
  },
];

const messages = [
  { id: '1', sender: 'customer' as const, content: 'Hi, I\'m interested in your gym membership.', time: '10:30 AM' },
  { id: '2', sender: 'ai' as const, content: 'Hello! Welcome to FitZone. I\'d be happy to help you with our membership options. We have Monthly, Quarterly, and Annual plans. Which would you like to know more about?', time: '10:30 AM' },
  { id: '3', sender: 'customer' as const, content: 'What are your annual membership plans?', time: '10:32 AM' },
  { id: '4', sender: 'ai' as const, content: 'Our Annual Membership is ₹12,000/year and includes:\n• Unlimited gym access\n• 2 personal training sessions/month\n• Access to all group classes\n• Locker facility\n• Free fitness assessment\n\nWould you like to book a free demo session to try it out?', time: '10:32 AM' },
];

const channelIcons = {
  website: Globe,
  whatsapp: Phone,
  email: Mail,
  voice: Mic,
};

const statusColors = {
  ai_handling: 'bg-blue-50 text-blue-700',
  human_handling: 'bg-emerald-50 text-emerald-700',
  escalated: 'bg-amber-50 text-amber-700',
  resolved: 'bg-surface-50 text-surface-500',
};

const statusLabels = {
  ai_handling: 'AI Handling',
  human_handling: 'Human Active',
  escalated: 'Escalated',
  resolved: 'Resolved',
};

export default function InboxPage() {
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const selected = conversations.find(c => c.id === selectedConversation);

  return (
    <div className="animate-fade-in h-[calc(100vh-8rem)]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-surface-900">Inbox</h1>
          <p className="text-sm text-surface-500 mt-1">Manage customer conversations across all channels.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-surface-200 overflow-hidden h-[calc(100%-5rem)] flex flex-col md:flex-row">
        {/* Conversation List */}
        <div className={`w-full md:w-96 border-r border-surface-200 flex flex-col ${selectedConversation ? 'hidden md:flex' : 'flex'}`}>
          {/* Filters */}
          <div className="p-3 border-b border-surface-100">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-9 pr-4 py-2 bg-surface-50 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div className="flex items-center gap-2 mt-2 overflow-x-auto">
              {['all', 'unread', 'ai', 'escalated'].map(f => (
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
          </div>

          {/* Conversation Items */}
          <div className="flex-1 overflow-y-auto">
            {conversations.map(conv => {
              const ChannelIcon = channelIcons[conv.channel];
              return (
                <button
                  key={conv.id}
                  onClick={() => setSelectedConversation(conv.id)}
                  className={`w-full text-left p-4 border-b border-surface-50 hover:bg-surface-50 transition-colors ${
                    selectedConversation === conv.id ? 'bg-primary-50 border-l-2 border-l-primary-500' : ''
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-surface-100 rounded-full flex items-center justify-center">
                        <span className="text-xs font-semibold text-surface-600">
                          {conv.customer.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className={`text-sm font-medium ${conv.unread ? 'text-surface-900' : 'text-surface-600'}`}>
                          {conv.customer}
                        </p>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <ChannelIcon className="w-3 h-3 text-surface-400" />
                          <span className="text-xs text-surface-400">{conv.time}</span>
                        </div>
                      </div>
                    </div>
                    {conv.unread && (
                      <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0 mt-1" />
                    )}
                  </div>
                  <p className="text-sm text-surface-500 mt-2 truncate">{conv.lastMessage}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className={`inline-flex px-1.5 py-0.5 rounded text-[10px] font-medium ${statusColors[conv.status]}`}>
                      {statusLabels[conv.status]}
                    </span>
                    {conv.leadStatus && (
                      <span className="inline-flex px-1.5 py-0.5 rounded text-[10px] font-medium bg-rose-50 text-rose-700">
                        {conv.leadStatus} lead
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Conversation Detail */}
        <div className={`flex-1 flex flex-col ${selectedConversation ? 'flex' : 'hidden md:flex'}`}>
          {selected ? (
            <>
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-surface-200">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setSelectedConversation(null)}
                    className="md:hidden p-1 text-surface-400"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <div className="w-9 h-9 bg-surface-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-surface-600">
                      {selected.customer.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-surface-900">{selected.customer}</p>
                    <p className="text-xs text-surface-400">via {selected.channel}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`inline-flex px-2 py-1 rounded-md text-xs font-medium ${statusColors[selected.status]}`}>
                    {statusLabels[selected.status]}
                  </span>
                  <button className="p-2 text-surface-400 hover:text-surface-600">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map(msg => (
                  <div key={msg.id} className={`flex ${msg.sender === 'customer' ? 'justify-start' : 'justify-end'}`}>
                    <div className={`max-w-[75%] ${msg.sender === 'customer' ? '' : ''}`}>
                      <div className={`flex items-center gap-1.5 mb-1 ${msg.sender === 'customer' ? '' : 'justify-end'}`}>
                        {msg.sender === 'ai' && <Bot className="w-3 h-3 text-primary-500" />}
                        {msg.sender === 'customer' && <User className="w-3 h-3 text-surface-400" />}
                        <span className="text-[10px] text-surface-400">
                          {msg.sender === 'ai' ? 'AI Employee' : selected.customer} • {msg.time}
                        </span>
                      </div>
                      <div className={`px-4 py-2.5 rounded-2xl text-sm whitespace-pre-line ${
                        msg.sender === 'customer'
                          ? 'bg-surface-100 text-surface-800 rounded-tl-sm'
                          : 'bg-primary-600 text-white rounded-tr-sm'
                      }`}>
                        {msg.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-surface-200">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder={selected.status === 'ai_handling' ? 'AI is handling this conversation...' : 'Type a message...'}
                    className="flex-1 px-4 py-2.5 bg-surface-50 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <button className="p-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                {selected.status === 'ai_handling' && (
                  <p className="text-xs text-surface-400 mt-2 text-center">
                    AI is handling this conversation. <button className="text-primary-600 font-medium">Take over</button> to respond manually.
                  </p>
                )}
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <MessageSquare className="w-12 h-12 text-surface-200 mx-auto mb-3" />
                <p className="text-sm text-surface-500">Select a conversation to view</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
