import React from 'react';
import { ArrowRight, Lock, Calendar, FileText, Users, CheckCircle } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-brand-50 to-white pt-16 pb-24 lg:pt-32 lg:pb-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold mb-6">
              Designed for Kenyan Therapists
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
              Secure, Simple EMR <br />
              <span className="text-brand-600">Built for Therapists</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Manage client records, session notes, appointments, and billing — all in one secure platform. Trusted by therapists and clinics in Nairobi and across Kenya.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button href={`${import.meta.env.VITE_APP_URL}/signup`} variant="primary" className="w-full sm:w-auto px-8 py-4 text-lg">
                Get Started
              </Button>
              <Button to="/contact" variant="outline" className="w-full sm:w-auto px-8 py-4 text-lg">
                Request a Demo
              </Button>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              No credit card required for demo • Cancel anytime
            </p>
          </div>
        </div>

        {/* Abstract Background Element */}
        <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full overflow-hidden -z-10 pointer-events-none opacity-40">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-200 blur-3xl"></div>
          <div className="absolute top-[10%] -right-[10%] w-[40%] h-[60%] rounded-full bg-blue-100 blur-3xl"></div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-xl shadow-2xl border border-gray-200 bg-gray-50 overflow-hidden">
            <img
              src="https://picsum.photos/seed/dashboard/1200/800"
              alt="TheraSquareEMR Dashboard Preview"
              className="w-full h-auto object-cover opacity-90"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/5">
              <div className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-lg shadow-lg border border-gray-200">
                <p className="text-gray-800 font-medium">Platform Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Everything you need to run your practice</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Focus on your clients while TheraSquare handles the administration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Lock}
              title="Secure Client Records"
              description="Bank-level security for confidential client files. Role-based access ensures data privacy."
            />
            <FeatureCard
              icon={FileText}
              title="Easy Session Notes"
              description="Streamlined templates for intake, progress notes, and treatment plans."
            />
            <FeatureCard
              icon={Calendar}
              title="Smart Scheduling"
              description="Manage appointments with an intuitive calendar. Send automated reminders to clients."
            />
            <FeatureCard
              icon={Users}
              title="Multi-Therapist Support"
              description="Perfect for clinics. Manage multiple practitioners and staff with custom permissions."
            />
            <FeatureCard
              icon={CheckCircle}
              title="Billing & Reports"
              description="Generate invoices in KES. Track practice revenue and client attendance stats."
            />
            <FeatureCard
              icon={CheckCircle}
              title="Mobile Friendly"
              description="Access your schedule and notes securely from any device, anywhere."
            />
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who is TheraSquare for?</h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-100 flex items-center justify-center mt-1">
                    <CheckCircle className="h-4 w-4 text-brand-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Solo Therapists</h4>
                    <p className="text-gray-600 mt-1">Simplify your private practice admin work so you can focus on care.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-100 flex items-center justify-center mt-1">
                    <CheckCircle className="h-4 w-4 text-brand-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Group Practices</h4>
                    <p className="text-gray-600 mt-1">Collaborate effectively with shared resources but private notes.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-100 flex items-center justify-center mt-1">
                    <CheckCircle className="h-4 w-4 text-brand-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Mental Health Clinics</h4>
                    <p className="text-gray-600 mt-1">Robust reporting and admin tools for larger operations.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://picsum.photos/seed/therapist/600/600"
                alt="Therapist working"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs border border-gray-100">
                <p className="text-gray-600 italic">"TheraSquare has transformed how I manage my clinic. It's secure, simple, and local."</p>
                <p className="mt-4 font-semibold text-gray-900">– Dr. Amina K., Nairobi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-700 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to professionalize your practice?</h2>
          <p className="text-brand-100 text-xl mb-10">
            Join the growing community of Kenyan therapists using TheraSquareEMR.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href={`${import.meta.env.VITE_APP_URL}/signup`} className="bg-white text-brand-700 hover:bg-gray-100 border-none px-8 py-3 text-lg font-semibold">
              Get Started Now
            </Button>
            <Button to="/contact" variant="outline" className="bg-transparent border-white text-white hover:bg-brand-600 px-8 py-3 text-lg">
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ElementType, title: string, description: string }> = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="h-12 w-12 bg-brand-50 rounded-lg flex items-center justify-center mb-6">
      <Icon className="h-6 w-6 text-brand-600" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export default Home;