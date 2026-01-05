import React from 'react';
import Button from '../components/Button';
import { Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Have questions about TheraSquareEMR? We're here to help.
          </p>
        </div>

        {/* Contact Info - Centered */}
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Get in touch</h3>
          <p className="text-gray-600 mb-8">
            Whether you need a demo, have a support request, or just want to say hello, our team in Nairobi is ready to assist.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex flex-col items-center gap-4">
              <div className="bg-brand-100 p-4 rounded-full">
                <Mail className="h-8 w-8 text-brand-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Email</p>
                <a href="mailto:support@therasquare.co.ke" className="text-brand-600 hover:underline text-lg">support@therasquare.co.ke</a>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="bg-brand-100 p-4 rounded-full">
                <MapPin className="h-8 w-8 text-brand-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Location</p>
                <p className="text-gray-600 text-lg">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Contact;