'use client';
import { motion } from 'framer-motion';

// Të dhëna të simuluara për monitorimin e çmimeve (Crowdsourced Index)
const PRICE_FEED = [
  { id: 1, item: 'Organic Whole Milk (1 Gallon)', category: 'Dairy', avgPrice: '$4.20', change: '-1.2%', status: 'Stabilized', nodes: '42 reports' },
  { id: 2, item: 'Fresh Bread (Loaf)', category: 'Bakery', avgPrice: '$2.85', change: '+3.4%', status: 'Rising', nodes: '18 reports' },
  { id: 3, item: 'Large Grade A Eggs (12pk)', category: 'Poultry', avgPrice: '$3.50', change: '0.0%', status: 'Constant', nodes: '56 reports' },
];

export default function PriceView() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-8"
    >
      {/* Seksioni 1: Market Intelligence KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#0F172A] border border-white/5 p-4 rounded-xl flex flex-col justify-between">
          <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">Essential Price Index</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-xl font-bold text-white">104.2 pts</span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" /> -0.8%
            </span>
          </div>
        </div>

        <div className="bg-[#0F172A] border border-white/5 p-4 rounded-xl flex flex-col justify-between">
          <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">Crowdsourced Inputs</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-xl font-bold text-white">12,480 logs</span>
            <span className="text-[10px] font-mono text-blue-400">Live Stream</span>
          </div>
        </div>

        <div className="bg-[#0F172A] border border-white/5 p-4 rounded-xl flex flex-col justify-between">
          <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">Highest Discrepancy</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-xl font-bold text-amber-500">Fresh Produce</span>
            <span className="text-[10px] font-mono text-amber-500/70 bg-amber-500/10 px-1.5 py-0.5 rounded">Volatility</span>
          </div>
        </div>

        <div className="bg-[#0F172A] border border-white/5 p-4 rounded-xl flex flex-col justify-between">
          <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">Validated Retailers</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-xl font-bold text-white">84 Nodes</span>
            <span className="text-[10px] font-mono text-white/30">Verified</span>
          </div>
        </div>
      </div>

      {/* Seksioni 2: Grid-i Kryesor (Lista e Çmimeve vs Matrica e Rajoneve) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Kolona e Majtë: Live Commodity Stream (8 nga 12 kolona) */}
        <div className="lg:col-span-8 bg-[#0F172A] border border-white/5 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xs font-semibold text-white uppercase tracking-wider">Commodity Price Index</h3>
              <p className="text-[11px] text-white/40 font-mono">Real-time aggregate grocery prices mapped by regional submissions</p>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-500/5 px-2 py-1 rounded border border-emerald-500/10">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
              Feed Syncing
            </div>
          </div>

          {/* Lista e Produkteve të Tregut */}
          <div className="space-y-3">
            {PRICE_FEED.map((feed) => (
              <div 
                key={feed.id} 
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-[#0B0F19] border border-white/[0.03] rounded-lg hover:border-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  {/* Badge e Kategorisë */}
                  <div className="w-10 h-10 rounded-lg bg-[#1E293B] border border-white/5 flex items-center justify-center font-mono text-xs text-blue-400 group-hover:border-blue-500 transition-colors">
                    {feed.category[0]}
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-white/90 group-hover:text-white transition-colors">{feed.item}</h4>
                    <p className="text-[10px] font-mono text-white/40 mt-0.5">{feed.nodes}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 mt-3 sm:mt-0 w-full sm:w-auto justify-between sm:justify-end">
                  <div className="text-right sm:block flex justify-between w-full sm:w-auto items-center gap-4">
                    <span className="text-xs font-mono font-medium text-white block">{feed.avgPrice}</span>
                    <span className={`text-[10px] font-mono block ${
                      feed.change.includes('-') ? 'text-emerald-400' : feed.change.includes('+') ? 'text-amber-500' : 'text-white/40'
                    }`}>
                      {feed.change}
                    </span>
                  </div>
                  <span className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded ${
                    feed.status === 'Stabilized' || feed.status === 'Constant'
                      ? 'bg-emerald-500/10 text-emerald-400'
                      : 'bg-amber-500/10 text-amber-400'
                  }`}>
                    {feed.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kolona e Djathtë: Discrepancy Matrix (4 nga 12 kolona) */}
        <div className="lg:col-span-4 bg-[#0F172A] border border-white/5 rounded-xl p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">Regional Variance</h3>
            <p className="text-[11px] text-white/40 font-mono mb-6">Price offset relative to index baseline</p>

            {/* Rajoni 1 */}
            <div className="mb-5">
              <div className="flex justify-between text-xs text-white/70 mb-1.5 font-mono">
                <span>Manhattan Retail Nodes</span>
                <span className="text-amber-400">+4.8%</span>
              </div>
              <div className="h-1.5 w-full bg-[#0B0F19] rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>

            {/* Rajoni 2 */}
            <div className="mb-5">
              <div className="flex justify-between text-xs text-white/70 mb-1.5 font-mono">
                <span>Queens Retail Nodes</span>
                <span className="text-emerald-400">-1.5%</span>
              </div>
              <div className="h-1.5 w-full bg-[#0B0F19] rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>

            {/* Rajoni 3 */}
            <div>
              <div className="flex justify-between text-xs text-white/70 mb-1.5 font-mono">
                <span>Brooklyn Retail Nodes</span>
                <span className="text-blue-400">+0.2%</span>
              </div>
              <div className="h-1.5 w-full bg-[#0B0F19] rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-4 mt-6">
            <p className="text-[11px] text-white/40 font-light leading-relaxed">
              * Data vectors are cross-checked using decentral network validation. False entries are dropped instantly.
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  );
}