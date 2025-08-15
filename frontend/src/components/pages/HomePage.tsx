import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import Button from '@/components/ui/Button';
import {
  CalendarIcon,
  UserGroupIcon,
  BeakerIcon,
  ShieldCheckIcon,
  ClockIcon,
  StarIcon,
} from '@heroicons/react/24/outline';

const HomePage: React.FC = () => {
  const { user } = useAuth();
  const featuresRef = useRef<HTMLDivElement>(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: CalendarIcon,
      title: 'Easy Appointment Booking',
      description: 'Book appointments with your preferred doctors in just a few clicks.',
    },
    {
      icon: UserGroupIcon,
      title: 'Expert Doctors',
      description: 'Connect with qualified and experienced healthcare professionals.',
    },
    {
      icon: BeakerIcon,
      title: 'AI-Powered Diagnosis',
      description: 'Get preliminary disease predictions based on symptoms using advanced ML models.',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Secure & Private',
      description: 'Your health information is protected with industry-standard security.',
    },
    {
      icon: ClockIcon,
      title: '24/7 Availability',
      description: 'Access the platform anytime, anywhere for your healthcare needs.',
    },
    {
      icon: StarIcon,
      title: 'Patient Reviews',
      description: 'Read authentic reviews from other patients to make informed decisions.',
    },
  ];

  const stats = [
    { label: 'Doctors Available', value: '500+' },
    { label: 'Patients Served', value: '10,000+' },
    { label: 'Appointments Booked', value: '50,000+' },
    { label: 'Diseases Predicted', value: '95%' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/stethoscope.png"
                alt="Stethoscope Logo"
                className="h-10 w-auto mr-3"
              />
              <span className="text-2xl font-bold text-blue-600">CareConnect</span>
            </Link>
            <div className="flex items-center space-x-4">
              {user ? (
                <Link to="/dashboard">
                  <Button variant="primary">Go to Dashboard</Button>
                </Link>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="ghost">Log In</Button>
                  </Link>
                  <Link to="/signup">
                    <Button variant="primary">Get Started</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-100 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Your Health,{' '}
                <span className="text-blue-600">Our Priority</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience healthcare simplified. Connect with top medical professionals, 
                schedule appointments effortlessly, and leverage AI-powered disease prediction 
                for better health outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {user ? (
                  <Link to="/dashboard">
                    <Button size="lg" variant="primary">
                      Go to Dashboard
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Link to="/signup">
                      <Button size="lg" variant="primary">
                        Get Started
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" onClick={scrollToFeatures}>
                      Learn More
                    </Button>
                  </>
                )}
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/doctor1.jpg"
                  alt="Doctor consultation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div ref={featuresRef} className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose CareConnect?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with compassionate care to deliver 
              the best healthcare experience for you and your family.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of patients who trust CareConnect for their healthcare needs. 
            Start your journey to better health today.
          </p>
          {user ? (
            <Link to="/dashboard">
              <Button size="lg" variant="secondary">
                Go to Dashboard
              </Button>
            </Link>
          ) : (
            <Link to="/signup">
              <Button size="lg" variant="secondary">
                Sign Up Now
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <img src="/stethoscope.png" alt="Logo" className="h-8 w-8 mr-2" />
                <span className="text-xl font-bold">CareConnect</span>
              </div>
              <p className="text-gray-400 mb-4">
                Revolutionizing healthcare through technology and compassion. 
                Making quality healthcare accessible to everyone.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link to="/doctors" className="text-gray-400 hover:text-white">Doctors</Link></li>
                <li><Link to="/symptoms" className="text-gray-400 hover:text-white">Symptoms</Link></li>
                <li><Link to="/appointments" className="text-gray-400 hover:text-white">Appointments</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 CareConnect. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
