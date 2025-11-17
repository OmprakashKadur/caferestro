import { Coffee, UtensilsCrossed, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <>
      <div className="bg-gradient-to-r from-amber-600 to-orange-500 text-white py-3 px-6 text-center animate-fade-in">
        <div className="flex items-center justify-center gap-2">
          <Zap className="w-4 h-4" />
          <span className="text-sm font-semibold">Limited Time: Get 20% off your first visit!</span>
          <Zap className="w-4 h-4" />
        </div>
      </div>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-stone-900/85 to-emerald-900/90 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1850595/pexels-photo-1850595.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        />

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto animate-fade-in">
        <div className="flex justify-center gap-4 mb-8 opacity-0 animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <Coffee className="w-12 h-12 text-amber-300" strokeWidth={1.5} />
          <UtensilsCrossed className="w-12 h-12 text-amber-300" strokeWidth={1.5} />
        </div>

        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 opacity-0 animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          Taste the Difference.<br />Feel the Warmth.
        </h1>

        <p className="text-xl md:text-2xl text-amber-50 mb-12 max-w-3xl mx-auto font-light opacity-0 animate-slide-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          Freshly brewed coffee, handcrafted dishes, and unforgettable moments.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center opacity-0 animate-slide-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          <a
            href="#menu"
            className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            View Menu
          </a>
          <a
            href="#reservation"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Reserve a Table
          </a>
        </div>
      </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/70 rounded-full" />
          </div>
        </div>
      </section>
    </>
  );
}
