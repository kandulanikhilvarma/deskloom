'use client';
/* eslint-disable @next/next/no-img-element -- Manufacturer photos stay on their source hosts. */
import {useState} from 'react';
import {ImageOff, ArrowUpRight} from 'lucide-react';
import type {Product} from '@/lib/catalog';
import {currency, missingEssentials, modes, total, type Market, type Mode} from '@/lib/planner';

export const scenes:Record<Mode,{src:string;alt:string;materials:string}>={
 calm:{src:'/scenes/calm.webp',alt:'Quiet Mornings room concept with a pale oak desk, flat monitor, white keyboard, and daylight',materials:'Pale oak · flat display · soft daylight'},
 focus:{src:'/scenes/focus.webp',alt:'Room to Focus room concept with a graphite desk, curved ultrawide monitor, black keyboard, and architectural lighting',materials:'Graphite · curved ultrawide · concealed cables'},
 studio:{src:'/scenes/studio.webp',alt:'Creative Corner room concept with a walnut desk, two flat displays, compact keyboard, and warm lighting',materials:'Walnut · studio displays · warm light'},
};

export function ProductImage({product,className='',eager=false}:{product:Product;className?:string;eager?:boolean}){
 const [failed,setFailed]=useState(false);
 return <span className={`retail-image ${className}`}>
  {product.imageUrl&&!failed?<img src={product.imageUrl} alt={`${product.brand} ${product.name} — retailer product photo`} loading={eager?'eager':'lazy'} referrerPolicy="no-referrer" onError={()=>setFailed(true)}/>:<span className="photo-unavailable"><ImageOff size={22}/><span>Photo unavailable</span></span>}
 </span>;
}

export function ProductBoard({items,market,selected,onSelect}:{items:Product[];market:Market;selected:string|null;onSelect:(id:string)=>void}){
 return <div className="product-board">
  <div className="board-intro"><h3>The products in this version</h3><p>Inspect a model to change it, or open its local retailer link. These are the actual suggested products.</p></div>
  {items.length===0?<div className="board-empty"><h3>Start with a free reset.</h3><p>No checked product fits this budget. Keep your equipment, clear a work zone, and move the screen away from glare.</p></div>:<div className="board-grid">{items.map((p,i)=><article key={p.id} data-product-id={p.id} className={`board-product ${p.id===selected?'selected':''}`}><button className="product-inspect" onClick={()=>onSelect(p.id)} aria-label={`Inspect ${p.name}`} aria-pressed={p.id===selected}>
   <span className="product-number">{i+1}</span><ProductImage product={p}/><span className="board-product-copy"><small>{p.brand} · {p.category}</small><strong>{p.name}</strong><span>{p.price===null?'Price needs a check':currency(p.price,market)} <ArrowUpRight size={14}/></span></span>
  </button><a className="board-buy" href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`Buy ${p.name} at ${p.retailer??p.brand}`}>View at {p.retailer??p.brand} <ArrowUpRight size={14}/></a></article>)}</div>}
 </div>;
}

export function SetupComparison({versions,market,owned,selected,onChoose}:{versions:Record<Mode,Product[]>;market:Market;owned:string[];selected:Mode;onChoose:(mode:Mode)=>void}){
 return <section className="setup-comparison" aria-label="Compare setup products">
  <div className="comparison-intro"><h3>Compare the actual products</h3><p>Each column is a separate plan. Low budgets can share essentials or leave gaps; a style choice cannot create extra buying power.</p></div>
  <div className="comparison-grid">{(Object.keys(modes) as Mode[]).map(mode=>{
   const items=versions[mode];const missing=missingEssentials(owned,items);
   return <article className="comparison-version" key={mode} data-mode={mode}>
    <h4>{modes[mode].name}</h4><p>{modes[mode].description}</p><strong>{currency(total(items),market)}</strong><span>{items.length} additions · {missing.length?'Partial setup':'Essentials covered'}</span>
    {missing.length>0&&<p className="comparison-missing">Still needed: {missing.join(', ')}.</p>}
    <button className={selected===mode?'primary-button':'secondary-button'} onClick={()=>onChoose(mode)} aria-label={`Edit ${modes[mode].name}`}>{selected===mode?'Edit current version':'Choose this version'}</button>
    {items.length===0?<p>No product fits. Start with a free reset.</p>:<ul>{items.map(product=><li key={product.id} data-product-id={product.id}><ProductImage product={product}/><div><strong>{product.name}</strong><span>{product.price===null?'Price needs a check':currency(product.price,market)}</span><a href={product.url} target="_blank" rel="noopener noreferrer" aria-label={`Buy ${product.name} for ${modes[mode].name}`}>{product.retailer??product.brand} <ArrowUpRight size={13}/></a></div></li>)}</ul>}
   </article>;
  })}</div>
 </section>;
}
