import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">Privacy Policy</h1>
        <div className="prose prose-brand lg:prose-lg text-gray-600">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h3>1. Introduction</h3>
          <p>
            TheraSquare Solutions ("we," "our," or "us") respects your privacy and is committed to protecting your personal data and the sensitive health data managed through our TheraSquareEMR platform. This policy explains how we handle data in compliance with Kenyan Data Protection laws.
          </p>

          <h3>2. Data Collection</h3>
          <p>
            We collect information you provide directly to us when you create an account, specifically regarding your practice details. We also process client data that you, as the Data Controller, input into the system. TheraSquare acts as the Data Processor.
          </p>

          <h3>3. Data Security</h3>
          <p>
            We implement bank-level security measures, including encryption at rest and in transit, to protect confidentiality. Access to client records is strictly limited to authorized users within your practice.
          </p>

          <h3>4. Data Sharing</h3>
          <p>
            We do not sell your data or your clients' data. We may share data with third-party sub-processors solely for the purpose of providing our services (e.g., hosting providers, email delivery services), all of whom are bound by strict confidentiality agreements.
          </p>
          
          <h3>5. Contact Us</h3>
          <p>
            If you have questions about this privacy policy, please contact us at privacy@therasquare.co.ke.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;