import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah Johnson',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'Absolutely love this place! The coffee is exceptional and the atmosphere is so warm and welcoming. Perfect spot for a weekend brunch.',
  },
  {
    name: 'Michael Chen',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'Best cafe in town, hands down. The truffle pasta is to die for, and the service is impeccable. Highly recommended!',
  },
  {
    name: 'Emma Wilson',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: "Their signature coffee is amazing! I'm a regular now. The staff remembers my order and always greets me with a smile.",
  },
  {
    name: 'David Rodriguez',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'Great food, great ambience, great people. This place has become my go-to spot for meetings and casual dining.',
  },
];

export default function Reviews() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl font-bold text-stone-900 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-xl text-stone-600">
            Real stories from real people who love what we do
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-stone-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-stone-700 leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover shadow-md"
                />
                <div>
                  <p className="font-semibold text-stone-900">{review.name}</p>
                  <p className="text-sm text-stone-500">Verified Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
