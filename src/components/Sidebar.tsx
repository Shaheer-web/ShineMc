import React from 'react';
import {
  Home,
  ShoppingCart,
  Swords,
  Moon,
  MessageSquare,
  Shield,
  Server,
  Sparkles,
  ExternalLink,
  Clock,
  Zap,
  Gem
} from 'lucide-react';
import { TabKey } from '../types';
import { SERVER_NAME, SERVER_IP, SERVER_IP_STATUS, DISCORD_INVITE_URL } from '../data/initialData';

interface SidebarProps {
  activeTab: TabKey;
  setActiveTab: (tab: TabKey) => void;
  isOpenMobile: boolean;
  setIsOpenMobile: (open: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  isOpenMobile,
  setIsOpenMobile
}) => {
  const navItems: { key: TabKey; label: string; icon: React.ComponentType<{ className?: string }>; badge?: string }[] = [
    { key: 'home', label: 'Home Overview', icon: Home },
    { key: 'store', label: 'Store & Ranks', icon: ShoppingCart, badge: '🛒 Store' },
    { key: 'features', label: 'Features & Gameplay', icon: Swords },
    { key: 'afk-zone', label: 'AFK Zone Guide', icon: Moon, badge: '💤 AFK' },
    { key: 'community', label: 'Discord Community', icon: MessageSquare },
    { key: 'rules', label: 'Server Rules', icon: Shield },
  ];

  const handleSelect = (key: TabKey) => {
    setActiveTab(key);
    setIsOpenMobile(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpenMobile && (
        <div
          onClick={() => setIsOpenMobile(false)}
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm lg:hidden transition-opacity"
        />
      )}

      {/* Main Sidebar */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 sm:w-72 bg-[#0a0a12]/98 lg:bg-[#0a0a12]/92 backdrop-blur-2xl border-r border-amber-500/20 flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Top Branding */}
        <div>
          <div className="p-5 border-b border-zinc-800/80 flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-600 border border-amber-300/50 shadow-lg shadow-amber-500/20 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-black" />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-cinzel text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                  {SERVER_NAME}
                </span>
                <span className="px-1.5 py-0.2 rounded text-[9px] font-bold uppercase tracking-widest bg-amber-500/20 text-amber-300 border border-amber-500/30 font-rajdhani">
                  SMP
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 truncate font-rajdhani uppercase tracking-wider font-semibold">
                Your Next Minecraft Server
              </p>
            </div>
          </div>

          {/* Navigation Section (WITHOUT any counter numbers) */}
          <div className="px-3 py-4">
            <div className="px-3 pb-2 text-[11px] font-extrabold uppercase tracking-widest text-zinc-500 font-rajdhani">
              SERVER NAVIGATION
            </div>

            <nav className="space-y-1">
              {navItems.map(item => {
                const isActive = activeTab === item.key;
                const IconComponent = item.icon;

                return (
                  <button
                    key={item.key}
                    id={`sidebar-nav-${item.key}`}
                    onClick={() => handleSelect(item.key)}
                    className={`relative w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all group cursor-pointer ${
                      isActive
                        ? 'bg-amber-500/15 text-amber-300 shadow-sm border border-amber-500/35 font-semibold'
                        : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/80 hover:translate-x-1'
                    }`}
                  >
                    {/* Active vertical indicator bar */}
                    {isActive && (
                      <span className="absolute left-0 top-1.5 bottom-1.5 w-1 rounded-r-full bg-amber-400 shadow-sm shadow-amber-400/80" />
                    )}

                    <div className="flex items-center gap-3">
                      <IconComponent
                        className={`w-4 h-4 transition-colors ${
                          isActive ? 'text-amber-400' : 'text-zinc-500 group-hover:text-zinc-300'
                        }`}
                      />
                      <span className="truncate">{item.label}</span>
                    </div>

                    {item.badge && !isActive && (
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-zinc-800/80 text-amber-400 font-mono font-bold">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Quick Discord CTA Box */}
          <div className="px-4 pt-1">
            <a
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 hover:border-indigo-500/60 block transition-all group"
            >
              <div className="flex items-center justify-between text-indigo-300 mb-1">
                <span className="text-xs font-bold font-rajdhani uppercase tracking-wider flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Discord Community</span>
                </span>
                <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-[11px] text-zinc-400">
                Join <strong>discord.gg/94TMUZGEb</strong> for release pings & giveaways!
              </p>
            </a>
          </div>
        </div>

        {/* Bottom Sidebar Card: Server IP & Status */}
        <div className="p-4 border-t border-zinc-800/80 space-y-3">
          <div className="p-3.5 rounded-2xl bg-zinc-900/90 border border-amber-500/25 relative overflow-hidden">
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-400 font-rajdhani flex items-center gap-1">
                <Server className="w-3 h-3 text-amber-400" />
                <span>SERVER IP</span>
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] text-amber-400 font-semibold font-mono">
                <Clock className="w-3 h-3 text-amber-400 animate-spin" />
                {SERVER_IP_STATUS}
              </span>
            </div>

            <div className="p-2 rounded-lg bg-black/60 border border-zinc-800 text-xs font-mono text-amber-300 text-center select-all">
              {SERVER_IP}
            </div>

            {/* Quick action buttons */}
            <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-zinc-800/80">
              <button
                onClick={() => handleSelect('store')}
                className="flex items-center justify-center gap-1 py-1 px-2 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 text-[11px] font-rajdhani font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <ShoppingCart className="w-3 h-3 text-amber-400" />
                <span>Store</span>
              </button>
              <a
                href={DISCORD_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 py-1 px-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white border border-zinc-700 text-[11px] font-rajdhani font-bold uppercase tracking-wider transition-colors"
              >
                <MessageSquare className="w-3 h-3 text-indigo-400" />
                <span>Discord</span>
              </a>
            </div>
          </div>

          {/* Slogan footnote */}
          <div className="text-center text-[10px] text-zinc-500 font-mono">
            💎 GRIND • FIGHT • EARN • DOMINATE
          </div>
        </div>
      </aside>
    </>
  );
};
