import React from 'react';
import { ModelComponentType } from '../types';
import { CloudRain, Sun, Wind, ArrowRight, Activity, Layers, ArrowDown } from 'lucide-react';

interface ComponentVisualProps {
  type: ModelComponentType;
}

const ComponentVisual: React.FC<ComponentVisualProps> = ({ type }) => {
  switch (type) {
    case ModelComponentType.INPUT:
      return (
        <div className="h-40 w-full bg-slate-100 dark:bg-slate-900/50 rounded-lg border border-slate-300 dark:border-slate-700 p-4 flex flex-col justify-center relative overflow-hidden transition-colors">
          <div className="flex justify-between items-center px-4">
            
            {/* Drivers Group */}
            <div className="flex flex-col items-center gap-2 z-10">
               <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Drivers</div>
               <div className="flex gap-2">
                  <div className="w-8 h-8 rounded bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-500 border border-blue-200 dark:border-blue-800">
                    <CloudRain size={14} />
                  </div>
                  <div className="w-8 h-8 rounded bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-500 border border-amber-200 dark:border-amber-800">
                    <Sun size={14} />
                  </div>
                  <div className="w-8 h-8 rounded bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500 border border-slate-300 dark:border-slate-700">
                    <Wind size={14} />
                  </div>
               </div>
            </div>

            <div className="text-slate-300 dark:text-slate-600">
               <ArrowRight size={20} />
            </div>

            {/* Soil Depths Group */}
            <div className="flex flex-col items-center gap-2 z-10">
               <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Soil Depths</div>
               <div className="flex flex-col gap-1 w-24">
                  <div className="h-5 w-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-300 dark:border-emerald-700 rounded flex items-center justify-between px-2">
                    <span className="text-[8px] text-emerald-700 dark:text-emerald-400 font-mono">Shallow</span>
                    <span className="text-[7px] text-emerald-600/50 dark:text-emerald-500/50">0-5cm</span>
                  </div>
                  <div className="h-5 w-full bg-teal-100 dark:bg-teal-900/30 border border-teal-300 dark:border-teal-700 rounded flex items-center justify-between px-2">
                     <span className="text-[8px] text-teal-700 dark:text-teal-400 font-mono">Mid</span>
                     <span className="text-[7px] text-teal-600/50 dark:text-teal-500/50">20-50cm</span>
                  </div>
                  <div className="h-5 w-full bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-600 rounded flex items-center justify-between px-2">
                     <span className="text-[8px] text-stone-600 dark:text-stone-400 font-mono">Deep</span>
                     <span className="text-[7px] text-stone-500/50 dark:text-stone-500/50">100cm+</span>
                  </div>
               </div>
            </div>
          </div>
          
          <div className="mt-4 text-center">
             <div className="inline-block px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-900/20 text-[10px] text-cyan-600 dark:text-cyan-400 font-mono border border-cyan-200 dark:border-cyan-800/50">
               Z-Score Normalized & Time-Windowed
             </div>
          </div>
        </div>
      );
    case ModelComponentType.TRIPLE_STREAM:
      return (
        <div className="h-32 w-full bg-slate-100 dark:bg-slate-900/50 rounded-lg border border-slate-300 dark:border-slate-700 p-4 flex flex-col justify-center gap-3 transition-colors">
           {/* Schematic: 3 Parallel lines processing data */}
           <div className="flex items-center gap-3">
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 w-12 text-right">Shallow</span>
              <div className="flex-1 h-2 bg-emerald-200 dark:bg-emerald-900 rounded-full overflow-hidden">
                 <div className="h-full w-1/3 bg-emerald-500 rounded-full animate-[shimmer_2s_infinite]"></div>
              </div>
           </div>
           <div className="flex items-center gap-3">
              <span className="text-[10px] text-emerald-700 dark:text-emerald-600 w-12 text-right">Mid</span>
              <div className="flex-1 h-2 bg-emerald-200 dark:bg-emerald-900 rounded-full overflow-hidden">
                  <div className="h-full w-1/2 bg-emerald-600 dark:bg-emerald-700 rounded-full animate-[shimmer_2s_infinite_200ms]"></div>
              </div>
           </div>
           <div className="flex items-center gap-3">
              <span className="text-[10px] text-stone-600 dark:text-stone-500 w-12 text-right">Deep</span>
              <div className="flex-1 h-2 bg-stone-300 dark:bg-stone-900 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-stone-500 dark:bg-stone-600 rounded-full animate-[shimmer_2s_infinite_400ms]"></div>
              </div>
           </div>
        </div>
      );
    case ModelComponentType.ATTENTION:
      return (
        <div className="h-48 w-full bg-slate-100 dark:bg-slate-900/50 rounded-lg border border-slate-300 dark:border-slate-700 flex items-center justify-center relative transition-colors overflow-hidden">
           
           <div className="relative w-[300px] h-full">
               
               {/* SVG Layer */}
               <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                  <defs>
                     <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.6" />
                     </linearGradient>
                     <marker id="arrowhead" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                        <polygon points="0 0, 7 3.5, 0 7" fill="#64748b" />
                     </marker>
                  </defs>
                  
                  {/* Paths from dots (x=44) to circle left (x=130) */}
                  
                  {/* Shallow (y=44) to Center (y=80) */}
                  <path d="M 44 44 C 80 44, 80 80, 130 80" fill="none" stroke="url(#flowGrad)" strokeWidth="1.5" />
                  
                  {/* Mid (y=80) to Center (y=80) */}
                  <path d="M 44 80 L 130 80" fill="none" stroke="url(#flowGrad)" strokeWidth="1.5" />
                  
                  {/* Deep (y=116) to Center (y=80) */}
                  <path d="M 44 116 C 80 116, 80 80, 130 80" fill="none" stroke="url(#flowGrad)" strokeWidth="1.5" />
                  
                  {/* Output from circle right (x=170) to context box (x=210) */}
                  <line x1="170" y1="80" x2="210" y2="80" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrowhead)" />
               </svg>

               {/* Elements Layer - Positioned to match SVG coordinates */}
               {/* Dot Centers are at X=44. Y=44, 80, 116 */}

               {/* Shallow Node */}
               <div className="absolute top-[34px] left-[34px] flex items-center gap-2 z-10">
                  <div className="w-5 h-5 rounded-full bg-white dark:bg-slate-800 border-2 border-emerald-500 flex items-center justify-center shadow-sm">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  </div>
                  <span className="text-[9px] text-slate-500 dark:text-slate-400 font-mono font-bold">Shallow</span>
               </div>
               
               {/* Mid Node */}
               <div className="absolute top-[70px] left-[34px] flex items-center gap-2 z-10">
                  <div className="w-5 h-5 rounded-full bg-white dark:bg-slate-800 border-2 border-teal-500 flex items-center justify-center shadow-sm">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  </div>
                  <span className="text-[9px] text-slate-500 dark:text-slate-400 font-mono font-bold">Mid</span>
               </div>

               {/* Deep Node */}
               <div className="absolute top-[106px] left-[34px] flex items-center gap-2 z-10">
                  <div className="w-5 h-5 rounded-full bg-white dark:bg-slate-800 border-2 border-stone-500 flex items-center justify-center shadow-sm">
                      <div className="w-2 h-2 bg-stone-500 rounded-full"></div>
                  </div>
                  <span className="text-[9px] text-slate-500 dark:text-slate-400 font-mono font-bold">Deep</span>
               </div>

               {/* Attention Center Node (Center X=150, Y=80) */}
               {/* Circle width 40px (w-10). Radius 20. Left edge 130. Right edge 170. */}
               <div className="absolute top-[78px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-20">
                  <div className="w-10 h-10 rounded-full border-2 border-amber-400 bg-amber-50 dark:bg-amber-900/40 flex items-center justify-center shadow-md animate-pulse">
                      <Activity size={18} className="text-amber-500" />
                  </div>
                  <div className="absolute -bottom-4 text-[8px] text-amber-600 dark:text-amber-400 font-bold uppercase tracking-widest bg-white/90 dark:bg-slate-900/90 px-1.5 py-0.5 rounded border border-amber-200 dark:border-amber-900/50 shadow-sm">
                      Attention
                  </div>
               </div>

               {/* Output Node (X start ~210) */}
               <div className="absolute top-[78px] right-[10px] transform -translate-y-1/2 z-20">
                  <div className="flex flex-col items-center justify-center bg-white dark:bg-slate-800 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-600 shadow-md">
                        <span className="text-[8px] text-slate-400 font-bold uppercase mb-1 tracking-wider">Context</span>
                        <div className="flex gap-1">
                            <div className="w-1.5 h-4 bg-emerald-500/80 rounded-sm"></div>
                            <div className="w-1.5 h-4 bg-teal-500/80 rounded-sm"></div>
                            <div className="w-1.5 h-4 bg-stone-500/80 rounded-sm"></div>
                        </div>
                  </div>
               </div>

           </div>
        </div>
      );
    case ModelComponentType.DECODER:
       return (
        <div className="h-32 w-full bg-slate-100 dark:bg-slate-900/50 rounded-lg border border-slate-300 dark:border-slate-700 p-4 flex items-center justify-center gap-2 transition-colors">
            <div className="flex flex-col gap-1 items-center">
               <div className="w-8 h-8 rounded-full border-2 border-amber-500 flex items-center justify-center text-[8px] text-amber-500 font-bold">CTX</div>
               <div className="h-8 w-0.5 bg-slate-400 dark:bg-slate-600"></div>
            </div>
            <div className="text-2xl text-slate-400 dark:text-slate-600">+</div>
            <div className="flex flex-col gap-1 items-center">
               <div className="w-8 h-8 rounded bg-blue-100 dark:bg-blue-900/50 border border-blue-500 flex items-center justify-center text-[8px] text-blue-600 dark:text-blue-300 font-bold">RAIN</div>
               <div className="h-8 w-0.5 bg-slate-400 dark:bg-slate-600"></div>
            </div>
            <div className="text-slate-400 dark:text-slate-600">→</div>
            <div className="w-20 h-16 bg-gradient-to-r from-cyan-100 to-slate-100 dark:from-cyan-900 dark:to-slate-900 border border-cyan-500 rounded flex items-center justify-center text-xs text-cyan-600 dark:text-cyan-400 font-bold shadow-sm">
               Forecast
            </div>
        </div>
       );
    case ModelComponentType.PHYSICS:
       return (
         <div className="h-40 w-full bg-slate-100 dark:bg-slate-900/50 rounded-lg border border-slate-300 dark:border-slate-700 p-4 flex flex-col items-center justify-center transition-colors">
            
            <div className="flex items-center justify-around w-full relative z-10">
                {/* Inputs */}
                <div className="flex flex-col gap-2">
                    <div className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800 text-[9px] text-blue-700 dark:text-blue-300 text-center font-mono">
                        P - ET
                    </div>
                    <div className="px-2 py-1 bg-emerald-50 dark:bg-emerald-900/20 rounded border border-emerald-200 dark:border-emerald-800 text-[9px] text-emerald-700 dark:text-emerald-300 text-center font-mono">
                        ΔSM
                    </div>
                </div>

                {/* Operator */}
                <div className="text-slate-300 dark:text-slate-600">
                    <ArrowRight size={16} />
                </div>

                {/* Residual Box */}
                <div className="flex flex-col items-center">
                    <div className="w-16 h-12 bg-rose-50 dark:bg-rose-900/20 rounded border border-rose-200 dark:border-rose-800 flex items-center justify-center relative">
                        <span className="text-xs font-bold text-rose-500 dark:text-rose-400 font-mono">Diff</span>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-rose-500 rounded-full flex items-center justify-center text-[8px] text-white">2</div>
                    </div>
                    <span className="text-[8px] text-slate-400 mt-1 uppercase tracking-wide">Squared</span>
                </div>

                {/* Operator */}
                <div className="text-slate-300 dark:text-slate-600">
                    <ArrowRight size={16} />
                </div>

                {/* Loss Term */}
                 <div className="flex flex-col items-center">
                    <div className="px-3 py-2 bg-slate-800 dark:bg-slate-950 rounded border border-slate-600 dark:border-slate-800 text-white font-mono text-xs shadow-md">
                        + LOSS
                    </div>
                    <span className="text-[8px] text-slate-400 mt-1 uppercase tracking-wide">Regularization</span>
                </div>
            </div>
            
            <div className="mt-4 w-full h-px bg-slate-200 dark:bg-slate-700"></div>
            <div className="flex justify-between w-full mt-2">
                <span className="text-[8px] text-slate-400">Step 1: Water Balance</span>
                <span className="text-[8px] text-slate-400">Step 2: Penalize Violation</span>
            </div>
         </div>
       );
    case ModelComponentType.OUTPUT:
        return (
          <div className="h-32 w-full bg-slate-100 dark:bg-slate-900/50 rounded-lg border border-slate-300 dark:border-slate-700 p-4 pt-6 flex items-end justify-center gap-4 transition-colors">
              <div className="flex flex-col items-center gap-1">
                 <div className="text-[9px] text-rose-500 dark:text-rose-400 font-medium">High Loss</div>
                 <div className="w-8 bg-rose-100 dark:bg-rose-900/50 border border-rose-500 h-16 relative">
                    <div className="absolute bottom-0 w-full bg-rose-500/50 h-3/4 animate-pulse"></div>
                 </div>
                 <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">Shallow</div>
              </div>
              <div className="flex flex-col items-center gap-1">
                 <div className="text-[9px] text-slate-500">Low Loss</div>
                 <div className="w-8 bg-slate-200 dark:bg-slate-800 border border-slate-400 dark:border-slate-600 h-16 relative">
                     <div className="absolute bottom-0 w-full bg-slate-400/50 dark:bg-slate-500/50 h-1/4"></div>
                 </div>
                 <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">Deep</div>
              </div>
          </div>
        );
    default:
      return null;
  }
};

export default ComponentVisual;