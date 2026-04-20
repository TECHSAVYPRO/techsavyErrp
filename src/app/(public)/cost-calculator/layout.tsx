import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Cost Calculator | Dapin Education',
};

export default function CostCalculatorLayout({ children }: { children: ReactNode }) {
  return children;
}
