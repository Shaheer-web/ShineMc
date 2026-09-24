export type TabKey =
  | 'home'
  | 'store'
  | 'features'
  | 'afk-zone'
  | 'community'
  | 'rules';

export type StoreDuration = '7days' | 'weeks' | 'permanent';

export interface RankPricing {
  durationKey: StoreDuration;
  durationLabel: string;
  priceINR: number;
}

export interface StoreRank {
  id: string;
  name: string;
  tag: string;
  badgeEmoji: string;
  themeColor: string;
  glowClass: string;
  bgClass: string;
  borderClass: string;
  textClass: string;
  popular?: boolean;
  isPrestige?: boolean;
  iconName: 'gem' | 'flame' | 'zap' | 'elytra';
  prices: {
    '7days': { label: string; price: number };
    'weeks': { label: string; price: number };
    'permanent': { label: string; price: number };
  };
  summary: string;
  perks: string[];
  commands: string[];
  afkMultiplier: string;
}

export interface ServerFeature {
  id: string;
  emoji: string;
  title: string;
  tagline: string;
  description: string;
  details: string[];
  icon: string;
  color: string;
}

export interface ServerRule {
  id: number;
  title: string;
  description: string;
  penalty: string;
  category: 'Gameplay' | 'Chat' | 'Economy' | 'Accounts';
}
