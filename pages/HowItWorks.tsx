import React from 'react';
import { UserPlus, Settings, FilePlus, Edit3, PieChart } from 'lucide-react';
import Button from '../components/Button';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: 'Sign up your practice',
      description: 'Create an account in less than 2 minutes. No credit card required for the trial.',
      icon: UserPlus
    },
    {
      id: 2,
      title: 'Set up therapists & administrators',
      description: 'For clinics, invite your team members and assign roles (Admin, Therapist, Receptionist).',
      icon: Settings
    },
    {
      id: 3,
      title: 'Add client profiles',
      description: 'Input client details manually or import them securely. All data is encrypted.',
      icon: FilePlus
    },
    {
      id: 4,
      title: 'Record sessions & notes',
      description: 'Use our structured templates for intake and progress notes during or after sessions.',
      icon: Edit3
    },
    {
      id: 5,
      title: 'Generate reports',
      description: 'View practice analytics and generate billing reports with a single click.',
      icon: PieChart
    }
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-600">Simple Onboarding</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How TheraSquare Works
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We've designed the platform to be intuitive. No technical expertise required—just log in and start managing your practice.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div className="relative">
             {/* Vertical Line */}
             <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>

             <div className="space-y-12">
               {steps.map((step) => (
                 <div key={step.id} className="relative flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-600 text-white z-10 shrink-0">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1 bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                       <div className="flex items-center gap-2 mb-2">
                           <span className="text-sm font-bold text-brand-600 uppercase tracking-wide">Step {step.id}</span>
                       </div>
                       <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                       <p className="text-gray-600">{step.description}</p>
                    </div>
                 </div>
               ))}
             </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
            <Button href="https://app.yourdomain.com/signup" variant="primary" className="px-8 py-3 text-lg">
                Get Started Today
            </Button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;