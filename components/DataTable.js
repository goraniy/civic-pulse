'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const INITIAL_ROWS = [
  { id: 'TRK-902', type: 'Parking', location: 'Manhattan Zone A', status: 'Paid', fee: '$12.50', time: '14:22:10' },
  { id: 'TRK-411', type: 'Grocery', location: 'Supermarket Node 4', status: 'Updated', fee: '$4.20', time: '14:19:45' },
  { id: 'TRK-302', type: 'Parking', location: 'Brooklyn Sector 2', status: 'Overdue', fee: '$35.00', time: '14:15:02' },
  { id: 'TRK-881', type: 'Grocery', location: 'Wholesale Depot 1', status: 'Updated', fee: '$2.85', time: '14:02:11' },
  { id: 'TRK-105', type: 'Parking', location: 'Queens Blvd Pier', status: 'Paid', fee: '$8.00', time: '13:58:30' },
];

export default function DataTable() {
  const [filter, setFilter] = useState('All');

  // Logjika e filtrimit të të dhënave në kohë reale
  const filteredData = filter === 'All' 
    ? INITIAL_ROWS 
    : INITIAL_ROWS.filter(row => row.type === filter);

  return (
    <div className="bg-[#0F172A] border border-white/5 rounded-xl p-6 shadow-sm">
      {/* Koka e Tabelës dhe Karta e Filtrave */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-white uppercase">Live System Activity</h3>
          <p className="text-xs text-white/40 font-mono mt-0.5">Real-time civic data stream</p>
        </div>
        
        {/* Butonat e Filtrave */}
        <div className="flex bg-[#0B0F19] p-1 rounded-lg border border-white/5">
          {['All', 'Parking', 'Grocery'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-3 py-1.5 text-[11px] font-medium tracking-wide rounded-md transition-all ${
                filter === type 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-white/40 hover:text-white/80'
              }`}
            >
              {type === 'All' ? 'All Signals' : type}
            </button>
          ))}
        </div>
      </div>

      {/* Struktura e Tabelës Responsive */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5 text-[10px] font-mono uppercase tracking-widest text-white/40">
              <th className="pb-3 pl-4">Node ID</th>
              <th className="pb-3">Type</th>
              <th className="pb-3">Location Node</th>
              <th className="pb-3">Status</th>
              <th className="pb-3">Value/Fee</th>
              <th className="pb-3 pr-4 text-right">Timestamp</th>
            </tr>
          </thead>
          <tbody className="text-xs font-light divide-y divide-white/5">
            <AnimatePresence mode="popLayout">
              {filteredData.map((row) => (
                <motion.tr
                  key={row.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="text-white/80 hover:bg-white/[0.02] transition-colors"
                >
                  <td className="py-4 pl-4 font-mono text-blue-400 font-medium">{row.id}</td>
                  <td className="py-4">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                      row.type === 'Parking' ? 'bg-blue-500/10 text-blue-400' : 'bg-emerald-500/10 text-emerald-400'
                    }`}>
                      {row.type}
                    </span>
                  </td>
                  <td className="py-4 text-white/60">{row.location}</td>
                  <td className="py-4">
                    <span className={`flex items-center gap-2 ${
                      row.status === 'Paid' || row.status === 'Updated' ? 'text-emerald-400' : 'text-amber-400'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                        row.status === 'Paid' || row.status === 'Updated' ? 'bg-emerald-400' : 'bg-amber-400'
                      }`} />
                      {row.status}
                    </span>
                  </td>
                  <td className="py-4 font-mono font-medium text-white">{row.fee}</td>
                  <td className="py-4 pr-4 text-right font-mono text-white/40">{row.time}</td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
    </div>
  );
}