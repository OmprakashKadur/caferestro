const categories = ['All', 'Coffee', 'Breakfast', 'Lunch', 'Desserts'];

const menuItems = [
  {
    name: 'Espresso Macchiato',
    description: 'Rich espresso with a touch of steamed milk',
    price: '$4.50',
    category: 'Coffee',
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Avocado Toast',
    description: 'Fresh avocado on sourdough with poached eggs',
    price: '$12.00',
    category: 'Breakfast',
    image: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Belgian Waffles',
    description: 'Fluffy waffles with maple syrup and berries',
    price: '$10.50',
    category: 'Breakfast',
    image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Caesar Salad',
    description: 'Classic Caesar with grilled chicken',
    price: '$13.50',
    category: 'Lunch',
    image: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Salmon Bowl',
    description: 'Grilled salmon with quinoa and vegetables',
    price: '$16.00',
    category: 'Lunch',
    image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Tiramisu',
    description: 'Classic Italian dessert with espresso',
    price: '$7.50',
    category: 'Desserts',
    image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Flat White',
    description: 'Velvety microfoam with double espresso',
    price: '$5.00',
    category: 'Coffee',
    image: 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Truffle Pasta',
    description: 'Handmade pasta with black truffle sauce',
    price: '$18.00',
    category: 'Lunch',
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

import { useState } from 'react';

export default function MenuHighlights() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 px-6 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-5xl font-bold text-stone-900 mb-4">
            Menu Highlights
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            A carefully curated selection of our most beloved dishes and beverages
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-16 flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-amber-600 text-white shadow-lg scale-105'
                  : 'bg-white text-stone-700 hover:bg-stone-100 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {filtered.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-bold text-stone-900">
                    {item.name}
                  </h3>
                  <span className="text-amber-600 font-bold text-lg">
                    {item.price}
                  </span>
                </div>
                <p className="text-stone-600 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-stone-900 hover:bg-stone-800 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}
