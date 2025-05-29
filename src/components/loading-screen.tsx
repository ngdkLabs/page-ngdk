import React from 'react';
import { Progress } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useTheme } from "@heroui/use-theme";

export const LoadingScreen: React.FC = () => {
  const { theme } = useTheme();
  const [progress, setProgress] = React.useState(0);
  
  React.useEffect(() => {
    // Simulate loading progress
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
        <div className="flex items-center justify-center mb-4">
          <Icon 
            icon="lucide:zap" 
            className="text-primary text-6xl" 
          />
        </div>
        <h1 className="text-4xl font-bold tracking-tight">
          <span className="text-primary">NGDK</span><span className="text-foreground">!</span>
        </h1>
      </motion.div>
      
      {/* Progress bar */}
      <div className="w-64 mb-4">
        <Progress 
          aria-label="Loading..." 
          value={progress} 
          color="primary"
          className="h-1"
          showValueLabel={false}
        />
      </div>
      
      {/* Large percentage in bottom right */}
      <motion.div 
        className="fixed bottom-8 right-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-[120px] font-bold leading-none tracking-tighter text-primary/20">
          {Math.round(progress)}%
        </h1>
      </motion.div>
    </div>
  );
};