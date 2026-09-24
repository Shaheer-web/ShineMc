import React, { useState } from 'react';
import {
  Menu,
  Server,
  Copy,
  Check,
  ShoppingCart,
  MessageSquare,
  Sparkles,
  Clock,
  ExternalLink
} from 'lucide-react';
import { TabKey } from '../types';
import { SERVER_NAME, SERVER_IP, SERVER_IP_STATUS, DISCORD_INVITE_URL } from '../data/initialData';

interface NavbarProps {
  activeTab: TabKey;
  setActiveTab: (tab: TabKey) => void;
  onToggleSidebarMobile?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onToggleSidebarMobile
}) => {
  const [copiedIP, setCopiedIP] = useState(false);

  const tabTitles: Record<TabKey, string> = {
    home: 'Command Overview',
    store: 'Official Store & Ranks',
    features: 'Gameplay & SMP Mechanics',
    'afk-zone': 'AFK Zone — Earn While AFK',
    community: 'Discord Community Hub',
    rules: 'Server Rules & Fair Play'
  };

  const copyServerIP = () => {
    navigator.clipboard.writeText(SERVER_IP);
    setCopiedIP(true);
    setTimeout(() => setCopiedIP(false), 2000);
  };

  return (
    <header className="sticky top-0 z-30 w-full border-b border-amber-500/20 bg-[#08080e]/95 backdrop-blur-xl">
      <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left Side: Mobile Menu Button & Title */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSidebarMobile}
            className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-amber-400 lg:hidden cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs">
            <span className="font-cinzel font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 text-base sm:text-lg">
              {SERVER_NAME}
            </span>
            <span className="text-zinc-600 hidden sm:inline">/</span>
            <span className="text-zinc-300 font-semibold uppercase tracking-wider font-rajdhani truncate max-w-[180px] sm:max-w-none">
              {tabTitles[activeTab]}
            </span>
          </div>
        </div>

        {/* Right Side: Quick Action Utilities */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Server IP (Coming Soon) */}
          <button
            onClick={copyServerIP}
            className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-900 border border-zinc-800 hover:border-amber-500/40 text-zinc-300 text-xs font-mono transition-all group cursor-pointer"
            title="Minecraft Server IP (Coming Soon)"
          >
            <Server className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden md:inline">{SERVER_IP}</span>
            <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold">
              {SERVER_IP_STATUS}
            </span>
            {copiedIP ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-amber-400" />
            )}
          </button>

          {/* Store Quick Button */}
          <button
            onClick={() => setActiveTab('store')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold font-rajdhani uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'store'
                ? 'bg-amber-500 text-black shadow-md shadow-amber-500/30'
                : 'bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/35 hover:border-amber-400'
            }`}
            title="Official ShineMC Webstore"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>Store</span>
          </button>

          {/* Discord Direct Button */}
          <a
            href={DISCORD_INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold font-rajdhani uppercase tracking-wider bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-sm shadow-indigo-600/20"
            title="Join ShineMC Discord Community"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Discord</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
        </div>
      </div>
    </header>
  );
};
