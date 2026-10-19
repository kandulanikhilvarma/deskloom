'use client';
import {ArrowRight} from 'lucide-react';
import {catalogFor, type Market} from '@/lib/planner';
import {catalogCategories, type CatalogCategory} from '@/lib/catalog-categories';
import {ProductImage} from './setup-preview';

export default function ProductFamilyLauncher({market,placement,onBrowse,onIdeas}: {market:Market;placement:'mobile'|'desktop';onBrowse:(category:CatalogCategory)=>void;onIdeas:()=>void}) {
  return <section className={`electronics-launcher ${placement}-product-launcher`} aria-label="Explore workspace products"><div><h3>Choose every part of your space.</h3><p>Compare tools, furniture, rugs, and room fabrics. Keep the pieces that already work.</p></div><div className="electronics-shortcuts">{(['keyboard','desk','chair','rug','curtain','lighting'] as CatalogCategory[]).map(category=>{
    const local=catalogFor(market).filter(product=>product.category===category);
    return <button key={category} onClick={()=>onBrowse(category)}>{local[0]&&<ProductImage key={local[0].id} product={local[0]}/>}<span><strong>{category==='keyboard'?'Electronics':category==='lighting'?'Desk elements':catalogCategories[category]}</strong><small>{local.length} {category==='keyboard'?'keyboards plus mice and monitors':'local choices'} · photos and details</small></span><ArrowRight size={16}/></button>;
  })}</div><button className="text-button" onClick={onIdeas}>Explore six real-room ideas <ArrowRight size={14}/></button></section>;
}
