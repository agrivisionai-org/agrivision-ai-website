// Market data for the investor page, kept out of the client component on purpose.
//
// A plain value exported from a 'use client' module becomes a client reference when a
// server component imports it, so this array has to live in a module of its own for the
// page to be able to map over it during prerender.
//
// Photographs are licensed under the Pexels licence and self-hosted, never hotlinked.
// The USA and Canada frames name their location because Pexels documents one (Alma,
// Wisconsin; Saskatchewan). The India frame does not, so its alt text describes the
// scene alone rather than asserting a country. No identifiable face is used to imply a person endorses
// or uses the product, which the Pexels licence forbids.
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
    image: '/images/investors/photo-india.webp',
    imageSmall: '/images/investors/photo-india-800.webp',
    alt: 'A farmer standing in a wheat field, holding a smartphone',
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
    image: '/images/investors/photo-usa.webp',
    imageSmall: '/images/investors/photo-usa-800.webp',
    alt: 'Rows of corn stretching toward farm buildings in Alma, Wisconsin, United States',
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
    image: '/images/investors/photo-canada.webp',
    imageSmall: '/images/investors/photo-canada-800.webp',
    alt: 'A canola field in full bloom under a prairie sky in Saskatchewan, Canada',
    marketSource: 'StatCan',
    marketDetail: 'Statistics Canada market information.',
    currency: 'C$',
    price: 'C$9.99 / month',
    grows: ['Canola', 'Wheat'],
    context:
      'Large-acre prairie farming where weather and a short season drive the calendar, and market information comes from a third separate government source.',
  },
];
