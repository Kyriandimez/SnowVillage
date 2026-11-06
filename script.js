const CFG={wa:'2347070624865',wa2:'2348109389208',tel:'+2347070624865',social:{tiktok:'https://www.tiktok.com/@snowvillage_ng',instagram:'https://www.instagram.com/snowvillage_ng'}};
const PEND='Pending confirmation';
const D=(n,d,img,s)=>({name:n,desc:d,img,specs:s||[['Capacity',PEND],['Power',PEND],['Dimensions',PEND]]});
const CATS={
'commercial-chillers':{title:'Commercial Chillers',intro:'Commercial chillers for businesses that need dependable, large-scale cooling. The items below are demonstration entries until SnowVillage confirms live inventory.',items:[D('Commercial Air-Cooled Chiller','Air-cooled commercial chiller unit for large cooling loads.','assets/chiller.jpg'),D('Commercial Chiller (Compact Unit)','Compact chiller option for smaller commercial spaces.','assets/hero-refrigeration.jpg')]},
'commercial-freezers':{title:'Commercial Freezers',intro:'Glass-door display refrigeration and freezers for shops, supermarkets and beverage retail. Demonstration entries until inventory is confirmed.',items:[D('Commercial Glass-Door Freezer','Multi-door glass display freezer for retail use.','assets/freezer.jpg'),D('Double-Door Display Freezer','Double glass-door unit for showing chilled and frozen goods.','assets/cold.jpg')]},
'chest-freezers':{title:'Chest Freezers',intro:'Chest freezers for bulk frozen storage. Demonstration entries until inventory is confirmed.',items:[D('Commercial Chest Freezer','Top-opening chest freezer for bulk storage.','assets/chest.jpg'),D('Large Chest Freezer','Larger-format chest freezer option.','assets/hero-refrigeration.jpg')]},
'solar-power-solutions':{title:'Solar Power Solutions',intro:'Solar power equipment to support reliable operation of your cooling systems. Demonstration entries until inventory is confirmed.',items:[D('Solar Panel Set','Solar panels for commercial power supply.','assets/solar.jpg'),D('Solar Power System','Panels with accompanying power equipment.','assets/solar.jpg')]}};
const enc=encodeURIComponent,waUrl=m=>`https://wa.me/${CFG.wa}?text=${enc(m)}`;
function msg(p){const r=p.specs.filter(s=>s[1]!==PEND).map(s=>s[0]+': '+s[1]);return `Hello, I would like to inquire about: ${p.name} — ${r.length?r.join(', '):'specifications to be confirmed'}.`}
const esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
document.querySelectorAll('[data-wa]').forEach(a=>{a.href=`https://wa.me/${CFG.wa}`});
document.querySelectorAll('[data-call]').forEach(a=>a.href='tel:'+CFG.tel);
document.querySelectorAll('[data-call2]').forEach(a=>a.href='tel:+'+CFG.wa2);
document.querySelectorAll('[data-soc]').forEach(a=>{const u=CFG.social[a.dataset.soc];if(u){a.href=u;a.target='_blank';a.rel='noopener'}else{a.title='Profile link coming soon';a.onclick=e=>e.preventDefault()}});
const hv=document.getElementById('homeView'),cv=document.getElementById('catView');
function route(){const h=location.hash.slice(1),c=CATS[h];
if(c){hv.hidden=true;cv.hidden=false;document.title=c.title+' – SnowVillage';bcc.textContent=c.title;ct.textContent=c.title;cd.textContent=c.intro;
pg.innerHTML=c.items.map((p,i)=>`<article class="pc"><img src="${p.img}" alt="${esc(p.name)}" loading="lazy"><div class="pb"><span class="dm">DEMO PRODUCT</span><h3>${esc(p.name)}</h3><p>${esc(p.desc)}</p><div class="sp">${p.specs.map(s=>`<div><span>${esc(s[0])}</span><b class="${s[1]===PEND?'pd':''}">${esc(s[1])}</b></div>`).join('')}</div><a class="btn bp rq" target="_blank" rel="noopener noreferrer" href="${waUrl(msg(p))}">Request Now</a></div></article>`).join('');window.scrollTo(0,0)}
else{hv.hidden=false;cv.hidden=true;document.title='SnowVillage';const e=h&&document.getElementById(h);e?e.scrollIntoView():window.scrollTo(0,0)}}
function setActive(k){document.querySelectorAll('#l a').forEach(a=>a.classList.toggle('on',a.dataset.k===k))}
function sync(){const h=location.hash.slice(1);if(CATS[h])return setActive('products');let k='home';for(const s of['home','products','why','contact']){const e=document.getElementById(s);if(e&&e.getBoundingClientRect().top<=140)k=s}setActive(k)}
addEventListener('scroll',sync,{passive:true});addEventListener('hashchange',()=>{route();sync()});route();sync();
pg.addEventListener('click',e=>{const a=e.target.closest('.rq');if(a){e.preventDefault();window.open(a.href,'_blank','noopener,noreferrer')}});
function setMenu(o){l.classList.toggle('open',o);bd.classList.toggle('on',o);mb.classList.toggle('open',o);mb.setAttribute('aria-expanded',o);mb.setAttribute('aria-label',o?'Close menu':'Open menu')}
mb.onclick=e=>{e.stopPropagation();setMenu(!l.classList.contains('open'))};
bd.onclick=()=>setMenu(false);
document.addEventListener('click',e=>{if(l.classList.contains('open')&&!l.contains(e.target)&&!mb.contains(e.target))setMenu(false)});
addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});
addEventListener('hashchange',()=>setMenu(false));addEventListener('resize',()=>{if(innerWidth>980)setMenu(false)});
document.querySelectorAll('#l a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
