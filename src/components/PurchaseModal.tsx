import React, { useState } from 'react';
import { X, Copy, Check, ExternalLink, ShoppingCart, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';
import { StoreRank, StoreDuration } from '../types';
import { DISCORD_INVITE_URL } from '../data/initialData';

interface PurchaseModalProps {
  rank: StoreRank | null;
  duration: StoreDuration;
  onClose: () => void;
}

export const PurchaseModal: React.FC<PurchaseModalProps> = ({ rank, duration, onClose }) => {
  const [copiedFormat, setCopiedFormat] = useState(false);

  if (!rank) return null;

  const priceObj = rank.prices[duration];
  const ticketText = `Hello ShineMC Staff! I would like to purchase:
• Rank: ${rank.name}
• Duration: ${priceObj.label}
• Price: ₹${priceObj.price} INR
• In-Game Name (IGN): [YOUR_IGN_HERE]
• Preferred Payment: UPI / Paytm / PhonePe / GPay / Crypto`;

  const handleCopyTicket = () => {
    navigator.clipboard.writeText(ticketText);
    setCopiedFormat(true);
    setTimeout(() => setCopiedFormat(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#0e0e17] border border-amber-500/40 shadow-2xl shadow-amber-950/50 p-6 sm:p-8 overflow-hidden">
        {/* Glow corner */}
        <div
          className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{ backgroundColor: rank.themeColor }}
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl border"
            style={{
              backgroundColor: `${rank.themeColor}20`,
              borderColor: `${rank.themeColor}50`
            }}
          >
            {rank.badgeEmoji}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-bold font-cinzel text-white">
                {rank.name} Rank
              </h3>
              <span
                className="px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider font-rajdhani"
                style={{
                  backgroundColor: `${rank.themeColor}25`,
                  color: rank.themeColor,
                  border: `1px solid ${rank.themeColor}50`
                }}
              >
                {priceObj.label}
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-mono">
              Official ShineMC Webstore
            </p>
          </div>
        </div>

        {/* Price Card */}
        <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 mb-6 flex items-center justify-between">
          <div>
            <span className="text-xs text-zinc-400 uppercase tracking-wider font-rajdhani font-semibold">
              Total Amount
            </span>
            <div className="text-3xl font-black font-cinzel text-amber-300">
              ₹{priceObj.price}{' '}
              <span className="text-xs font-rajdhani text-zinc-400 font-normal">
                INR / {priceObj.label}
              </span>
            </div>
          </div>
          <div className="text-right">
            <span className="inline-flex items-center gap-1 text-xs text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              100% Instant Delivery
            </span>
            <p className="text-[11px] text-zinc-500">Verified via Discord Ticket</p>
          </div>
        </div>

        {/* Purchase Instructions */}
        <div className="space-y-4 mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider font-rajdhani text-zinc-300 flex items-center gap-1.5">
            <MessageSquare className="w-4 h-4 text-amber-400" />
            How to Complete Your Purchase:
          </h4>
          <ol className="text-xs text-zinc-300 space-y-2 list-decimal list-inside leading-relaxed bg-black/40 p-4 rounded-xl border border-zinc-800/80">
            <li>
              Join the official ShineMC Discord (
              <a
                href={DISCORD_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 underline font-mono hover:text-amber-300"
              >
                discord.gg/94TMUZGEb
              </a>
              )
            </li>
            <li>Go to the <strong className="text-amber-300">#tickets</strong> or <strong className="text-amber-300">#buy-rank</strong> channel</li>
            <li>Click <strong>Create Purchase Ticket</strong> and paste the order template below</li>
            <li>Pay via UPI (GPay, PhonePe, Paytm), QR code, or Crypto</li>
            <li>Your rank and perks will be activated instantly on server launch!</li>
          </ol>
        </div>

        {/* Copyable Order Template */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 font-rajdhani">
              Order Ticket Template
            </span>
            <button
              onClick={handleCopyTicket}
              className="inline-flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 font-semibold cursor-pointer"
            >
              {copiedFormat ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Template</span>
                </>
              )}
            </button>
          </div>
          <pre className="p-3 rounded-lg bg-black/80 border border-zinc-800 text-[11px] font-mono text-zinc-300 overflow-x-auto whitespace-pre-wrap select-all">
            {ticketText}
          </pre>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={DISCORD_INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold font-rajdhani text-sm uppercase tracking-wider transition-all shadow-lg shadow-amber-500/25"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Open Ticket on Discord</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={onClose}
            className="py-3 px-5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white font-rajdhani text-sm font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
