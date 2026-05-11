
import { useState, useEffect } from 'react';
import { CurrencyInfo, getCurrencyByCountry, DEFAULT_CURRENCY, getBudgetOptions } from '../utils/currencyData';

export const useCurrency = () => {
  const [currency, setCurrency] = useState<CurrencyInfo>(DEFAULT_CURRENCY);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const detectCurrency = async () => {
      // Check session storage first
      const cached = sessionStorage.getItem('user-country');
      if (cached) {
        setCurrency(getCurrencyByCountry(cached));
        setLoading(false);
        return;
      }

      try {
        // Use a free geo-ip service
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        if (data.country_code) {
          sessionStorage.setItem('user-country', data.country_code);
          setCurrency(getCurrencyByCountry(data.country_code));
        }
      } catch (error) {
        console.error('Failed to detect country:', error);
        // Fallback to browser locale if IP detection fails
        const locale = navigator.language;
        if (locale.includes('US')) setCurrency(getCurrencyByCountry('US'));
        else if (locale.includes('GB')) setCurrency(getCurrencyByCountry('GB'));
        // Default stays as INR (set in useState)
      } finally {
        setLoading(false);
      }
    };

    detectCurrency();
  }, []);

  const budgetOptions = getBudgetOptions(currency.code);

  return { currency, budgetOptions, loading };
};
