import React, { useState } from 'react';
import {
  ShoppingCart,
  Check,
  Zap,
  Flame,
  Gem,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  CreditCard,
  MessageSquare,
  HelpCircle,
  Clock,
  Feather
} from 'lucide-react';
import { STORE_RANKS, DISCORD_INVITE_URL } from '../data/initialData';
import { StoreDuration, StoreRank } from '../types';
import { PurchaseModal } from './PurchaseModal';

export const StoreTab: React.FC = () => {
  const [selectedDuration, setSelectedDuration] = useState<StoreDuration>('permanent');
  const [purchasingRank, setPurchasingRank] = useState<StoreRank | null>(null);

  const durationOptions: { key: StoreDuration; label: string; badge: string }[] = [
    { key: '7days', label: '7 Days', badge: 'Trial Run' },
    { key: 'weeks', label: '2.5 / 3 Weeks', badge: 'Popular' },
    { key: 'permanent', label: 'Permanent', badge: 'Best Value' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
      {/* Header Banner */}
      <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-amber-950/40 via-zinc-900/90 to-black border border-amber-500/30 overflow-hidden text-center shadow-2xl">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/35 text-amber-300 text-xs font-bold uppercase tracking-wider font-rajdhani">
            <ShoppingCart className="w-4 h-4 text-amber-400" />
            <span>Official ShineMC Store</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-cinzel text-white tracking-wide">
            🛒 SHINEMC STORE
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Elevate your journey on <strong className="text-amber-300">ShineMC</strong> with exclusive donor ranks, Elytra flight, accelerated AFK earning multipliers, and supreme kits!
          </p>

          {/* Quick Notice */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              100% Safe & Secure UPI / Crypto
            </span>
            <span className="hidden sm:inline text-zinc-600">•</span>
            <span className="flex items-center gap-1.5 text-amber-300">
              <MessageSquare className="w-4 h-4" />
              Direct Discord Ticket Delivery
            </span>
          </div>
        </div>
      </div>

      {/* Duration Selector Tabs */}
      <div className="flex flex-col items-center justify-center space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 font-rajdhani">
          Choose Duration Period
        </span>
        <div className="inline-flex p-1.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-lg">
          {durationOptions.map(opt => {
            const isSelected = selectedDuration === opt.key;
            return (
              <button
                key={opt.key}
                onClick={() => setSelectedDuration(opt.key)}
                className={`relative px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-rajdhani uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-amber-500 text-black shadow-md shadow-amber-500/30'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60'
                }`}
              >
                <span>{opt.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                    isSelected ? 'bg-black/20 text-black' : 'bg-zinc-800 text-amber-400'
                  }`}
                >
                  {opt.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4 Ranks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STORE_RANKS.map(rank => {
          const priceObj = rank.prices[selectedDuration];
          const isShine = rank.id === 'shine';

          return (
            <div
              key={rank.id}
              className={`rounded-2xl flex flex-col justify-between p-6 bg-zinc-900/80 border transition-all duration-300 relative group overflow-hidden ${
                isShine
                  ? 'border-amber-400/70 shadow-xl shadow-amber-500/20 ring-1 ring-amber-400/40'
                  : rank.borderClass
              }`}
            >
              {/* Highlight ribbon for Popular / Prestige */}
              {rank.popular && (
                <div className="absolute -top-3 right-4 px-3 py-1 rounded-full bg-orange-500 text-black font-extrabold text-[10px] uppercase tracking-wider font-rajdhani shadow-md">
                  Most Popular
                </div>
              )}
              {isShine && (
                <div className="absolute -top-3 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 text-black font-extrabold text-[10px] uppercase tracking-wider font-rajdhani shadow-lg shadow-amber-400/30 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-black" />
                  <span>Supreme Rank</span>
                </div>
              )}

              {/* Rank Header */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl border"
                    style={{
                      backgroundColor: `${rank.themeColor}15`,
                      borderColor: `${rank.themeColor}40`
                    }}
                  >
                    {rank.badgeEmoji}
                  </div>
                  <span
                    className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold"
                    style={{
                      backgroundColor: `${rank.themeColor}20`,
                      color: rank.themeColor,
                      border: `1px solid ${rank.themeColor}40`
                    }}
                  >
                    {rank.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-black font-cinzel text-white mb-1">
                  {rank.name}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4 min-h-[36px]">
                  {rank.summary}
                </p>

                {/* Price Display */}
                <div className="p-4 rounded-xl bg-black/50 border border-zinc-800/80 mb-5">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-3xl font-black font-cinzel text-amber-300">
                        ₹{priceObj.price}
                      </span>
                      <span className="text-xs text-zinc-400 font-mono ml-1.5">
                        INR
                      </span>
                    </div>
                    <span className="text-xs font-rajdhani uppercase font-bold text-zinc-400">
                      {priceObj.label}
                    </span>
                  </div>
                  <div className="text-[11px] text-emerald-400 font-medium mt-1 flex items-center gap-1">
                    <Zap className="w-3 h-3 text-amber-400" />
                    <span>AFK Multiplier: <strong>{rank.afkMultiplier}</strong></span>
                  </div>
                </div>

                {/* Perks Checklist */}
                <div className="space-y-2.5 mb-6 text-xs text-zinc-300">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 font-rajdhani">
                    Rank Highlights
                  </div>
                  {rank.perks.map((perk, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-zinc-800/80 space-y-2">
                <button
                  onClick={() => setPurchasingRank(rank)}
                  className={`w-full py-3 px-4 rounded-xl font-bold font-rajdhani text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isShine
                      ? 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 text-black shadow-lg shadow-amber-500/30'
                      : 'bg-zinc-800 hover:bg-amber-500 text-zinc-200 hover:text-black border border-zinc-700 hover:border-amber-400'
                  }`}
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>Purchase {rank.name}</span>
                </button>
                <div className="text-center">
                  <span className="text-[10px] text-zinc-500 font-mono">
                    Instant Discord Delivery
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detailed Perks Comparison Table */}
      <div className="rounded-3xl p-6 sm:p-8 bg-zinc-900/60 border border-zinc-800 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-cinzel text-white">
              ⚔️ Ranks Comparison Matrix
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Compare features, multipliers, vaults, and exclusive perks across all ShineMC tiers.
            </p>
          </div>
          <a
            href={DISCORD_INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-xs font-bold font-rajdhani uppercase tracking-wider text-amber-300 transition-colors shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Need Custom Perks? Ask on Discord</span>
          </a>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400 font-rajdhani uppercase tracking-wider">
                <th className="py-3 px-4 font-bold">Feature / Command</th>
                <th className="py-3 px-4 text-sky-400 font-bold">💎 VIP</th>
                <th className="py-3 px-4 text-orange-400 font-bold">🔥 MVP</th>
                <th className="py-3 px-4 text-purple-400 font-bold">⚡ ELITE</th>
                <th className="py-3 px-4 text-amber-300 font-bold">🪽 SHINE</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
              <tr>
                <td className="py-3 px-4 font-medium text-zinc-200">7 Days Price</td>
                <td className="py-3 px-4 font-mono font-bold text-sky-300">₹15</td>
                <td className="py-3 px-4 font-mono font-bold text-orange-300">₹25</td>
                <td className="py-3 px-4 font-mono font-bold text-purple-300">₹40</td>
                <td className="py-3 px-4 font-mono font-bold text-amber-300">₹75</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-zinc-200">2.5 / 3 Weeks Price</td>
                <td className="py-3 px-4 font-mono font-bold text-sky-300">₹35 (2.5w)</td>
                <td className="py-3 px-4 font-mono font-bold text-orange-300">₹50 (2.5w)</td>
                <td className="py-3 px-4 font-mono font-bold text-purple-300">₹75 (2.5w)</td>
                <td className="py-3 px-4 font-mono font-bold text-amber-300">₹150 (3w)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-zinc-200">Permanent (Lifetime)</td>
                <td className="py-3 px-4 font-mono font-bold text-sky-300">₹150</td>
                <td className="py-3 px-4 font-mono font-bold text-orange-300">₹200</td>
                <td className="py-3 px-4 font-mono font-bold text-purple-300">₹300</td>
                <td className="py-3 px-4 font-mono font-bold text-amber-300">₹500</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-zinc-200">AFK Zone Multiplier</td>
                <td className="py-3 px-4 text-sky-300">1.25x Multiplier</td>
                <td className="py-3 px-4 text-orange-300">1.50x Multiplier</td>
                <td className="py-3 px-4 text-purple-300">2.00x Multiplier</td>
                <td className="py-3 px-4 text-amber-300 font-bold">3.00x (MAX BOOST)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-zinc-200">🪽 Elytra Flight Access</td>
                <td className="py-3 px-4 text-zinc-500">—</td>
                <td className="py-3 px-4 text-zinc-500">—</td>
                <td className="py-3 px-4 text-zinc-500">—</td>
                <td className="py-3 px-4 text-emerald-400 font-bold">✔ Lobby / Safe Flight</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-zinc-200">Personal Vaults (/vault)</td>
                <td className="py-3 px-4">1 Vault</td>
                <td className="py-3 px-4">2 Vaults</td>
                <td className="py-3 px-4">3 Vaults</td>
                <td className="py-3 px-4 font-bold text-amber-300">5 Vaults</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-zinc-200">Sethome Limit</td>
                <td className="py-3 px-4">2 Sethomes</td>
                <td className="py-3 px-4">4 Sethomes</td>
                <td className="py-3 px-4">6 Sethomes</td>
                <td className="py-3 px-4 font-bold text-amber-300">Unlimited</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-zinc-200">Portable /craft & /anvil</td>
                <td className="py-3 px-4 text-zinc-500">—</td>
                <td className="py-3 px-4 text-zinc-500">—</td>
                <td className="py-3 px-4 text-zinc-500">—</td>
                <td className="py-3 px-4 text-emerald-400 font-bold">✔ Anywhere</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-zinc-200">Special Commands</td>
                <td className="py-3 px-4">/feed</td>
                <td className="py-3 px-4">/feed, /hat</td>
                <td className="py-3 px-4">/near, /feed, /back</td>
                <td className="py-3 px-4 font-bold text-amber-300">/heal, /craft, /anvil, /fly</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Methods & FAQ Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
              <CreditCard className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold font-cinzel text-white">
              Accepted Payment Methods
            </h4>
          </div>
          <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
            All purchases are processed securely through our verified Discord billing system. We accept:
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs font-mono text-zinc-300">
            <div className="p-2.5 rounded-lg bg-black/50 border border-zinc-800">
              🇮🇳 UPI (Instant)
            </div>
            <div className="p-2.5 rounded-lg bg-black/50 border border-zinc-800">
              📱 Google Pay / PhonePe
            </div>
            <div className="p-2.5 rounded-lg bg-black/50 border border-zinc-800">
              💳 Paytm Wallet & Bank
            </div>
            <div className="p-2.5 rounded-lg bg-black/50 border border-zinc-800">
              🪙 Crypto (USDT / LTC)
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold font-cinzel text-white">
                How Store Activation Works
              </h4>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed mb-4">
              Since the server IP is <strong className="text-amber-300">Coming Soon</strong>, pre-purchased ranks will be tagged to your Discord and In-Game Name, and activated the exact second the doors open!
            </p>
          </div>
          <a
            href={DISCORD_INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/35 text-amber-300 text-xs font-bold font-rajdhani uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-amber-400" />
            <span>Join Discord to Claim or Inquire</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Modal */}
      {purchasingRank && (
        <PurchaseModal
          rank={purchasingRank}
          duration={selectedDuration}
          onClose={() => setPurchasingRank(null)}
        />
      )}
    </div>
  );
};
