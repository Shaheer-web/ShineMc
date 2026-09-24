import React, { useState } from 'react';
import {
  Server,
  Copy,
  Check,
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
  ArrowRight,
  Clock
} from 'lucide-react';
import { TabKey } from '../types';
import { SERVER_NAME, SERVER_IP, SERVER_IP_STATUS, DISCORD_INVITE_URL } from '../data/initialData';

interface HeroBannerProps {
  setActiveTab: (tab: TabKey) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ setActiveTab }) => {
  const [copiedIP, setCopiedIP] = useState(false);
  const [showComingSoonTooltip, setShowComingSoonTooltip] = useState(false);

  const copyServerIP = () => {
    navigator.clipboard.writeText(`${SERVER_IP} (Coming Soon)`);
    setCopiedIP(true);
    setShowComingSoonTooltip(true);
    setTimeout(() => {
      setCopiedIP(false);
      setShowComingSoonTooltip(false);
    }, 3000);
  };

  const featurePills = [
    { label: '24/7 Online', icon: Flame, color: 'text-orange-400 bg-orange-500/10 border-orange-500/25' },
    { label: 'DonutSMP & FireMC Experience', icon: Swords, color: 'text-amber-400 bg-amber-500/10 border-amber-500/25' },
    { label: 'Money / Economy System', icon: Coins, color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25' },
    { label: 'AFK Zone — Earn While AFK', icon: Moon, color: 'text-sky-400 bg-sky-500/10 border-sky-500/25' },
    { label: 'Best Performance & Low Lag', icon: Zap, color: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/25' },
    { label: 'Smooth & Stable Gameplay', icon: Shield, color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/25' },
    { label: 'Active & Fun Community', icon: Users, color: 'text-purple-400 bg-purple-500/10 border-purple-500/25' },
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-amber-500/20 bg-gradient-to-b from-[#0a0a14] via-[#09090f] to-[#07070c]">
      {/* Background radial ambient lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Top Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-widest font-rajdhani shadow-lg shadow-amber-500/10 animate-pulse">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>✨ SHINEMC — YOUR NEXT MINECRAFT SERVER! ✨</span>
        </div>

        {/* Server Big Title */}
        <div className="space-y-3">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black font-cinzel tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-amber-400 drop-shadow-2xl">
            SHINEMC
          </h1>
          <p className="text-sm sm:text-lg font-bold font-rajdhani uppercase tracking-[0.25em] text-amber-400 drop-shadow">
            💎 GRIND • FIGHT • EARN • DOMINATE
          </p>
          <p className="text-xs sm:text-sm text-zinc-400 font-mono tracking-wider">
            📢 WHERE YOUR JOURNEY BEGINS!
          </p>
        </div>

        {/* Server IP Card with Coming Soon Badge */}
        <div className="max-w-md mx-auto relative">
          <div className="p-4 rounded-2xl bg-zinc-900/90 border border-amber-500/40 shadow-2xl backdrop-blur-md space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-extrabold uppercase tracking-widest text-zinc-400 font-rajdhani flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-amber-400" />
                <span>SERVER ADDRESS</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/35 font-mono text-[11px] font-bold">
                <Clock className="w-3 h-3 text-amber-400 animate-spin" />
                {SERVER_IP_STATUS}
              </span>
            </div>

            <button
              onClick={copyServerIP}
              className="w-full p-3 rounded-xl bg-black/70 hover:bg-black/90 border border-zinc-800 hover:border-amber-400 text-amber-300 font-mono text-sm font-bold flex items-center justify-between transition-all group cursor-pointer"
              title="Click to copy server IP (Coming Soon)"
            >
              <span className="tracking-wider">{SERVER_IP}</span>
              <div className="flex items-center gap-1.5 text-xs font-rajdhani uppercase font-semibold text-zinc-400 group-hover:text-amber-300">
                {copiedIP ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">IP Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>Copy IP</span>
                  </>
                )}
              </div>
            </button>
          </div>

          {showComingSoonTooltip && (
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-amber-500 text-black text-xs font-bold font-rajdhani uppercase tracking-wider shadow-lg whitespace-nowrap animate-bounce">
              ⏳ Server IP Launching Soon! Join Discord for Ping!
            </div>
          )}
        </div>

        {/* Action Buttons: Join Discord & Explore Store */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href={DISCORD_INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-bold font-rajdhani text-sm uppercase tracking-wider transition-all flex items-center gap-2 shadow-xl shadow-indigo-600/30 group"
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
            className="px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-black font-rajdhani text-sm uppercase tracking-wider transition-all flex items-center gap-2 shadow-xl shadow-amber-500/25 cursor-pointer group"
          >
            <ShoppingCart className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>🛒 Browse Store & Ranks</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('features');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700/80 hover:border-amber-500/40 font-bold font-rajdhani text-sm uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
          >
            <Swords className="w-4 h-4 text-amber-400" />
            <span>Gameplay & Features</span>
          </button>
        </div>

        {/* Horizontal Scrolling / Wrapped Feature Pills */}
        <div className="pt-6">
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-5xl mx-auto">
            {featurePills.map((pill, idx) => {
              const IconComp = pill.icon;
              return (
                <div
                  key={idx}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold font-rajdhani uppercase tracking-wider ${pill.color}`}
                >
                  <IconComp className="w-3.5 h-3.5 shrink-0" />
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
