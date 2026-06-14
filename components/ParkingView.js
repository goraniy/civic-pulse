'use client';
import { motion } from 'framer-motion';

// Të dhëna të simuluara për skenimet live të targave (OCR Stream)
const LIVE_SCANS = [
  { id: 1, plate: 'NY-K89-LXZ', zone: 'Manhattan Sector A', time: 'Just Now', status: 'Verified', type: 'Permit Holder' },
  { id: 2, plate: 'NJ-772-VWB', zone: 'Manhattan Sector A', time: '1 min ago', status: 'Paid', type: 'Visitor' },
  { id: 3, plate: 'CT-401-MQP', zone: 'Brooklyn Sector B', time: '3 mins ago', status: 'Processing', type: 'Guest Pass' },
];

export default function ParkingView() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-8"
    >
      {/* Seksioni 1: Micro-KPI Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#0F172A] border border-white/5 p-4 rounded-xl flex flex-col justify-between">
          <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">OCR Camera Core</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-xl font-bold text-white">Node 01</span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" /> Online
            </span>
          </div>
        </div>

        <div className="bg-[#0F172A] border border-white/5 p-4 rounded-xl flex flex-col justify-between">
          <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">Hourly Scan Rate</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-xl font-bold text-white">342 plates</span>
            <span className="text-[10px] font-mono text-blue-400">+12%</span>
          </div>
        </div>

        <div className="bg-[#0F172A] border border-white/5 p-4 rounded-xl flex flex-col justify-between">
          <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">Active Gate Revenue</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-xl font-bold text-white">$1,425.50</span>
            <span className="text-[10px] font-mono text-white/30">USD</span>
          </div>
        </div>

        <div className="bg-[#0F172A] border border-white/5 p-4 rounded-xl flex flex-col justify-between">
          <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">Violations Flagged</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-xl font-bold text-amber-500">2 Nodes</span>
            <span className="text-[10px] font-mono text-amber-500/70 bg-amber-500/10 px-1.5 py-0.5 rounded">Pending</span>
          </div>
        </div>
      </div>

      {/* Seksioni 2: Grid-i Kryesor (Kamerat Live vs Statistikat e Dendësisë) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Kolona e Majtë: Real-Time OCR Plate Stream (8 nga 12 kolona) */}
        <div className="lg:col-span-8 bg-[#0F172A] border border-white/5 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xs font-semibold text-white uppercase tracking-wider">Live Skenimi i Targave (OCR Stream)</h3>
              <p className="text-[11px] text-white/40 font-mono">Automated registration tracking via metropolitan nodes</p>
            </div>
            <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          </div>

          {/* Lista e Skenimeve në Kohë Reale */}
          <div className="space-y-3">
            {LIVE_SCANS.map((scan) => (
              <div 
                key={scan.id} 
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-[#0B0F19] border border-white/[0.03] rounded-lg hover:border-white/10 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  {/* Simulimi i një dritareje mini-kame (UI modern) */}
                  <div className="bg-[#1E293B] font-mono text-[11px] font-bold tracking-widest text-white px-3 py-1.5 rounded border border-white/10 shadow-inner group-hover:border-blue-500 transition-colors">
                    {scan.plate}
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-white/80">{scan.zone}</h4>
                    <p className="text-[10px] font-mono text-white/40 mt-0.5">{scan.type}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 mt-3 sm:mt-0 w-full sm:w-auto justify-between sm:justify-end">
                  <span className="text-[11px] font-mono text-white/30">{scan.time}</span>
                  <span className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded ${
                    scan.status === 'Verified' || scan.status === 'Paid'
                      ? 'bg-emerald-500/10 text-emerald-400'
                      : 'bg-blue-500/10 text-blue-400 animate-pulse'
                  }`}>
                    {scan.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kolona e Djathtë: Grafikët e Dendësisë Urbane (4 nga 12 kolona) */}
        <div className="lg:col-span-4 bg-[#0F172A] border border-white/5 rounded-xl p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">Zone Occupancy</h3>
            <p className="text-[11px] text-white/40 font-mono mb-6">Density index distribution</p>

            {/* Sektori 1 */}
            <div className="mb-4">
              <div className="flex justify-between text-xs text-white/70 mb-1.5 font-mono">
                <span>Manhattan Sector A</span>
                <span>92%</span>
              </div>
              <div className="h-1.5 w-full bg-[#0B0F19] rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>

            {/* Sektori 2 */}
            <div>
              <div className="flex justify-between text-xs text-white/70 mb-1.5 font-mono">
                <span>Brooklyn Sector B</span>
                <span>64%</span>
              </div>
              <div className="h-1.5 w-full bg-[#0B0F19] rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 rounded-full" style={{ width: '64%' }}></div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-4 mt-6">
            <p className="text-[11px] text-white/40 font-light leading-relaxed">
              * The smart validation grid automatically flashes orange warning signals if terminal capacity limits surpass 95%.
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  );
}