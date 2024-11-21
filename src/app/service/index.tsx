



'use client'
import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

const ConsultingIcon = () => (
  <svg viewBox="0 0 24 24" className="w-16 h-16 text-cyan-400">
    <path 
      fill="currentColor" 
      d="M16.5,5.5A2,2 0 0,0 18.5,3.5A2,2 0 0,0 16.5,1.5A2,2 0 0,0 14.5,3.5A2,2 0 0,0 16.5,5.5M12.9,19.4L13.9,15L16,17V23H18V15.5L15.9,13.5L16.5,10.5C17.89,12.09 19.89,13 22,13V11C20.24,11 18.84,10.21 17.99,8.89L16.64,6.89C16.29,6.31 15.74,6 15.14,6H14.84C14.24,6 13.69,6.31 13.34,6.89L12.29,8.51L12.29,8.5C11.44,9.84 10.04,10.63 8.28,10.63V12.63C10.39,12.63 12.39,11.72 13.78,10.13L14.08,12.63L11,15.5V23H13V17L14.67,15.33L13.9,19.4"
    />
  </svg>
);

const ProjectsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-16 h-16 text-cyan-400">
    <path 
      fill="currentColor" 
      d="M20.5 4H16V3C16 2.45 15.55 2 15 2H9C8.45 2 8 2.45 8 3V4H3.5C2.67 4 2 4.67 2 5.5V8H22V5.5C22 4.67 21.33 4 20.5 4M10 4V3H14V4H10M2 19.5C2 20.33 2.67 21 3.5 21H20.5C21.33 21 22 20.33 22 19.5V10H2V19.5M10 12H14C14.55 12 15 12.45 15 13V18C15 18.55 14.55 19 14 19H10C9.45 19 9 18.55 9 18V13C9 12.45 9.45 12 10 12Z"
    />
  </svg>
);

const CapacityIcon = () => (
  <svg viewBox="0 0 24 24" className="w-16 h-16 text-cyan-400">
    <path 
      fill="currentColor" 
      d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L6.04,7.5L12,10.85L17.96,7.5L12,4.15Z"
    />
  </svg>
);

interface ServiceItem {
  id: number;
  title: string;
  icon: React.FC;
  description: string;
  type: string;
  details?: {
    subtitle: string;
    features: string[];
  };
}

const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div id='projects' className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-4xl">
        {children}
      </div>
    </div>
  );
};

const ServiceDetails: React.FC<{ 
  service: ServiceItem;
  onClose: () => void;
}> = ({ service, onClose }) => {
  return (
    <div className="relative bg-black/90 text-white rounded-3xl min-h-[400px] p-8">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-cyan-400 hover:text-cyan-300"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="flex flex-col items-center space-y-8">
        <h2 className="text-4xl font-mono font-bold text-cyan-400">{service.title}</h2>
        
        {service.details && (
          <>
            <p className="text-xl text-gray-300 max-w-2xl text-center">
              {service.details.subtitle}
            </p>
            
            <div className="w-full max-w-2xl space-y-4">
              {service.details.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2" />
                  <p className="text-gray-300 flex-1">{feature}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const ServiceCard: React.FC<{ 
  service: ServiceItem;
  onReadMore: () => void;
}> = ({ service, onReadMore }) => {
  const Icon = service.icon;
  
  return (
    <div className="group relative w-full h-full bg-black/40 backdrop-blur-sm rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 border border-cyan-400/30">
      <div className="flex flex-col items-center text-center p-12 space-y-6 h-full">
        <div className="w-32 h-32 rounded-full bg-black/40 flex items-center justify-center border border-cyan-400/30">
          <Icon />
        </div>
        
        <h3 className="text-3xl font-mono font-bold text-cyan-400">{service.title}</h3>
        
        <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
          {service.description}
        </p>
        
        <button 
          onClick={onReadMore}
          className="mt-auto bg-transparent border-2 border-cyan-400 text-cyan-400 py-3 px-8 rounded-full hover:bg-cyan-400/10 transition-all duration-300 text-lg font-mono flex items-center gap-2"
        >
          Read More <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: 1,
      title: 'Market Entry Strategy',
      icon: ConsultingIcon,
      description: 'Comprehensive market analysis and entry strategies for businesses expanding into African markets',
      type: 'consulting',
      details: {
        subtitle: 'Comprehensive market analysis and entry strategies',
        features: [
          'Market opportunity assessment',
          'Competitor analysis',
          'Risk assessment',
          'Entry strategy development'
        ]
      }
    },
    {
      id: 2,
      title: 'Business Development',
      icon: ProjectsIcon,
      description: 'Strategic business development and growth planning for established organizations',
      type: 'projects',
      details: {
        subtitle: 'Strategic business development and growth planning',
        features: [
          'Growth strategy',
          'Partnership development',
          'Business model optimization',
          'Performance improvement'
        ]
      }
    },
    {
      id: 3,
      title: 'Capacity Development',
      icon: CapacityIcon,
      description: 'Enhancing organizational capabilities through training and development programs',
      type: 'development',
      details: {
        subtitle: 'Building organizational capabilities for sustainable growth',
        features: [
          'Skills assessment and gap analysis',
          'Custom training programs',
          'Leadership development',
          'Performance monitoring'
        ]
      }
    }
  ];

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed py-24"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/urban.jpeg')`,
        backgroundColor: '#000'
      }}
    >
      <div className="container mx-auto px-6">
        <h1 className="text-6xl font-mono font-bold mb-24 text-center text-cyan-400">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {services.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service}
              onReadMore={() => setSelectedService(service)}
            />
          ))}
        </div>
      </div>

      <Modal 
        isOpen={selectedService !== null} 
        onClose={() => setSelectedService(null)}
      >
        {selectedService && (
          <ServiceDetails 
            service={selectedService} 
            onClose={() => setSelectedService(null)} 
          />
        )}
      </Modal>
    </div>
  );
};

export default ServicesSection;