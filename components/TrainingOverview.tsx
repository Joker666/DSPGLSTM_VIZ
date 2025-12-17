import React, { useState } from 'react';
import { Icon } from './Icon';

const TrainingOverview: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number | null>(null);
  const [lambda, setLambda] = useState<number>(0.5);

  const toggleStage = (idx: number) => {
    setActiveStage(activeStage === idx ? null : idx);
  };

  const stages = [
    {
      id: 1,
      horizon: "24h Horizon",
      title: "Short-Term Dynamics",
      desc: "Initial training focused on immediate soil response to precipitation.",
      details: {
        epochs: 50,
        lr: "1e-3",
        focus: "High-frequency noise & infiltration"
      },
      color: "emerald"
    },
    {
      id: 2,
      horizon: "72h Horizon",
      title: "Mid-Term Transition",
      desc: "Transfer weights. Extend window to capture drying curves.",
      details: {
        epochs: 30,
        lr: "5e-4",
        focus: "Lag effects & drainage"
      },
      color: "emerald"
    },
    {
      id: 3,
      horizon: "168h Horizon",
      title: "Long-Term Generalization",
      desc: "Final fine-tuning on full week forecast including seasonal trends.",
      details: {
        epochs: 20,
        lr: "1e-4",
        focus: "Seasonality & evapotranspiration"
      },
      color: "emerald" // keeping consistent theme
    }
  ];

  // Logic for Proportional Visualizer
  const mseWeight = 1.0;
  const physicsWeight = lambda; 
  const totalWeight = mseWeight + physicsWeight;
  
  const mseWidthPercent = (mseWeight / totalWeight) * 100;
  const physicsWidthPercent = (physicsWeight / totalWeight) * 100;

  return (
    <div className="space-y-12">
      
      {/* Top Grid: 4 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass-panel p-6 rounded-xl border-t-4 border-t-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors group">
          <div className="mb-4 bg-slate-100 dark:bg-slate-900 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
             <Icon name="Database" className="text-slate-500 dark:text-slate-400" />
          </div>
          <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">1. Data Preparation</h4>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Standardization (Z-score) and Time-Windowing. 70/15/15 split.
          </p>
        </div>
        <div className="glass-panel p-6 rounded-xl border-t-4 border-t-rose-500 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors group">
          <div className="mb-4 bg-rose-100 dark:bg-rose-900/20 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
             <Icon name="Scale" className="text-rose-500 dark:text-rose-400" />
          </div>
          <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">2. Hybrid Loss</h4>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Composite loss balancing MSE with Physics Regularization.
          </p>
        </div>
        <div className="glass-panel p-6 rounded-xl border-t-4 border-t-emerald-500 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors group">
          <div className="mb-4 bg-emerald-100 dark:bg-emerald-900/20 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
             <Icon name="GitBranch" className="text-emerald-500 dark:text-emerald-400" />
          </div>
          <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">3. Curriculum</h4>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            24h → 168h progressive difficulty schedule.
          </p>
        </div>
        <div className="glass-panel p-6 rounded-xl border-t-4 border-t-cyan-500 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors group">
           <div className="mb-4 bg-cyan-100 dark:bg-cyan-900/20 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
             <Icon name="Settings" className="text-cyan-500 dark:text-cyan-400" />
          </div>
          <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">4. Optimization</h4>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Adam optimizer with dynamic Learning Rate reduction.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Interactive Curriculum Sequence */}
        <div className="glass-panel p-8 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/40 dark:bg-slate-900/40">
           <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
              <Icon name="TrendingUp" className="text-emerald-500 dark:text-emerald-400" size={24} />
              Curriculum Learning
           </h3>
           
           <div className="relative pl-6 border-l-2 border-slate-300 dark:border-slate-700 space-y-6">
              {stages.map((stage, idx) => {
                 const isActive = activeStage === idx;
                 return (
                    <div key={idx} className="relative group">
                       <div 
                        className={`
                            absolute -left-[31px] top-4 w-6 h-6 rounded-full border-4 cursor-pointer transition-all duration-300
                            ${isActive ? 'bg-emerald-500 border-emerald-300 dark:border-emerald-300 scale-125 shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 'bg-slate-200 dark:bg-slate-900 border-slate-400 dark:border-slate-600 group-hover:border-emerald-500'}
                        `}
                        onClick={() => toggleStage(idx)}
                       ></div>
                       
                       <div 
                         className={`
                            rounded-lg border transition-all duration-300 cursor-pointer overflow-hidden
                            ${isActive ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-500/50' : 'bg-slate-100 dark:bg-slate-800/40 border-slate-300 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800/80'}
                         `}
                         onClick={() => toggleStage(idx)}
                       >
                          <div className="p-4 flex justify-between items-center">
                             <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className={`text-sm font-bold font-mono ${isActive ? 'text-emerald-600 dark:text-emerald-300' : 'text-slate-500 dark:text-slate-400'}`}>STAGE {idx + 1}</span>
                                    <span className="text-xs bg-white dark:bg-slate-950 px-2 py-0.5 rounded text-slate-500 border border-slate-300 dark:border-slate-800">{stage.horizon}</span>
                                </div>
                                <h4 className="text-slate-700 dark:text-slate-200 font-medium">{stage.title}</h4>
                             </div>
                             <Icon name={isActive ? "ChevronUp" : "ArrowRight"} className="text-slate-500" size={16} />
                          </div>

                          <div className={`
                             px-4 bg-white dark:bg-slate-950/50 border-t border-slate-200 dark:border-slate-800/50 transition-all duration-500 ease-in-out
                             ${isActive ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}
                          `}>
                             <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">{stage.desc}</p>
                             <div className="grid grid-cols-3 gap-2 text-xs font-mono text-slate-500 dark:text-slate-500">
                                <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded">
                                    <span className="block text-emerald-600 dark:text-emerald-500 mb-1">Epochs</span>
                                    {stage.details.epochs}
                                </div>
                                <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded">
                                    <span className="block text-emerald-600 dark:text-emerald-500 mb-1">L. Rate</span>
                                    {stage.details.lr}
                                </div>
                                <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded col-span-1">
                                    <span className="block text-emerald-600 dark:text-emerald-500 mb-1">Focus</span>
                                    {stage.details.focus}
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 );
              })}
           </div>
        </div>

        {/* Composite Loss Function & Visualizer */}
        <div className="flex flex-col gap-6">
            <div className="glass-panel p-8 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/40 dark:bg-slate-900/40 flex-1">
                 <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                    <Icon name="Scale" className="text-rose-500 dark:text-rose-400" size={24} />
                    Composite Loss Function
                 </h3>

                 <div className="bg-slate-100 dark:bg-slate-950 p-6 rounded-xl border border-slate-300 dark:border-slate-800 flex justify-center items-center mb-6 shadow-inner">
                    <code className="text-xl md:text-2xl font-serif text-slate-700 dark:text-slate-300">
                        L = <span className="text-cyan-600 dark:text-cyan-400">MSE</span> + <span className="text-yellow-600 dark:text-yellow-400">λ</span><span className="text-rose-500 dark:text-rose-400">L<sub>physics</sub></span>
                    </code>
                 </div>

                 {/* Visualizer */}
                 <div className="mb-6 p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                    <div className="flex justify-between text-xs text-slate-500 mb-2 font-mono">
                        <span>Relative Gradient Influence</span>
                        <span>λ = {lambda.toFixed(2)}</span>
                    </div>
                    
                    {/* Proportional Ratio Bar */}
                    <div className="h-12 w-full flex rounded-lg overflow-hidden relative border border-slate-300 dark:border-slate-700">
                         {/* MSE Part */}
                         <div 
                           className="bg-cyan-600 dark:bg-cyan-900/80 hover:bg-cyan-500 dark:hover:bg-cyan-800/80 transition-all duration-300 flex items-center justify-center border-r border-slate-300 dark:border-slate-900 relative group cursor-help"
                           style={{ width: `${mseWidthPercent}%` }}
                         >
                            <span className="text-xs font-bold text-cyan-100 dark:text-cyan-200 z-10">Data (MSE)</span>
                            <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                         </div>

                         {/* Physics Part */}
                         <div 
                            className="bg-rose-600 dark:bg-rose-900/80 hover:bg-rose-500 dark:hover:bg-rose-800/80 transition-all duration-300 flex items-center justify-center relative group cursor-help" 
                            style={{ width: `${physicsWidthPercent}%` }}
                         >
                             {/* Only show text if width is sufficient */}
                            {physicsWidthPercent > 10 && (
                                <span className="text-xs font-bold text-rose-100 dark:text-rose-200 z-10 whitespace-nowrap">Physics (λ)</span>
                            )}
                            <div className="absolute inset-0 bg-rose-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                         </div>
                    </div>

                    <div className="mt-4">
                        <label className="text-xs text-yellow-600 dark:text-yellow-400 mb-1 block flex justify-between">
                           <span>Physics Coefficient (λ)</span>
                           <span className="font-mono text-slate-700 dark:text-white">{lambda}</span>
                        </label>
                        <input 
                            type="range" 
                            min="0" 
                            max="2" 
                            step="0.1"
                            value={lambda}
                            onChange={(e) => setLambda(parseFloat(e.target.value))}
                            className="w-full h-2 bg-slate-300 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-yellow-500 dark:accent-yellow-400"
                        />
                         <div className="flex justify-between text-[10px] text-slate-500 dark:text-slate-600 mt-1">
                            <span>0.0 (Pure Data)</span>
                            <span>2.0 (Strict Physics)</span>
                        </div>
                    </div>
                 </div>

                 <div className="bg-slate-100 dark:bg-slate-950/50 p-4 rounded border border-slate-300 dark:border-slate-800/50">
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        <strong className="text-slate-800 dark:text-white">Interpretation:</strong> The bar above represents the 
                        <span className="italic"> proportionate focus</span> of the optimizer. 
                        As you increase <span className="text-yellow-600 dark:text-yellow-400">λ</span>, the model is forced to prioritize 
                        physical consistency (Red) over simply fitting the training data (Blue).
                    </p>
                 </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default TrainingOverview;