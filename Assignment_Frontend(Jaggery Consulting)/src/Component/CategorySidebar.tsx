 

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface Category {
  name: string;
  count: number;
  color?: string;
  icon?: string;
}

interface CategorySidebarHalfCircularProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategorySidebarHalfCircular: React.FC<CategorySidebarHalfCircularProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
   
  const containerWidth = 300;
  const containerHeight = 400;
  const sidebarWidth = 100;  

  
  const offsetX = sidebarWidth / 2;
  const offsetY = containerHeight / 2;
  const a = 40;  
  const b = offsetY;  

  
  const rightConnectionX = containerWidth - 10;
  const rightConnectionY = offsetY;

  
  const angles = categories.map((_, index) => 
    -Math.PI / 2 + (Math.PI * index) / (categories.length - 1)
  );

   
  const buttonSize = 80;

  
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  
  const buttonPositions = angles.map((t) => {
    const x = offsetX + a * Math.cos(t);
    const y = offsetY + b * Math.sin(t);
    return { x, y };
  });

   
  const createCurvePath = (position: { x: number, y: number }) => {
    
    const controlPoint1X = (position.x + rightConnectionX)/1.5 ;
    const controlPoint1Y = position.y;
    const controlPoint2X = (position.x + rightConnectionX)/1.5 ;
    const controlPoint2Y = rightConnectionY;
    
    return `M ${position.x},${position.y} C ${controlPoint1X},${controlPoint1Y} ${controlPoint2X},${controlPoint2Y} ${rightConnectionX},${rightConnectionY}`;
  };

   
  const defaultColors = ["#FCD34D", "#60A5FA", "#4ADE80", "#F87171", "#A78BFA"];

  
  const calculateCenterPoint = (startX: number, startY: number) => {
     
    const midX = (startX + rightConnectionX) / 2;
    const midY = (startY + rightConnectionY) / 2 - 10;  
    return { x: midX, y: midY };
  };

  return (
    <div
      className="relative mx-auto"
      style={{ width: containerWidth, height: containerHeight }}
    >
      
      <svg
        width={containerWidth}
        height={containerHeight}
        className="absolute top-0 left-0 pointer-events-none"
      >
        {/* Render permanent connection paths for all categories */}
        {categories.map((cat, index) => {
          const isActive = activeCategory === cat.name;
          const color = cat.color || defaultColors[index % defaultColors.length];
          const position = buttonPositions[index];
          
          return (
            <motion.path
              key={`connection-${cat.name}`}
              d={createCurvePath(position)}
              stroke={isActive ? color : "rgba(200, 200, 200, 0.6)"}
              strokeWidth={isActive ? 10 : 6}
              fill="none"
              initial={{ opacity: 0.6 }}
              animate={{ 
                opacity: isActive ? 1 : 0.6,
                strokeDasharray: isActive ? "0" : "10,10"
              }}
              transition={{ duration: 0.6 }}
            />
          );
        })}
        

      </svg>

      {/* Right side connection points for each category */}
      {categories.map((cat, index) => {
        const isActive = activeCategory === cat.name;
        const color = cat.color || defaultColors[index % defaultColors.length];
        
        return (
          <motion.div 
            key={`connection-point-${cat.name}`}
            className="absolute rounded-full border flex items-center justify-center"
            style={{
              width: 16,
              height: 16,
              top: rightConnectionY - 8,
              left: rightConnectionX - 8,
              backgroundColor: isActive ? color : '#f3f4f6',
              borderColor: color,
              zIndex: isActive ? 10 : 5
            }}
            animate={{
              scale: isActive ? [1, 1.2, 1] : 1,
              opacity: isActive ? 1 : 0.5
            }}
            transition={{
              duration: 1,
              repeat: isActive ? Infinity : 0,
              repeatType: "reverse"
            }}
          >
            <span className="text-xs font-bold text-white">→</span>
          </motion.div>
        );
      })}

      {/* Data points on the curves */}
      {categories.map((cat, index) => {
        const position = buttonPositions[index];
        const centerPoint = calculateCenterPoint(position.x, position.y);
        const isActive = activeCategory === cat.name;
        const color = cat.color || defaultColors[index % defaultColors.length];
        
        return (
          <motion.div
            key={`data-${cat.name}`}
            className="absolute bg-white px-3 py-2 rounded-lg shadow-md border text-center"
            style={{
              left: centerPoint.x,
              top: centerPoint.y,
              transform: 'translate(-50%, -50%)',
              borderColor: color,
              zIndex: 15
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: isActive ? 1 : 0,
              scale: isActive ? 1 : 0.8,
              y: isActive ? 0 : 10 
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="font-bold text-sm">{cat.name}</div>
            <div className="text-xs">{cat.count} {cat.icon}</div>
          </motion.div>
        );
      })}

      {/* Category buttons */}
      {categories.map((cat, index) => {
        const { x, y } = buttonPositions[index];
        const left = x - buttonSize / 2;
        const top = y - buttonSize / 2;
        const isActive = activeCategory === cat.name;
        const color = cat.color || defaultColors[index % defaultColors.length];

        return (
          <React.Fragment key={cat.name}>
            <motion.button
              onClick={() => onCategoryChange(cat.name)}
              onMouseEnter={() => setHoveredCategory(cat.name)}
              onMouseLeave={() => setHoveredCategory(null)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: isActive ? 1.1 : 1,
                boxShadow: isActive 
                  ? `0 0 15px ${color}` 
                  : "0 0 0 rgba(0,0,0,0)"
              }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 15
              }}
              style={{
                position: 'absolute',
                left,
                top,
                width: buttonSize,
                height: buttonSize,
                backgroundColor: isActive ? color : 'white',
                borderColor: color,
                zIndex: 20
              }}
              className={`flex flex-col  items-center justify-center rounded-full border-2 transition-colors
                ${isActive ? 'text-white' : 'text-gray-800 hover:bg-gray-100'}`}
            >
              {cat.icon && (
                <span className="text-lg mb-1">{cat.icon}</span>
              )}
              <span className="font-bold text-sm">{cat.name}</span>
              <motion.span 
                className="text-xs"
                initial={{ scale: 1 }}
                animate={{ scale: isActive ? 1.2 : 1 }}
                transition={{ duration: 0.3 }}
              >
                {cat.count}
              </motion.span>
            </motion.button>

            {/* Tooltip */}
            <AnimatePresence>
              {hoveredCategory === cat.name && !isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bg-gray-800 text-white px-3 py-1 rounded-md text-xs z-30"
                  style={{
                    left: x,
                    top: y - 40,
                    transform: 'translateX(-50%)'
                  }}
                >
                  {cat.count} {cat.name} items
                  <div className="absolute w-2 h-2 bg-gray-800 rotate-45 bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"></div>
                </motion.div>
              )}
            </AnimatePresence>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default CategorySidebarHalfCircular;