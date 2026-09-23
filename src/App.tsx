import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import DashboardLayout from './layouts/DashboardLayout';
import LandingPage from './pages/LandingPage';
import { LoginPage, SignupPage } from './pages/AuthPages';
import OnboardingPage from './pages/OnboardingPage';

// Lazy load dashboard pages
const Overview = lazy(() => import('./pages/dashboard/Overview'));
const AIEmployees = lazy(() => import('./pages/dashboard/AIEmployees'));
const Inbox = lazy(() => import('./pages/dashboard/Inbox'));
const Leads = lazy(() => import('./pages/dashboard/Leads'));
const Appointments = lazy(() => import('./pages/dashboard/Appointments'));
const Knowledge = lazy(() => import('./pages/dashboard/Knowledge'));
const Analytics = lazy(() => import('./pages/dashboard/Analytics'));
const Reports = lazy(() => import('./pages/dashboard/Reports'));
const Billing = lazy(() => import('./pages/dashboard/Billing'));
const Settings = lazy(() => import('./pages/dashboard/Settings'));

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-3 border-primary-200 border-t-primary-600 rounded-full animate-spin" />
        <p className="text-sm text-surface-400">Loading...</p>
      </div>
    </div>
  );
}

function DashboardLoading() {
  return (
    <div className="space-y-6">
      <div className="h-8 w-48 skeleton rounded-lg" />
      <div className="h-4 w-72 skeleton rounded-lg" />
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-28 skeleton rounded-xl" />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 h-64 skeleton rounded-xl" />
        <div className="h-64 skeleton rounded-xl" />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={
            <Suspense fallback={<DashboardLoading />}>
              <Overview />
            </Suspense>
          } />
          <Route path="employees" element={
            <Suspense fallback={<LoadingFallback />}>
              <AIEmployees />
            </Suspense>
          } />
          <Route path="inbox" element={
            <Suspense fallback={<LoadingFallback />}>
              <Inbox />
            </Suspense>
          } />
          <Route path="leads" element={
            <Suspense fallback={<LoadingFallback />}>
              <Leads />
            </Suspense>
          } />
          <Route path="appointments" element={
            <Suspense fallback={<LoadingFallback />}>
              <Appointments />
            </Suspense>
          } />
          <Route path="knowledge" element={
            <Suspense fallback={<LoadingFallback />}>
              <Knowledge />
            </Suspense>
          } />
          <Route path="analytics" element={
            <Suspense fallback={<LoadingFallback />}>
              <Analytics />
            </Suspense>
          } />
          <Route path="reports" element={
            <Suspense fallback={<LoadingFallback />}>
              <Reports />
            </Suspense>
          } />
          <Route path="billing" element={
            <Suspense fallback={<LoadingFallback />}>
              <Billing />
            </Suspense>
          } />
          <Route path="settings" element={
            <Suspense fallback={<LoadingFallback />}>
              <Settings />
            </Suspense>
          } />
        </Route>

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
