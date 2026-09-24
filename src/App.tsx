import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { StoreTab } from './components/StoreTab';
import { FeaturesTab } from './components/FeaturesTab';
import { AfkZoneTab } from './components/AfkZoneTab';
import { CommunityTab } from './components/CommunityTab';
import { RulesTab } from './components/RulesTab';
import { Footer } from './components/Footer';
import { TabKey } from './types';
import {
  Flame,
  Swords,
  Coins,
  Moon,
  Zap,
  Shield,
  Users,
  Sparkles,
  ArrowRight,
  ShoppingCart,
  MessageSquare,
  ExternalLink,
  Server
} from 'lucide-react';
import {
  SERVER_NAME,
  SERVER_IP,
  DISCORD_INVITE_URL,
  STORE_RANKS,
  SERVER_FEATURES
} from './data/initialData';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('home');

  return (
    <div className="min-h-screen text-zinc-100 flex flex-col bg-[#07070d] selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Spacious Header */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area (Spacious Full Width, No Congested Sidebar) */}
      <main className="flex-1 w-full">
        {activeTab === 'home' && (
          <div className="space-y-20 pb-20">
            {/* Hero Section */}
            <HeroBanner setActiveTab={setActiveTab} />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
              {/* The 7 Core Features Section */}
              <div className="space-y-10">
                <div className="text-center max-w-2xl mx-auto space-y-3">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest font-rajdhani">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Server Highlights</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black font-cinzel text-white">
                    Why Play on ShineMC?
                  </h2>
                  <p className="text-sm text-zinc-400">
                    Engineered from the ground up for smooth PvP, fair economy, and non-stop enjoyment.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {SERVER_FEATURES.map(feat => (
                    <div
                      key={feat.id}
                      className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/40 transition-all hover:-translate-y-1 space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-4xl">{feat.emoji}</span>
                        <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider">
                          {feat.tagline}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold font-cinzel text-white">
                        {feat.title}
                      </h3>

                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {feat.description}
                      </p>

                      <div className="pt-2 border-t border-zinc-800/80 space-y-1.5">
                        {feat.details.slice(0, 2).map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-2">
                  <button
                    onClick={() => {
                      setActiveTab('features');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-amber-300 border border-amber-500/30 text-xs font-bold font-rajdhani uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <span>Read Full Gameplay & Feature Breakdown</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Ranks & Store Spotlight */}
              <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-amber-950/20 via-zinc-900/80 to-black border border-amber-500/30 space-y-10 shadow-2xl">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider font-rajdhani mb-2">
                      <ShoppingCart className="w-3.5 h-3.5" />
                      <span>Official Store</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black font-cinzel text-white">
                      🛒 ShineMC Ranks
                    </h2>
                    <p className="text-sm text-zinc-400 mt-1">
                      Choose from VIP, MVP, ELITE, and SHINE. Available in 7 Days, 2.5/3 Weeks, and Permanent.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setActiveTab('store');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold font-rajdhani text-xs uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 cursor-pointer shadow-lg shadow-amber-500/25"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>View All Pricing & Perks</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {STORE_RANKS.map(rank => (
                    <div
                      key={rank.id}
                      className={`p-6 rounded-2xl bg-black/60 border ${rank.borderClass} space-y-4 flex flex-col justify-between`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-3xl">{rank.badgeEmoji}</span>
                          <span
                            className="px-2.5 py-0.5 rounded text-xs font-mono font-bold"
                            style={{
                              color: rank.themeColor,
                              backgroundColor: `${rank.themeColor}20`
                            }}
                          >
                            {rank.tag}
                          </span>
                        </div>

                        <h3 className="text-2xl font-black font-cinzel text-white">
                          {rank.name}
                        </h3>

                        <div className="pt-3 pb-2 space-y-1">
                          <div className="text-xs text-zinc-400 font-mono">
                            Starts at
                          </div>
                          <div className="text-3xl font-black font-cinzel text-amber-300">
                            ₹{rank.prices['7days'].price}{' '}
                            <span className="text-xs font-rajdhani font-normal text-zinc-400">
                              / 7 Days
                            </span>
                          </div>
                          <div className="text-xs text-zinc-400 font-mono">
                            Permanent: ₹{rank.prices['permanent'].price}
                          </div>
                        </div>

                        <div className="text-xs text-emerald-400 font-medium flex items-center gap-1.5 mt-2">
                          <Zap className="w-3.5 h-3.5 text-amber-400" />
                          <span>AFK Boost: <strong>{rank.afkMultiplier}</strong></span>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setActiveTab('store');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="w-full py-2.5 px-4 rounded-xl bg-zinc-800 hover:bg-amber-500 text-zinc-200 hover:text-black border border-zinc-700 hover:border-amber-400 text-xs font-bold font-rajdhani uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        View Perks & Buy
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Big Discord Banner */}
              <div className="rounded-3xl p-10 sm:p-14 bg-gradient-to-r from-indigo-950/70 via-zinc-900 to-indigo-950/70 border border-indigo-500/40 text-center space-y-6 shadow-2xl">
                <div className="space-y-3 max-w-2xl mx-auto">
                  <div className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">
                    📢 SHINEMC — WHERE YOUR JOURNEY BEGINS!
                  </div>
                  <h2 className="text-3xl sm:text-5xl font-black font-cinzel text-white">
                    🌟 WHY WAIT? JOIN SHINEMC TODAY! 🌟
                  </h2>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                    Server IP is <strong className="text-amber-300 font-mono">COMING SOON</strong>. Join our Discord community now to get notified the second we launch and participate in pre-launch rank giveaways!
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={DISCORD_INVITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-10 py-4 rounded-xl text-sm font-bold font-rajdhani uppercase tracking-wider bg-indigo-600 hover:bg-indigo-500 text-white shadow-xl shadow-indigo-600/40 transition-all group"
                  >
                    <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Join Official Discord (discord.gg/94TMUZGEb)</span>
                    <ExternalLink className="w-4 h-4 opacity-80" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'store' && <StoreTab />}
        {activeTab === 'features' && (
          <FeaturesTab
            onNavigateToAfk={() => {
              setActiveTab('afk-zone');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToStore={() => {
              setActiveTab('store');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
        {activeTab === 'afk-zone' && (
          <AfkZoneTab
            onNavigateToStore={() => {
              setActiveTab('store');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
        {activeTab === 'community' && <CommunityTab />}
        {activeTab === 'rules' && <RulesTab />}
      </main>

      {/* Clean Spacious Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
