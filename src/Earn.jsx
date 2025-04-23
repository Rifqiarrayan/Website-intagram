export default function Earn() {
  return (
    <div id="earn" className="min-h-screen bg-white pt-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">Earn</h1>

        <h2 className="text-lg sm:text-xl text-purple-700 font-semibold mb-2">Favorites</h2>
        <h2 className="text-lg sm:text-xl text-purple-700 font-semibold mb-6">Brand Collaborations</h2>

        <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
          We work behind the scenes with brands to curate exclusive monetization opportunities for BOI Creators
        </p>

        <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
          Be an active member of the BOI Community on Instagram and make sure you create content consistently
        </p>

        <p className="text-sm sm:text-base text-gray-700 mb-10 leading-relaxed">
          When a brand selects you, we will reach out to you with the opportunity. Watch out for emails from{" "}
          <span className="font-medium">raka@gmail.com</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[20, 21, 29].map((img, i) => (
            <div key={i} className="w-full h-60 sm:h-64 overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <img
                src={`https://i.pravatar.cc/300?img=${img}`}
                alt={`Avatar ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
