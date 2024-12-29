import React from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, Plane, Building, Car, Truck, Heart, FileText } from 'lucide-react';

const services = [
  {
    title: 'الأحوال المدنية',
    icon: UserCheck,
    path: '/civil-affairs',
    description: 'تجديد البطاقة الشخصية وإصدار شهادات الميلاد'
  },
  {
    title: 'الهجرة والجوازات',
    icon: Plane,
    path: '/passports',
    description: 'تجديد جوازات السفر والخدمات المتعلقة'
  },
  {
    title: 'تراخيص البناء',
    icon: Building,
    path: '/building-permits',
    description: 'إصدار وتجديد تراخيص البناء'
  },
  {
    title: 'إدارة المرور',
    icon: Car,
    path: '/traffic',
    description: 'تجديد رخص القيادة وخدمات المركبات'
  },
  {
    title: 'خدمات التوصيل',
    icon: Truck,
    path: '/delivery',
    description: 'توصيل الوثائق والمستندات'
  },
  {
    title: 'التبرعات',
    icon: Heart,
    path: '/donations',
    description: 'منصة التبرعات الإلكترونية'
  }
];

export function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">الخدمات الحكومية</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Link
              key={service.path}
              to={service.path}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center space-x-4 space-x-reverse">
                <Icon className="h-8 w-8 text-blue-600" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{service.title}</h2>
                  <p className="text-gray-600 mt-1">{service.description}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}