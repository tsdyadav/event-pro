"use client";

const cities = [
  "DELHI NCR",
  "GURUGRAM",
  "NOIDA",
  "BANGALORE",
  "HYDERABAD",
  "MUMBAI",
  "PUNE",
  "AHMEDABAD",
  "LUCKNOW",
  "CHENNAI",
];

const categories = [
  "Birthday Decorations",
  "Party Decorations",
  "Candlelight Dinner",
  "Personalised Gifts",
  "Party Entertainment",
  "Corporate Events",
  "Food Catering",
  "Photography Services",
  "Anniversary Decorations",
  "Baby Shower Celebration",
  "Baby Welcome Decorations",
  "Christmas/Xmas Decorations",
  "Kids Birthday Celebration",
  "First Birthday Decoration",
  "Diwali Decorations",
  "Naming Ceremony Decorations",
];

export default function CityCategorySection() {
  return (
    <section className="w-full px-4 py-16">
      <div className="mx-auto max-w-[1200px] rounded-[32px] bg-[#f3eef2] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-pink-500">
          Host your next birthday party with ease.
        </h2>

        {/* City Pills */}
        <div className="mt-6 flex flex-wrap gap-3">
          {cities.map((city, index) => (
            <button
              key={city}
              className={`px-5 py-2 rounded-full border text-sm font-semibold transition ${
                index === 0
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white border-none"
                  : "border-pink-400 text-pink-500 hover:bg-pink-50"
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="rounded-[20px] bg-white/60 backdrop-blur-md px-6 py-4 shadow-md text-center"
            >
              <h3 className="text-sm font-semibold text-gray-800">
                {item}
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                in Delhi NCR
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}