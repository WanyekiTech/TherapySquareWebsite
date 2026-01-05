import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
       <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">Terms of Service</h1>
        <div className="prose prose-brand lg:prose-lg text-gray-600">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h3>1. Acceptance of Terms</h3>
          <p>
            By accessing or using TheraSquareEMR, you agree to be bound by these Terms of Service. If you do not agree, you may not use the service.
          </p>

          <h3>2. Service Description</h3>
          <p>
            TheraSquareEMR is a practice management and electronic medical records software for mental health professionals. We provide the platform "as is" and "as available."
          </p>

          <h3>3. User Responsibilities</h3>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials. You represent that you are a licensed or qualified mental health professional authorized to maintain such records in Kenya.
          </p>

          <h3>4. Data Ownership</h3>
          <p>
            You retain all rights to the client data you input into the system. TheraSquare Solutions claims no ownership over your patient records.
          </p>
          
           <h3>5. Limitation of Liability</h3>
          <p>
            TheraSquare Solutions shall not be liable for any indirect, incidental, or consequential damages arising out of the use of our service.
          </p>

          <h3>6. Governing Law</h3>
          <p>
            These terms are governed by the laws of Kenya.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;