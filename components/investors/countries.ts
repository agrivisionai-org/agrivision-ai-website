// Market data for the investor page, kept out of the client component on purpose.
//
// A plain value exported from a 'use client' module becomes a client reference when a
// server component imports it, so this array has to live in a module of its own for the
// page to be able to map over it during prerender.
//
// Guardrails: `grows` is landscape context, not a claim that a crop is supported — the
// repository has no crop list. Market sources are only the three named in the product
// data. Prices are the published live ones. Images are original illustration.

export type Country = {
  id: 'india' | 'usa' | 'canada';
  name: string;
  flag: string;
  image: string;
  imageSmall: string;
  alt: string;
  marketSource: string;
  marketDetail: string;
  currency: string;
  price: string;
  grows: string[];
  context: string;
};

export const COUNTRIES: Country[] = [
  {
    id: 'india',
    name: 'India',
    flag: '🇮🇳',
    image: '/images/investors/market-india.webp',
    imageSmall: '/images/investors/market-india-800.webp',
    alt: 'Illustration of smallholder paddy and vegetable plots at late afternoon, representing the India market for YieldAI Global',
    marketSource: 'Mandi data',
    marketDetail: 'Government mandi prices, benchmarked against the published Minimum Support Price.',
    currency: '₹',
    price: 'Rs 149 / month',
    grows: ['Rice', 'Wheat', 'Cotton', 'Vegetables'],
    context:
      'Smallholdings of a few acres, worked by hand, where the adviser gap is widest and where multilingual and voice access decide whether the product is usable at all.',
  },
  {
    id: 'usa',
    name: 'United States',
    flag: '🇺🇸',
    image: '/images/investors/market-usa.webp',
    imageSmall: '/images/investors/market-usa-800.webp',
    alt: 'Illustration of Midwest row-crop fields converging on the horizon with a grain bin, representing the United States market for YieldAI Global',
    marketSource: 'USDA',
    marketDetail: 'United States Department of Agriculture market information.',
    currency: '$',
    price: '$9.99 / month',
    grows: ['Corn', 'Soybean', 'Wheat'],
    context:
      'Large commercial row-crop operations with existing precision-agriculture tooling, far fewer holdings, and a materially higher willingness to pay.',
  },
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    image: '/images/investors/market-canada.webp',
    imageSmall: '/images/investors/market-canada-800.webp',
    alt: 'Illustration of a canola field in bloom under a prairie sky with a grain elevator, representing the Canada market for YieldAI Global',
    marketSource: 'StatCan',
    marketDetail: 'Statistics Canada market information.',
    currency: 'C$',
    price: 'C$9.99 / month',
    grows: ['Canola', 'Wheat'],
    context:
      'Large-acre prairie farming where weather and a short season drive the calendar, and market information comes from a third separate government source.',
  },
];
