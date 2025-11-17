import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Location() {
  return (
    <section className="py-24 px-6 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl font-bold text-stone-900 mb-4">
            Visit Us
          </h2>
          <p className="text-xl text-stone-600">
            We're located in the heart of the city, ready to serve you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-amber-700" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-stone-900 mb-2">Address</h3>
                <p className="text-stone-600 leading-relaxed">
                  123 Coffee Street<br />
                  Downtown District<br />
                  New York, NY 10001
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-stone-900 mb-2">Phone</h3>
                <p className="text-stone-600">+1 (555) 123-4567</p>
                <a
                  href="tel:+15551234567"
                  className="inline-block mt-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300"
                >
                  Call Now
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-orange-700" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-stone-900 mb-2">Email</h3>
                <p className="text-stone-600">hello@cafedelight.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-amber-700" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-stone-900 mb-2">Opening Hours</h3>
                <div className="text-stone-600 space-y-1">
                  <p><span className="font-semibold">Monday - Friday:</span> 7:00 AM - 10:00 PM</p>
                  <p><span className="font-semibold">Saturday:</span> 8:00 AM - 11:00 PM</p>
                  <p><span className="font-semibold">Sunday:</span> 8:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.5762654421383!2d-73.98823492346374!3d40.748817371394216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cafe Location Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
