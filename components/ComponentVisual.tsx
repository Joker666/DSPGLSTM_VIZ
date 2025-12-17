import React from 'react';
import { ModelComponentType } from '../types';

interface ComponentVisualProps {
  type: ModelComponentType;
}

const ComponentVisual: React.FC<ComponentVisualProps> = ({ type }) => {
  switch (type) {
    case ModelComponentType.INPUT:
      return (
        <div className="h-32 w-full bg-slate-900/50 rounded-lg border border-slate-700 p-4 flex items-center justify-around relative overflow-hidden">
          {/* Schematic: Data sources merging */}
          <div className="flex flex-col gap-2">
             <div className="w-16 h-4 bg-slate-700 rounded animate-pulse"></div>
             <div className="w-16 h-4 bg-slate-700 rounded animate-pulse delay-75"></div>
             <div className="w-16 h-4 bg-slate-700 rounded animate-pulse delay-150"></div>
          </div>
          <div className="text-slate-500">→</div>
          <div className="w-24 h-20 border-2 border-dashed border-cyan-500/50 rounded bg-cyan-900/10 flex flex-col items-center justify-center gap-1">
             <div className="w-16 h-2 bg-cyan-500/50 rounded"></div>
             <div className="w-16 h-2 bg-emerald-500/50 rounded"></div>
             <div className="w-16 h-2 bg-stone-500/50 rounded"></div>
             <span className="text-[9px] text-cyan-300 mt-1">Grouped</span>
          </div>
        </div>
      );
    case ModelComponentType.TRIPLE_STREAM:
      return (
        <div className="h-32 w-full bg-slate-900/50 rounded-lg border border-slate-700 p-4 flex flex-col justify-center gap-3">
           {/* Schematic: 3 Parallel lines processing data */}
           <div className="flex items-center gap-3">
              <span className="text-[10px] text-emerald-400 w-12 text-right">Shallow</span>
              <div className="flex-1 h-2 bg-emerald-900 rounded-full overflow-hidden">
                 <div className="h-full w-1/3 bg-emerald-500 rounded-full animate-[shimmer_2s_infinite]"></div>
              </div>
           </div>
           <div className="flex items-center gap-3">
              <span className="text-[10px] text-emerald-600 w-12 text-right">Mid</span>
              <div className="flex-1 h-2 bg-emerald-900 rounded-full overflow-hidden">
                  <div className="h-full w-1/2 bg-emerald-700 rounded-full animate-[shimmer_2s_infinite_200ms]"></div>
              </div>
           </div>
           <div className="flex items-center gap-3">
              <span className="text-[10px] text-stone-500 w-12 text-right">Deep</span>
              <div className="flex-1 h-2 bg-stone-900 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-stone-600 rounded-full animate-[shimmer_2s_infinite_400ms]"></div>
              </div>
           </div>
        </div>
      );
    case ModelComponentType.ATTENTION:
      return (
        <div className="h-32 w-full bg-slate-900/50 rounded-lg border border-slate-700 p-4 flex items-center justify-center relative">
            {/* Schematic: Nodes connecting */}
            <svg className="w-full h-full" viewBox="0 0 200 100">
               <defs>
                 <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" style={{stopColor:'rgba(16, 185, 129, 0.2)', stopOpacity:1}} />
                   <stop offset="100%" style={{stopColor:'rgba(245, 158, 11, 0.5)', stopOpacity:1}} />
                 </linearGradient>
               </defs>
               <circle cx="40" cy="20" r="5" fill="#10b981" />
               <circle cx="40" cy="50" r="5" fill="#059669" />
               <circle cx="40" cy="80" r="5" fill="#57534e" />

               <circle cx="160" cy="50" r="15" fill="none" stroke="#f59e0b" strokeWidth="2" />
               <text x="160" y="54" textAnchor="middle" fontSize="10" fill="#f59e0b" className="font-mono">CTX</text>

               <path d="M 45 20 C 100 20, 100 50, 145 50" stroke="url(#grad1)" strokeWidth="2" fill="none" className="animate-[dash_10s_linear_infinite]" strokeDasharray="5" />
               <path d="M 45 50 C 100 50, 100 50, 145 50" stroke="url(#grad1)" strokeWidth="2" fill="none" className="animate-[dash_10s_linear_infinite]" strokeDasharray="5" />
               <path d="M 45 80 C 100 80, 100 50, 145 50" stroke="url(#grad1)" strokeWidth="2" fill="none" className="animate-[dash_10s_linear_infinite]" strokeDasharray="5" />
            </svg>
        </div>
      );
    case ModelComponentType.DECODER:
       return (
        <div className="h-32 w-full bg-slate-900/50 rounded-lg border border-slate-700 p-4 flex items-center justify-center gap-2">
            <div className="flex flex-col gap-1 items-center">
               <div className="w-8 h-8 rounded-full border-2 border-amber-500 flex items-center justify-center text-[8px] text-amber-500">CTX</div>
               <div className="h-8 w-0.5 bg-slate-600"></div>
            </div>
            <div className="text-2xl text-slate-600">+</div>
            <div className="flex flex-col gap-1 items-center">
               <div className="w-8 h-8 rounded bg-blue-900/50 border border-blue-500 flex items-center justify-center text-[8px] text-blue-300">RAIN</div>
               <div className="h-8 w-0.5 bg-slate-600"></div>
            </div>
            <div className="text-slate-600">→</div>
            <div className="w-20 h-16 bg-gradient-to-r from-cyan-900 to-slate-900 border border-cyan-500 rounded flex items-center justify-center text-xs text-cyan-400 font-bold">
               Forecast
            </div>
        </div>
       );
    case ModelComponentType.PHYSICS:
       return (
         <div className="h-32 w-full bg-slate-900/50 rounded-lg border border-slate-700 p-4 flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
               <div className="absolute top-2 text-[10px] text-slate-400 font-mono">ΔSM ≈ P - ET</div>
               <div className="w-32 h-1 bg-slate-600 rounded"></div>
               <div className="absolute w-4 h-4 bg-rose-500 rounded-full top-1/2 left-1/2 -mt-2 -ml-2 animate-bounce"></div>
               <div className="absolute bottom-4 text-xs text-rose-400 font-bold">Penalty if Unbalanced</div>
            </div>
         </div>
       );
    case ModelComponentType.OUTPUT:
        return (
          <div className="h-32 w-full bg-slate-900/50 rounded-lg border border-slate-700 p-4 flex items-end justify-center gap-4">
              <div className="flex flex-col items-center gap-1">
                 <div className="text-[9px] text-rose-400">High Loss</div>
                 <div className="w-8 bg-rose-900/50 border border-rose-500 h-20 relative">
                    <div className="absolute bottom-0 w-full bg-rose-500/50 h-3/4 animate-pulse"></div>
                 </div>
                 <div className="text-[10px] text-slate-400">5cm</div>
              </div>
              <div className="flex flex-col items-center gap-1">
                 <div className="text-[9px] text-slate-500">Low Loss</div>
                 <div className="w-8 bg-slate-800 border border-slate-600 h-20 relative">
                     <div className="absolute bottom-0 w-full bg-slate-500/50 h-1/4"></div>
                 </div>
                 <div className="text-[10px] text-slate-400">100cm</div>
              </div>
          </div>
        );
    default:
      return null;
  }
};

export default ComponentVisual;