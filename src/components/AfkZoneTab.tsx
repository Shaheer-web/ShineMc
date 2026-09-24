import React, { useState } from 'react';
import {
  Moon,
  Coins,
  Key,
  Zap,
  Clock,
  Sparkles,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  ShoppingCart,
  MessageSquare
} from 'lucide-react';
import { DISCORD_INVITE_URL } from '../data/initialData';

export const AfkZoneTab: React.FC<{ onNavigateToStore: () => void }> = ({ onNavigateToStore }) => {
  const [selectedRank, setSelectedRank] = useState<'free' | 'vip' | 'mvp' | 'elite' | 'shine'>('shine');
  const [afkHours, setAfkHours] = useState<number>(8);

  const multipliers = {
    free: { name: 'Player (Default)', mult: 1.0, color: 'text-zinc-300', tag: '[MEMBER]' },
    vip: { name: 'VIP', mult: 1.25, color: 'text-sky-400', tag: '[VIP]' },
    mvp: { name: 'MVP', mult: 1.5, color: 'text-orange-400', tag: '[MVP]' },
    elite: { name: 'ELITE', mult: 2.0, color: 'text-purple-400', tag: '[ELITE]' },
    shine: { name: 'SHINE (Supreme)', mult: 3.0, color: 'text-amber-300', tag: '[SHINE]' }
  };

  const baseCoinsPerHour = 2500;
  const currentMult = multipliers[selectedRank].mult;
  const estimatedCoins = Math.round(baseCoinsPerHour * currentMult * afkHours);
  const estimatedKeys = Math.floor((afkHours * currentMult) / 2);
  const estimatedTokens = Math.floor((afkHours * currentMult) / 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
      {/* Hero Header */}
      <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-sky-950/40 via-zinc-900/90 to-black border border-sky-500/30 text-center relative overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/15 border border-sky-500/35 text-sky-300 text-xs font-bold uppercase tracking-wider font-rajdhani">
            <Moon className="w-4 h-4 text-sky-400" />
            <span>Passive Income Generator</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-cinzel text-white">
            💤 AFK ZONE — EARN WHILE AFK
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Busy with school, work, or sleeping? Step into the <strong className="text-sky-300">ShineMC AFK Lounge</strong> and accumulate vast fortunes, rare crate keys, and tokens without lifting a finger!
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-zinc-400">
            <span className="text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" /> 100% Anti-Kick Protection
            </span>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <span className="text-amber-300 flex items-center gap-1">
              <Zap className="w-4 h-4" /> Up to 3.0x Multiplier for SHINE Rank
            </span>
          </div>
        </div>
      </div>

      {/* Interactive AFK Earnings Calculator */}
      <div className="rounded-3xl p-6 sm:p-10 bg-zinc-900/90 border border-sky-500/30 shadow-xl space-y-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Coins className="w-5 h-5 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-wider font-rajdhani text-amber-400">
              Interactive Simulator
            </span>
          </div>
          <h3 className="text-2xl font-bold font-cinzel text-white">
            Calculate Your AFK Fortune
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Select your rank and desired AFK duration to project your passive earnings.
          </p>
        </div>

        {/* Rank Tier Selector */}
        <div className="space-y-3">
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 font-rajdhani">
            1. Select Your Rank Tier:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {(Object.keys(multipliers) as (keyof typeof multipliers)[]).map(key => {
              const item = multipliers[key];
              const isSelected = selectedRank === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedRank(key)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-sky-500/20 border-sky-400 shadow-md shadow-sky-500/20'
                      : 'bg-black/40 border-zinc-800 hover:bg-zinc-800/60 text-zinc-300'
                  }`}
                >
                  <div className={`text-xs font-mono font-bold ${item.color}`}>
                    {item.tag}
                  </div>
                  <div className="text-sm font-bold text-white mt-1">
                    {key.toUpperCase()}
                  </div>
                  <div className="text-[11px] text-amber-400 font-mono mt-0.5">
                    {item.mult}x Boost
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Hours Selector */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-zinc-300 font-rajdhani">
            <span>2. Hours Spent AFK:</span>
            <span className="text-sky-400 font-mono text-sm">{afkHours} Hours</span>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
            {[1, 2, 4, 8, 12, 24].map(h => (
              <button
                key={h}
                onClick={() => setAfkHours(h)}
                className={`py-2 px-3 rounded-lg border text-xs font-mono font-bold transition-all cursor-pointer ${
                  afkHours === h
                    ? 'bg-amber-500 text-black border-amber-400 shadow-sm'
                    : 'bg-black/40 text-zinc-400 border-zinc-800 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {h}h
              </button>
            ))}
          </div>
        </div>

        {/* Results Projection Cards */}
        <div className="p-6 rounded-2xl bg-black/60 border border-zinc-800/80 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-4 rounded-xl bg-zinc-900/80 border border-amber-500/20">
            <span className="text-xs text-zinc-400 uppercase tracking-wider font-rajdhani font-semibold flex items-center gap-1.5">
              <Coins className="w-4 h-4 text-amber-400" />
              Projected In-Game Coins
            </span>
            <div className="text-2xl sm:text-3xl font-black font-cinzel text-amber-300 mt-2">
              ${estimatedCoins.toLocaleString()}
            </div>
            <p className="text-[11px] text-zinc-500 mt-1">
              Direct to your /bal in-game
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/80 border border-sky-500/20">
            <span className="text-xs text-zinc-400 uppercase tracking-wider font-rajdhani font-semibold flex items-center gap-1.5">
              <Key className="w-4 h-4 text-sky-400" />
              AFK Crate Vouchers
            </span>
            <div className="text-2xl sm:text-3xl font-black font-cinzel text-sky-300 mt-2">
              ~{estimatedKeys} Keys
            </div>
            <p className="text-[11px] text-zinc-500 mt-1">
              For rare gear & god apple spins
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/80 border border-purple-500/20">
            <span className="text-xs text-zinc-400 uppercase tracking-wider font-rajdhani font-semibold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-purple-400" />
              Bonus Multiplier Applied
            </span>
            <div className="text-2xl sm:text-3xl font-black font-cinzel text-purple-300 mt-2">
              {currentMult}x Multiplier
            </div>
            <p className="text-[11px] text-zinc-500 mt-1">
              Current Tier: {multipliers[selectedRank].name}
            </p>
          </div>
        </div>

        {/* Upgrade Call to action */}
        {selectedRank !== 'shine' && (
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
            <div className="text-xs text-zinc-300">
              Want the maximum <strong className="text-amber-300">3.0x AFK Earning Multiplier</strong> and Elytra wings?
            </div>
            <button
              onClick={onNavigateToStore}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold font-rajdhani text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-amber-500/20"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>Upgrade to SHINE Rank</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Step by Step Guide: How to AFK */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800">
          <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400 font-bold font-mono mb-4">
            01
          </div>
          <h4 className="text-lg font-bold font-cinzel text-white mb-2">
            Step into the AFK Lounge
          </h4>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Type <strong className="text-sky-300 font-mono">/afk</strong> or walk into the glowing water fountain located directly at server spawn.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold font-mono mb-4">
            02
          </div>
          <h4 className="text-lg font-bold font-cinzel text-white mb-2">
            Automated Payouts Every 60s
          </h4>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Our background payout cycle distributes currency and crate keys directly to your inventory without needing to move your mouse.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold font-mono mb-4">
            03
          </div>
          <h4 className="text-lg font-bold font-cinzel text-white mb-2">
            Wake Up & Dominate
          </h4>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Use your earned fortune on the Auction House (/ah), buy god kits, build your base, and dominate your enemies!
          </p>
        </div>
      </div>
    </div>
  );
};
