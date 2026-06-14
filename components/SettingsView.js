'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function SettingsView() {
  // Logjika për toggles (çelësat on/off)
  const [notifications, setNotifications] = useState(true);
  const [autoSave, setAutoSave] = useState(false);
  const [operatorName, setOperatorName] = useState('Ylli');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="max-w-2xl bg-[#0F172A] border border-white/5 rounded-xl p-8 shadow-sm space-y-8"
    >
      <div>
        <h3 className="text-sm font-semibold text-white uppercase tracking-wide">System Settings</h3>
        <p className="text-xs text-white/40 font-mono mt-0.5">Configure local node preferences</p>
      </div>

      {/* Seksioni 1: Profili i Operatorit */}
      <div className="space-y-4 border-t border-white/5 pt-6">
        <label className="text-[10px] font-mono uppercase tracking-widest text-white/40 block">
          Operator Identity
        </label>
        <input 
          type="text" 
          value={operatorName}
          onChange={(e) => setOperatorName(e.target.value)}
          className="w-full bg-[#0B0F19] border border-white/10 rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-blue-600 transition-colors font-medium tracking-wide"
        />
      </div>

      {/* Seksioni 2: Konfigurimet e Rrjetit (Toggles) */}
      <div className="space-y-6 border-t border-white/5 pt-6">
        <label className="text-[10px] font-mono uppercase tracking-widest text-white/40 block">
          Automated Triggers
        </label>

        {/* Toggle 1: Live Notifications */}
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-xs font-medium text-white">Live Stream Notifications</h4>
            <p className="text-[11px] text-white/40 font-light mt-0.5">Receive ping signals on incoming vehicle data.</p>
          </div>
          <button 
            onClick={() => setNotifications(!notifications)}
            className={`w-10 h-6 flex items-center rounded-full p-1 transition-colors duration-300 cursor-pointer ${
              notifications ? 'bg-blue-600' : 'bg-white/10'
            }`}
          >
            <motion.div 
              layout
              className="bg-white w-4 h-4 rounded-full shadow-md"
              animate={{ x: notifications ? 16 : 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          </button>
        </div>

        {/* Toggle 2: Auto-Save Logs */}
        <div className="flex items-center justify-between border-t border-white/5 pt-4">
          <div>
            <h4 className="text-xs font-medium text-white">Auto-Cache System Logs</h4>
            <p className="text-[11px] text-white/40 font-light mt-0.5">Locally store filtered analytical history every 5 minutes.</p>
          </div>
          <button 
            onClick={() => setAutoSave(!autoSave)}
            className={`w-10 h-6 flex items-center rounded-full p-1 transition-colors duration-300 cursor-pointer ${
              autoSave ? 'bg-blue-600' : 'bg-white/10'
            }`}
          >
            <motion.div 
              layout
              className="bg-white w-4 h-4 rounded-full shadow-md"
              animate={{ x: autoSave ? 16 : 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          </button>
        </div>
      </div>

      {/* Butoni i Ruajtjes */}
      <div className="border-t border-white/5 pt-6 flex justify-end">
        <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg text-xs font-medium tracking-wide hover:bg-blue-700 transition-colors shadow-md cursor-pointer">
          Save Configuration
        </button>
      </div>

    </motion.div>
  );
}