const eloPrefixes6 = new Set([
  '636368', '438935', '504175', '451416',
  '509048', '509067', '509049', '509069',
  '509050', '509074', '509068', '509040',
  '509045', '509051', '509046', '509066',
  '509047', '509042', '509052', '509043',
  '509064', '509040',
]);
const eloPrefixes5 = new Set(['36297']);
const eloPrefixes4 = new Set(['5067', '4576', '4011']);

const dinersPrefixes3 = new Set(['301', '305']);
const dinersPrefixes2 = new Set(['36', '38']);

const amexPrefixes2 = new Set(['34', '37']);

const discoverPrefixes4 = new Set(['6011']);
const discoverPrefixes3 = new Set(['622']);
const discoverPrefixes2 = new Set(['64', '65']);

const auraPrefixes2 = new Set(['50']);
const jcbPrefixes2 = new Set(['35']);
const hipercardPrefixes2 = new Set(['38', '60']);
const visaPrefixes1 = new Set(['4']);
const mastercardPrefixes1 = new Set(['5']);

export const cardBrandRules = [
  { brand: 'elo', prefixes: eloPrefixes6, length: 6 },
  { brand: 'elo', prefixes: eloPrefixes5, length: 5 },
  { brand: 'elo', prefixes: eloPrefixes4, length: 4 },
  { brand: 'discover', prefixes: discoverPrefixes4, length: 4 },
  { brand: 'discover', prefixes: discoverPrefixes3, length: 3 },
  { brand: 'discover', prefixes: discoverPrefixes2, length: 2 },
  { brand: 'diners', prefixes: dinersPrefixes3, length: 3 },
  { brand: 'diners', prefixes: dinersPrefixes2, length: 2 },
  { brand: 'amex', prefixes: amexPrefixes2, length: 2 },
  { brand: 'aura', prefixes: auraPrefixes2, length: 2 },
  { brand: 'jcb', prefixes: jcbPrefixes2, length: 2 },
  { brand: 'hipercard', prefixes: hipercardPrefixes2, length: 2 },
  { brand: 'visa', prefixes: visaPrefixes1, length: 1 },
  { brand: 'mastercard', prefixes: mastercardPrefixes1, length: 1 },
];
