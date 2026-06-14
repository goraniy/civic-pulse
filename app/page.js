'use client';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Sidebar from '@/components/Sidebar';
import Metrics from '@/components/Metrics';
import DataTable from '@/components/DataTable';
import ParkingView from '@/components/ParkingView';
import PriceView from '@/components/PriceView';
import SettingsView from '@/components/SettingsView';
import ToastCenter from '@/components/ToastCenter'; // Importo Qendrën e Njoftimeve

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview');
  const [toasts, setToasts] = useState([]); // State për njoftimet live

  // Funksioni që thirret kur DataTable gjeneron një sinjal të ri automatik
  const handleNewSignal = (signal) => {
    const newToast = {
      id: signal.id,
      type: signal.type,
      location: signal.location,
    };
    
    setToasts(prev => [...prev, newToast]);

    // Zhduke njoftimin automatikisht pas 4 sekondave
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== signal.id));
    }, 4000);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <>
            <Metrics />
            {/* Kalojmë funksionin te tabela */}
            <DataTable onNewSignal={handleNewSignal} />
          </>
        );
      case 'parking':
        return <ParkingView />;
      case 'prices':
        return <PriceView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <Metrics />;
    }
  };

  const getHeaderTitle = () => {
    if (activeTab === 'overview') return 'System Overview';
    if (activeTab === 'parking') return 'Pay-by-Plate Management';
    if (activeTab === 'prices') return 'Consumer Price Tracker';
    if (activeTab === 'settings') return 'Node Configurations';
    return 'System Overview';
  };

  return (
    <main className="min-h-screen bg-[#0B0F19] font-sans text-white antialiased selection:bg-blue-600 selection:text-white">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="pl-64 min-h-screen flex flex-col">
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

        <div className="p-10 flex-1 bg-[#070A13] overflow-hidden">
          <AnimatePresence mode="wait">
            <div key={activeTab}>
              {renderContent()}
            </div>
          </AnimatePresence>
        </div>
      </div>

      {/* Shtojmë komponentin ToastCenter në fund të ekranit */}
      <ToastCenter toasts={toasts} setToasts={setToasts} />
    </main>
  );
}