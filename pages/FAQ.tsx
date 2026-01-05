import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../types';

const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      category: 'General',
      question: 'What is TheraSquareEMR?',
      answer: 'TheraSquareEMR is an electronic medical records system specifically designed for mental health professionals in Kenya. It helps you manage client records, notes, scheduling, and billing securely.'
    },
    {
      category: 'General',
      question: 'Who is TheraSquareEMR designed for?',
      answer: 'It is designed for psychologists, counselors, therapists, and mental health clinics of all sizes.'
    },
    {
      category: 'Pricing',
      question: 'Is there a free trial?',
      answer: 'Yes! We offer a 14-day free trial on all plans so you can test the features before committing.'
    },
    {
      category: 'Pricing',
      question: 'Are there any long-term contracts?',
      answer: 'No. TheraSquareEMR is a month-to-month service. You can cancel at any time without penalty.'
    },
    {
      category: 'Security',
      question: 'How secure is client data?',
      answer: 'Extremely secure. We use industry-standard encryption for data in transit and at rest. Our platform is designed with strict confidentiality principles in mind.'
    },
    {
      category: 'Security',
      question: 'Who can access client records?',
      answer: 'Access is role-based. In a clinic setting, administrators can manage billing, but clinical notes are typically restricted to the assigned therapist unless shared consent is configured.'
    },
    {
      category: 'Usage',
      question: 'Does TheraSquareEMR work on mobile devices?',
      answer: 'Yes, our platform is fully responsive and works great on smartphones, tablets, and desktop computers.'
    }
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently Asked Questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq, index) => (
              <Disclosure key={index} faq={faq} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

const Disclosure: React.FC<{ faq: FAQItem }> = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="pt-6">
            <dt>
                <button
                    className="flex w-full items-start justify-between text-left text-gray-900"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="text-base font-semibold leading-7">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                        {isOpen ? (
                            <ChevronUp className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <ChevronDown className="h-6 w-6" aria-hidden="true" />
                        )}
                    </span>
                </button>
            </dt>
            {isOpen && (
                <dd className="mt-2 pr-12">
                    <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                </dd>
            )}
        </div>
    );
}

export default FAQ;