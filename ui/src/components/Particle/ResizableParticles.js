import React, { useState } from 'react';
import Particles from '@tsparticles/react';
import { loadFull } from 'tsparticles';

const ResizableParticles = () => {
  const [dimensions, setDimensions] = useState({ 
    width: 300, 
    height: 300 
  });

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesConfig = {
    particles: {
      number: { value: 80 },
      color: { value: '#3498db' },
      shape: { type: 'circle' },
      opacity: { value: 0.5 },
      size: { value: 3 },
      move: { 
        enable: true, 
        speed: 2 
      }
    },
    background: {
      color: '#f0f0f0'
    }
  };

  const handleResize = (e) => {
    setDimensions({
      width: e.target.value,
      height: e.target.value
    });
  };

  return (
    <div className="w-full max-w-md">
      <div 
        style={{ 
          width: dimensions.width, 
          height: dimensions.height 
        }} 
        className="relative"
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            ...particlesConfig,
            width: dimensions.width,
            height: dimensions.height
          }}
        />
      </div>
      <input 
        type="range" 
        min="100" 
        max="500" 
        value={dimensions.width}
        onChange={handleResize}
        className="w-full mt-4"
      />
    </div>
  );
};

export default ResizableParticles;