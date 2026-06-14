'use client';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Sidebar from '@/components/Sidebar';
import Metrics from '@/components/Metrics';
import DataTable from '@/components/DataTable';
import ParkingView from '@/components/ParkingView';
import PriceView from '@/components/PriceView';
import SettingsView from '@/components/SettingsView'; // 1. Ky import u shtua këtu lart

export default function Home() {
  // Inicializojmë state-in për faqen aktive (Default: overview)
  const [activeTab, setActiveTab] = useState('overview');

  // 2. Ky është funksioni renderContent ku u shtua case 'settings'
  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <>
            <Metrics />
            <DataTable />
          </>
        );
      case 'parking':
        return <ParkingView />;
      case 'prices':
        return <PriceView />;
      case 'settings': // U shtua rasti i ri për settings
        return <SettingsView />;
      default:
        return <Metrics />;
    }
  };

  // 3. Ky është funksioni getHeaderTitle ku u shtua kushti i ri për titullin
  const getHeaderTitle = () => {
    if (activeTab === 'overview') return 'System Overview';
    if (activeTab === 'parking') return 'Pay-by-Plate Management';
    if (activeTab === 'prices') return 'Consumer Price Tracker';
    if (activeTab === 'settings') return 'Node Configurations'; // U shtua titulli i ri
    return 'System Overview';
  };

  return (
    <main className="min-h-screen bg-[#0B0F19] font-sans text-white antialiased selection:bg-blue-600 selection:text-white">
      {/* Kalojmë state-in te Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="pl-64 min-h-screen flex flex-col">
        {/* Header Dinamik */}
        <header className="w-full h-20 border-b border-white/5 flex items-center justify-between px-10 bg-[#0B0F19]/80 backdrop-blur-md sticky top-0 z-20">
          <div>
            <h2 className="text-base font-semibold tracking-wide text-white transition-all duration-300">
              {getHeaderTitle()}
            </h2>
            <p className="text-[11px] text-white/40 font-mono">Node ID: CENTRAL_MANHATTAN</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-[#0F172A] border border-white/5 px-3 py-1.5 rounded-lg text-[11px] font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Network Live
            </div>
          </div>
        </header>

        {/* Zona e Përmbajtjes me AnimatePresence */}
        <div className="p-10 flex-1 bg-[#070A13] overflow-hidden">
          <AnimatePresence mode="wait">
            <div key={activeTab}>
              {renderContent()}
            </div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}