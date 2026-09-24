import React from 'react';
import {
  Sparkles,
  MessageSquare,
  ShoppingCart,
  ExternalLink,
  Shield,
  Server,
  Flame,
  Swords,
  Coins,
  Moon,
  Clock
} from 'lucide-react';
import { TabKey } from '../types';
import { SERVER_NAME, SERVER_IP, SERVER_IP_STATUS, DISCORD_INVITE_URL } from '../data/initialData';

interface FooterProps {
  setActiveTab: (tab: TabKey) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="border-t border-amber-500/20 bg-[#07070d] text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black shadow-md shadow-amber-500/20">
                <Sparkles className="w-5 h-5 text-black" />
              </div>
              <span className="font-cinzel text-xl font-black tracking-wider text-white">
                {SERVER_NAME}
              </span>
            </div>
            <p className="text-zinc-400 leading-relaxed text-xs">
              ✨ YOUR NEXT MINECRAFT SERVER! DonutSMP & FireMC-Style Experience, 24/7 online uptime, deep economy, and AFK zone.
            </p>
            <div className="text-[11px] font-mono text-amber-400 font-bold">
              💎 GRIND • FIGHT • EARN • DOMINATE
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="font-rajdhani font-bold uppercase tracking-wider text-white text-sm">
              Server Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    setActiveTab('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('store');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-amber-400 font-semibold"
                >
                  🛒 Official Store & Ranks
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('features');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  ⚔️ DonutSMP & Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('afk-zone');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  💤 AFK Zone Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('rules');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  🛡️ Server Rules
                </button>
              </li>
            </ul>
          </div>

          {/* Store Tiers Quick Links */}
          <div className="space-y-3">
            <h4 className="font-rajdhani font-bold uppercase tracking-wider text-white text-sm">
              Store Ranks
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    setActiveTab('store');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-sky-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>💎 VIP Rank — From ₹15</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('store');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-orange-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>🔥 MVP Rank — From ₹25</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('store');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-purple-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>⚡ ELITE Rank — From ₹40</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('store');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5 text-amber-300 font-bold cursor-pointer"
                >
                  <span>🪽 SHINE (Elytra) — From ₹75</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Connect & IP */}
          <div className="space-y-3">
            <h4 className="font-rajdhani font-bold uppercase tracking-wider text-white text-sm">
              Connect to ShineMC
            </h4>
            <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-mono text-zinc-400">Server IP</span>
                <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold">
                  {SERVER_IP_STATUS}
                </span>
              </div>
              <div className="font-mono text-amber-300 font-bold text-xs select-all">
                {SERVER_IP}
              </div>
            </div>

            <a
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold font-rajdhani text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Join Discord Server</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            © {new Date().getFullYear()} {SERVER_NAME}. All rights reserved.
          </div>
          <div className="text-center sm:text-right">
            Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft.
          </div>
        </div>
      </div>
    </footer>
  );
};
