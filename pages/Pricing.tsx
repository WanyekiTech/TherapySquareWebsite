import React from 'react';
import { Check } from 'lucide-react';
import Button from '../components/Button';
import { PricingTier } from '../types';

const Pricing: React.FC = () => {
  const tiers: PricingTier[] = [
    {
      name: 'Basic',
      price: '1,500',
      description: 'Ideal for solo therapists just starting out.',
      features: [
        'Client EMR Records',
        'Unlimited Session Notes',
        'Appointment Scheduling',
        'Basic Reports',
        'Email Support',
        '1 Therapist Account'
      ],
      ctaText: 'Get Started',
    },
    {
      name: 'Pro',
      price: '2,500',
      recommended: true,
      description: 'Perfect for growing practices needing more power.',
      features: [
        'Everything in Basic',
        'Up to 3 Therapist Accounts',
        'Advanced Analytics',
        'Secure Document Uploads',
        'Priority Email Support',
        'SMS Reminders (Add-on)'
      ],
      ctaText: 'Get Started',
    },
    {
      name: 'Enterprise',
      price: '5,500',
      description: 'Best for clinics and large group practices.',
      features: [
        'Unlimited Therapist Accounts',
        'Custom Roles & Permissions',
        'Advanced Security Controls',
        'Dedicated Account Manager',
        'Audit Logs',
        'API Access'
      ],
      ctaText: 'Request Demo',
    },
  ];

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-600">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Simple, Transparent Pricing
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Choose the plan that fits your practice size. All prices in Kenyan Shillings (KES). Cancel anytime.
        </p>
        
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-3xl p-8 ring-1 xl:p-10 flex flex-col justify-between ${
                tier.recommended
                  ? 'bg-white ring-brand-600 shadow-xl scale-105 z-10'
                  : 'bg-white/60 ring-gray-200'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    className={`text-lg font-semibold leading-8 ${
                      tier.recommended ? 'text-brand-600' : 'text-gray-900'
                    }`}
                  >
                    {tier.name}
                  </h3>
                  {tier.recommended && (
                    <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold leading-5 text-brand-600">
                      Recommended
                    </span>
                  )}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">KES {tier.price}</span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                </p>
                <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-brand-600" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                 {tier.name === 'Enterprise' ? (
                     <Button to="/contact" variant="outline" className="w-full justify-center">
                         {tier.ctaText}
                     </Button>
                 ) : (
                    <Button 
                        href="https://app.yourdomain.com/signup" 
                        variant={tier.recommended ? 'primary' : 'outline'}
                        className={`w-full justify-center ${!tier.recommended ? 'bg-white hover:bg-gray-50' : ''}`}
                    >
                        {tier.ctaText}
                    </Button>
                 )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;