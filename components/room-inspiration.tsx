'use client';
/* eslint-disable @next/next/no-img-element -- Credited photographs stay on the photographer platform CDN. */
import {useState} from 'react';
import {ArrowUpRight, ImageOff} from 'lucide-react';
import type {Product} from '@/lib/catalog';
import {roomIdeas, roomPhotoUrl, planFromRoomIdea, workstationSources, type RoomIdea} from '@/lib/room-ideas';
import {currency, markets, missingEssentials, total, type Constraints, type Market} from '@/lib/planner';

export function RoomThumbnail({src,alt}: {src:string;alt:string}) {
  const [failed,setFailed]=useState(false);
  return failed?<span className="room-thumbnail-failure"><ImageOff size={18}/>Photo unavailable</span>:<img src={src} alt={alt} loading="lazy" referrerPolicy="no-referrer" onError={()=>setFailed(true)}/>;
}

export function RoomPhoto({idea,eager=false}: {idea:RoomIdea;eager?:boolean}) {
  const [state,setState]=useState<'loading'|'ready'|'failed'>('loading');
  return <figure className="room-photo">{state!=='failed'?<><img src={roomPhotoUrl(idea)} alt={idea.alt} loading={eager?'eager':'lazy'} referrerPolicy="no-referrer" onLoad={()=>setState('ready')} onError={()=>setState('failed')}/>{state==='loading'&&<span className="room-photo-status">Load room photograph…</span>}</>:<div className="room-photo-failure"><ImageOff/><p>This photograph could not load.</p><a href={idea.source} target="_blank" rel="noopener noreferrer">Open the original photograph <ArrowUpRight size={14}/></a></div>}<figcaption>Photo: <a href={idea.source} target="_blank" rel="noopener noreferrer">{idea.photographer} / Pexels <ArrowUpRight size={12}/></a></figcaption></figure>;
}

export default function RoomInspiration({market,budget,owned,constraints,onApply}: {market:Market;budget:number;owned:string[];constraints:Constraints;onApply:(idea:RoomIdea,items:Product[])=>void}) {
  const [active,setActive]=useState('all');
  const ideas=roomIdeas.filter(idea=>active==='all'||idea.id===active);
  return <section className="room-inspiration" aria-label="Real room inspiration">
    <div className="inspiration-heading"><h3>Real rooms. Ideas you can make your own.</h3><p>Six photographed spaces, with practical ideas and local product plans for {markets[market].name}. These are reference photographs, not generated rooms or exact product matches.</p></div>
    <label className="room-idea-filter" htmlFor="room-idea">Explore a room idea<select id="room-idea" value={active} onChange={e=>setActive(e.target.value)}><option value="all">All six room ideas</option>{roomIdeas.map(idea=><option key={idea.id} value={idea.id}>{idea.name}</option>)}</select></label>
    <div className="room-stories">{ideas.map(idea=>{const items=planFromRoomIdea(idea,market,budget,owned,constraints);const missing=missingEssentials(owned,items);return <article className="room-story" key={idea.id} data-room-idea={idea.id}>
      <RoomPhoto idea={idea}/><div className="room-story-copy"><h4>{idea.name}</h4><p className="room-story-summary">{idea.summary}</p><ul>{idea.takeaways.map(tip=><li key={tip}>{tip}</li>)}</ul><p className="room-fit-note">{idea.fit}</p><div className="room-plan-summary"><strong>{currency(total(items),market)}</strong><span>{items.length} local products · dated prices</span></div>{missing.length>0&&<p className="room-missing">Partial setup: {missing.join(', ')} still needed.</p>}<details className="room-product-details"><summary>See the suggested products and links</summary><ul>{items.map(product=><li key={product.id}><a href={product.url} target="_blank" rel="noopener noreferrer">{product.name} <ArrowUpRight size={13}/></a><span>{currency(product.price!,market)}</span></li>)}</ul>{!items.length&&<p>No checked purchase fits. Start with the free changes above or adjust your budget.</p>}</details><button className="secondary-button" onClick={()=>onApply(idea,items)}>Use this local product plan</button><p className="micro">This replaces the products in one direction. Your budget and owned equipment stay the same. Undo restores its previous list.</p></div>
    </article>;})}</div>
    <section className="comfort-source-note"><h4>Comfort comes from fit, light, and movement.</h4><p>Adjust the chair so your feet have support. Keep the keyboard and mouse within comfortable reach. Set the screen where you can read it without leaning, with its top at or below eye level. Check glare as daylight changes.</p><p>These photos are inspiration, not ergonomic assessments. A warm color, a plant, or an expensive chair does not establish a health benefit.</p><div><a href={workstationSources.monitors} target="_blank" rel="noopener noreferrer">OSHA screen guidance <ArrowUpRight size={13}/></a><a href={workstationSources.chairs} target="_blank" rel="noopener noreferrer">OSHA chair guidance <ArrowUpRight size={13}/></a><a href={workstationSources.environment} target="_blank" rel="noopener noreferrer">Workstation environment <ArrowUpRight size={13}/></a></div></section>
    <section className="community-references"><h4>Explore how other people solve it.</h4><p>Community discussions informed the themes: personal objects, a useful rug, warm room light, and furniture that fits. Opinions are not product verification.</p><a href="https://www.reddit.com/r/desksetup/comments/1rk5713/new_home_office_need_advice/" target="_blank" rel="noopener noreferrer">A new home office: storage, lighting, and a rug <ArrowUpRight size={13}/></a><a href="https://www.reddit.com/r/Workspaces/comments/1b00z6k/" target="_blank" rel="noopener noreferrer">Making a workspace feel more personal <ArrowUpRight size={13}/></a><a href="https://www.reddit.com/r/ikeaPCstations/comments/1jeg7yz/so_happy_with_my_new_mittzon_setup/" target="_blank" rel="noopener noreferrer">A real MITTZON setup and furniture discussion <ArrowUpRight size={13}/></a></section>
    <p className="micro">Photographs retain their creators’ rights. <a href="https://www.pexels.com/license/" target="_blank" rel="noopener noreferrer">Pexels photo license</a>. No creator endorsement is implied.</p>
  </section>;
}
