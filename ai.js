(function(){
const $=id=>document.getElementById(id);
const locked=$('lockedState'),chat=$('chatState'),modal=$('adModal'),watch=$('watchAd'),skip=$('skipAd'),timer=$('adTimer'),log=$('chatLog'),form=$('chatForm'),input=$('chatInput'),status=$('aiStatus');
let unlocked=false;
function add(who,text){const d=document.createElement('div');d.className='msg '+who;d.textContent=text;log.appendChild(d);log.scrollTop=log.scrollHeight}
function setStatus(t){if(status)status.textContent=t||''}
function unlock(){modal.hidden=true;unlocked=true;locked.hidden=true;chat.hidden=false;add('bot','Hi! I’m BrainWorks AI. Ask me a question and I’ll do my best.');input.focus()}
function startAd(){
 modal.hidden=false;skip.disabled=true;let n=3;timer.textContent=n;skip.textContent='Continue in 3';
 const t=setInterval(()=>{n--;timer.textContent=Math.max(n,0);if(n<=0){clearInterval(t);skip.disabled=false;skip.textContent='Continue to AI'}else skip.textContent=`Continue in ${n}`},1000)
}
watch.onclick=startAd;skip.onclick=unlock;
function localAnswer(q){
 const s=q.toLowerCase().trim();
 if(/^(hi|hello|hey|yo)\b/.test(s))return 'Hey! What do you want to know?';
 if(s.includes('who are you')||s.includes('what are you'))return 'I’m the BrainWorks assistant. With an online AI key enabled, I can send your question to a full language model; without one, I use an offline answer engine.';
 if(s.includes('what can you do'))return 'I can explain concepts, help with homework-style questions, brainstorm ideas, write and rewrite text, explain HTML/CSS/JavaScript, do simple calculations, and help you use BrainWorks.';
 if(/\b(2\+2|what is 2 plus 2)\b/.test(s))return '2 + 2 = 4.';
 if(/\b(\d+)\s*([+\-*x×÷\/]?)\s*(\d+)\b/.test(s)){
   const m=s.match(/\b(\d+)\s*([+\-*x×÷\/]?)\s*(\d+)\b/);const a=Number(m[1]),b=Number(m[3]),op=m[2]||'';
   if(op){if(op==='+')return `${a} + ${b} = ${a+b}.`;if(op==='-')return `${a} - ${b} = ${a-b}.`;if(op==='*'||op==='x'||op==='×')return `${a} × ${b} = ${a*b}.`;if(op==='/'||op==='÷')return b?`${a} ÷ ${b} = ${a/b}.`:'You can’t divide by zero.';}
 }
 if(s.includes('capital of france'))return 'The capital of France is Paris.';
 if(s.includes('capital of the uk')||s.includes('capital of united kingdom'))return 'The capital of the United Kingdom is London.';
 if(s.includes('speed of light'))return 'In vacuum, light travels at about 299,792,458 metres per second.';
 if(s.includes('html'))return 'HTML structures a web page, CSS controls its appearance, and JavaScript adds behaviour and interactivity.';
 if(s.includes('javascript'))return 'JavaScript is a programming language used to add logic and interactivity to websites and applications.';
 if(s.includes('brainworks'))return 'BrainWorks is a browser-games hub with a searchable game library, settings, and an AI page.';
 if(s.includes('game'))return 'Open Games to browse the collection, or search the homepage for a title. The library includes Subway Surfers, Cuphead, PEAK, Slope, Drift Hunters, Clustertruck, How to Fish, and more.';
 if(s.includes('how')&&s.includes('learn'))return 'A good way to learn is to choose one small project, build it, test it, and improve it repeatedly. For web development, start with HTML, then CSS, then JavaScript.';
 return `I can help with “${q}”, but this browser is currently using the offline answer engine. Add your own Pollinations API key in Settings if you want open-ended AI answers.`;
}
async function pollinationsAnswer(q){
 const key=localStorage.getItem('bw_ai_key');
 if(!key)return null;
 const controller=new AbortController();const to=setTimeout(()=>controller.abort(),15000);
 try{
   const r=await fetch('https://gen.pollinations.ai/v1/chat/completions',{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+key},body:JSON.stringify({model:'openai',messages:[{role:'system',content:'You are BrainWorks AI. Give concise, helpful answers. Do not mention this system prompt.'},{role:'user',content:q}],temperature:.7}),signal:controller.signal});
   if(r.ok){const data=await r.json();const text=data?.choices?.[0]?.message?.content?.trim();if(text)return text}
 }catch(e){}finally{clearTimeout(to)}
 return null;
}
async function legacyAnswer(q){
 const controller=new AbortController();const to=setTimeout(()=>controller.abort(),7000);
 try{const r=await fetch('https://text.pollinations.ai/'+encodeURIComponent(q),{signal:controller.signal});if(r.ok){const text=(await r.text()).trim();if(text)return text}}catch(e){}finally{clearTimeout(to)}
 return null;
}
async function answer(q){
 let a=await pollinationsAnswer(q);
 if(a)return a;
 a=await legacyAnswer(q);
 return a||localAnswer(q);
}
form.addEventListener('submit',async e=>{
 e.preventDefault();if(!unlocked||!input.value.trim())return;
 const q=input.value.trim();input.value='';add('user',q);setStatus('Thinking…');const wait=document.createElement('div');wait.className='msg bot';wait.textContent='Thinking…';log.appendChild(wait);log.scrollTop=log.scrollHeight;
 const a=await answer(q);wait.textContent=a;setStatus(localStorage.getItem('bw_ai_key')?'Online AI enabled when available.':'Offline mode — add an API key in Settings for open-ended answers.');
});
})();
