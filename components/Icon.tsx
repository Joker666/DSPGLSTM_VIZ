import React from 'react';
import { Layers, Zap, Scale, Brain, ArrowRight, Activity, CloudRain, Sun, Thermometer, Wind, Database, GitBranch, TrendingUp, Settings, Dna } from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className, size = 24 }) => {
  const icons: Record<string, React.ReactNode> = {
    Layers: <Layers size={size} className={className} />,
    Zap: <Zap size={size} className={className} />,
    Scale: <Scale size={size} className={className} />,
    Brain: <Brain size={size} className={className} />,
    ArrowRight: <ArrowRight size={size} className={className} />,
    Activity: <Activity size={size} className={className} />,
    CloudRain: <CloudRain size={size} className={className} />,
    Sun: <Sun size={size} className={className} />,
    Thermometer: <Thermometer size={size} className={className} />,
    Wind: <Wind size={size} className={className} />,
    Database: <Database size={size} className={className} />,
    GitBranch: <GitBranch size={size} className={className} />,
    TrendingUp: <TrendingUp size={size} className={className} />,
    Settings: <Settings size={size} className={className} />,
    Dna: <Dna size={size} className={className} />
  };

  return <>{icons[name] || <Activity size={size} className={className} />}</>;
};