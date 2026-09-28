(function(){
const games=[
 {name:'Subway Surfers',file:'subway-surfers.html',img:'https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=314,height=314,fit=cover,f=auto/1c920b9279c2bedec567c1b58129ae8f/subway-surfers-logo.png'},
 {name:'Table Tennis World Tour',file:'table-tennis-world-tour.html',img:'https://imgs.crazygames.com/table-tennis-world-tour_16x9/20230908041108/table-tennis-world-tour_16x9-cover?metadata=none&quality=100&width=1200&height=630&fit=crop'},
 {name:'Rooftop Snipers',file:'rooftop-snipers.html',img:'https://imgs.crazygames.com/rooftop-snipers_16x9/20250108040440/rooftop-snipers_16x9-cover?metadata=none&quality=100&width=1200&height=630&fit=crop'},
 {name:'Deathrun 3D',file:'deathrun-3d.html',img:'https://play-lh.googleusercontent.com/h2uFBJ2Tw8vjcOoHti8diG9OA_ujp36VlXloC1ijOEecT1r5a0s46TizyAb0RwsvYqRSCEk1jTbyjystXSkHNYQ'},
 {name:'Escape Road',file:'escape-road.html',img:'https://imgs.crazygames.com/escape-road-asm_16x9/20250724105031/escape-road-asm_16x9-cover?metadata=none&quality=100&width=1200&height=630&fit=crop'},
 {name:'Crossy Road',file:'crossy-road.html',img:'https://crossy-road.io/data/image/how-to-play-crossy-road.jpg'},
 {name:'Bad Piggies',file:'bad-piggies.html',img:'https://dordle.io/bad-piggies/wp-content/uploads/2024/04/bad-piggies-game.jpg'},
 {name:'Basket Random',file:'basket-random.html',img:'https://basketrandomgame.io/wp-content/uploads/2025/01/basket-random-game.jpg'},
 {name:'Cuphead',file:'cuphead.html',img:'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/268910/library_600x900_2x.jpg'},
 {name:'PEAK',file:'peak.html',img:''},
 {name:'Slope',file:'slope.html',img:''},
 {name:'Drift Hunters',file:'drift-hunters.html',img:''},
 {name:'Clustertruck',file:'clustertruck.html',img:''},
 {name:'How to Fish',file:'how-to-fish.html',img:''}
];
window.BW_GAMES=games;
function esc(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
function gameUrl(file){return 'play/'+file.replace(/\.html?$/,'')+'.html'}
function renderGames(list,target){
 if(!target)return;
 target.innerHTML=list.map((g,i)=>{
   const initials=g.name.split(/\s+/).map(x=>x[0]).join('').slice(0,3).toUpperCase();
   return `<article class="game-card" style="animation-delay:${i*35}ms"><a href="${gameUrl(g.file)}" class="game-thumb-link" aria-label="Play ${esc(g.name)}"><div class="game-thumb" ${g.img?`style="background-image:url('${g.img}')"`:''}>${g.img?'':`<div class="thumb-initials">${esc(initials)}</div>`}</div></a><div class="game-body"><div class="game-name">${esc(g.name)}</div><a class="play-btn" href="${gameUrl(g.file)}">Play</a></div></article>`
 }).join('');
}
function setupGames(){
 const grid=document.getElementById('gameGrid'),empty=document.getElementById('emptyState'),input=document.getElementById('searchInput');
 if(!grid)return;
 renderGames(games,grid);
 if(input)input.addEventListener('input',()=>{const q=input.value.trim().toLowerCase();const filtered=games.filter(g=>g.name.toLowerCase().includes(q));renderGames(filtered,grid);if(empty)empty.hidden=filtered.length>0});
}
function setupHome(){
 const form=document.getElementById('homeSearch'),input=document.getElementById('homeInput'),results=document.getElementById('searchResults');
 if(!form||!input)return;
 const update=()=>{const q=input.value.trim().toLowerCase();if(!q){results.hidden=true;results.innerHTML='';return}const m=games.filter(g=>g.name.toLowerCase().includes(q)).slice(0,7);results.innerHTML=m.length?m.map(g=>`<a class="quick-result" href="${gameUrl(g.file)}"><span>${esc(g.name)}</span><small>PLAY →</small></a>`).join(''):`<div class="quick-result"><span>No games found</span><small>Try another search</small></div>`;results.hidden=false};
 input.addEventListener('input',update);
 form.addEventListener('submit',e=>{e.preventDefault();const q=input.value.trim().toLowerCase();const m=games.find(g=>g.name.toLowerCase().includes(q));if(m)location.href=gameUrl(m.file)});
}
function applySettings(){
 const title=localStorage.getItem('bw_title');const icon=localStorage.getItem('bw_icon');
 if(title)document.title=title;
 if(icon){let link=document.getElementById('siteFavicon');if(!link){link=document.createElement('link');link.id='siteFavicon';link.rel='icon';document.head.appendChild(link)}link.href=icon}
}
function setupSettings(){
 const title=document.getElementById('tabTitle'),icon=document.getElementById('tabIcon'),aiKey=document.getElementById('aiKey'),save=document.getElementById('saveSettings'),reset=document.getElementById('resetSettings'),status=document.getElementById('settingsStatus');
 if(!save)return;
 title.value=localStorage.getItem('bw_title')||'BrainWorks';
 if(aiKey)aiKey.value=localStorage.getItem('bw_ai_key')||'';
 save.addEventListener('click',()=>{
   localStorage.setItem('bw_title',title.value.trim()||'BrainWorks');
   if(aiKey)localStorage.setItem('bw_ai_key',aiKey.value.trim());
   const file=icon.files&&icon.files[0];
   if(file){const r=new FileReader();r.onload=()=>{localStorage.setItem('bw_icon',r.result);applySettings();status.textContent='Saved.'};r.readAsDataURL(file)}
   else{applySettings();status.textContent='Saved.'}
 });
 reset.addEventListener('click',()=>{localStorage.removeItem('bw_title');localStorage.removeItem('bw_icon');localStorage.removeItem('bw_ai_key');title.value='BrainWorks';if(aiKey)aiKey.value='';icon.value='';applySettings();status.textContent='Reset.'});
}
function cursor(){
 if(matchMedia('(pointer:fine)').matches){
   document.body.classList.add('no-cursor');const dot=document.createElement('div'),ring=document.createElement('div');dot.className='cursor-dot';ring.className='cursor-ring';document.body.append(dot,ring);
   let x=-100,y=-100,rx=-100,ry=-100;addEventListener('mousemove',e=>{x=e.clientX;y=e.clientY;dot.style.left=x+'px';dot.style.top=y+'px'});
   function loop(){rx+=(x-rx)*.18;ry+=(y-ry)*.18;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(loop)}loop();
   addEventListener('mousedown',()=>{ring.classList.remove('click');void ring.offsetWidth;ring.classList.add('click')});
 }
}
applySettings();setupGames();setupHome();setupSettings();cursor();
})();
