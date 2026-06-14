'use client';
import { motion } from 'framer-motion';

const MENU_ITEMS = [
  { id: 'overview', label: 'Overview', icon: '📊' },
  { id: 'parking', label: 'Pay-by-Plate', icon: '🚗' },
  { id: 'prices', label: 'Price Tracker', icon: '🛒' },
  { id: 'settings', label: 'Settings', icon: '⚙️' }, // E rikthejmë këtu!
];

export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <aside className="w-64 bg-[#0B0F19] text-[#F3F4F6] h-screen fixed top-0 left-0 border-r border-white/5 p-6 flex flex-col justify-between z-30">
      <div>
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-sm text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]">
            CP
          </div>
          <div>
            <h1 className="text-sm font-semibold tracking-wide uppercase">CivicPulse</h1>
            <span className="text-[10px] text-white/40 font-mono">v1.0 // Smart City</span>
          </div>
        </div>

        <nav className="space-y-1">
          {MENU_ITEMS.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              whileHover={{ x: 4, backgroundColor: 'rgba(255,255,255,0.03)' }}
              transition={{ duration: 0.2 }}
              className={`w-full flex items-center gap-4 px-4 py-3 text-xs font-medium tracking-wide rounded-lg transition-colors cursor-pointer ${
                activeTab === item.id 
                  ? 'bg-blue-600/10 text-blue-500 border-l-2 border-blue-600 rounded-l-none font-semibold' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <span className="text-sm opacity-80">{item.icon}</span>
              {item.label}
            </motion.button>
          ))}
        </nav>
      </div>

      <div className="border-t border-white/5 pt-4 flex items-center gap-3 px-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-xs font-bold text-white">
          OP
        </div>
        <div>
          <h4 className="text-xs font-medium tracking-wide">Operator Panel</h4>
          <p className="text-[9px] font-mono text-white/40">Node: NY_2026</p>
        </div>
      </div>
    </aside>
  );
}