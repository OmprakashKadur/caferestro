import { useEffect, useState } from 'react';

const StatCounter = ({ end, label }: { end: number; label: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = end / 50;
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev >= end) {
          clearInterval(timer);
          return end;
        }
        return Math.ceil(prev + increment);
      });
    }, 40);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center">
      <div className="font-serif text-5xl font-bold text-amber-600 mb-2">
        {count}+
      </div>
      <p className="text-stone-600 font-semibold">{label}</p>
    </div>
  );
};

export default function Stats() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-stone-900 via-amber-900 to-emerald-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl font-bold text-white mb-4">
            By The Numbers
          </h2>
          <p className="text-xl text-amber-100">
            Trusted by thousands of happy customers
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <StatCounter end={5000} label="Happy Customers" />
          <StatCounter end={150} label="Menu Items" />
          <StatCounter end={12} label="Years of Excellence" />
          <StatCounter end={98} label="% Satisfaction" />
        </div>
      </div>
    </section>
  );
}
