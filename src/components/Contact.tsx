import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Interested in working together? Feel free to reach out for collaborations or just a friendly hello!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-gray-700 p-3 rounded-lg mr-4">
                <Mail className="text-purple-400" size={20} />
              </div>
              <div>
                <h4 className="text-white font-medium">Email</h4>
                <p className="text-gray-400">janvigorajiya08@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-gray-700 p-3 rounded-lg mr-4">
                <MapPin className="text-purple-400" size={20} />
              </div>
              <div>
                <h4 className="text-white font-medium">Location</h4>
                <p className="text-gray-400">Anand, Gujarat</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-gray-700 p-3 rounded-lg mr-4">
                <Phone className="text-purple-400" size={20} />
              </div>
              <div>
                <h4 className="text-white font-medium">Phone</h4>
                <p className="text-gray-400">8725877309</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;