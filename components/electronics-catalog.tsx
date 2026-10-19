'use client';
import {useEffect, useRef, useState} from 'react';
import {ArrowUpRight, Check, X} from 'lucide-react';
import type {Product} from '@/lib/catalog';
import {catalogFor, currency, markets, total, type Constraints, type Market} from '@/lib/planner';
import {productChoice, productSpecs, specLabel, specValue} from '@/lib/product-choice';
import {ProductImage} from './setup-preview';

export const electronicsCategories = {keyboard: 'Keyboards', mouse: 'Mice', monitor: 'Monitors'} as const;
export type ElectronicsCategory = keyof typeof electronicsCategories;

export function ProductSpecifications({product}: {product: Product}) {
  return <dl className="spec-list">{Object.entries(productSpecs(product)).map(([key, value]) => <div key={key}><dt>{specLabel(key)}</dt><dd>{specValue(value)}</dd></div>)}</dl>;
}

function price(product: Product, market: Market) {
  return product.price === null || product.priceStatus === 'unknown' || product.priceFreshness === 'uncertain' ? 'Price needs a check' : currency(product.price, market);
}

export default function ElectronicsCatalog({market, category, onCategory, items, budget, owned, constraints, onApply}: {
  market: Market; category: ElectronicsCategory; onCategory: (category: ElectronicsCategory) => void;
  items: Product[]; budget: number; owned: string[]; constraints: Constraints; onApply: (items: Product[], name: string) => void;
}) {
  const [query, setQuery] = useState('');
  const [kind, setKind] = useState('all');
  const [compared, setCompared] = useState<string[]>([]);
  const [inspected, setInspected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState('');
  const dialog = useRef<HTMLDialogElement>(null);
  const catalog = catalogFor(market).filter(p => p.category === category);
  const types = [...new Set(catalog.map(p => String(productSpecs(p).type ?? p.category)))];
  const visible = catalog.filter(p => (kind === 'all' || productSpecs(p).type === kind) && [p.brand, p.name, p.description, ...Object.values(productSpecs(p)).map(specValue)].join(' ').toLowerCase().includes(query.toLowerCase()));
  const comparison = catalog.filter(p => compared.includes(p.id));
  const active = catalog.find(p => p.id === inspected);
  const choice = active ? productChoice(active, items, market, budget, owned, constraints) : null;
  const inPlan = active && items.some(p => p.id === active.id);
  const keys = [...new Set(comparison.flatMap(p => Object.keys(productSpecs(p))))];

  useEffect(() => {
    if (!active) return;
    const element = dialog.current;
    const trigger = document.activeElement as HTMLElement | null;
    element?.showModal();
    return () => {element?.close(); trigger?.focus();};
  }, [active]);

  function changeCategory(next: ElectronicsCategory) {onCategory(next); setQuery(''); setKind('all'); setCompared([]); setInspected(null); setFeedback('');}
  function apply() {
    if (!active || !choice?.items || inPlan) return;
    onApply(choice.items, active.name); setInspected(null); setFeedback(`${active.name} is now in your plan.`);
  }

  return <section className="electronics-catalog" aria-label="Electronics catalog">
    <div className="electronics-heading"><span className="eyebrow">YOUR TOOLS, YOUR CHOICE</span><h3>Find the right electronics.</h3><p>Compare real models for {markets[market].name}. Your budget never hides the catalog. Inspect a product before you change your plan.</p></div>
    <div className="electronics-categories" aria-label="Electronics categories">{(Object.keys(electronicsCategories) as ElectronicsCategory[]).map(c => <button key={c} aria-pressed={category === c} onClick={() => changeCategory(c)}>{electronicsCategories[c]} <span>{catalogFor(market).filter(p => p.category === c).length}</span></button>)}</div>
    <div className="electronics-filters"><label htmlFor="electronics-search">Search models<input id="electronics-search" type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Model, Bluetooth, 4K…"/></label><div className="electronics-type-field"><label htmlFor="electronics-type">Product type</label><select id="electronics-type" value={kind} onChange={e => setKind(e.target.value)}><option value="all">All types</option>{types.map(type => <option key={type}>{type}</option>)}</select></div></div>
    <p className="electronics-count" role="status">{visible.length} {electronicsCategories[category].toLowerCase()} · {currency(budget, market)} total budget · {currency(total(items), market)} currently planned</p>
    {feedback && <p role="status">{feedback}</p>}
    <div className="electronics-grid">{visible.map(p => {
      const result = productChoice(p, items, market, budget, owned, constraints);
      const included = items.some(item => item.id === p.id);
      const specs = Object.entries(productSpecs(p)).slice(0, 5);
      return <article className="electronics-card" key={p.id} data-product-id={p.id}>
        <button className="electronics-inspect" onClick={() => setInspected(p.id)} aria-label={`Details for ${p.name}`}><ProductImage product={p}/><span className="product-brand">{p.brand}</span><h4>{p.name}</h4><span className="product-brand">{String(productSpecs(p).type)}</span></button>
        <strong className="electronics-price">{price(p, market)}</strong>
        <dl className="electronics-specs">{specs.map(([key, value]) => <div key={key}><dt>{specLabel(key)}</dt><dd>{specValue(value)}</dd></div>)}</dl>
        <p className="electronics-fit">{included ? 'In this plan' : result.error ?? (result.replaced.length ? 'Can replace: ' + result.replaced.map(p => p.name).join(', ') : 'Fits your product budget')}</p>
        <div className="electronics-card-actions"><button className="secondary-button" onClick={() => setInspected(p.id)}>Details and options</button><button className="text-button" aria-pressed={compared.includes(p.id)} disabled={!compared.includes(p.id) && compared.length >= 3} onClick={() => setCompared(previous => previous.includes(p.id) ? previous.filter(id => id !== p.id) : [...previous, p.id])}>{compared.includes(p.id) ? <Check size={14}/> : null}Compare{compared.includes(p.id) ? ' selected' : ''}</button></div>
        <a className="board-buy" href={p.url} target="_blank" rel="noopener noreferrer">View at {p.retailer ?? p.brand}<ArrowUpRight size={14}/></a>
      </article>;
    })}</div>
    {visible.length === 0 && <div className="board-empty"><h4>No matching model.</h4><p>Try another type or clear the search.</p><button className="secondary-button" onClick={() => {setQuery(''); setKind('all');}}>Clear filters</button></div>}
    <section className="electronics-comparison" aria-label="Compare electronics"><h4>Compare specifications · {comparison.length} of 3</h4>{comparison.length === 0 ? <p>Select Compare on up to three models. You can compare products at any price.</p> : <><button className="text-button" onClick={() => setCompared([])}>Clear comparison</button><div className="spec-table-scroll" tabIndex={0} role="region" aria-label="Product specification comparison"><table><caption>{electronicsCategories[category]} for {markets[market].name}</caption><thead><tr><th scope="col">Specification</th>{comparison.map(p => <th key={p.id} scope="col"><button onClick={() => setInspected(p.id)}>{p.name}</button></th>)}</tr></thead><tbody><tr><th scope="row">Reference price</th>{comparison.map(p => <td key={p.id}>{price(p, market)}</td>)}</tr>{keys.map(key => <tr key={key}><th scope="row">{specLabel(key)}</th>{comparison.map(p => <td key={p.id}>{productSpecs(p)[key] === undefined ? 'Not specified' : specValue(productSpecs(p)[key])}</td>)}</tr>)}<tr><th scope="row">Local product page</th>{comparison.map(p => <td key={p.id}><a href={p.url} target="_blank" rel="noopener noreferrer">{p.retailer ?? p.brand} <ArrowUpRight size={13}/></a></td>)}</tr></tbody></table></div></>}</section>
    <p className="micro">Prices are dated references. Unknown prices stay outside plan totals. Check local availability, delivery, connector compatibility, and keyboard layout with the seller.</p>
    {active && <dialog ref={dialog} className="modal electronics-dialog" aria-labelledby="electronics-detail-title" onCancel={() => setInspected(null)}><div className="modal-head"><h2 id="electronics-detail-title">{active.name}</h2><button className="icon-btn" aria-label="Close product details" onClick={() => setInspected(null)}><X/></button></div><div className="electronics-detail"><ProductImage key={active.id} product={active} eager/><span className="product-brand">{active.brand} · {markets[market].name}</span><strong className="detail-price">{price(active, market)}</strong><p>{active.description}</p><ProductSpecifications product={active}/><ul className="product-notes">{active.notes.map(note => <li key={note}>{note}</li>)}</ul><a className="primary-button" href={active.url} target="_blank" rel="noopener noreferrer">View at {active.retailer ?? active.brand}<ArrowUpRight size={16}/></a><p className="micro">Reference checked {active.checkedAt}. This link opens the product page for {markets[market].name}. Confirm the final model and price.</p><div className="electronics-plan-action"><h3>Use in this setup</h3>{choice?.replaced.length ? <p>This replaces {choice.replaced.map(p => p.name).join(' and ')}. Any other category covered by a combo also changes.</p> : null}{choice?.error && !inPlan && <p id="product-choice-error" role="status">{choice.error} {choice.error.includes('already own') ? 'Uncheck that equipment under What you already own to replace it.' : choice.error.includes('exceeds') ? 'Increase the budget or remove other products first.' : ''}</p>}{choice?.items && !inPlan && <p>New product subtotal: <strong>{currency(total(choice.items), market)}</strong>. The reserve for extras stays protected.</p>}<button className="secondary-button" disabled={inPlan || !choice?.items} aria-describedby={choice?.error && !inPlan ? 'product-choice-error' : undefined} onClick={apply}>{inPlan ? 'Already in this plan' : choice?.replaced.length ? 'Replace in my plan' : 'Add to my plan'}</button></div></div></dialog>}
  </section>;
}
