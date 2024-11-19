



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

interface ProductItem {
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
  products?: ProductItem[];
}

interface DetailModalProps {
  title: string;
  products: ProductItem[];
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
      title: 'Club sandwich',
      imageUrl: '/images/food3.jpeg',
      price: '$4.00',
      description: 'Smooth latte with artisan foam design'
    },
    {
      id: 4,
      title: 'Burrito',
      imageUrl: '/images/food2.jpeg',
      price: '$3.00',
      description: 'Bold americano with smooth finish'
    },
    {
      id: 4,
      title: 'Chicken wings',
      imageUrl: '/images/food1.jpeg',
      price: '$3.00',
      description: 'Bold americano with smooth finish'
    },
    {
      id: 4,
      title: 'Chicken curry',
      imageUrl: '/images/food5.jpeg',
      price: '$3.00',
      description: 'Bold americano with smooth finish'
    },

    {
      id: 4,
      title: 'Blue Mojito',
      imageUrl: '/images/Blue Mojito.jpeg',
      price: '$3.00',
      description: 'Bold americano with smooth finish'
    },
    {
      id: 4,
      title: 'pina colado',
      imageUrl: '/images/Home _ Baked Bree.jpeg',
      price: '$3.00',
      description: 'Bold americano with smooth finish'
    },
    {
      id: 4,
      title: 'Tequila Sunrise',
      imageUrl: '/images/Tequila Sunset.jpeg',
      price: '$3.00',
      description: 'Bold americano with smooth finish'
    },
    {
      id: 4,
      title: 'Tequila Sunrise',
      imageUrl: '/images/Tequila Sunset.jpeg',
      price: '$3.00',
      description: 'Bold americano with smooth finish'
    },
    
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

const ProductDetail: React.FC<DetailModalProps> = ({ title, products, onClose }) => {
  return (
    <div id='product' className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto m-4 transform transition-all duration-300 ease-in-out">
        <div className="sticky top-0 bg-white/90 backdrop-blur-sm p-8 border-b z-10">
          <div className="flex justify-between items-center">
            <h2 className="text-4xl font-bold">{title}</h2>
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
            {products.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="aspect-video overflow-hidden relative">
                  <Image 
                    src={product.imageUrl} 
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-2">{product.description}</p>
                  <p className="text-xl font-bold text-orange-500 mb-4">{product.price}</p>
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
  const [selectedProduct, setSelectedProduct] = useState<DetailModalProps | null>(null);

  const items: MenuItem[] = [
    {
      id: 1,
      title: 'COFFEE & FOOD',
      imageUrl: '/images/IMG_6867.jpg',
      type: 'coffee'
    },
    {
      id: 2,
      title: 'GIFT SHOP',
      imageUrl: '/images/PXL_20241119_060624544.jpg',
      type: 'gift',
      products: [
        {
          id: 1,
          title: 'Handmade Pottery',
          imageUrl: '/images/PXL_20241119_060611154.jpg',
          price: '$29.99',
          description: 'Beautiful handcrafted ceramic pottery'
        },
        {
          id: 2,
          title: 'Local Artwork',
          imageUrl: '/images/PXL_20241119_060741981.jpg',
          price: '$49.99',
          description: 'Original pieces from local artists'
        },
        {
          id: 3,
          title: 'Local Artwork',
          imageUrl: '/images/PXL_20241119_060804895.jpg',
          price: '$49.99',
          description: 'Original pieces from local artists'
        },
        {
          id: 4,
          title: 'Local Artwork',
          imageUrl: '/images/paint9.jpg',
          price: '$49.99',
          description: 'Original pieces from local artists'
          
        },
        {
          id: 5,
          title: 'Local Artwork',
          imageUrl: '/images/PXL_20241119_060815597.jpg',
          price: '$49.99',
          description: 'Original pieces from local artists'
        },
        {
          id: 6,
          title: 'Local Artwork',
          imageUrl: '/images/PXL_20241119_060510463.jpg',
          price: '$49.99',
          description: 'Original pieces from local artists'
        }
      ]
    },
    {
      id: 3,
      title: 'GUEST HOUSE',
      imageUrl: '/images/gusest.jpeg',
      type: 'guesthouse',
      products: [
        {
          id: 1,
          title: 'Standard Room',
          imageUrl: '/images/_ (36).jpeg',
          price: '$89.99',
          description: 'Comfortable room with modern amenities'
        },
        {
          id: 2,
          title: 'Deluxe Suite',
          imageUrl: '/images/Eco-Friendly Tropical Bedroom.jpeg',
          price: '$149.99',
          description: 'Spacious suite with premium features'
        },
        {
          id: 3,
          title: 'Deluxe Suite',
          imageUrl: '/images/Eco-Friendly Tropical Bedroom.jpeg',
          price: '$149.99',
          description: 'Spacious suite with premium features'
        },
        {
          id: 4,
          title: 'Deluxe Suite',
          imageUrl: '/images/Eco-Friendly Tropical Bedroom.jpeg',
          price: '$149.99',
          description: 'Spacious suite with premium features'
        },
        {
          id: 5,
          title: 'Deluxe Suite',
          imageUrl: '/images/Eco-Friendly Tropical Bedroom.jpeg',
          price: '$149.99',
          description: 'Spacious suite with premium features'
        },
        {
          id: 6,
          title: 'Deluxe Suite',
          imageUrl: '/images/gusest.jpeg',
          price: '$149.99',
          description: 'Spacious suite with premium features'
        }
      ]
    },
    {
      id: 4,
      title: 'ART GALLERY',
      imageUrl: '/images/paint10.jpg',
      type: 'gallery',
      products: [
        {
          id: 1,
          title: 'Limited Edition Prints',
          imageUrl: '/images/paint1.jpg',
          price: '$199.99',
          description: 'Exclusive artwork prints from featured artists'
        },
        {
          id: 2,
          title: 'Original Paintings',
          imageUrl: '/images/paint2.jpg',
          price: '$2000',
          description: 'One-of-a-kind original artworks'
        },
        {
          id: 2,
          title: 'Original Paintings',
          imageUrl: '/images/paint10.jpg',
          price: '$1000',
          description: 'One-of-a-kind original artworks'
        },
        {
          id: 2,
          title: 'Original Paintings',
          imageUrl: '/images/paint5.jpg',
          price: '$499.99',
          description: 'One-of-a-kind original artworks'
        },
        {
          id: 2,
          title: 'Original Paintings',
          imageUrl: '/images/paint4.jpg',
          price: '$499.99',
          description: 'One-of-a-kind original artworks'
        },
        {
          id: 2,
          title: 'Original Paintings',
          imageUrl: '/images/paint11.jpg',
          price: '$499.99',
          description: 'One-of-a-kind original artworks'
        }
      ]
    },
  ];

  const handleCardClick = (item: MenuItem) => {
    if (item.type === 'coffee') {
      setShowCoffeeDetail(true);
    } else if (item.products) {
      setSelectedProduct({
        title: item.title,
        products: item.products,
        onClose: () => setSelectedProduct(null)
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

      {selectedProduct && (
        <ProductDetail {...selectedProduct} />
      )}
    </div>
  );
};

export default MenuCards;