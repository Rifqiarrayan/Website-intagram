import r1 from "./assets/r1.png";
import r2 from "./assets/r2.png"

export default function Earn() {
  const images = [r1, r2, r1];

  return (
    <div id="earn" className="min-h-screen bg-white pt-24 px-4 sm:px-6 md:px-8 overflow-y-auto">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">Earn</h1>

        <h2 className="text-lg sm:text-xl text-purple-700 font-semibold mb-2">Favorites</h2>
        <h2 className="text-lg sm:text-xl text-purple-700 font-semibold mb-6">Brand Collaborations</h2>

        <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
          Instagram empowers creators to earn money through the content they love to make. Whether it's through Reels, Live sessions, or affiliate tools, your content has the power to generate income.
        </p>

        <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
          As a member on Instagram, you get access to exclusive monetization features and opportunities to work with top brands.
        </p>

        <p className="text-sm sm:text-base text-gray-700 mb-10 leading-relaxed">
          Keep creating high-quality content and engaging with your audience consistently. When a brand expresses interest, we’ll contact you directly via email from{" "}
          <span className="font-medium">raka@gmail.com</span>.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative w-full h-60 sm:h-64 overflow-hidden rounded-xl shadow-md group transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              <img
                src={img}
                alt={`Earn image ${i + 1}`}
                className="w-full h-full object-cover group-hover:brightness-75 transition duration-300"
              />
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                Image {i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
