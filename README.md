# CareConnect - AI-Powered Healthcare Appointment Platform 

> A modern, TypeScript-based healthcare appointment system with AI-powered disease prediction

[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue.svg?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-orange.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-blue.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 🚀 Features

- **🔐 Secure Authentication** - JWT-based authentication with role-based access control
- **📅 Appointment Management** - Book, manage, and track medical appointments
- **👨‍⚕️ Doctor Directory** - Browse and connect with healthcare professionals
- **🤖 AI Disease Prediction** - ML-powered symptom analysis for preliminary diagnosis
- **📧 Email Notifications** - Automated appointment confirmations and updates
- **📱 QR Code Verification** - Secure appointment verification system
- **⭐ Review System** - Rate and review healthcare experiences
- **📊 Dashboard Analytics** - Comprehensive overview of appointments and health data

## 🏗️ Architecture

### Frontend (React + TypeScript)
- **Modern React 18** with hooks and functional components
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS** for responsive and beautiful UI
- **Vite** for fast development and optimized builds
- **React Query** for efficient data fetching and caching
- **React Router** for client-side routing

### Backend (Node.js + Express)
- **RESTful API** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT Authentication** with secure cookie handling
- **Email Services** with Nodemailer
- **Input Validation** with Express Validator

### ML Backend (Python + Flask)
- **Disease Prediction** using symptoms (86% accuracy)
- **Diabetes Prediction** for women (79% accuracy)
- **Stroke Risk Assessment** (91% accuracy)
- **Scikit-learn** models with preprocessing pipelines

## 🛠️ Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| **Frontend** | React | 18.3.1 |
| **Language** | TypeScript | 5.4.0 |
| **Build Tool** | Vite | 5.4.11 |
| **Styling** | Tailwind CSS | 3.4.6 |
| **State Management** | Zustand | 4.5.0 |
| **Data Fetching** | React Query | 3.39.3 |
| **Backend** | Node.js | 18+ |
| **Framework** | Express.js | 4.21.2 |
| **Database** | MongoDB | 6.12.0 |
| **ML Framework** | Python | 3.8+ |
| **ML Library** | Scikit-learn | Latest |

## 📁 Project Structure

```
CareConnect/
├── frontend/                 # React TypeScript frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── ui/         # Reusable UI components
│   │   │   ├── layouts/    # Layout components
│   │   │   └── pages/      # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── utils/          # Utility functions
│   │   ├── types/          # TypeScript type definitions
│   │   ├── services/       # API services
│   │   └── constants/      # Application constants
│   ├── tsconfig.json       # TypeScript configuration
│   ├── vite.config.ts      # Vite configuration
│   └── package.json        # Frontend dependencies
├── backend/                 # Node.js Express backend
│   ├── controllers/        # Route controllers
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API routes
│   ├── middlewares/       # Custom middlewares
│   └── services/          # Business logic
├── ml-backend/            # Python Flask ML service
│   ├── src/               # ML pipeline source
│   ├── artifacts/         # Trained models
│   └── app.py            # Flask application
└── docs/                  # Project documentation
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ and npm
- **Python** 3.8+ and pip
- **MongoDB** (local or Atlas)
- **Git**

### 1. Clone the Repository

```bash
git clone https://github.com/zerrri/CareConnect.git
cd CareConnect
```

### 2. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Start development server
npm run dev
```

### 3. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Update environment variables
# MONGO_URI, JWT_SECRETS, EMAIL_CONFIG, etc.

# Start development server
npm run dev
```

### 4. ML Backend Setup

```bash
cd ml-backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Start Flask server
python app.py
```

### 5. Access the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8080
- **ML API**: http://localhost:5000

## 🔧 Development Commands

### Frontend

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run preview          # Preview production build

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint issues
npm run type-check       # TypeScript type check

# Testing
npm run test             # Run tests
npm run test:ui          # Run tests with UI
npm run test:coverage    # Run tests with coverage
```

### Backend

```bash
# Development
npm run dev              # Start with nodemon
npm start                # Start production server

# Testing
npm test                 # Run tests
```

## 📱 Key Features in Detail

### Authentication System
- **JWT Tokens** with refresh mechanism
- **Role-based Access Control** (Doctor/Patient)
- **Secure Password Hashing** with bcrypt
- **Session Management** with cookies

### Appointment Management
- **Real-time Status Updates** (Pending, Confirmed, Completed, Cancelled)
- **Calendar Integration** with visual status indicators
- **Email Notifications** for all status changes
- **QR Code Verification** for appointment confirmation

### AI Disease Prediction
- **Symptom Analysis** - Predict diseases from symptoms
- **Diabetes Risk Assessment** - Women-specific prediction model
- **Stroke Risk Evaluation** - Comprehensive health parameter analysis
- **High Accuracy Models** - Trained on extensive medical datasets

### User Experience
- **Responsive Design** - Works on all devices
- **Accessibility Features** - WCAG compliant components
- **Performance Optimized** - Lazy loading and code splitting
- **Modern UI/UX** - Clean, intuitive interface

## 🔒 Security Features

- **HTTPS Enforcement** in production
- **CORS Configuration** for API security
- **Input Validation** and sanitization
- **Rate Limiting** for API endpoints
- **Secure Headers** with Helmet.js
- **Environment Variable** protection

## 📊 Performance Optimizations

- **Code Splitting** with dynamic imports
- **Lazy Loading** for components and routes
- **Image Optimization** and compression
- **Bundle Analysis** and optimization
- **Caching Strategies** for API responses
- **Tree Shaking** for unused code removal

## 🧪 Testing Strategy

- **Unit Tests** with Vitest
- **Component Testing** with React Testing Library
- **Integration Tests** for API endpoints
- **E2E Tests** for critical user flows
- **Code Coverage** reporting
- **Automated Testing** in CI/CD pipeline

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
# Deploy dist/ folder
```

### Backend (Render/Railway)
```bash
npm start
# Set environment variables
```

### ML Backend (Render/Railway)
```bash
gunicorn app:app
# Set Python environment
```

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow **TypeScript** best practices
- Use **ESLint** for code quality
- Write **comprehensive tests**
- Follow **conventional commits**
- Update **documentation** as needed

## 📚 Documentation

- [API Documentation](./docs/API.md)
- [Component Library](./docs/COMPONENTS.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)
- [Contributing Guidelines](./docs/CONTRIBUTING.md)

## 🐛 Troubleshooting

### Common Issues

1. **TypeScript Errors**
   ```bash
   npm run type-check
   npm run lint:fix
   ```

2. **Build Failures**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Port Conflicts**
   - Check if ports 5173, 8080, 5000 are available
   - Update environment variables if needed

### Getting Help

- **Issues**: Create a GitHub issue
- **Discussions**: Use GitHub Discussions
- **Documentation**: Check the docs folder
- **Community**: Join our Discord server

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Vite Team** for the fast build tool
- **Tailwind CSS** for the utility-first CSS framework
- **Open Source Community** for inspiration and support

## 📞 Support

- **Email**: support@CareConnect.com
- **Website**: https://CareConnect.com
- **Documentation**: https://docs.CareConnect.com
- **Community**: https://community.CareConnect.com

---

<div align="center">
  <p>Made with ❤️ by the CareConnect Team</p>
  <p>Building the future of healthcare, one appointment at a time.</p>
</div>
