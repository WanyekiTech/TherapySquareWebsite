import React from 'react';
import { Heart, Shield, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-brand-500 to-brand-700 opacity-20" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About TheraSquare Solutions</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Empowering therapists through simple, secure technology. We are dedicated to supporting the mental health ecosystem in Kenya.
            </p>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                 <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Our Mission</h2>
                 <p className="text-lg text-gray-600 mb-6">
                     At TheraSquare Solutions, we believe that therapists should spend their time helping clients, not wrestling with paperwork.
                 </p>
                 <p className="text-lg text-gray-600 mb-6">
                     We built TheraSquareEMR to address the specific needs of the Kenyan mental health landscape—providing a tool that is not only technologically advanced but also culturally grounded and affordable.
                 </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="bg-brand-50 p-6 rounded-2xl">
                    <Heart className="h-8 w-8 text-brand-600 mb-4" />
                    <h3 className="font-semibold text-gray-900">Mental Health Focus</h3>
                    <p className="text-sm text-gray-600 mt-2">Dedicated exclusively to the needs of psychology and counseling professionals.</p>
                </div>
                <div className="bg-brand-50 p-6 rounded-2xl">
                    <Globe className="h-8 w-8 text-brand-600 mb-4" />
                    <h3 className="font-semibold text-gray-900">Built for Kenya</h3>
                    <p className="text-sm text-gray-600 mt-2">Localized pricing, local support, and features that fit the Nairobi market.</p>
                </div>
                <div className="bg-brand-50 p-6 rounded-2xl sm:col-span-2">
                    <Shield className="h-8 w-8 text-brand-600 mb-4" />
                    <h3 className="font-semibold text-gray-900">Ethical Data Handling</h3>
                    <p className="text-sm text-gray-600 mt-2">We treat data privacy as a fundamental right. Your client records are encrypted and strictly confidential.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;