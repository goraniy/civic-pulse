'use client';
import { motion } from 'framer-motion';

const METRICS_DATA = [
  { id: 1, title: 'Active Parking Zones', value: '1,420 / 1,500', rate: '+4.2%', desc: 'Occupancy capacity high', color: 'border-t-blue-500' },
  { id: 2, title: 'Avg Price Index', value: '$4.12', rate: '-0.8%', desc: 'Consumer essentials stabilized', color: 'border-t-emerald-500' },
  { id: 3, title: 'System Node Uptime', value: '99.98%', rate: 'Optimal', desc: 'All local servers active', color: 'border-t-indigo-500' },
];

export default function Metrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {METRICS_DATA.map((metric, index) => (
        <motion.div
          key={metric.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
          className={`bg-[#0F172A] border border-white/5 border-t-2 ${metric.color} rounded-xl p-6 shadow-sm`}
        >
          <div className="flex justify-between items-start mb-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-white/40">
              {metric.title}
            </span>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
              metric.rate.includes('+') 
                ? 'bg-blue-500/10 text-blue-400' 
                : metric.rate.includes('-') 
                ? 'bg-emerald-500/10 text-emerald-400' 
                : 'bg-indigo-500/10 text-indigo-400'
            }`}>
              {metric.rate}
            </span>
          </div>

          <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
            {metric.value}
          </h3>
          <p className="text-xs text-white/50 font-light">
            {metric.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
}