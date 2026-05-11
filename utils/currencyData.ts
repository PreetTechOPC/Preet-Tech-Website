
export interface CurrencyInfo {
  code: string;
  symbol: string;
  locale: string;
}

export const CURRENCY_MAP: Record<string, CurrencyInfo> = {
  IN: { code: 'INR', symbol: '₹', locale: 'en-IN' },
  US: { code: 'USD', symbol: '$', locale: 'en-US' },
  GB: { code: 'GBP', symbol: '£', locale: 'en-GB' },
  EU: { code: 'EUR', symbol: '€', locale: 'en-DE' },
  AE: { code: 'AED', symbol: 'د.إ', locale: 'ar-AE' },
  CA: { code: 'CAD', symbol: 'CA$', locale: 'en-CA' },
  AU: { code: 'AUD', symbol: 'A$', locale: 'en-AU' },
  SG: { code: 'SGD', symbol: 'S$', locale: 'en-SG' },
};

export const DEFAULT_CURRENCY: CurrencyInfo = { code: 'INR', symbol: '₹', locale: 'en-IN' };

export const getCurrencyByCountry = (countryCode: string): CurrencyInfo => {
  return CURRENCY_MAP[countryCode] || DEFAULT_CURRENCY;
};

// Budget Tiers per currency
// We define logical ranges for each major currency to avoid awkward conversion numbers (like $181.42)
export const BUDGET_OPTIONS: Record<string, { label: string; value: string }[]> = {
  INR: [
    { label: '₹15k - ₹25k', value: '₹15k-₹25k' },
    { label: '₹25k - ₹50k', value: '₹25k-₹50k' },
    { label: '₹50k - ₹1L', value: '₹50k-₹1L' },
    { label: '₹1L+', value: '₹1L+' },
  ],
  USD: [
    { label: '$200 - $500', value: '$200-$500' },
    { label: '$500 - $1,500', value: '$500-$1500' },
    { label: '$1,500 - $5,000', value: '$1500-$5000' },
    { label: '$5,000+', value: '$5000+' },
  ],
  GBP: [
    { label: '£150 - £400', value: '£150-£400' },
    { label: '£400 - £1,200', value: '£400-£1200' },
    { label: '£1,200 - £4,000', value: '£1200-£4000' },
    { label: '£4,000+', value: '£4000+' },
  ],
  EUR: [
    { label: '€180 - €450', value: '€180-€450' },
    { label: '€450 - €1,400', value: '€450-€1400' },
    { label: '€1,400 - €4,500', value: '€1400-€4500' },
    { label: '€4,500+', value: '€4500+' },
  ],
  AED: [
    { label: '750 د.إ - 2,000 د.إ', value: '750AED-2000AED' },
    { label: '2,000 د.إ - 6,000 د.إ', value: '2000AED-6000AED' },
    { label: '6,000 د.إ - 18,000 د.إ', value: '6000AED-18000AED' },
    { label: '18,000 د.إ+', value: '18000AED+' },
  ],
};

// Fallback for other currencies if not explicitly defined
export const getBudgetOptions = (currencyCode: string) => {
  return BUDGET_OPTIONS[currencyCode] || BUDGET_OPTIONS['USD']; // Fallback to USD for international
};
