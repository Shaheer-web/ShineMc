import React, { useState } from 'react';
import {
  MessageSquare,
  Users,
  Sparkles,
  ExternalLink,
  Copy,
  Check,
  Bell,
  Ticket,
  Gift,
  HelpCircle,
  Crown
} from 'lucide-react';
import { DISCORD_INVITE_URL, SERVER_IP_STATUS } from '../data/initialData';

export const CommunityTab: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false);

  const copyDiscord = () => {
    navigator.clipboard.writeText(DISCORD_INVITE_URL);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
      {/* Header Banner */}
      <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-indigo-950/40 via-zinc-900/90 to-purple-950/40 border border-indigo-500/30 text-center relative overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-500/35 text-indigo-300 text-xs font-bold uppercase tracking-wider font-rajdhani">
            <Users className="w-4 h-4 text-indigo-400" />
            <span>Official Community Discord Hub</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-cinzel text-white">
            📢 SHINEMC DISCORD
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Where your journey begins! Join our vibrant community of players, find teammates, participate in rank giveaways, and get launch alerts!
          </p>

          {/* Slogan */}
          <div className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest pt-2">
            🌟 WHY WAIT? JOIN SHINEMC TODAY! 🌟
          </div>
        </div>
      </div>

      {/* Main Discord Spotlight Card */}
      <div className="max-w-3xl mx-auto rounded-3xl p-8 sm:p-10 bg-zinc-900/90 border border-indigo-500/40 shadow-2xl relative overflow-hidden space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shadow-inner">
              <MessageSquare className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-black font-cinzel text-white">
                  ShineMC Community
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase font-mono">
                  Active
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-1 font-mono">
                discord.gg/94TMUZGEb
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={copyDiscord}
              className="flex-1 sm:flex-initial py-3 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-xs font-bold font-rajdhani uppercase tracking-wider text-zinc-300 hover:text-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              {copiedLink ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Link</span>
                </>
              )}
            </button>

            <a
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial py-3 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold font-rajdhani text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Join Discord</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Why Join Discord Highlights */}
        <div className="pt-4 border-t border-zinc-800/80 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-rajdhani">
            What You Unlock in the ShineMC Discord:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-black/40 border border-zinc-800 flex items-start gap-3">
              <Bell className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold text-white uppercase font-rajdhani">
                  Launch Notifications
                </h5>
                <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
                  Get pinged the exact minute the server IP goes live so you can secure your base cords early.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-zinc-800 flex items-start gap-3">
              <Ticket className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold text-white uppercase font-rajdhani">
                  Rank & Store Support
                </h5>
                <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
                  Open purchase tickets for VIP, MVP, ELITE, and SHINE ranks with instant delivery.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-zinc-800 flex items-start gap-3">
              <Gift className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold text-white uppercase font-rajdhani">
                  Giveaways & Nitro Drops
                </h5>
                <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
                  Weekly Discord Nitro, donor rank vouchers, and in-game economy balance giveaways.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-zinc-800 flex items-start gap-3">
              <Crown className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold text-white uppercase font-rajdhani">
                  Clan Alliances & Teams
                </h5>
                <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
                  Form clans, recruit warriors, and establish non-aggression treaties before map launch.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Server Status notice */}
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs">
          <div className="text-zinc-300">
            Server IP Status: <strong className="text-amber-400 uppercase font-mono">{SERVER_IP_STATUS}</strong>
          </div>
          <span className="text-zinc-400 font-mono text-[11px]">
            Join Discord for Early Whitelist
          </span>
        </div>
      </div>
    </div>
  );
};
