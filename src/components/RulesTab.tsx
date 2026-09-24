import React from 'react';
import { Shield, AlertTriangle, CheckCircle, Scale, MessageSquare } from 'lucide-react';
import { SERVER_RULES, DISCORD_INVITE_URL } from '../data/initialData';

export const RulesTab: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
      {/* Header Banner */}
      <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-zinc-900 via-[#0c0c14] to-amber-950/20 border border-amber-500/30 text-center relative overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/35 text-amber-300 text-xs font-bold uppercase tracking-wider font-rajdhani">
            <Scale className="w-4 h-4 text-amber-400" />
            <span>Fair Play Code of Conduct</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-cinzel text-white">
            🛡️ SERVER RULES
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            To ensure <strong className="text-amber-300">Smooth & Stable Gameplay</strong> and top performance for everyone, all players must adhere to our rules. Ignorance of rules is not an excuse.
          </p>
        </div>
      </div>

      {/* Rules List */}
      <div className="max-w-4xl mx-auto space-y-4">
        {SERVER_RULES.map((rule, idx) => (
          <div
            key={rule.id}
            className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-amber-500/40 transition-all space-y-3"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 font-bold font-mono text-sm flex items-center justify-center shrink-0">
                  #{rule.id}
                </span>
                <h3 className="text-base sm:text-lg font-bold font-cinzel text-white">
                  {rule.title}
                </h3>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-red-500/15 text-red-400 border border-red-500/30 shrink-0 self-start sm:self-auto">
                Penalty: {rule.penalty}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pl-11">
              {rule.description}
            </p>
          </div>
        ))}
      </div>

      {/* Discord Appeals notice */}
      <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-black/60 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
          <p className="text-xs text-zinc-300">
            Falsely punished or need clarification? Open a ticket in our official Discord server.
          </p>
        </div>
        <a
          href={DISCORD_INVITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-amber-300 border border-zinc-700 text-xs font-bold font-rajdhani uppercase tracking-wider transition-colors shrink-0"
        >
          Staff Support Ticket
        </a>
      </div>
    </div>
  );
};
