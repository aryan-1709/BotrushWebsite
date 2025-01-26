import React, { useEffect, useRef } from 'react';

const MatrixFalling = ({ width, height }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (!canvas) return;

    canvas.height = height;
    canvas.width = width;

    const chinese = "  0  1  ";
    const chineseChars = chinese.split("");
    const fontSize = 20;
    const columns = Math.max(1, Math.floor(canvas.width / fontSize));
    
    // Safely create drops array
    const drops = new Array(columns).fill(1);

    function draw() {
      // Translucent black background for trail effect with low opacity
      ctx.fillStyle = "rgba(30, 38, 42, 0.3)"; // Slight transparency for the trail effect
      ctx.fillRect(0, 0, canvas.width, canvas.height); // Clear canvas with transparency
      
      ctx.fillStyle = "#0F0"; // Green text
      ctx.font = `${fontSize}px arial`;

      for (let i = 0; i < drops.length; i++) {
        const text = chineseChars[Math.floor(Math.random() * chineseChars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Reset drop to top with randomness
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        drops[i]+=0.5;
      }
    }

    const animationFrame = setInterval(draw, 40);

    return () => clearInterval(animationFrame);
  }, [height, width]); // Add dependencies to re-run effect if width or height change

  return <canvas ref={canvasRef} className="" />;
};

export default MatrixFalling;
