export interface User {
  id: string;
  email: string;
  full_name: string;
  national_id: string;
  created_at: string;
}

export interface ServiceRequest {
  id: string;
  user_id: string;
  service_type: string;
  status: 'pending' | 'processing' | 'completed' | 'rejected';
  document_url?: string;
  delivery_method: 'download' | 'delivery' | 'office';
  created_at: string;
}

export interface Notification {
  id: string;
  user_id: string;
  title: string;
  message: string;
  read: boolean;
  created_at: string;
}