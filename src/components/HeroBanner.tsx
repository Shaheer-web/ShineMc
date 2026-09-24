import React, { useState } from 'react';
import {
  Server,
  ExternalLink,
  ShoppingCart,
  MessageSquare,
  Sparkles,
  Flame,
  Swords,
  Coins,
  Moon,
  Zap,
  Shield,
  Users,
  Copy,
  Check
} from 'lucide-react';
import { TabKey } from '../types';
import { SERVER_NAME, SERVER_IP, DISCORD_INVITE_URL } from '../data/initialData';

interface HeroBannerProps {
  setActiveTab: (tab: TabKey) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ setActiveTab }) => {
  const [copiedStatus, setCopiedStatus] = useState(false);

  const copyStatus = () => {
    navigator.clipboard.writeText(`ShineMC Server IP: COMING SOON - Join Discord: ${DISCORD_INVITE_URL}`);
    setCopiedStatus(true);
    setTimeout(() => setCopiedStatus(false), 2000);
  };

  const featurePills = [
    { label: '24/7 Online', icon: Flame },
    { label: 'DonutSMP & FireMC Experience', icon: Swords },
    { label: 'Money / Economy System', icon: Coins },
    { label: 'AFK Zone — Earn While AFK', icon: Moon },
    { label: 'Best Performance & Low Lag', icon: Zap },
    { label: 'Smooth & Stable Gameplay', icon: Shield },
    { label: 'Active & Fun Community', icon: Users },
  ];

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 border-b border-zinc-800/80 bg-gradient-to-b from-[#0a0a14] via-[#09090f] to-[#07070c]">
      {/* Soft Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Top Tagline */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-widest font-rajdhani">
          <Sparkles className="w-4 h-4" />
          <span>✨ SHINEMC — YOUR NEXT MINECRAFT SERVER! ✨</span>
        </div>

        {/* Server Big Title */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black font-cinzel tracking-tight text-white drop-shadow-xl">
            SHINEMC
          </h1>
          <div className="text-base sm:text-2xl font-bold font-rajdhani uppercase tracking-[0.2em] text-amber-400">
            💎 GRIND • FIGHT • EARN • DOMINATE
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 font-mono tracking-wider">
            📢 WHERE YOUR JOURNEY BEGINS!
          </p>
        </div>

        {/* PROMINENT IP: COMING SOON CARD */}
        <div className="max-w-md mx-auto pt-2">
          <div className="p-5 rounded-2xl bg-zinc-900/90 border border-amber-500/50 shadow-2xl backdrop-blur-md space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-zinc-400 font-rajdhani flex items-center justify-center gap-2">
              <Server className="w-4 h-4 text-amber-400" />
              <span>MINECRAFT SERVER IP</span>
            </div>

            <div className="py-3 px-4 rounded-xl bg-black/80 border border-zinc-800 flex items-center justify-center gap-3">
              <span className="text-2xl sm:text-3xl font-black font-mono tracking-widest text-amber-300">
                {SERVER_IP}
              </span>
            </div>

            <p className="text-[11px] text-zinc-400 font-mono">
              Server launching soon! Join Discord for early whitelist & launch ping.
            </p>
          </div>
        </div>

        {/* Clean, spacious Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href={DISCORD_INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold font-rajdhani text-sm uppercase tracking-wider transition-all flex items-center gap-2.5 shadow-xl shadow-indigo-600/30 group"
          >
            <MessageSquare className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>Join Official Discord</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>

          <button
            onClick={() => {
              setActiveTab('store');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-black font-rajdhani text-sm uppercase tracking-wider transition-all flex items-center gap-2.5 shadow-xl shadow-amber-500/25 cursor-pointer"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>🛒 Browse Store & Ranks</span>
          </button>
        </div>

        {/* Feature Pills */}
        <div className="pt-6 border-t border-zinc-800/80">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {featurePills.map((pill, idx) => {
              const Icon = pill.icon;
              return (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs font-semibold text-zinc-300"
                >
                  <Icon className="w-3.5 h-3.5 text-amber-400" />
                  <span>{pill.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
