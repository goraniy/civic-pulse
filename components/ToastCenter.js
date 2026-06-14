'use client';
import { motion, AnimatePresence } from 'framer-motion';

export default function ToastCenter({ toasts, setToasts }) {
  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 w-80 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="pointer-events-auto bg-[#0F172A]/90 backdrop-blur-md border border-blue-500/20 p-4 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col gap-1 relative overflow-hidden group"
          >
            {/* Linja dekorative neon lart */}
            <div className={`absolute top-0 left-0 right-0 h-[2px] ${
              toast.type === 'Parking' ? 'bg-blue-500' : 'bg-emerald-500'
            }`} />

            <div className="flex justify-between items-start">
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider">
                ⚡ New Incoming Signal
              </span>
              <button 
                onClick={() => removeToast(toast.id)}
                className="text-white/30 hover:text-white/80 text-xs cursor-pointer font-mono"
              >
                ×
              </button>
            </div>
            
            <h4 className="text-xs font-semibold text-white mt-1">{toast.location}</h4>
            <p className="text-[11px] text-white/50 font-light">
              Node <span className="font-mono text-white/70">{toast.id}</span> registered a new {toast.type.toLowerCase()} event.
            </p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}