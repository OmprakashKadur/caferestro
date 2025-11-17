import { useState } from 'react';
import { Calendar, Users, Clock } from 'lucide-react';

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Reservation request submitted! We will contact you shortly.');
  };

  return (
    <section id="reservation" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900/95 via-amber-900/90 to-emerald-900/95" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      />

      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-serif text-5xl font-bold text-white mb-4">
            Reserve Your Table
          </h2>
          <p className="text-xl text-amber-100">
            Book your spot and let us prepare an unforgettable experience
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-white font-semibold mb-2">Your Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">Phone Number</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-white font-semibold mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Date
              </label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Time
              </label>
              <input
                type="time"
                required
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Guests
              </label>
              <select
                value={formData.guests}
                onChange={(e) => setFormData({...formData, guests: e.target.value})}
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
              >
                <option value="1" className="text-stone-900">1 Guest</option>
                <option value="2" className="text-stone-900">2 Guests</option>
                <option value="3" className="text-stone-900">3 Guests</option>
                <option value="4" className="text-stone-900">4 Guests</option>
                <option value="5" className="text-stone-900">5 Guests</option>
                <option value="6" className="text-stone-900">6+ Guests</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Confirm Reservation
          </button>
        </form>
      </div>
    </section>
  );
}
