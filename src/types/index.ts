export interface Business {
  id: string;
  name: string;
  industry: string;
  description: string;
  location: string;
  website: string;
  phone: string;
  email: string;
  businessHours: string;
  timezone: string;
  createdAt: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  businessId: string;
  role: 'owner' | 'admin' | 'member';
}

export interface AIEmployee {
  id: string;
  name: string;
  role: 'receptionist' | 'sales' | 'support' | 'appointment' | 'analyst' | 'voice' | 'followup';
  status: 'active' | 'inactive' | 'setup';
  description: string;
  responsibilities: string[];
  permissions: string[];
  conversationsHandled: number;
  actionsTaken: number;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  source: string;
  status: 'hot' | 'warm' | 'cold';
  interestedIn: string;
  lastInteraction: string;
  aiSummary: string;
  recommendedAction: string;
  followUpStatus: 'due_today' | 'overdue' | 'scheduled' | 'completed';
  createdAt: string;
}

export interface Conversation {
  id: string;
  customerName: string;
  channel: 'website' | 'whatsapp' | 'email' | 'voice';
  lastMessage: string;
  status: 'ai_handling' | 'human_handling' | 'escalated' | 'resolved';
  unread: boolean;
  priority: 'high' | 'medium' | 'low';
  tags: string[];
  leadStatus?: 'hot' | 'warm' | 'cold';
  updatedAt: string;
}

export interface Message {
  id: string;
  conversationId: string;
  sender: 'ai' | 'customer' | 'human';
  content: string;
  timestamp: string;
}

export interface Appointment {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  date: string;
  time: string;
  duration: number;
  status: 'scheduled' | 'confirmed' | 'completed' | 'cancelled' | 'rescheduled';
  notes: string;
  service: string;
}

export interface KnowledgeItem {
  id: string;
  type: 'document' | 'faq' | 'business_info' | 'website';
  title: string;
  category: string;
  status: 'active' | 'processing' | 'archived';
  updatedAt: string;
}

export interface AnalyticsData {
  conversations: number;
  newLeads: number;
  highIntentLeads: number;
  appointments: number;
  pendingFollowUps: number;
  salesPipeline: number;
}

export interface DailyReport {
  date: string;
  conversations: number;
  newLeads: number;
  appointments: number;
  highIntentLeads: number;
  aiSummary: string[];
}

export interface AIActionLog {
  id: string;
  action: string;
  description: string;
  result: 'success' | 'pending_approval' | 'failed';
  timestamp: string;
  employee: string;
}

export interface OnboardingData {
  businessName: string;
  industry: string;
  description: string;
  location: string;
  website: string;
  phone: string;
  email: string;
  businessHours: string;
  timezone: string;
  goals: string[];
  selectedEmployees: string[];
  permissions: {
    allowed: string[];
    approvalRequired: string[];
  };
}
