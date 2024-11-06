// components/MenuCards.js
export default function MenuCards() {
    const menuItems = [
      {
        id: 1,
        title: 'Tasted coffee',
        price: '$7.99',
        description: 'Sourdough toast topped with smashed avocado, cherry tomatoes, and feta cheese',
        imageUrl: '/images/latte.jpg', // Replace with actual image paths
      },
      {
        id: 2,
        title: 'Cream coffee',
        price: '$4.39',
        description: 'Sourdough toast topped with smashed avocado, cherry tomatoes, and feta cheese',
        imageUrl: '/images/lll.jpg',
      },
      {
        id: 3,
        title: 'Milk coffee',
        price: '$6.19',
        description: 'Sourdough toast topped with smashed avocado, cherry tomatoes, and feta cheese',
        imageUrl: '/images/coffees.png',
      },
    ];
  
    return (
        <div>
      <section className="py-4 px-2 md:px-4 bg-white text-2xl">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg overflow-hidden max-w-xs mx-auto"
            >
              {/* Image */}
              <img src={item.imageUrl} alt={item.title} className="w-full h-36 object-cover" />
  
              {/* Content */}
              <div className="p-2">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-2xl font-semibold text-gray-800">{item.title}</h3>
                  <span className="text-blue-900 font-bold">{item.price}</span>
                </div>
                <p className="text-xl text-gray-600 mb-2">{item.description}</p>
                <button className="w-full bg-orange-500 text-white py-2 rounded-md font-bold text-sm hover:bg-orange-600">
                  Order now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
     
      </div>
    );
  }
  