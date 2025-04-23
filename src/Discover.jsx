import D1 from './assets/D1.png';
import D2 from './assets/D2.png';
import D3 from './assets/D3.png';

export default function Discover() {
  return (
    <div id="discover" className="min-h-screen bg-white pt-24 px-4 md:px-8 max-w-screen-xl mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Discover</h1>
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-700 mb-10">Creator Spotlight</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[{ src: D1, name: '@CREATOR_1', city: 'Your City', quote: 'Your quote goes here. Say something inspiring about your creator journey.' },
          { src: D2, name: '@CREATOR_2', city: 'Another City', quote: "Second creator's journey. Make it meaningful and relatable!" },
          { src: D3, name: '@CREATOR_3', city: 'Big City', quote: "Third one’s a charm. Highlight creativity and impact." }
        ].map(({ src, name, city, quote }, i) => (
          <div key={i} className="bg-white border rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img src={src} alt={name} className="w-full h-60 sm:h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-base sm:text-lg font-bold">{name}</h3>
              <p className="text-purple-600 text-sm sm:text-base">{city}</p>
              <p className="text-sm text-gray-700 mt-2 leading-relaxed">{`"${quote}"`}</p>
              <button className="mt-4 px-4 py-2 text-sm sm:text-base bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
                WATCH NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
