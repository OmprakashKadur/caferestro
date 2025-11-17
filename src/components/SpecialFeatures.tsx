import { Sparkles, Coffee, ChefHat } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: "Today's Special",
    name: 'Mediterranean Brunch Bowl',
    description: 'Fresh feta, olives, tomatoes, and poached eggs on a bed of quinoa',
    price: '$14.50',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    bgColor: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    icon: Coffee,
    title: 'Signature Coffee',
    name: 'Caramel Cloud Latte',
    description: 'House-made caramel, espresso, and velvety foam topped with sea salt',
    price: '$6.00',
    image: 'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=600',
    bgColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    icon: ChefHat,
    title: "Chef's Recommendation",
    name: 'Wagyu Beef Burger',
    description: 'Premium wagyu patty with aged cheddar, caramelized onions, and truffle aioli',
    price: '$19.00',
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
];

export default function SpecialFeatures() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl font-bold text-stone-900 mb-4">
            Special Features
          </h2>
          <p className="text-xl text-stone-600">
            Discover our handpicked favorites and daily specials
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group`}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 ${feature.bgColor} rounded-full flex items-center justify-center border-2 border-white shadow-md`}>
                    <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <span className={`${feature.iconColor} font-semibold text-sm uppercase tracking-wider`}>
                    {feature.title}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-stone-900 mb-3">
                  {feature.name}
                </h3>
                <p className="text-stone-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-stone-900">
                    {feature.price}
                  </span>
                  <button className="bg-stone-900 hover:bg-stone-800 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
