import React from "react";

const items = [
  "Premium Steel Furniture Solutions",
  "Built for Strength & Long-Term Durability",
  "Custom Designs for Every Space",
  "Modern Aesthetics with Industrial Quality",
];

const MarqueeBar = () => {
  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-orange-600 to-orange-500 py-6">
      
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Duplicate content for seamless loop */}
        {[...items, ...items].map((text, i) => (
          <div key={i} className="flex items-center gap-6 mx-8">
            
            <p className="text-white text-xl md:text-2xl font-medium">
              {text}
            </p>

            {/* Icon */}
            <div className="w-6 h-6 bg-white rounded-md rotate-45"></div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default MarqueeBar;