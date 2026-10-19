export const electronicsCategories = {keyboard:'Keyboards', mouse:'Mice', monitor:'Monitors'} as const;
export const catalogCategories = {...electronicsCategories, laptop:'Computers', desk:'Desks', chair:'Chairs', rug:'Rugs', curtain:'Curtains and fabrics', lighting:'Lighting', mat:'Desk mats', storage:'Organizers', stand:'Screen and laptop supports', plant:'Plants', cable:'Cable management', shelf:'Shelves', footrest:'Footrests'} as const;
export type CatalogCategory = keyof typeof catalogCategories;
export const catalogGroups: {name:string;categories:CatalogCategory[]}[] = [
  {name:'Electronics',categories:['keyboard','mouse','monitor','laptop']},
  {name:'Desks and chairs',categories:['desk','chair']},
  {name:'Rugs and fabrics',categories:['rug','curtain']},
  {name:'Desk elements',categories:['lighting','mat','storage','stand','cable','shelf','plant']},
  {name:'Comfort',categories:['footrest']},
];
