'use client';
/* eslint-disable @next/next/no-img-element -- Manufacturer photos stay on their source hosts. */
import {useState} from 'react';
import {ImageOff, ArrowUpRight} from 'lucide-react';
import type {Product} from '@/lib/catalog';
import {currency, type Market, type Mode} from '@/lib/planner';

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
  <div className="board-intro"><h3>The products in this version</h3><p>Each number belongs to the product photo below it. Open an item to compare alternatives.</p></div>
  {items.length===0?<div className="board-empty"><h3>Start with a free reset.</h3><p>No checked product fits this budget. Keep your equipment, clear a work zone, and move the screen away from glare.</p></div>:<div className="board-grid">{items.map((p,i)=><button key={p.id} data-product-id={p.id} className={`board-product ${p.id===selected?'selected':''}`} onClick={()=>onSelect(p.id)} aria-label={`Inspect ${p.name}`} aria-pressed={p.id===selected}>
   <span className="product-number">{i+1}</span><ProductImage product={p}/><span className="board-product-copy"><small>{p.brand} · {p.category}</small><strong>{p.name}</strong><span>{p.price===null?'Price needs a check':currency(p.price,market)} <ArrowUpRight size={14}/></span></span>
  </button>)}</div>}
 </div>;
}
