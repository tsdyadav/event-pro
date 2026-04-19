"use client";

import Image from "next/image";

const stats = [
  {
    id: 1,
    img: "/assets/10.png",
  
  },
  {
    id: 2,
    img: "/assets/20k.png",
    
  },
  {
    id: 3,
    img: "/assets/240.png",
    
  },
  {
    id: 4,
    img: "/assets/12.png",
  
  },
];

export default function StatsSection() {
  return (
    <section className="w-full px-40 py-30">
      <div className="mx-auto max-w-[1200px] rounded-[32px] bg-[#FFFFFF] py-10 px-6 md:px-12 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
        
        <div className="flex items-center justify-between">
          
          {stats.map((item, index) => (
            <div key={item.id} className="flex items-center flex-1 justify-center">
              
              {/* Stat */}
              <div className="text-center">
                <div className="relative w-[110px] h-[60px] mx-auto">
                  <Image
                    src={item.img}
                    alt="stat"
                    fill
                    className="object-contain"
                  />
                </div>

              
              </div>

              {/* DOT BETWEEN ITEMS */}
              {index !== stats.length - 1 && (
                <div className="flex-1 flex justify-center">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
                </div>
              )}

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}