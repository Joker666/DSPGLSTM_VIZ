import React, { useState } from 'react';
import { ModelComponentType } from '../types';
import { COMPONENT_DETAILS } from '../constants';
import { Icon } from './Icon';

interface ArchitectureDiagramProps {
  onSelect: (type: ModelComponentType) => void;
  selected: ModelComponentType | null;
}

const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ onSelect, selected }) => {
  const getBoxClass = (type: ModelComponentType) => {
    const isSelected = selected === type;
    return `
      cursor-pointer transition-all duration-300 border-2 rounded-lg p-4 flex flex-col items-center justify-center text-center relative
      ${isSelected 
        ? 'border-cyan-400 bg-cyan-900/30 shadow-[0_0_15px_rgba(34,211,238,0.3)] transform scale-105' 
        : 'border-slate-700 bg-slate-800/50 hover:border-slate-500 hover:bg-slate-800'}
    `;
  };

  return (
    <div className="w-full relative py-10 px-4 select-none">
      
      {/* Visual Flow Lines (SVG Overlay) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ overflow: 'visible' }}>
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#64748b" />
          </marker>
        </defs>
        {/* Lines would be dynamically calculated in a rigorous production app, 
            but for this presentation layout, we assume grid placement. 
            Using simple CSS borders for the grid layout is safer for responsiveness.
        */}
      </svg>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">
        
        {/* Column 1: Input */}
        <div className="md:col-span-2 flex flex-col justify-center space-y-4">
          <div 
            className={getBoxClass(ModelComponentType.INPUT)}
            onClick={() => onSelect(ModelComponentType.INPUT)}
          >
            <Icon name="Layers" className="mb-2 text-emerald-400" />
            <h3 className="font-bold text-sm">Aggregated Features</h3>
            <span className="text-xs text-slate-400 mt-1">SM & ST Groups</span>
          </div>
        </div>

        {/* Arrow */}
        <div className="hidden md:flex md:col-span-1 items-center justify-center text-slate-600">
           <Icon name="ArrowRight" />
        </div>

        {/* Column 2: Triple Stream Encoder */}
        <div className="md:col-span-3 flex flex-col space-y-4 justify-center">
            <div className="border border-dashed border-slate-600 rounded-xl p-2 bg-slate-900/50">
                <span className="text-xs text-slate-500 uppercase font-bold block mb-2 text-center">Triple Stream BiLSTMs</span>
                <div 
                    className={`${getBoxClass(ModelComponentType.TRIPLE_STREAM)} mb-2`}
                    onClick={() => onSelect(ModelComponentType.TRIPLE_STREAM)}
                >
                    <div className="w-full h-2 bg-emerald-500 rounded-full mb-1 opacity-80"></div>
                    <span className="text-xs">Shallow Stream</span>
                </div>
                <div 
                    className={`${getBoxClass(ModelComponentType.TRIPLE_STREAM)} mb-2`}
                    onClick={() => onSelect(ModelComponentType.TRIPLE_STREAM)}
                >
                    <div className="w-full h-2 bg-emerald-700 rounded-full mb-1 opacity-80"></div>
                    <span className="text-xs">Mid Stream</span>
                </div>
                <div 
                    className={getBoxClass(ModelComponentType.TRIPLE_STREAM)}
                    onClick={() => onSelect(ModelComponentType.TRIPLE_STREAM)}
                >
                    <div className="w-full h-2 bg-stone-700 rounded-full mb-1 opacity-80"></div>
                    <span className="text-xs">Deep Stream</span>
                </div>
            </div>
        </div>

        {/* Arrow */}
        <div className="hidden md:flex md:col-span-1 items-center justify-center text-slate-600">
           <Icon name="ArrowRight" />
        </div>

        {/* Column 3: Attention & Fusion */}
        <div className="md:col-span-2 flex flex-col justify-center">
           <div 
            className={`${getBoxClass(ModelComponentType.ATTENTION)} h-full max-h-[200px]`}
            onClick={() => onSelect(ModelComponentType.ATTENTION)}
          >
            <Icon name="Brain" className="mb-2 text-amber-400" />
            <h3 className="font-bold text-sm">Cross-Attention</h3>
            <span className="text-xs text-slate-400 mt-1">Multi-Head</span>
          </div>
        </div>

        {/* Arrow */}
        <div className="hidden md:flex md:col-span-1 items-center justify-center text-slate-600">
           <Icon name="ArrowRight" />
        </div>

        {/* Column 4: Decoder & Output */}
        <div className="md:col-span-2 flex flex-col justify-between space-y-4">
             <div 
                className={getBoxClass(ModelComponentType.DECODER)}
                onClick={() => onSelect(ModelComponentType.DECODER)}
            >
                <Icon name="Activity" className="mb-2 text-cyan-400" />
                <h3 className="font-bold text-sm">Decoder</h3>
                <span className="text-xs text-slate-400 mt-1">+ Future Drivers</span>
            </div>

            <div 
                className={`${getBoxClass(ModelComponentType.PHYSICS)} border-rose-900/50 bg-rose-900/10 hover:bg-rose-900/20`}
                onClick={() => onSelect(ModelComponentType.PHYSICS)}
            >
                <Icon name="Scale" className="mb-2 text-rose-400" />
                <h3 className="font-bold text-sm text-rose-200">Physics Regularizer</h3>
            </div>

             <div 
                className={getBoxClass(ModelComponentType.OUTPUT)}
                onClick={() => onSelect(ModelComponentType.OUTPUT)}
            >
                <Icon name="Zap" className="mb-2 text-yellow-400" />
                <h3 className="font-bold text-sm">Weighted Output</h3>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ArchitectureDiagram;