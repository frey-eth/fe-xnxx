"use client";
import React, { useState, useEffect } from "react";

type ProcessingBarProps = {
  duration: number;
  onComplete: () => void;
};

const ProcessingBar = ({ duration, onComplete }: ProcessingBarProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const intervalId = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = prev + 100 / (duration / 100);
        if (nextProgress >= 100) {
          clearInterval(intervalId);
          onComplete();
          return 100;
        }
        return nextProgress;
      });
    }, 100);

    return () => clearInterval(intervalId);
  }, [duration, onComplete]);

  return (
    <div className="w-full h-0.5 mt-2">
      <div
        className="h-0.5 bg-black w-full"
        style={{ width: `${progress}%`, transition: "width 0.1s linear" }}
      />
    </div>
  );
};

export default ProcessingBar;
