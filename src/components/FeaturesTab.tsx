import React, { useState } from 'react';
import {
  Flame,
  Swords,
  Coins,
  Moon,
  Zap,
  Shield,
  Users,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { SERVER_FEATURES, DISCORD_INVITE_URL } from '../data/initialData';

export const FeaturesTab: React.FC<{ onNavigateToAfk?: () => void; onNavigateToStore?: () => void }> = ({
  onNavigateToAfk,
  onNavigateToStore
}) => {
  const [activeFeatureId, setActiveFeatureId] = useState<string>('donutsmp-firemc');

  const getFeatureIcon = (id: string) => {
    switch (id) {
      case '24-7':
        return <Flame className="w-6 h-6 text-orange-400" />;
      case 'donutsmp-firemc':
        return <Swords className="w-6 h-6 text-amber-400" />;
      case 'economy':
        return <Coins className="w-6 h-6 text-emerald-400" />;
      case 'afk-zone':
        return <Moon className="w-6 h-6 text-sky-400" />;
      case 'performance':
        return <Zap className="w-6 h-6 text-yellow-400" />;
      case 'smooth-gameplay':
        return <Shield className="w-6 h-6 text-indigo-400" />;
      case 'community':
        return <Users className="w-6 h-6 text-purple-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-amber-400" />;
    }
  };

  const selectedFeature = SERVER_FEATURES.find(f => f.id === activeFeatureId) || SERVER_FEATURES[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
      {/* Header Banner */}
      <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-zinc-900 via-[#0e0e17] to-amber-950/30 border border-amber-500/30 text-center relative overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/35 text-amber-300 text-xs font-bold uppercase tracking-wider font-rajdhani">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Server Architecture & Gameplay</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-cinzel text-white">
            ⚔️ FEATURES & GAMEPLAY
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Experience the definitive modern SMP server built for warriors, traders, and casuals alike. Discover the 7 pillars that power <strong className="text-amber-300">ShineMC</strong>.
          </p>

          <div className="pt-2 text-xs font-mono text-amber-400 font-bold tracking-widest uppercase">
            💎 GRIND • FIGHT • EARN • DOMINATE
          </div>
        </div>
      </div>

      {/* Main Interactive Features Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: List of 7 Features */}
        <div className="lg:col-span-5 space-y-3">
          <div className="px-2 pb-1 text-xs font-extrabold uppercase tracking-widest text-zinc-400 font-rajdhani">
            The 7 Core Pillars of ShineMC
          </div>

          <div className="space-y-2">
            {SERVER_FEATURES.map(feat => {
              const isSelected = activeFeatureId === feat.id;
              return (
                <button
                  key={feat.id}
                  onClick={() => setActiveFeatureId(feat.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? 'bg-amber-500/15 border-amber-400/60 shadow-lg shadow-amber-500/10'
                      : 'bg-zinc-900/70 border-zinc-800/80 hover:bg-zinc-800/70 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span className="text-2xl shrink-0">{feat.emoji}</span>
                    <div className="min-w-0">
                      <h4
                        className={`text-sm font-bold font-rajdhani uppercase tracking-wider truncate transition-colors ${
                          isSelected ? 'text-amber-300' : 'text-zinc-200 group-hover:text-white'
                        }`}
                      >
                        {feat.title}
                      </h4>
                      <p className="text-xs text-zinc-400 truncate">
                        {feat.tagline}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected
                        ? 'text-amber-400 translate-x-1'
                        : 'text-zinc-600 group-hover:text-zinc-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Detailed Spotlight Card */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl p-6 sm:p-8 bg-zinc-900/90 border border-amber-500/40 shadow-xl relative overflow-hidden space-y-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-3xl">
                  {selectedFeature.emoji}
                </div>
                <div>
                  <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider">
                    {selectedFeature.tagline}
                  </span>
                  <h3 className="text-2xl font-black font-cinzel text-white">
                    {selectedFeature.title}
                  </h3>
                </div>
              </div>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed bg-black/40 p-4 rounded-xl border border-zinc-800">
              {selectedFeature.description}
            </p>

            {/* Feature Details list */}
            <div className="space-y-3">
              <h5 className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-rajdhani">
                Technical Highlights & Mechanics
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedFeature.details.map((detail, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/80 flex items-start gap-2.5 text-xs text-zinc-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links depending on selected feature */}
            {selectedFeature.id === 'afk-zone' && onNavigateToAfk && (
              <div className="pt-2">
                <button
                  onClick={onNavigateToAfk}
                  className="w-full py-3 px-4 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 border border-sky-500/40 text-sky-300 font-bold font-rajdhani text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Moon className="w-4 h-4 text-sky-400" />
                  <span>View Full AFK Zone Guide & Multipliers</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {selectedFeature.id === 'donutsmp-firemc' && onNavigateToStore && (
              <div className="pt-2">
                <button
                  onClick={onNavigateToStore}
                  className="w-full py-3 px-4 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 font-bold font-rajdhani text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Swords className="w-4 h-4 text-amber-400" />
                  <span>Gear Up: Check Donor Ranks & Kits in Store</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Grid of All Features Detailed Cards */}
      <div className="space-y-6 pt-6">
        <div className="text-center max-w-xl mx-auto">
          <h3 className="text-2xl font-bold font-cinzel text-white">
            Everything Built For Your Domination
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            Carefully crafted systems ensuring low latency, thrilling SMP warfare, and equitable player rewards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVER_FEATURES.map(feat => (
            <div
              key={feat.id}
              className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-amber-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl mb-3">{feat.emoji}</div>
                <h4 className="text-base font-bold font-cinzel text-white mb-1">
                  {feat.title}
                </h4>
                <p className="text-xs text-amber-400/90 font-mono mb-3">
                  {feat.tagline}
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {feat.description}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-800/80 space-y-1.5">
                {feat.details.slice(0, 2).map((d, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px] text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span className="truncate">{d}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Discord CTA banner */}
      <div className="rounded-3xl p-8 bg-gradient-to-r from-amber-600/20 via-zinc-900 to-amber-600/20 border border-amber-500/40 text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-bold font-cinzel text-white">
          🌟 WHY WAIT? JOIN SHINEMC TODAY! 🌟
        </h3>
        <p className="text-xs sm:text-sm text-zinc-300 max-w-lg mx-auto leading-relaxed">
          Be among the first to explore the economy, test the AFK Zone, claim territory, and fight for supremacy.
        </p>
        <div className="pt-2">
          <a
            href={DISCORD_INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold font-rajdhani text-sm uppercase tracking-wider transition-all shadow-lg shadow-amber-500/25"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Join Official Discord Server</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
