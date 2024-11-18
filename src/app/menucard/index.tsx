

'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, X } from 'lucide-react';

interface CoffeeItem {
  id: number;
  title: string;
  imageUrl: string;
  price: string;
  description: string;
}

interface MenuItem {
  id: number;
  title: string;
  imageUrl: string;
  type: string;
  videoUrl?: string;
  description?: string;
}

interface VideoModalProps {
  title: string;
  videoUrl: string;
  description: string;
  onClose: () => void;
}

const CoffeeDetail: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const coffeeItems: CoffeeItem[] = [
    {
      id: 1,
      title: 'Espresso',
      imageUrl: '/images/Fresh coffee .jpeg',
      price: '$3.50',
      description: 'Rich and bold espresso shot'
    },
    {
      id: 2,
      title: 'Cappuccino',
      imageUrl: '/images/Cappucino and croissant.jpeg',
      price: '$4.50',
      description: 'Classic cappuccino with perfect foam'
    },
    {
      id: 3,
      title: 'Latte',
      imageUrl: '/images/cup2.jpeg',
      price: '$4.00',
      description: 'Smooth latte with artisan foam design'
    },
    {
      id: 4,
      title: 'Americano',
      imageUrl: '/images/Iced Americano.jpeg',
      price: '$3.00',
      description: 'Bold americano with smooth finish'
    }
  ];

  return (
    <div id='product' className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto m-4 transform transition-all duration-300 ease-in-out">
        <div className="sticky top-0 bg-white/90 backdrop-blur-sm p-8 border-b z-10">
          <div className="flex justify-between items-center">
            <h2 className="text-4xl font-bold">Our Coffee Menu</h2>
            <button 
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800 transition-colors p-3 hover:bg-gray-100 rounded-full"
            >
              <X size={24} />
            </button>
          </div>
        </div>
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coffeeItems.map((coffee) => (
              <div 
                key={coffee.id} 
                className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="aspect-video overflow-hidden relative">
                  <Image 
                    src={coffee.imageUrl} 
                    alt={coffee.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{coffee.title}</h3>
                  <p className="text-gray-600 mb-2">{coffee.description}</p>
                  <p className="text-xl font-bold text-orange-500 mb-4">{coffee.price}</p>
                  <button className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 font-medium">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const VideoModal: React.FC<VideoModalProps> = ({ title, videoUrl, description, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm">
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all duration-300"
      >
        <X size={24} />
      </button>

      <div className="h-screen w-screen flex flex-col">
        <div className="flex-1 relative">
          <video 
            className="absolute inset-0 w-full h-full object-contain"
            controls
            autoPlay
            src={videoUrl}
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="bg-black/80 backdrop-blur-sm text-white p-8 transform transition-transform duration-300 hover:translate-y-0 translate-y-[calc(100%-5rem)]">
          <h2 className="text-3xl font-bold mb-3">{title}</h2>
          <p className="text-gray-300 text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

const ItemCard: React.FC<{ 
  title: string, 
  imageUrl: string, 
  item: MenuItem, 
  handleCardClick: (item: MenuItem) => void 
}> = ({ title, imageUrl, item, handleCardClick }) => (
  <div id='product' className="group relative w-full md:w-[500px] bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <div className="aspect-[4/3] w-full overflow-hidden relative">
      <Image 
        src={imageUrl} 
        alt={title} 
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
    <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <button 
        onClick={() => handleCardClick(item)}
        className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 font-medium"
      >
        Explore Now
        <ArrowRight size={20} />
      </button>
    </div>
  </div>
);

const MenuCards: React.FC = () => {
  const [showCoffeeDetail, setShowCoffeeDetail] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<VideoModalProps | null>(null);

  const items: MenuItem[] = [
    {
      id: 1,
      title: 'COFFEE',
      imageUrl: '/images/IMG_6867.jpg',
      type: 'coffee'
    },
    {
      id: 2,
      title: 'GIFT SHOP',
      imageUrl: '/images/IMG_6835.jpg',
      type: 'gift',
      videoUrl: '/images/VID_31891025_064938_480.mp4',
      description: 'Explore our curated collection of unique gifts and handcrafted items.'
    },
    {
      id: 3,
      title: 'GUEST HOUSE',
      imageUrl: '/images/IMG_6864 (1).jpg',
      type: 'market',
      videoUrl: '/images/VID_31870319_034147_013 (1).mp4',
      description: 'Experience comfort and luxury in our carefully designed guest house.'
    },
    {
      id: 4,
      title: 'ART GALLERY',
      imageUrl: '/images/IMG_6831.jpg',
      type: 'gallery',
      videoUrl: '/images/VID_31941217_234321_586.mp4',
      description: 'Immerse yourself in our diverse collection of contemporary and traditional artwork.'
    },
  ];

  const handleCardClick = (item: MenuItem) => {
    if (item.type === 'coffee') {
      setShowCoffeeDetail(true);
    } else {
      setSelectedVideo({
        title: item.title || '',
        videoUrl: item.videoUrl || '',
        description: item.description || '',
        onClose: () => setSelectedVideo(null)
      });
    }
  };

  return (
    <div id='product' className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-12 text-center">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {items.map((item) => (
            <ItemCard 
              key={item.id} 
              title={item.title}
              imageUrl={item.imageUrl}
              item={item}
              handleCardClick={handleCardClick}
            />
          ))}
        </div>
      </div>
      
      {showCoffeeDetail && (
        <CoffeeDetail onClose={() => setShowCoffeeDetail(false)} />
      )}

      {selectedVideo && (
        <VideoModal 
          {...selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
};

export default MenuCards;