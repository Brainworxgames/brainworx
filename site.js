(function(){
const base = location.pathname.includes('/play/') ? '../' : '';
const games=[
 {name:'Subway Surfers',file:'subway-surfers.html',img:'https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=314,height=314,fit=cover,f=auto/1c920b9279c2bedec567c1b58129ae8f/subway-surfers-logo.png'},
 {name:'Table Tennis World Tour',file:'table-tennis-world-tour.html',img:'https://imgs.crazygames.com/table-tennis-world-tour_16x9/20230908041108/table-tennis-world-tour_16x9-cover?metadata=none&quality=100&width=1200&height=630&fit=crop'},
 {name:'Rooftop Snipers',file:'rooftop-snipers.html',img:'https://imgs.crazygames.com/rooftop-snipers_16x9/20250108040440/rooftop-snipers_16x9-cover?metadata=none&quality=100&width=1200&height=630&fit=crop'},
 {name:'Deathrun 3D',file:'deathrun-3d.html',img:'https://play-lh.googleusercontent.com/h2uFBJ2Tw8vjcOoHti8diG9OA_ujp36VlXloC1ijOEecT1r5a0s46TizyAb0RwsvYqRSCEk1jTbyjystXSkHNYQ'},
 {name:'Escape Road',file:'escape-road.html',img:'https://imgs.crazygames.com/escape-road-asm_16x9/20250724105031/escape-road-asm_16x9-cover?metadata=none&quality=100&width=1200&height=630&fit=crop'},
 {name:'Crossy Road',file:'crossy-road.html',img:'https://crossy-road.io/data/image/how-to-play-crossy-road.jpg'},
 {name:'Basket Random',file:'basket-random.html',img:'https://imgs.crazygames.com/basket-random_16x9/20240617090207/basket-random_16x9-cover?metadata=none&quality=100&width=1200&height=630&fit=crop'},
 {name:'Cuphead',file:'cuphead.html',img:'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/268910/library_600x900_2x.jpg'},
 {name:'PEAK',file:'peak.html',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTPuIHHvpYh16dNzL7rD_vS_7d_awpcPIGIaHDWZ-EPg&s=10'},
 {name:'Slope',file:'slope.html',img:'https://play-lh.googleusercontent.com/sHCNSM6n19mLLnKBaEQSyLACvjwT5iZ5jOxYZB3gaYOI57Uo408NBztLMnzYUBlSmWpjPO9EaomRjWH3BQIg=w526-h296-rw'},
 {name:'Drift Hunters',file:'drift-hunters.html',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_3YHsmGlP6KxbDIwHfc-yz-7AkSo8_fitm_sGadCrMbCSFtt1hINmIbT4&s=10'},
 {name:'Clustertruck',file:'clustertruck.html',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnUExN3PmZZu64dCwAgRhJFtHfYpU4naHUaxvlsnD5xQ&s'},
 {name:'How to Fish',file:'how-to-fish.html',img:'https://gaming-cdn.com/images/products/23683/616x353/how-to-fish-pc-steam-cover.jpg?v=1787297248'},
 {name:'Minecraft 1.20.6 (Eaglercraft)',file:'minecraft-1-20-6.html',img:'https://store-images.s-microsoft.com/image/apps.608.13510798885735219.cf55aeca-e690-41e0-a88b-41b0e517a3be.c94e1bfa-1b68-4cf5-9954-f967168480b4?q=90&w=480&h=270'},
 {name:'Geometry Dash',file:'geometry-dash.html',img:'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/322170/header.jpg?t=1703006148'},
 {name:'Hollow Knight: Silksong',file:'hollow-knight-silksong.html',img:'https://static0.dualshockersimages.com/wordpress/wp-content/uploads/2025/09/img_8686.jpeg?w=1600&h=900&fit=crop'},
 {name:'Terraria',file:'terraria.html',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOq0C6sb8sq1ek9SdOKnhN5FxaBAcBGyifKQa-omKXyz5aMy16H5jsA5w&s=10'},
 {name:'DELTARUNE',file:'deltarune.html',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3VzTaYSNTqmwTOhsmRO05nl1z6dhc3hfJQSOBrwXrvE8K-zd4PQ467fI&s=10'},
 {name:'La Madriguera',file:'la-madriguera.html',img:'https://img.itch.zone/aW1nLzY5MDY1NTUuanBn/original/5%2FDOxn.jpg'},
 {name:'Kickabout',file:'kickabout.html',img:'https://images.icon-icons.com/3315/PNG/512/sports_game_sport_ball_soccer_football_icon_209369.png'},
 {name:'Plague Inc.',file:'plague-inc.html',img:'https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_PlagueIncEvolved_image1600w.jpg'},
 {name:'Doodle Jump',file:'doodle-jump.html',img:'https://upload.wikimedia.org/wikipedia/commons/e/e7/Doodle_Jump.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original'},
 {name:'Among Us',file:'among-us.html',img:'https://cdn.mos.cms.futurecdn.net/93GAa4wm3z4HbenzLbxWeQ.jpg'},
 {name:"Five Nights at Freddy’s 1",file:'fnaf-1.html',img:'https://noahstutoring.academy/images/164.jpg'},
 {name:"Five Nights at Freddy’s 2",file:'fnaf-2.html',img:'https://fnaf-2.io/data/image/options/fnaf-2-banner-fnaf2io.jpg'},
 {name:"Five Nights at Freddy’s 3",file:'fnaf-3.html',img:'https://static.wikia.nocookie.net/freddy-fazbears-pizza/images/f/fd/FNaF_3_Switch.jpg/revision/latest?cb=20210405111619'},
 {name:"Five Nights at Freddy’s 4",file:'fnaf-4.html',img:'https://external-preview.redd.it/made-a-desktop-bg-for-fnaf-4-first-time-making-something-v0-kb0uCdHothu4e7TrBO-PJUL2bnAhDNG51njHsIwVPjI.jpg?auto=webp&s=b6fb5a7a483dd7c72d183285523c02fb8eab5bc3'},
 {name:'Five Nights at Freddy’s: Sister Location',file:'fnaf-sister-location.html',img:'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/store/software/switch/70010000026223/afb4fd16215e81ad263af66ffa6c3e384092bef0d3742b2f227b35bc60fa189b'},
 {name:'Freddy Fazbear’s Pizzeria Simulator',file:'fnaf-pizzeria-simulator.html',img:'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/store/software/switch/70010000021207/88dfc4877546db18eeff30dfa891bf7ba1bbfd4544f4304341fbeafbb51c9330'},
 {name:'Ultimate Custom Night',file:'ultimate-custom-night.html',img:'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/871720/header.jpg?t=1568143255'},
 {name:'Tomb of the Mask',file:'tomb-of-the-mask.html',img:'https://noahstutoring.academy/images/182.jpg'},
 {name:'Crazy Cattle 3D',file:'crazy-cattle-3d.html',img:'https://noahstutoring.academy/images/91.jpg'},
 {name:'Wheelie Bike',file:'wheelie-bike.html',img:'https://noahstutoring.academy/images/111.jpg'},
 {name:'Moto X3M',file:'moto-x3m.html',img:'https://www.coolmathgames.com/sites/default/files/MotoX3M_OG-logo.jpg'},
 {name:'Happy Wheels',file:'happy-wheels.html',img:'https://serafimgaming.com/wp-content/themes/yootheme/cache/d3/Happy-Wheels-d3edff8f.png'},
 {name:'Tunnel Rush',file:'tunnel-rush.html',img:'https://play-lh.googleusercontent.com/FokWq1FwEEzo2fI7T4r0kY9pOU1Wjyq0HuCeMZ5GJlQ11cADDml-JE46R8jULudqIBZtP9eNuba4eo54sQBh=w526-h296-rw'},
 {name:'Getaway Shootout',file:'getaway-shootout.html',img:'https://imgs.crazygames.com/getaway-shootout_16x9/20241230044730/getaway-shootout_16x9-cover?metadata=none&quality=100&width=1200&height=630&fit=crop'},
 {name:'Celeste',file:'celeste.html',img:'https://img.itch.zone/aW1nLzEwMjQyNTgucG5n/original/kDcm5O.png'},
];
window.BW_GAMES=games;

const THEMES=['pink','purple','blue','green','orange','mono'];
function applyTheme(theme){
  const selected=THEMES.includes(theme)?theme:'pink';
  document.documentElement.dataset.theme=selected;
  localStorage.setItem('bw_theme',selected);
  document.querySelectorAll('[data-theme-choice]').forEach(btn=>btn.classList.toggle('selected',btn.dataset.themeChoice===selected));
}
function setupThemes(){
  const saved=localStorage.getItem('bw_theme')||'pink';
  applyTheme(saved);
  document.querySelectorAll('[data-theme-choice]').forEach(btn=>btn.addEventListener('click',()=>applyTheme(btn.dataset.themeChoice)));
}
function fallingBalls(){
  if(document.querySelector('.falling-balls')) return;
  const layer=document.createElement('div'); layer.className='falling-balls'; layer.setAttribute('aria-hidden','true');
  const count=window.innerWidth<760?17:28;
  for(let i=0;i<count;i++){
    const ball=document.createElement('span'); ball.className='falling-ball';
    const size=7+Math.random()*22, x=Math.random()*100, duration=12+Math.random()*13, delay=-(Math.random()*duration), opacity=.18+Math.random()*.45, blur=Math.random()<.3?1.2:0;
    const driftA=(Math.random()*90-45).toFixed(1)+'px', driftB=(Math.random()*120-60).toFixed(1)+'px', driftC=(Math.random()*90-45).toFixed(1)+'px', driftD=(Math.random()*140-70).toFixed(1)+'px';
    ball.style.cssText=`--size:${size.toFixed(1)};--x:${x.toFixed(2)};--duration:${duration.toFixed(2)}s;--delay:${delay.toFixed(2)}s;--opacity:${opacity.toFixed(2)};--blur:${blur};--drift-a:${driftA};--drift-b:${driftB};--drift-c:${driftC};--drift-d:${driftD};`;
    layer.appendChild(ball);
  }
  document.body.prepend(layer);
}
function esc(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
function gameUrl(file){return 'play/'+file.replace(/\.html?$/,'')+'.html'}
function randomGame(){return games[Math.floor(Math.random()*games.length)]}
function navigateGame(file){location.href=gameUrl(file)}
function renderGames(list,target){
  if(!target)return;
  const randomCard={name:'Random',random:true,img:base+'assets/brainworks-logo.png'};
  const shown=[randomCard,...list];
  target.innerHTML=shown.map((g,i)=>{
    const initials=g.name.split(/\s+/).map(x=>x[0]).join('').slice(0,3).toUpperCase();
    const href=g.random?'#random':gameUrl(g.file);
    return `<article class="game-card ${g.random?'random-card':''}" style="animation-delay:${i*35}ms" data-random="${g.random?'1':'0'}"><a href="${href}" class="game-thumb-link" aria-label="${g.random?'Choose a random game':'Play '+esc(g.name)}"><div class="game-thumb">${g.img?`<img class="game-thumb-img" src="${esc(g.img)}" alt="" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"><div class="thumb-fallback">${esc(initials)}</div>`:`<div class="thumb-initials">${esc(initials)}</div>`}<div class="thumb-shine"></div></div></a><div class="game-body"><div class="game-name">${esc(g.name)}</div><a class="play-btn" href="${href}">${g.random?'Random':'Play'}</a></div></article>`;
  }).join('');
  bindCardEffects(target);
}
function bindCardEffects(target){
  target.querySelectorAll('.game-card').forEach(card=>{
    const thumb=card.querySelector('.game-thumb');
    const img=card.querySelector('.game-thumb-img');
    const reset=()=>{
      card.style.setProperty('--card-rx','0deg'); card.style.setProperty('--card-ry','0deg');
      if(img){img.style.setProperty('--tilt-x','0deg');img.style.setProperty('--tilt-y','0deg');}
      if(thumb){thumb.style.setProperty('--mx','50%');thumb.style.setProperty('--my','50%');}
    };
    if(thumb){
      thumb.addEventListener('pointermove',e=>{
        const r=thumb.getBoundingClientRect(), nx=(e.clientX-r.left)/r.width, ny=(e.clientY-r.top)/r.height;
        const x=Math.max(-1,Math.min(1,(nx-.5)*2)), y=Math.max(-1,Math.min(1,(ny-.5)*2));
        card.style.setProperty('--card-rx',(x*1.2).toFixed(2)+'deg');
        card.style.setProperty('--card-ry',(-y*1.0).toFixed(2)+'deg');
        thumb.style.setProperty('--mx',(nx*100).toFixed(1)+'%'); thumb.style.setProperty('--my',(ny*100).toFixed(1)+'%');
        if(img){img.style.setProperty('--tilt-x',(x*7).toFixed(2)+'deg');img.style.setProperty('--tilt-y',(-y*5).toFixed(2)+'deg');}
      });
      thumb.addEventListener('pointerleave',reset);
    }
  });
}
function setupGames(){
  const grid=document.getElementById('gameGrid'),empty=document.getElementById('emptyState'),input=document.getElementById('searchInput');
  if(!grid)return;
  bindCardEffects(grid);
  const bindRandom=()=>grid.querySelectorAll('.random-card a').forEach(a=>{if(a.dataset.randomBound==='1')return;a.dataset.randomBound='1';a.addEventListener('click',e=>{e.preventDefault();const g=randomGame();navigateGame(g.file);});});
  bindRandom();
  if(input)input.addEventListener('input',()=>{const q=input.value.trim().toLowerCase();const filtered=games.filter(g=>g.name.toLowerCase().includes(q));if(!q){location.reload();return;}renderGames(filtered,grid);bindRandom();if(empty)empty.hidden=filtered.length>0});
}
function setupHome(){
  const form=document.getElementById('homeSearch'),input=document.getElementById('homeInput'),results=document.getElementById('searchResults');
  const tag=document.getElementById('homeTagline');
  if(tag){const msgs=['hi teach','hey its me','working your brain'];tag.textContent=msgs[Math.floor(Math.random()*msgs.length)];}
  if(!form||!input)return;
  const update=()=>{const q=input.value.trim().toLowerCase();if(!q){results.hidden=true;results.innerHTML='';return}const m=games.filter(g=>g.name.toLowerCase().includes(q)).slice(0,7);results.innerHTML=m.length?m.map(g=>`<a class="quick-result" href="${gameUrl(g.file)}"><span>${esc(g.name)}</span><small>PLAY →</small></a>`).join(''):`<div class="quick-result"><span>No g@m3s found</span><small>Try another search</small></div>`;results.hidden=false};
  input.addEventListener('input',update); form.addEventListener('submit',e=>{e.preventDefault();const q=input.value.trim().toLowerCase();const m=games.find(g=>g.name.toLowerCase().includes(q));if(m)navigateGame(m.file)});
}
function ensureFaviconLink(){
  let link=document.getElementById('siteFavicon')||document.querySelector('link[rel~="icon"]');
  if(!link){link=document.createElement('link');link.id='siteFavicon';link.rel='icon';document.head.appendChild(link);} else link.id='siteFavicon';
  return link;
}
function applySettings(){
  const title=localStorage.getItem('bw_title'); let icon=localStorage.getItem('bw_icon');
  const legacyYT='https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png';
  if(icon===legacyYT){icon='assets/youtube-favicon.svg';localStorage.setItem('bw_icon',icon);}
  if(title)document.title=title;
  const link=ensureFaviconLink();
  let href=icon||'assets/brainworks-logo.png';
  if(!/^(https?:|data:|blob:)/i.test(href)){href=base+href.replace(/^\.\//,'');}
  link.href=href; link.type=href.endsWith('.svg')?'image/svg+xml':'image/png';
}
function selectPreset(url,name,status){localStorage.setItem('bw_icon',url);applySettings();document.querySelectorAll('[data-tab-icon]').forEach(btn=>btn.classList.toggle('selected',btn.dataset.tabIcon===url));if(status)status.textContent=`${name} icon selected.`;}
function setupSettings(){
  const title=document.getElementById('tabTitle'),icon=document.getElementById('tabIcon'),save=document.getElementById('saveSettings'),reset=document.getElementById('resetSettings'),status=document.getElementById('settingsStatus'); if(!save)return;
  title.value=localStorage.getItem('bw_title')||'BrainWorks';
  document.querySelectorAll('[data-tab-icon]').forEach(btn=>{btn.classList.toggle('selected',btn.dataset.tabIcon===localStorage.getItem('bw_icon'));btn.addEventListener('click',()=>selectPreset(btn.dataset.tabIcon,btn.dataset.tabName,status));});
  save.addEventListener('click',()=>{localStorage.setItem('bw_title',title.value.trim()||'BrainWorks');const file=icon&&icon.files&&icon.files[0];if(file){const r=new FileReader();r.onload=()=>{localStorage.setItem('bw_icon',r.result);applySettings();status.textContent='Saved.'};r.readAsDataURL(file);}else{applySettings();status.textContent='Saved.';}});
  if(reset)reset.addEventListener('click',()=>{localStorage.removeItem('bw_title');localStorage.removeItem('bw_icon');title.value='BrainWorks';if(icon)icon.value='';applySettings();document.querySelectorAll('[data-tab-icon]').forEach(btn=>btn.classList.remove('selected'));status.textContent='Reset.';});
}
function setupBrowserNav(){
  let nav=document.querySelector('.browser-nav-wrap');
  const isPlay=location.pathname.includes('/play/');
  const prefix=isPlay?'../':'';
  if(!nav){
    const current=location.pathname.endsWith('/settings.html')?'settings':location.pathname.endsWith('/classes.html')?'games':'home';
    nav=document.createElement('div'); nav.className='browser-nav-wrap'; nav.innerHTML=`<div class="browser-nav"><div class="browser-window-dots" aria-hidden="true"><i></i><i></i><i></i></div><nav class="browser-tabs" aria-label="Site tabs"><a class="browser-tab ${current==='home'?'active':''}" data-nav-tab="home" href="${prefix}index.html"><span class="tab-favicon"><img src="${prefix}assets/brainworks-logo.png" alt=""></span><span>BrainWorks</span></a><a class="browser-tab ${current==='games'?'active':''}" data-nav-tab="games" href="${prefix}classes.html"><span class="tab-favicon"><span class="mini-play">▶</span></span><span>g@m3s</span></a><a class="browser-tab ${current==='settings'?'active':''}" data-nav-tab="settings" href="${prefix}settings.html"><span class="tab-favicon">⚙</span><span>Settings</span></a></nav><div class="browser-address"><span class="address-lock">⌁</span><span class="address-text">brainworks</span><span class="address-dot">•</span></div></div>`;
    document.body.prepend(nav);
  }
  let transition=document.querySelector('.tab-transition');
  if(!transition){
    transition=document.createElement('div'); transition.className='tab-transition'; transition.innerHTML=`<div class="transition-orb"></div><img src="${prefix}assets/brainworks-logo.png" alt="BrainWorks"><div class="transition-name">BrainWorks</div>`; document.body.appendChild(transition);
  }
  nav.querySelectorAll('.browser-tab').forEach(tab=>{
    if(tab.dataset.bound==='1')return; tab.dataset.bound='1';
    tab.addEventListener('click',e=>{
      if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
      const target=new URL(tab.href,location.href); if(target.href===location.href)return;
      e.preventDefault(); transition.classList.add('show'); setTimeout(()=>location.href=target.href,430);
    });
  });
}

function cursor(){if(matchMedia('(pointer:fine)').matches){document.body.classList.add('no-cursor');const dot=document.createElement('div'),ring=document.createElement('div');dot.className='cursor-dot';ring.className='cursor-ring';document.body.append(dot,ring);let x=-100,y=-100,rx=-100,ry=-100;addEventListener('mousemove',e=>{x=e.clientX;y=e.clientY;dot.style.left=x+'px';dot.style.top=y+'px'});function loop(){rx+=(x-rx)*.18;ry+=(y-ry)*.18;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(loop)}loop();addEventListener('mousedown',()=>{ring.classList.remove('click');void ring.offsetWidth;ring.classList.add('click')});}}
applyTheme(localStorage.getItem('bw_theme')||'pink');applySettings();fallingBalls();setupThemes();setupBrowserNav();setupGames();setupHome();setupSettings();cursor();
})();
