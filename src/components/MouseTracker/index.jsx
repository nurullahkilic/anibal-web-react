import React, { useRef, useEffect } from "react";
import { Outer, Canvas } from "./styles";

const MouseTracker = () => {
  const canvasInput = useRef(null);
  const canvasOutput = useRef(null);

  const points = [];
  let isPointsAdded = false;

  const updateCanvasDimentions = () => {
    canvasInput.current.width = window.innerWidth;
    canvasInput.current.height = window.innerHeight;

    canvasOutput.current.width = window.innerWidth;
    canvasOutput.current.height = window.innerHeight;
  };

  const calculateMidPoint = (p1, p2) => ({
    x: p1.x + (p2.x - p1.x) / 2,
    y: p1.y + (p2.y - p1.y) / 2,
  });

  const drawCanvas = () => {
    if (!canvasInput.current) {
      return;
    }

    const contextInput = canvasInput.current.getContext("2d");
    const contextOutput = canvasOutput.current.getContext("2d");

    const gradient = contextOutput.createLinearGradient(
      3000.0,
      1060.0,
      0.0,
      1940.0
    );
    gradient.addColorStop(0.028, "rgba(7, 212, 205, 1.000)");
    gradient.addColorStop(0.337, "rgba(245, 87, 208, 1.000)");
    gradient.addColorStop(0.611, "rgba(116, 146, 255, 1.000)");
    gradient.addColorStop(0.785, "rgba(7, 212, 205, 1.000)");
    gradient.addColorStop(1.0, "rgba(255, 38, 240, 1.000)");

    contextInput.clearRect(0, 0, window.innerWidth, window.innerHeight);
    contextInput.beginPath();
    contextInput.strokeStyle = gradient;
    contextInput.lineWidth = 100;
    contextInput.lineJoin = contextInput.lineCap = "round";

    contextInput.clearRect(0, 0, window.innerWidth, window.innerHeight);

    let p1 = points[0];
    let p2 = points[1];

    contextInput.moveTo(p1.x, p1.y);

    for (let i = 1, len = points.length; i < len; i++) {
      // we pick the point between pi+1 & pi+2 as the
      // end point and p1 as our control point
      const midPoint = calculateMidPoint(p1, p2);
      contextInput.quadraticCurveTo(p1.x, p1.y, midPoint.x, midPoint.y);
      p1 = points[i];
      p2 = points[i + 1];
    }
    // Draw last line as a straight line while
    // we wait for the next point to be able to calculate
    // the bezier control point
    // contextInput.lineTo(p1.x, p1.y)
    contextInput.stroke();
    contextOutput.clearRect(0, 0, window.innerWidth, window.innerHeight);
    contextOutput.globalCompositeOperation = "destination-in";
    // contextOutput.drawImage(background, 0, 0)
    contextOutput.globalCompositeOperation = "source-over";

    if (isPointsAdded === true) {
      startAnimate();
    }
  };

  const startAnimate = () => {
    let modToggle = 0;
    if (modToggle++ % 4 === 0) {
      requestAnimationFrame(() => {
        drawCanvas();
      });
    }
  };

  const addPoints = (e) => {
    if (points.length > 2 && !isPointsAdded) {
      isPointsAdded = true;
      startAnimate();
    }
    points.push({ x: e.clientX, y: e.clientY });
    if (points.length > 20) {
      points.shift();
    }
  };

  useEffect(() => {
    updateCanvasDimentions();
    window.addEventListener("mousemove", addPoints);
    window.addEventListener("resize", updateCanvasDimentions);

    return function cleanup() {
      window.removeEventListener("mousemove", addPoints);
      window.removeEventListener("resize", updateCanvasDimentions);
    };
  }, [addPoints]);

  return (
    <Outer>
      <Canvas ref={canvasInput} className="input" />
      <Canvas ref={canvasOutput} className="output" />
    </Outer>
  );
};

export default MouseTracker;
