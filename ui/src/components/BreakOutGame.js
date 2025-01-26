import React, { useState, useEffect, useRef } from 'react';
import { Card, CardHeader, CardContent } from '@mui/material';

const BreakoutGame = () => {
  // Game state
  const [ballPosition, setBallPosition] = useState({ x: 200, y: 250 });
  const [paddlePosition, setPaddlePosition] = useState(175);
  const [gameStarted, setGameStarted] = useState(false);
  const [bricks, setBricks] = useState([
    { x: 25, y: 30, width: 80, height: 20, visible: true },
    { x: 125, y: 30, width: 80, height: 20, visible: true },
    { x: 225, y: 30, width: 80, height: 20, visible: true },
    { x: 25, y: 60, width: 80, height: 20, visible: true },
    { x: 125, y: 60, width: 80, height: 20, visible: true },
    { x: 225, y: 60, width: 80, height: 20, visible: true },
  ]);
  const [ballDirection, setBallDirection] = useState({ dx: 3, dy: -3 });
  const [gameOver, setGameOver] = useState(false);

  // References
  const canvasRef = useRef(null);
  const gameLoopRef = useRef(null);

  // Game constants
  const CANVAS_WIDTH = 320;
  const CANVAS_HEIGHT = 300;
  const PADDLE_WIDTH = 70;
  const PADDLE_HEIGHT = 10;
  const BALL_RADIUS = 10;

  // Handle mouse movement for paddle
  const handleMouseMove = (e) => {
    if (canvasRef.current && gameStarted) {
      const rect = canvasRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      setPaddlePosition(Math.max(0, Math.min(mouseX - PADDLE_WIDTH / 2, CANVAS_WIDTH - PADDLE_WIDTH)));
    }
  };

  // Reset game
  const resetGame = () => {
    setBallPosition({ x: 200, y: 250 });
    setBallDirection({ dx: 3, dy: -3 });
    setPaddlePosition(150);
    setBricks([
      { x: 25, y: 30, width: 80, height: 20, visible: true },
      { x: 125, y: 30, width: 80, height: 20, visible: true },
      { x: 225, y: 30, width: 80, height: 20, visible: true },
      { x: 25, y: 60, width: 80, height: 20, visible: true },
      { x: 125, y: 60, width: 80, height: 20, visible: true },
      { x: 225, y: 60, width: 80, height: 20, visible: true },
    ]);
    setGameOver(false);
    setGameStarted(false);
  };

  // Start game
  const startGame = () => {
    setGameStarted(true);
  };

  // Game loop
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const gameLoop = () => {
      // Clear canvas
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      // Draw paddle
      ctx.fillStyle = '#2E8B57'; // Dark sea green
      ctx.fillRect(paddlePosition, CANVAS_HEIGHT - PADDLE_HEIGHT, PADDLE_WIDTH, PADDLE_HEIGHT);

      // Draw ball
      ctx.beginPath();
      ctx.arc(ballPosition.x, ballPosition.y, BALL_RADIUS, 0, Math.PI * 2);
      ctx.fillStyle = '#00FF00'; // Bright green
      ctx.fill();
      ctx.closePath();

      // Draw bricks
      bricks.filter(brick => brick.visible).forEach(brick => {
        ctx.fillStyle = '#008000'; // Dark green
        ctx.fillRect(brick.x, brick.y, brick.width, brick.height);
      });

      if (!gameStarted || gameOver) return;

      // Ball movement
      const newBallX = ballPosition.x + ballDirection.dx;
      const newBallY = ballPosition.y + ballDirection.dy;

      // Wall collision
      if (newBallX - BALL_RADIUS < 0 || newBallX + BALL_RADIUS > CANVAS_WIDTH) {
        setBallDirection(prev => ({ ...prev, dx: -prev.dx }));
      }
      if (newBallY - BALL_RADIUS < 0) {
        setBallDirection(prev => ({ ...prev, dy: -prev.dy }));
      }

      // Paddle collision
      if (
        newBallY + BALL_RADIUS > CANVAS_HEIGHT - PADDLE_HEIGHT &&
        newBallX > paddlePosition &&
        newBallX < paddlePosition + PADDLE_WIDTH
      ) {
        setBallDirection(prev => ({ ...prev, dy: -Math.abs(prev.dy) }));
      }

      // Game over check
      if (newBallY + BALL_RADIUS > CANVAS_HEIGHT) {
        setGameOver(true);
      }

      // Brick collision
      const collidingBrick = bricks.find(
        brick =>
          brick.visible &&
          newBallX > brick.x &&
          newBallX < brick.x + brick.width &&
          newBallY > brick.y &&
          newBallY < brick.y + brick.height
      );

      if (collidingBrick) {
        // Hide the brick
        setBricks(prev =>
          prev.map(brick =>
            brick === collidingBrick ? { ...brick, visible: false } : brick
          )
        );

        // Reverse ball direction
        setBallDirection(prev => ({
          dx: prev.dx,
          dy: -prev.dy
        }));
      }

      // Move ball
      setBallPosition(prev => ({
        x: newBallX,
        y: newBallY
      }));

      // Check if all bricks are destroyed
      if (bricks.every(brick => !brick.visible)) {
        setGameOver(true);
      }

      // Continue game loop
      gameLoopRef.current = requestAnimationFrame(gameLoop);
    };

    // Start game loop
    gameLoopRef.current = requestAnimationFrame(gameLoop);

    // Add mouse move listener
    canvas.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [ballPosition, paddlePosition, bricks, gameStarted, gameOver]);

  return (
    <Card sx={{ maxWidth: 330, margin: 'auto', backgroundColor: 'transparent' }}>
      <CardContent
        sx={{
          backgroundColor: 'transparent', // Ensure transparent background here as well
          padding: 0, // Remove extra padding
        }}
      >
        <canvas
          ref={canvasRef}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          style={{
            border: '2px solid #008000',
            backgroundColor: 'transparent', // Explicitly set transparent background for canvas
          }}
        />
        {(!gameStarted || gameOver) && (
          <div
            style={{
            //   position: 'absolute',
            //   top: '50%',
            //   left: '50%',
            //   transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: '#00FF00',
            }}
          >
            <h2>
              {gameOver
                ? bricks.every(brick => !brick.visible)
                  ? 'Congratulations! You Won!'
                  : 'Game Over!'
                : 'Press to Start'}
            </h2>
            <button
              onClick={gameOver ? resetGame : startGame}
              style={{
                backgroundColor: '#2E8B57',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                cursor: 'pointer',
                marginTop: '10px',
              }}
            >
              {gameOver ? 'Restart' : 'Start Game'}
            </button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BreakoutGame;
