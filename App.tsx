import React, { useState, useEffect } from 'react';
import ArchitectureDiagram from './components/ArchitectureDiagram';
import PhysicsDemo from './components/PhysicsDemo';
import TrainingOverview from './components/TrainingOverview';
import ComponentVisual from './components/ComponentVisual'; 
import { COMPONENT_DETAILS } from './constants';
import { ModelComponentType } from './types';
import { Icon } from './components/Icon';
import { Moon, Sun } from 'lucide-react';

function App() {
  const [selectedComponent, setSelectedComponent] = useState<ModelComponentType | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle Dark Mode Class on HTML element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const renderDetailPanel = () => {
    if (!selectedComponent) return (
      <div className="h-full flex items-center justify-center text-slate-400 italic p-10 border-2 border-dashed border-slate-300 dark:border-slate-800 rounded-xl bg-slate-100/50 dark:bg-slate-900/20">
        <div className="text-center">
            <Icon name="Activity" size={48} className="mx-auto mb-4 text-slate-400 dark:text-slate-700" />
            <p>Select a component in the diagram to view technical specification.</p>
        </div>
      </div>
    );

    const detail = COMPONENT_DETAILS[selectedComponent];

    return (
      <div className="glass-panel rounded-xl h-full animate-in fade-in slide-in-from-right-4 duration-500 flex flex-col overflow-hidden shadow-2xl">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-700/50 bg-white/50 dark:bg-slate-900/50">
           <div className="flex items-center gap-3 mb-2 text-cyan-600 dark:text-cyan-400">
             <Icon name={detail.iconName} size={24} />
             <h2 className="text-xl font-bold text-slate-800 dark:text-white">{detail.title}</h2>
           </div>
           <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">{detail.id} MODULE</div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
            
            {/* Dynamic Visualization */}
            <div className="w-full">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Schematic View</h4>
                <ComponentVisual type={selectedComponent} />
            </div>

            {/* Main Description */}
            <div>
               <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Overview</h4>
               <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                 {detail.description}
               </p>
            </div>

            {/* Extended Analysis (formerly Deep Dive) */}
            <div className="bg-cyan-50 dark:bg-cyan-950/20 p-4 rounded-lg border border-cyan-100 dark:border-cyan-900/30">
               <h4 className="text-xs font-bold text-cyan-600 dark:text-cyan-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Icon name="Brain" size={14} /> Analysis
               </h4>
               <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed text-justify">
                 {detail.extendedDescription}
               </p>
            </div>
            
            {/* Tech Specs */}
            <div className="bg-slate-50 dark:bg-slate-950/50 rounded-lg p-4 border border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Implementation Specs</h4>
              <ul className="space-y-2">
                {detail.technicalDetails.map((tech, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-slate-600 dark:text-slate-400 font-mono">
                    <span className="mt-1 w-1.5 h-1.5 bg-cyan-500 rounded-full flex-shrink-0"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen transition-colors duration-300 selection:bg-cyan-500/30">
      
      {/* Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
             <h1 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Thesis Defense <span className="text-cyan-600 dark:text-cyan-500"> // Model Architecture</span></h1>
             <p className="text-xs text-slate-500 font-mono">BiLSTM-Curr-Triple-Stream-Physics</p>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="hidden md:block text-xs font-mono text-slate-500 border border-slate-200 dark:border-slate-700 px-3 py-1 rounded-full">
               Run #4 | Horizon: 7d
             </div>
             <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-600 dark:text-slate-400"
                aria-label="Toggle Theme"
             >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
             </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-24">
        
        {/* Section 1: Introduction */}
        <section className="text-center space-y-6 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Depth Aware Physics Guided LSTM for Soil Moisture Forecasting
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            A novel approach combining <span className="font-semibold text-slate-900 dark:text-white">Curriculum Learning</span>, 
            <span className="font-semibold text-slate-900 dark:text-white"> Triple-Stream Cross-Attention</span>, and 
            <span className="font-semibold text-slate-900 dark:text-white"> Physics-Based Regularization</span> to robustly predict soil moisture across multiple depths.
          </p>
        </section>

        {/* Section 2: Interactive Pipeline */}
        <section id="architecture">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-slate-300 dark:bg-slate-800 flex-1"></div>
            <h3 className="text-xl font-mono text-cyan-600 dark:text-cyan-500 uppercase tracking-widest">Model Pipeline</h3>
            <div className="h-px bg-slate-300 dark:bg-slate-800 flex-1"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative items-stretch">
            <div className="lg:col-span-2 glass-panel rounded-xl border border-slate-200 dark:border-slate-800 relative">
               <div className="absolute top-4 left-4 text-xs font-mono text-slate-400 dark:text-slate-500">INTERACTIVE DIAGRAM</div>
               <ArchitectureDiagram 
                  onSelect={setSelectedComponent} 
                  selected={selectedComponent}
               />
            </div>
            
            <div className="lg:col-span-1 relative min-h-[500px] lg:min-h-0">
               <div className="lg:absolute lg:inset-0 h-full">
                  {renderDetailPanel()}
               </div>
            </div>
          </div>
        </section>

        {/* Section 3: Physics Regularizer */}
        <section id="physics">
            <div className="flex items-center gap-4 mb-8">
                <div className="h-px bg-slate-300 dark:bg-slate-800 flex-1"></div>
                <h3 className="text-xl font-mono text-rose-600 dark:text-rose-500 uppercase tracking-widest">Physics Regularizer</h3>
                <div className="h-px bg-slate-300 dark:bg-slate-800 flex-1"></div>
            </div>
            <PhysicsDemo />
        </section>

        {/* Section 4: Training Overview (New) */}
        <section id="training">
            <div className="flex items-center gap-4 mb-8">
                <div className="h-px bg-slate-300 dark:bg-slate-800 flex-1"></div>
                <h3 className="text-xl font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">Training Protocol</h3>
                <div className="h-px bg-slate-300 dark:bg-slate-800 flex-1"></div>
            </div>
            <TrainingOverview />
        </section>
        
        {/* Footer */}
        <footer className="border-t border-slate-200 dark:border-slate-800 py-12 text-center text-slate-500 dark:text-slate-600 text-sm">
           <p>Thesis Defense Presentation</p>
           <p className="font-mono mt-2">Model Tag: {`bilstm_curr_triple_best.keras`}</p>
        </footer>

      </main>

    </div>
  );
}

export default App;