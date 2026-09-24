import { StoreRank, ServerFeature, ServerRule } from '../types';

export const SERVER_NAME = 'ShineMC';
export const SERVER_IP = 'COMING SOON';
export const SERVER_IP_STATUS = 'COMING SOON';
export const DISCORD_INVITE_URL = 'https://discord.gg/94TMUZGEb';
export const STORE_CURRENCY = '₹';

export const STORE_RANKS: StoreRank[] = [
  {
    id: 'vip',
    name: 'VIP',
    tag: '[VIP]',
    badgeEmoji: '💎',
    themeColor: '#38bdf8',
    glowClass: 'shadow-sky-500/20 hover:shadow-sky-500/40',
    bgClass: 'bg-sky-950/20 hover:bg-sky-950/30',
    borderClass: 'border-sky-500/40 hover:border-sky-400',
    textClass: 'text-sky-400',
    iconName: 'gem',
    prices: {
      '7days': { label: '7 Days', price: 15 },
      'weeks': { label: '2.5 Weeks', price: 35 },
      'permanent': { label: 'Permanent', price: 150 }
    },
    summary: 'Essential perks, starter kits, and a dedicated economic boost to get your journey rolling.',
    perks: [
      '💎 [VIP] Cyan Chat & Tab Prefix',
      '⚡ 1.25x AFK Zone earning multiplier',
      '📦 Access to /vault 1 (Personal Safe)',
      '🏡 2 Sethomes limit',
      '🥖 Access to /feed command (10m cooldown)',
      '🎁 Weekly VIP Kit (Diamond Armor & Tools, Food)',
      '💬 Exclusive VIP Discord Role & Chat'
    ],
    commands: ['/feed', '/vault 1', '/sethome (2)', '/kit vip'],
    afkMultiplier: '1.25x'
  },
  {
    id: 'mvp',
    name: 'MVP',
    tag: '[MVP]',
    badgeEmoji: '🔥',
    themeColor: '#f97316',
    glowClass: 'shadow-orange-500/20 hover:shadow-orange-500/40',
    bgClass: 'bg-orange-950/20 hover:bg-orange-950/30',
    borderClass: 'border-orange-500/40 hover:border-orange-400',
    textClass: 'text-orange-400',
    popular: true,
    iconName: 'flame',
    prices: {
      '7days': { label: '7 Days', price: 25 },
      'weeks': { label: '2.5 Weeks', price: 50 },
      'permanent': { label: 'Permanent', price: 200 }
    },
    summary: 'The community favorite tier. Upgraded kits, extra vaults, and accelerated money generation.',
    perks: [
      '🔥 [MVP] Fiery Orange Chat & Tab Prefix',
      '⚡ 1.5x AFK Zone earning multiplier',
      '📦 Access to /vault 1 & 2',
      '🏡 4 Sethomes limit',
      '🎩 Access to /hat command (wear any block)',
      '🍞 Access to /feed command (5m cooldown)',
      '🎁 Weekly MVP Kit (Enchanted Diamond Gear, Golden Apples)',
      '🔑 1x Monthly Bonus Crate Key',
      '🚀 Priority Queue on server restarts'
    ],
    commands: ['/hat', '/feed', '/vault 2', '/sethome (4)', '/kit mvp'],
    afkMultiplier: '1.5x'
  },
  {
    id: 'elite',
    name: 'ELITE',
    tag: '[ELITE]',
    badgeEmoji: '⚡',
    themeColor: '#a855f7',
    glowClass: 'shadow-purple-500/25 hover:shadow-purple-500/50',
    bgClass: 'bg-purple-950/25 hover:bg-purple-950/35',
    borderClass: 'border-purple-500/45 hover:border-purple-400',
    textClass: 'text-purple-400',
    iconName: 'zap',
    prices: {
      '7days': { label: '7 Days', price: 40 },
      'weeks': { label: '2.5 Weeks', price: 75 },
      'permanent': { label: 'Permanent', price: 300 }
    },
    summary: 'Engineered for dedicated conquerors dominating the economy and hardcore PvP scene.',
    perks: [
      '⚡ [ELITE] Royal Purple Glowing Prefix',
      '⚡ 2.0x AFK Zone earning multiplier',
      '📦 Access to /vault 1, 2, 3',
      '🏡 6 Sethomes limit',
      '🧭 /near command (Check for nearby enemies)',
      '💀 Death coordinates sent in private chat',
      '🍞 Access to /feed (Instant / No cooldown)',
      '🎁 Weekly ELITE Kit (Maxed Diamond & Netherite Scrap)',
      '🔑 2x Monthly Bonus Crate Keys',
      '🚪 Join Full Server bypass'
    ],
    commands: ['/near', '/back on death', '/vault 3', '/sethome (6)', '/kit elite'],
    afkMultiplier: '2.0x'
  },
  {
    id: 'shine',
    name: 'SHINE',
    tag: '[SHINE]',
    badgeEmoji: '🪽',
    themeColor: '#eab308',
    glowClass: 'shadow-amber-500/30 hover:shadow-amber-500/60 ring-1 ring-amber-500/30',
    bgClass: 'bg-gradient-to-br from-amber-950/30 via-yellow-950/20 to-amber-900/30',
    borderClass: 'border-amber-400/60 hover:border-amber-300',
    textClass: 'text-amber-300',
    isPrestige: true,
    iconName: 'elytra',
    prices: {
      '7days': { label: '7 Days', price: 75 },
      'weeks': { label: '3 Weeks', price: 150 },
      'permanent': { label: 'Permanent', price: 500 }
    },
    summary: 'The pinnacle rank of ShineMC. Grants Elytra flight in lobby & safe zones, maximum AFK income, and unmatched prestige.',
    perks: [
      '🪽 [SHINE] Radiant Gold & Holographic Prefix',
      '🪽 Elytra Flight access in lobby & safe areas',
      '⚡ 3.0x AFK Zone MAX earning multiplier',
      '📦 Access to /vault 1 to 5',
      '🏡 Unlimited Sethomes',
      '🛠️ Portable /craft and /anvil anytime, anywhere',
      '🍞 /heal and /feed access',
      '🎁 Weekly Supreme SHINE Kit (Enchanted Netherite & God Apples)',
      '🔑 4x Monthly Ultra Crate Keys',
      '💬 Private High-Tier Ticket channel on Discord',
      '🌟 Exclusive Discord SHINE Role & Color'
    ],
    commands: ['/elytra (lobby)', '/craft', '/anvil', '/heal', '/vault 5', '/kit shine'],
    afkMultiplier: '3.0x (MAX)'
  }
];

export const SERVER_FEATURES: ServerFeature[] = [
  {
    id: '24-7',
    emoji: '🔥',
    title: '24/7 ONLINE',
    tagline: 'Always Up, Never Down',
    description: 'High availability enterprise dedicated hosting with 99.9% uptime. Hop on whenever inspiration strikes, day or night.',
    details: [
      'Zero unexpected reboots during peak hours',
      'Instant automated backups every 30 minutes',
      'Global multi-route CDN for players across regions',
      'Always ready for solo grinds or massive clan raids'
    ],
    icon: 'flame',
    color: 'from-orange-500/20 to-red-500/20 border-orange-500/30 text-orange-400'
  },
  {
    id: 'donutsmp-firemc',
    emoji: '⚔️',
    title: 'DONUTSMP & FIREMC-STYLE EXPERIENCE',
    tagline: 'Adrenaline-Fueled SMP Warfare',
    description: 'Inspired by the most thrilling SMP gameplay in modern Minecraft. High-stakes PvP, custom enchantments, claims, and ruthless raiding.',
    details: [
      'Hardcore PvP mechanics tuned for fair, fluid hit registry',
      'Player bounties: Hunt top players for huge cash rewards',
      'Base building, raiding mechanics, and tactical traps',
      'Custom gear tiers, god apples, and intense combat zones'
    ],
    icon: 'swords',
    color: 'from-amber-500/20 to-yellow-500/20 border-amber-500/30 text-amber-400'
  },
  {
    id: 'economy',
    emoji: '💰',
    title: 'MONEY / ECONOMY SYSTEM',
    tagline: 'Deep, Rewarding Player Markets',
    description: 'A dynamic, balanced economy where every item counts. Build wealth by trading, farming, mining, mob grinding, or dominating the auction house.',
    details: [
      'Global /ah (Auction House) with real-time bidding',
      'Player chest shops & trading stations',
      'Daily jobs, mining rewards, and crop sell multipliers',
      'Coin flip & casino mini-games for daring risk-takers'
    ],
    icon: 'coins',
    color: 'from-emerald-500/20 to-green-500/20 border-emerald-500/30 text-emerald-400'
  },
  {
    id: 'afk-zone',
    emoji: '💤',
    title: 'AFK ZONE — EARN WHILE AFK',
    tagline: 'Passive Income While You Rest',
    description: 'Have to study, work, or sleep? Step into the ShineMC AFK Zone and watch your bank balance and crate key stash grow automatically.',
    details: [
      'Safe, kick-free designated lounge at spawn',
      'Earn coins every 60 seconds of AFK time',
      'Random crate key vouchers dropped periodically',
      'Rank boosts: VIP (1.25x), MVP (1.5x), ELITE (2x), SHINE (3x)'
    ],
    icon: 'moon',
    color: 'from-sky-500/20 to-blue-500/20 border-sky-500/30 text-sky-400'
  },
  {
    id: 'performance',
    emoji: '⚡',
    title: 'BEST PERFORMANCE & LOW LAG',
    tagline: 'Pure 20 TPS Fluidity',
    description: 'Tuned with custom Purpur server software, memory garbage collection optimizations, and zero tick drops even during large fights.',
    details: [
      'Consistent 20.0 TPS even during 100+ player gatherings',
      'Optimized entity stacking and smart redstone handling',
      'Low ping routing across Asian and international nodes',
      'Silky smooth knockback and crisp sword/crystal mechanics'
    ],
    icon: 'zap',
    color: 'from-yellow-500/20 to-amber-500/20 border-yellow-500/30 text-yellow-400'
  },
  {
    id: 'smooth-gameplay',
    emoji: '🛡️',
    title: 'SMOOTH & STABLE GAMEPLAY',
    tagline: 'Bug-Free, Anti-Cheat Protected',
    description: 'Say goodbye to ghost hits, desync, and frustrating cheaters. We prioritize balanced stability so your skill always decides the fight.',
    details: [
      'Modern Machine-Learning Anti-Cheat active round-the-clock',
      'Exploit patches for dupe glitches and game crashes',
      'Instant inventory rollbacks in case of unexpected bugs',
      'Zero pay-to-win invulnerability: skill is always rewarded'
    ],
    icon: 'shield',
    color: 'from-indigo-500/20 to-violet-500/20 border-indigo-500/30 text-indigo-400'
  },
  {
    id: 'community',
    emoji: '🎮',
    title: 'ACTIVE & FUN COMMUNITY',
    tagline: 'Where Friendships and Rivalries Flourish',
    description: 'Join hundreds of friendly players, content creators, and competitive clans. Regular events, staff drop parties, and lively Discord banter.',
    details: [
      'Daily Discord events, voice channel hangouts, and music',
      'Weekend clan wars and boss fight drop parties',
      'Helpful, mature staff team ready to resolve issues',
      'A welcoming home for both casual builders and PvP fiends'
    ],
    icon: 'users',
    color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-400'
  }
];

export const SERVER_RULES: ServerRule[] = [
  {
    id: 1,
    title: 'No Cheating, Hacked Clients, or Unfair Modifications',
    description: 'The use of X-ray, KillAura, Fly, Speed, Baritone, or auto-clickers (>15 CPS) is strictly prohibited. Permitted mods: Optifine, Sodium, MiniMap without entity radar, and FPS boosters.',
    penalty: 'Permanent Ban',
    category: 'Gameplay'
  },
  {
    id: 2,
    title: 'No Exploiting, Duping, or Glitching',
    description: 'Any intentional use of game-breaking glitches, item duplication, or server crashers must be reported immediately to staff. Profiting from duped items is considered complicity.',
    penalty: 'Inventory Wipe & 30-Day to Permanent Ban',
    category: 'Gameplay'
  },
  {
    id: 3,
    title: 'Respectful Chat & Fair Language',
    description: 'Do not spam, advertise other Minecraft servers, use hate speech, slurs, or dox other players. Keep general banter friendly and competitive without crossing personal boundaries.',
    penalty: 'Warning -> Mute -> Temp Ban',
    category: 'Chat'
  },
  {
    id: 4,
    title: 'No Real Money Trading (RMT) Outside Official Store',
    description: 'Trading in-game items, currency, or claims for real money, gift cards, or external goods is strictly disallowed. All official ranks and keys must be acquired through the official Discord store.',
    penalty: 'Permanent Ban & Blacklist',
    category: 'Economy'
  },
  {
    id: 5,
    title: 'No Alt Farming or Ban Evading',
    description: 'Using alternate accounts to bypass bans, farm starter kits, or exploit the AFK Zone multiplier limit is forbidden. Max 1 active player per AFK pool.',
    penalty: 'IP Ban across all accounts',
    category: 'Accounts'
  }
];
