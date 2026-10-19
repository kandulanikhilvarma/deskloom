import type {Product} from './catalog';
import {catalogFor, isEligible, validateAddition, type Constraints, type Market, type Mode} from './planner';

export type RoomIdea = {
  id:string;name:string;mode:Mode;photoId:number;source:string;photographer:string;alt:string;
  summary:string;takeaways:string[];fit:string;categories:string[];preferences:string[];
};
export const roomIdeas:RoomIdea[] = [
  {id:'daylight',name:'A desk beside the window',mode:'calm',photoId:4231428,source:'https://www.pexels.com/photo/a-desk-near-the-window-4231428/',photographer:'Taryn Elliott',alt:'A photographed home workspace beside a window with plants and a wooden desk',summary:'Daylight, a small work zone, and a view beyond the screen.',takeaways:['Place the screen at a right angle to the window where possible.','Use a sheer fabric to soften light; check screen reflections.','Keep plants away from electronics and match them to the available light.'],fit:'Good for a bright corner. Check direct sun, radiator clearance, and window access.',categories:['curtain','plant','lighting','rug','cable','storage'],preferences:['natural','white','light','tiphede','lill']},
  {id:'everyday',name:'An everyday work desk',mode:'focus',photoId:6476587,source:'https://www.pexels.com/photo/simple-workspace-at-home-6476587/',photographer:'Mikael Blomkvist',alt:'A photographed home computer desk with a task light and everyday objects',summary:'A useful screen, reachable inputs, and space for the work itself.',takeaways:['Keep the keyboard and mouse close enough to avoid reaching.','Adjust the screen so you can read it without leaning forward.','Keep a clear route for cables and daily essentials.'],fit:'Good for regular computer work. Chair adjustment and screen distance come before decor.',categories:['lighting','cable','storage','footrest','mat'],preferences:['work','adjustable','dark','compact']},
  {id:'creative',name:'A lived-in creative corner',mode:'studio',photoId:9903237,source:'https://www.pexels.com/photo/desk-with-items-in-home-office-9903237/',photographer:'Ron Lach',alt:'A photographed home desk with warm wood and personal creative objects',summary:'Warm materials, useful storage, and a few objects that belong to you.',takeaways:['Leave room for paper, tools, or a notebook beside the keyboard.','Choose one place for daily tools instead of filling the surface.','Try a flatwoven rug only if the chair rolls safely.'],fit:'Good for mixed digital and hands-on work. Keep personal objects outside the main reach zone.',categories:['storage','mat','rug','lighting','shelf','cable'],preferences:['natural','wood','warm','lohals','storage']},
  {id:'compact',name:'A small apartment workspace',mode:'focus',photoId:8004018,source:'https://www.pexels.com/photo/modern-home-office-8004018/',photographer:'Darina Belonogova',alt:'A photographed compact home workspace with a desk and modern computer equipment',summary:'A compact surface with enough room to sit, move, and close the workday.',takeaways:['Measure desk depth as well as width. A large display still needs viewing distance.','Keep chair clearance and the walking route open.','Use compact inputs before you add more desk furniture.'],fit:'Good for a shared room or shallow alcove. Confirm actual room measurements before purchase.',categories:['storage','cable','lighting','stand'],preferences:['compact','small-space','micke','pebble']},
  {id:'evening',name:'A softer evening corner',mode:'calm',photoId:10883157,source:'https://www.pexels.com/photo/home-office-interior-10883157/',photographer:'Elena Golovchenko',alt:'A photographed home office with warm light, a desk, and organized shelves',summary:'Gentle room light and a clear desk without a bright screen in a dark room.',takeaways:['Add room light around the screen and check for reflected glare.','Keep a task light out of your direct line of sight.','Use block-out fabric only when it suits the room and existing curtain support.'],fit:'Good for evening work. Adjust light to the task; warm color alone does not make a setup healthier.',categories:['lighting','curtain','storage','rug','cable'],preferences:['warm','beige','bengta','stoense']},
  {id:'light-storage',name:'Light surfaces, useful storage',mode:'studio',photoId:4680351,source:'https://www.pexels.com/photo/computer-on-white-desk-4680351/',photographer:'KATRIN BOLOVTSOVA',alt:'A photographed bright home office with a white desk, shelves, and a computer',summary:'Light finishes with a home for books and supplies beyond the desktop.',takeaways:['Store less-used items away from the main work surface.','Confirm anchoring and wall permissions before you choose shelves.','Keep bright surfaces out of reflected screen glare.'],fit:'Good for books and mixed supplies. Wall fixings and room fit need their own check.',categories:['storage','shelf','lighting','mat','plant','cable'],preferences:['white','light','storage','micke']},
];
export const roomPhotoUrl = (idea:RoomIdea,width=1400) => `https://images.pexels.com/photos/${idea.photoId}/pexels-photo-${idea.photoId}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;

export function planFromRoomIdea(idea:RoomIdea,market:Market,budget:number,owned:string[],constraints:Constraints):Product[] {
  let items:Product[]=[];
  const candidates=catalogFor(market).filter(p=>isEligible(p,owned,constraints));
  const score=(p:Product)=>idea.preferences.reduce((sum,word)=>sum+Number((p.name+' '+p.description+' '+p.tags.join(' ')+' '+(p.material??'')).toLowerCase().includes(word)),0);
  for(const category of ['desk','chair','laptop','keyboard','mouse','monitor',...idea.categories]) {
    if(owned.includes(category)||items.some(p=>p.category===category||p.coversCategories?.includes(category)))continue;
    if(category==='laptop'&&owned.some(c=>['computer','desktop'].includes(c)))continue;
    const matches=candidates.filter(p=>p.category===category).sort((a,b)=>score(b)-score(a)||(a.price??Infinity)-(b.price??Infinity));
    for(const product of matches){const result=validateAddition(product,items,market,budget,owned,constraints);if(result.items){items=result.items;break;}}
  }
  return items;
}

export const workstationSources = {
  monitors:'https://www.osha.gov/etools/computer-workstations/components/monitors',
  chairs:'https://www.osha.gov/etools/computer-workstations/components/chairs',
  environment:'https://www.osha.gov/etools/computer-workstations/workstation-environment',
};
