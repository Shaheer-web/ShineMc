import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
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
  Clock,
  Server,
  Copy,
  Check
} from 'lucide-react';
import {
  SERVER_NAME,
  SERVER_IP,
  SERVER_IP_STATUS,
  DISCORD_INVITE_URL,
  STORE_RANKS,
  SERVER_FEATURES
} from './data/initialData';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('home');
  const [isSidebarOpenMobile, setIsSidebarOpenMobile] = useState(false);
  const [copiedIP, setCopiedIP] = useState(false);

  const copyServerIP = () => {
    navigator.clipboard.writeText(SERVER_IP);
    setCopiedIP(true);
    setTimeout(() => setCopiedIP(false), 2000);
  };

  const getFeatureIcon = (id: string) => {
    switch (id) {
      case '24-7':
        return <Flame className="w-5 h-5 text-orange-400" />;
      case 'donutsmp-firemc':
        return <Swords className="w-5 h-5 text-amber-400" />;
      case 'economy':
        return <Coins className="w-5 h-5 text-emerald-400" />;
      case 'afk-zone':
        return <Moon className="w-5 h-5 text-sky-400" />;
      case 'performance':
        return <Zap className="w-5 h-5 text-yellow-400" />;
      case 'smooth-gameplay':
        return <Shield className="w-5 h-5 text-indigo-400" />;
      case 'community':
        return <Users className="w-5 h-5 text-purple-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <div className="min-h-screen text-zinc-100 flex relative bg-[#08080f] overflow-x-hidden selection:bg-amber-500/30 selection:text-amber-200">
      {/* Left Navigation Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpenMobile={isSidebarOpenMobile}
        setIsOpenMobile={setIsSidebarOpenMobile}
      />

      {/* Main Content View (Offset by sidebar width on desktop) */}
      <div className="flex-1 flex flex-col min-w-0 lg:pl-72 transition-all duration-300">
        {/* Top Header Bar */}
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onToggleSidebarMobile={() => setIsSidebarOpenMobile(!isSidebarOpenMobile)}
        />

        <main className="flex-1">
          {activeTab === 'home' && (
            <div className="space-y-14 sm:space-y-20 pb-16">
              {/* Hero Banner */}
              <HeroBanner setActiveTab={setActiveTab} />

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
                {/* 7 Core Highlights Grid */}
                <div className="space-y-8">
                  <div className="text-center max-w-3xl mx-auto space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider font-rajdhani">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>The ShineMC Advantage</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-black font-cinzel text-white">
                      Built for True Minecraft Champions
                    </h2>
                    <p className="text-xs sm:text-sm text-zinc-400">
                      Whether you love hardcore raiding, dominating the stock market, or earning currency while AFK, ShineMC has you covered.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {SERVER_FEATURES.map(feat => (
                      <div
                        key={feat.id}
                        className="rounded-2xl p-6 bg-zinc-900/70 border border-zinc-800 hover:border-amber-500/40 transition-all hover:-translate-y-1 group relative overflow-hidden"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 rounded-xl bg-black/50 border border-zinc-800 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                            {feat.emoji}
                          </div>
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400/90 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                            {feat.tagline}
                          </span>
                        </div>

                        <h3 className="text-base font-bold font-cinzel text-white mb-2 group-hover:text-amber-300 transition-colors">
                          {feat.title}
                        </h3>

                        <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                          {feat.description}
                        </p>

                        <div className="pt-3 border-t border-zinc-800/80 space-y-1">
                          {feat.details.slice(0, 2).map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-[11px] text-zinc-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                              <span className="truncate">{item}</span>
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
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-amber-300 border border-amber-500/30 text-xs font-bold font-rajdhani uppercase tracking-wider transition-all cursor-pointer"
                    >
                      <span>Explore In-Depth Gameplay Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Store Preview Section */}
                <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-amber-950/30 via-zinc-900/90 to-black border border-amber-500/40 relative overflow-hidden space-y-8 shadow-2xl">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/35 text-amber-300 text-xs font-bold uppercase tracking-wider font-rajdhani mb-2">
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>Official Ranks</span>
                      </div>
                      <h2 className="text-2xl sm:text-4xl font-black font-cinzel text-white">
                        🛒 Server Store & Ranks
                      </h2>
                      <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                        Unlock powerful perks, Elytra wings, maximum AFK multipliers, and private vaults.
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        setActiveTab('store');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold font-rajdhani text-xs uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 cursor-pointer shadow-lg shadow-amber-500/25"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>View Full Store & Durations</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {STORE_RANKS.map(rank => (
                      <div
                        key={rank.id}
                        className={`p-5 rounded-2xl bg-black/60 border ${rank.borderClass} space-y-3 flex flex-col justify-between`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-2xl">{rank.badgeEmoji}</span>
                            <span
                              className="px-2 py-0.5 rounded text-[11px] font-mono font-bold"
                              style={{
                                color: rank.themeColor,
                                backgroundColor: `${rank.themeColor}20`
                              }}
                            >
                              {rank.tag}
                            </span>
                          </div>

                          <h4 className="text-xl font-black font-cinzel text-white">
                            {rank.name}
                          </h4>

                          <div className="pt-2 pb-1">
                            <div className="text-xs text-zinc-400 font-mono">
                              Starting at
                            </div>
                            <div className="text-2xl font-black font-cinzel text-amber-300">
                              ₹{rank.prices['7days'].price}{' '}
                              <span className="text-xs font-rajdhani font-normal text-zinc-400">
                                / 7 Days
                              </span>
                            </div>
                            <div className="text-[11px] text-zinc-400 font-mono">
                              Permanent: ₹{rank.prices['permanent'].price}
                            </div>
                          </div>

                          <div className="text-[11px] text-emerald-400 font-medium flex items-center gap-1 mt-2">
                            <Zap className="w-3 h-3 text-amber-400" />
                            <span>{rank.afkMultiplier} AFK Multiplier</span>
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            setActiveTab('store');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="w-full py-2 px-3 rounded-lg bg-zinc-800 hover:bg-amber-500 text-zinc-200 hover:text-black border border-zinc-700 hover:border-amber-400 text-xs font-bold font-rajdhani uppercase tracking-wider transition-colors cursor-pointer"
                        >
                          View Perks
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AFK Zone Spotlight */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-3xl p-8 sm:p-10 bg-zinc-900/60 border border-sky-500/30">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-500/35 text-sky-300 text-xs font-bold uppercase tracking-wider font-rajdhani">
                      <Moon className="w-4 h-4 text-sky-400" />
                      <span>Passive Income Engine</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black font-cinzel text-white">
                      💤 AFK ZONE — EARN WHILE AFK
                    </h2>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      Never fall behind in wealth again. Hop into the server spawn AFK Lounge whenever you are sleeping or studying. Earn coins, rare crate keys, and tokens with automated 60-second payouts.
                    </p>

                    <div className="grid grid-cols-2 gap-3 text-xs font-mono text-zinc-300">
                      <div className="p-3 rounded-xl bg-black/40 border border-zinc-800">
                        ⚡ Up to <strong className="text-amber-400">3.0x</strong> Multiplier
                      </div>
                      <div className="p-3 rounded-xl bg-black/40 border border-zinc-800">
                        🛡️ Zero Kick Timeouts
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setActiveTab('afk-zone');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-black font-bold font-rajdhani text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer shadow-md shadow-sky-500/20"
                    >
                      <Moon className="w-4 h-4" />
                      <span>Open AFK Simulator & Multipliers</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="p-6 rounded-2xl bg-black/70 border border-zinc-800 space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider font-rajdhani text-zinc-400">
                      Rank Multiplier Breakdown:
                    </h4>
                    <div className="space-y-2.5 text-xs font-mono">
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                        <span className="text-zinc-400">Player (Free)</span>
                        <span className="text-zinc-200">1.0x Base Rate</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900 border border-sky-500/30 text-sky-400">
                        <span>[VIP]</span>
                        <span className="font-bold">1.25x Rate</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900 border border-orange-500/30 text-orange-400">
                        <span>[MVP]</span>
                        <span className="font-bold">1.50x Rate</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900 border border-purple-500/30 text-purple-400">
                        <span>[ELITE]</span>
                        <span className="font-bold">2.00x Rate</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900 border border-amber-400/50 text-amber-300 shadow-sm shadow-amber-400/20">
                        <span className="font-bold">🪽 [SHINE]</span>
                        <span className="font-bold">3.00x MAX BOOST</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action: Join Discord & Prepare for Launch */}
                <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-indigo-950/60 via-zinc-900 to-amber-950/40 border border-indigo-500/40 text-center flex flex-col items-center justify-center relative overflow-hidden shadow-2xl space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shadow-inner">
                    <MessageSquare className="w-7 h-7" />
                  </div>

                  <div className="space-y-2 max-w-xl">
                    <h3 className="text-2xl sm:text-4xl font-black font-cinzel text-white">
                      🌟 WHY WAIT? JOIN SHINEMC TODAY! 🌟
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      Connect with hundreds of fellow players, form clans, participate in rank giveaways, and get instant notifications the moment the server opens!
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={DISCORD_INVITE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3.5 rounded-xl text-xs font-bold font-rajdhani uppercase tracking-wider bg-indigo-600 hover:bg-indigo-500 text-white shadow-xl shadow-indigo-600/30 transition-all flex items-center gap-2 group"
                    >
                      <MessageSquare className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>Join Discord Community</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => {
                        setActiveTab('community');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-6 py-3.5 rounded-xl text-xs font-bold font-rajdhani uppercase tracking-wider bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700 transition-all cursor-pointer"
                    >
                      Community Hub
                    </button>
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

        {/* Footer */}
        <Footer setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
