import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-12 shadow-lg border-2 border-amber-200">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8 text-amber-700" />
            </div>
          </div>

          <h2 className="font-serif text-4xl font-bold text-stone-900 text-center mb-3">
            Stay Connected
          </h2>
          <p className="text-center text-stone-600 mb-8 text-lg">
            Get exclusive offers, new menu items, and updates delivered to your inbox
          </p>

          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-4 rounded-full border-2 border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
            />
            <button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          {submitted && (
            <div className="mt-6 flex items-center justify-center gap-2 text-emerald-600 font-semibold animate-fade-in">
              <CheckCircle className="w-5 h-5" />
              <span>Thanks for subscribing!</span>
            </div>
          )}

          <p className="text-center text-sm text-stone-500 mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
