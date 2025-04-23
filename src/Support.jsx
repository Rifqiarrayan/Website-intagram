import SupportImg from "./assets/SU.jpg";

export default function Support() {
  return (
    <div id="support" className="min-h-screen bg-white pt-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-screen-lg mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Support
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-10 leading-relaxed">
          Discover tips and tricks, find answers to common questions, and get help!
        </p>

        <div className="flex justify-center">
          <div className="w-full sm:w-4/5 md:w-2/3 lg:w-1/2 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img
              src={SupportImg}
              alt="Support Image"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
