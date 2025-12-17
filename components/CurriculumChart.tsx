import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Mock data simulating the thesis results
const data = Array.from({ length: 50 }, (_, i) => ({
  time: i,
  Actual: 20 + Math.sin(i * 0.2) * 5 + Math.random() * 2,
  Forecast_1d: 20 + Math.sin(i * 0.2) * 5 + Math.random() * 4 - 2, // Noisier
  Forecast_7d: 20 + Math.sin(i * 0.2) * 5 + Math.random() * 1.5 - 0.5, // Smoother, better trained
}));

const CurriculumChart: React.FC = () => {
  return (
    <div className="w-full h-[400px] bg-slate-900/50 p-4 rounded-xl border border-slate-700">
      <h4 className="text-center text-slate-300 mb-4 font-light">Forecast Performance (Simulated Result)</h4>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="time" stroke="#94a3b8" label={{ value: 'Hours', position: 'insideBottom', offset: -5 }} />
          <YAxis stroke="#94a3b8" label={{ value: 'Moisture %', angle: -90, position: 'insideLeft' }} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1e293b', borderColor: '#475569', color: '#f1f5f9' }}
          />
          <Legend />
          <Line type="monotone" dataKey="Actual" stroke="#10b981" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="Forecast_1d" stroke="#64748b" strokeWidth={1} strokeDasharray="5 5" dot={false} name="Baseline (1d)" />
          <Line type="monotone" dataKey="Forecast_7d" stroke="#0ea5e9" strokeWidth={2} dot={false} name="Final Model (7d)" />
        </LineChart>
      </ResponsiveContainer>
      <div className="text-center mt-2 text-xs text-slate-500">
        * Visualization of model improvement after curriculum training stages
      </div>
    </div>
  );
};

export default CurriculumChart;