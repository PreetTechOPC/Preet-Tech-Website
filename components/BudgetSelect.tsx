
"use client";

import React, { useEffect } from 'react';
import { useCurrency } from '@/hooks/useCurrency';

interface BudgetSelectProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
}

const BudgetSelect: React.FC<BudgetSelectProps> = ({ value, onChange, className, placeholder = "Select Budget Range" }) => {
  const { budgetOptions, loading } = useCurrency();

  // If the current value is not in the new options (e.g. after currency switch), 
  // or if it was empty, set it to the first option.
  useEffect(() => {
    if (!loading && budgetOptions.length > 0) {
      const isValid = budgetOptions.some(opt => opt.value === value);
      if (!isValid && value !== "" && value !== "Budget") {
        onChange(budgetOptions[0].value);
      }
    }
  }, [budgetOptions, loading, value, onChange]);

  return (
    <select 
      value={value} 
      onChange={(e) => onChange(e.target.value)} 
      className={className}
      disabled={loading}
    >
      {placeholder && <option value="" disabled>{loading ? "Detecting location..." : placeholder}</option>}
      {budgetOptions.map((opt) => (
        <option key={opt.value} value={opt.value} className="bg-white dark:bg-slate-900">
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default BudgetSelect;
