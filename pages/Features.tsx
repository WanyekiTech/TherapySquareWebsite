import React from 'react';
import { FileText, Calendar, Shield, Users, PieChart, Database, Lock, Clock } from 'lucide-react';
import Button from '../components/Button';

const Features: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: "Client EMR Records",
      description: "Digitalize your filing cabinet. Store comprehensive client demographics, history, and contact information securely."
    },
    {
      icon: Clock,
      title: "Session Notes & History",
      description: "Document sessions easily with SOAP notes and custom templates. View complete client history at a glance."
    },
    {
      icon: Calendar,
      title: "Appointment Management",
      description: "Drag-and-drop calendar tailored for therapy sessions. Handle recurring appointments and cancellations effortlessly."
    },
    {
      icon: Users,
      title: "Multi-Therapist Access",
      description: "Ideal for clinics. Add multiple practitioners, assign clients, and manage case loads efficiently."
    },
    {
      icon: PieChart,
      title: "Billing & Invoices",
      description: "Generate professional invoices in KES. Track payments, outstanding balances, and insurance claims."
    },
    {
      icon: Database,
      title: "Reports & Analytics",
      description: "Understand your practice health. Visualize revenue trends, client retention, and session counts."
    },
    {
      icon: Shield,
      title: "Secure Document Storage",
      description: "Upload and store external documents (referrals, consent forms) directly to the client's secure profile."
    },
    {
      icon: Lock,
      title: "Role-Based Access Control",
      description: "Granular permission settings. Admins see everything, while therapists only access their assigned clients."
    }
  ];

  return (
    <div className="bg-white">
      <div className="bg-brand-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
             Powerful tools built to streamline your therapy practice workflow.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-500 text-white mb-5">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="lg:text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Tailored for your needs</h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-2xl font-bold text-brand-600 mb-4">Solo Therapists</h3>
                  <p className="text-gray-600 mb-6">
                      Running a private practice means wearing many hats. TheraSquare acts as your administrative assistant, handling scheduling and files so you can focus entirely on your clients.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Simple, low-cost monthly plan</li>
                      <li>Access from anywhere</li>
                      <li>Automated reminders reduce no-shows</li>
                  </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-2xl font-bold text-brand-600 mb-4">Clinics & Groups</h3>
                  <p className="text-gray-600 mb-6">
                      Managing a team requires oversight and coordination. Our clinic features allow you to centralize billing while maintaining strict privacy between therapists' client records.
                  </p>
                   <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Centralized admin dashboard</li>
                      <li>Staff performance reporting</li>
                      <li>Audit logs for security</li>
                  </ul>
              </div>
           </div>
        </div>
      </div>
      
      <div className="py-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ready to explore these features?</h2>
          <Button href="https://app.yourdomain.com/signup" variant="primary" className="px-8 py-3">
              Start Free Trial
          </Button>
      </div>
    </div>
  );
};

export default Features;