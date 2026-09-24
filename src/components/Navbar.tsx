import React, { useState } from 'react';
import {
  Menu,
  X,
  Server,
  ShoppingCart,
  MessageSquare,
  Sparkles,
  Clock,
  ExternalLink,
  Swords,
  Moon,
  Shield,
  Home
} from 'lucide-react';
import { TabKey } from '../types';
import { SERVER_NAME, SERVER_IP, DISCORD_INVITE_URL } from '../data/initialData';

interface NavbarProps {
  activeTab: TabKey;
  setActiveTab: (tab: TabKey) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { key: TabKey; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { key: 'home', label: 'Overview', icon: Home },
    { key: 'store', label: 'Store & Ranks', icon: ShoppingCart },
    { key: 'features', label: 'Features', icon: Swords },
    { key: 'afk-zone', label: 'AFK Zone', icon: Moon },
    { key: 'community', label: 'Discord', icon: MessageSquare },
    { key: 'rules', label: 'Rules', icon: Shield },
  ];

  const handleNavClick = (key: TabKey) => {
    setActiveTab(key);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-[#090912]/95 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group cursor-pointer text-left"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform shrink-0">
            <Sparkles className="w-5 h-5 text-black" />
          </div>
          <div>
            <span className="font-cinzel text-xl sm:text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
              {SERVER_NAME}
            </span>
            <span className="hidden sm:block text-[11px] text-zinc-400 font-rajdhani uppercase tracking-widest">
              Minecraft Server
            </span>
          </div>
        </button>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-zinc-900/60 p-1.5 rounded-2xl border border-zinc-800/80">
          {navLinks.map(item => {
            const isActive = activeTab === item.key;
            const Icon = item.icon;
            return (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold font-rajdhani uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-black' : 'text-zinc-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Action Controls: Clear IP & Discord */}
        <div className="flex items-center gap-3">
          {/* IP: COMING SOON badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs font-bold tracking-wider">
            <Server className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[11px] uppercase tracking-wider text-zinc-400">IP:</span>
            <span>{SERVER_IP}</span>
          </div>

          {/* Join Discord CTA */}
          <a
            href={DISCORD_INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold font-rajdhani text-xs uppercase tracking-wider transition-all shadow-md shadow-indigo-600/30"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Discord</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-amber-400 lg:hidden cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-800 bg-[#0c0c16] px-4 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono">
            <span className="text-zinc-400">SERVER IP:</span>
            <span className="font-bold text-amber-300">{SERVER_IP}</span>
          </div>

          <div className="space-y-1">
            {navLinks.map(item => {
              const isActive = activeTab === item.key;
              const Icon = item.icon;
              return (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.key)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold font-rajdhani uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'bg-amber-500 text-black'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <a
            href={DISCORD_INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-indigo-600 text-white font-bold font-rajdhani text-sm uppercase tracking-wider shadow-lg"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Join Official Discord</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </header>
  );
};
