import React from 'react';
import { Progress } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useTheme } from "@heroui/use-theme";

export const LoadingScreen: React.FC = () => {
  const { theme } = useTheme();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`fixed inset-0 flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-background' : 'bg-background'}`}>
      {/* Logo in the center */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center mb-8"
      >
        <motion.img
          src={theme === 'dark' ? "/src/img/ngdk.png" : "/src/img/ngdkl.svg"}
          alt="NGDK Logo"
          className="w-40 h-40 sm:w-64 sm:h-64" // Responsive size
          initial={{ rotate: -20, scale: 0.8, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 10, duration: 0.8 }}
        />
      </motion.div>

      {/* Progress bar */}
      <div className="fixed left-0 right-0 bottom-0 px-4 pb-4 sm:px-8 sm:pb-8">
        <div className="relative w-full h-2 rounded overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(90deg,#6366f1 0%, #06b6d4 100%)",
              width: `${progress}%`,
              transition: "width 0.2s",
              height: "100%",
            }}
          />
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 opacity-30" />
        </div>
      </div>

      {/* Large percentage in bottom right */}
      <motion.div
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 flex items-end"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-[48px] sm:text-[120px] font-bold leading-none tracking-tighter bg-[#1F7D53] text-white px-4 py-1 sm:px-8 sm:py-2 flex items-baseline rounded-lg">
          <span className="text-white">{Math.round(progress)}</span>
        </h1>
        <span className="text-white text-[40px] sm:text-[100px] ml-1 sm:ml-2 pb-2 sm:pb-4 font-bold">%</span>
      </motion.div>
    </div>
  );
};
