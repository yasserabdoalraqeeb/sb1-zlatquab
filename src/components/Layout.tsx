import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Bell, User, Car, Briefcase } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export function Layout() {
  const { user } = useAuthStore();

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center px-2 py-2 text-gray-700 hover:text-gray-900">
                الرئيسية
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link to="/notifications" className="p-2 text-gray-600 hover:text-gray-900">
                <Bell className="h-6 w-6" />
              </Link>
              <Link to="/profile" className="p-2 text-gray-600 hover:text-gray-900">
                <User className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}