import { Coffee, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-8 h-8 text-amber-400" />
              <span className="font-serif text-2xl font-bold">Cafe Delight</span>
            </div>
            <p className="text-stone-400 leading-relaxed">
              Crafting exceptional experiences through quality food, premium coffee, and warm hospitality.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="text-stone-400 hover:text-amber-400 transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#reservation" className="text-stone-400 hover:text-amber-400 transition-colors">
                  Reservations
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-stone-400">
              <li>123 Coffee Street</li>
              <li>New York, NY 10001</li>
              <li>+1 (555) 123-4567</li>
              <li>hello@cafedelight.com</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-white/10 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-stone-400">
          <p>&copy; {new Date().getFullYear()} Cafe Delight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
