import { Heart, Leaf, Users } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="font-serif text-5xl font-bold text-stone-900 mb-4">
              Our Story
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Born from a passion for exceptional coffee and authentic cuisine, our cafe has been a neighborhood favorite since day one. We believe in creating more than just meals—we craft experiences.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              Every dish is prepared with fresh, locally-sourced ingredients, and every cup is brewed to perfection. Our cozy ambience and friendly service make every visit feel like coming home.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Leaf className="w-8 h-8 text-amber-700" />
                </div>
                <p className="text-sm font-semibold text-stone-700">Fresh Ingredients</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8 text-emerald-700" />
                </div>
                <p className="text-sm font-semibold text-stone-700">Made with Love</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-orange-700" />
                </div>
                <p className="text-sm font-semibold text-stone-700">Cozy Ambience</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-64 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Coffee"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="h-48 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Interior"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-48 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Food"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="h-64 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/6605214/pexels-photo-6605214.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Dessert"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
