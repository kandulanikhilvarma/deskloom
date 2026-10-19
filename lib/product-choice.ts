import type {Product} from './catalog';
import {removeFromPlan, validateAddition, type Constraints, type Market} from './planner';

export function productSpecs(product: Product) {
  return {...(product.dimensions ?? product.dims), ...(product.specifications ?? product.specs)};
}

export function specLabel(key: string) {
  const labels: Record<string, string> = {
    diagonalInch: 'Screen size · inches', refreshHz: 'Refresh rate · Hz', curvatureR: 'Curve radius · R',
    widthCm: 'Width · cm', depthCm: 'Depth · cm', heightCm: 'Height · cm', maxDpi: 'Maximum DPI',
    type: 'Product type', switchType: 'Key switches', maxLoadKg: 'Maximum load · kg',
  };
  return labels[key] ?? key.replace(/([A-Z])/g, ' $1').replace(/^./, c => c.toUpperCase());
}

export function specValue(value: string | number | boolean | string[]) {
  return Array.isArray(value) ? value.join(', ') : typeof value === 'boolean' ? value ? 'Yes' : 'No' : String(value);
}

// Replace overlapping products as one change, including keyboard and mouse combos.
export function productChoice(product: Product, items: Product[], market: Market, budget: number, owned: string[], constraints: Constraints) {
  const covered = new Set([product.category, ...(product.coversCategories ?? [])]);
  const replaced = items.filter(item => item.id !== product.id && [item.category, ...(item.coversCategories ?? [])].some(c => covered.has(c)));
  const base = replaced.reduce((remaining, item) => removeFromPlan(item.id, remaining), items);
  const result = validateAddition(product, base, market, budget, owned, constraints);
  return {...result, replaced};
}
