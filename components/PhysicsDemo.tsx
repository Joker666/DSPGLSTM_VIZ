import React from 'react';
import { Icon } from './Icon';

const PhysicsDemo: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <h3 className="text-2xl font-light text-rose-600 dark:text-rose-300">Physics-Informed Loss</h3>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          Standard deep learning models can predict physically impossible values. 
          Our <span className="text-rose-500 dark:text-rose-400 font-mono">PhysicsRegularizer</span> layer enforces the hydrological water balance equation during training.
        </p>
        
        <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg border border-slate-300 dark:border-slate-700 font-mono text-sm text-emerald-600 dark:text-green-400 overflow-x-auto shadow-inner">
          <p className="text-slate-500 mb-2"># Pseudo-code implementation</p>
          <p>ΔSM = (SM_t - SM_t-1) * depth_mm</p>
          <p>Balance = P_mm - ET_mm</p>
          <p>Residual = ΔSM - Balance</p>
          <p className="mt-2 text-rose-600 dark:text-rose-400">Loss += λ * MeanSquare(Residual)</p>
        </div>

        <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
            <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                Penalizes unphysical moisture spikes without rain
            </li>
            <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                Accounts for frozen ground logic (Saskatchewan context)
            </li>
        </ul>
      </div>

      <div className="relative h-96 bg-gradient-to-b from-sky-100/50 to-stone-100/50 dark:from-sky-900/20 dark:to-stone-900/20 rounded-xl border border-slate-300 dark:border-slate-700 p-6 flex items-center justify-center">
        {/* Visual Diagram of Water Balance */}
        <div className="relative w-full max-w-md">
            
            {/* Atmosphere */}
            <div className="absolute left-10 text-center animate-bounce duration-[2000ms]">
                <Icon name="CloudRain" className="text-blue-500 dark:text-blue-400 mx-auto" size={32} />
                <span className="text-xs text-blue-600 dark:text-blue-300 font-bold">Precip (P)</span>
                <div className="h-8 w-0.5 bg-blue-400/50 mx-auto mt-1"></div>
            </div>

            <div className="absolute right-10 text-center animate-pulse">
                <Icon name="Sun" className="text-yellow-500 dark:text-yellow-400 mx-auto" size={32} />
                <span className="text-xs text-yellow-600 dark:text-yellow-300 font-bold">ET</span>
                 <div className="h-8 w-0.5 bg-yellow-400/50 mx-auto mt-1"></div>
            </div>

            {/* Soil Box */}
            <div className="mt-20 border-t-4 border-emerald-600/50 bg-stone-200 dark:bg-stone-800/80 p-8 rounded-b-lg relative">
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-emerald-700 dark:text-emerald-400 font-bold">
                    Δ Soil Moisture
                </div>
                <div className="flex justify-between items-end h-20 px-4 pb-2 border-b border-stone-400 dark:border-stone-600">
                    <div className="text-center">
                        <span className="text-xs text-stone-500 dark:text-stone-400">t-1</span>
                        <div className="h-10 w-8 bg-blue-500/60 dark:bg-blue-600/60 rounded-t"></div>
                    </div>
                    <Icon name="ArrowRight" className="text-stone-400 dark:text-stone-500 mb-4" />
                    <div className="text-center">
                        <span className="text-xs text-stone-500 dark:text-stone-400">t</span>
                        <div className="h-14 w-8 bg-blue-600/80 rounded-t border-t-2 border-white"></div>
                    </div>
                </div>
            </div>
            
            <div className="absolute bottom-2 right-4 text-xs text-rose-500 dark:text-rose-400 font-mono">
               Error if ΔSM ≠ P - ET
            </div>
        </div>
      </div>
    </div>
  );
};

export default PhysicsDemo;