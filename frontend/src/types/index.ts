// User Types
export interface User {
  _id: string;
  name: string;
  email: string;
  role: 'doctor' | 'patient';
  phone?: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Doctor extends User {
  role: 'doctor';
  specialization: string;
  experience: number;
  education: string;
  licenseNumber: string;
  consultationFee: number;
  availableSlots: TimeSlot[];
  rating: number;
  totalReviews: number;
}

export interface Patient extends User {
  role: 'patient';
  dateOfBirth?: string;
  gender?: 'male' | 'female' | 'other';
  emergencyContact?: {
    name: string;
    phone: string;
    relationship: string;
  };
}

// Appointment Types
export interface Appointment {
  _id: string;
  patientId: string;
  doctorId: string;
  patient: Patient;
  doctor: Doctor;
  date: string;
  time: string;
  status: AppointmentStatus;
  symptoms?: string;
  diagnosis?: string;
  prescription?: string;
  notes?: string;
  qrCode?: string;
  createdAt: string;
  updatedAt: string;
}

export type AppointmentStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

export interface TimeSlot {
  day: string;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
}

// Review Types
export interface Review {
  _id: string;
  appointmentId: string;
  patientId: string;
  doctorId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

// ML Prediction Types
export interface DiseasePredictionRequest {
  symptoms: string[];
}

export interface DiseasePredictionResponse {
  prediction: string;
  confidence?: number;
}

export interface DiabetesPredictionRequest {
  Pregnancies: number;
  Glucose: number;
  BloodPressure: number;
  SkinThickness: number;
  Insulin: number;
  BMI: number;
  DiabetesPedigreeFunction: number;
  Age: number;
}

export interface StrokePredictionRequest {
  gender: string;
  age: number;
  hypertension: number;
  heart_disease: number;
  ever_married: string;
  work_type: string;
  Residence_type: string;
  avg_glucose_level: number;
  bmi: number;
  smoking_status: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Form Types
export interface LoginForm {
  email: string;
  password: string;
}

export interface SignupForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: 'doctor' | 'patient';
  phone?: string;
}

export interface AppointmentForm {
  doctorId: string;
  date: string;
  time: string;
  symptoms?: string;
}

// Notification Types
export interface Notification {
  _id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  isRead: boolean;
  createdAt: string;
}

// UI Types
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

// Error Types
export interface AppError {
  message: string;
  code?: string;
  details?: any;
}

// Loading States
export interface LoadingState {
  isLoading: boolean;
  error: AppError | null;
}
