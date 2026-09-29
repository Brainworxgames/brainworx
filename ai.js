(function(){
const $=id=>document.getElementById(id),log=$('chatLog'),form=$('chatForm'),input=$('chatInput'),status=$('aiStatus');
function add(who,text){const d=document.createElement('div');d.className='msg '+who;d.textContent=text;log.appendChild(d);log.scrollTop=log.scrollHeight}
function setStatus(t){if(status)status.textContent=t||''}
function localAnswer(q){
 const s=q.toLowerCase().trim();
 if(/^(hi|hello|hey|yo)\b/.test(s))return 'Hey! What do you want to know?';
 if(s.includes('who are you')||s.includes('what are you'))return 'I’m BrainWorks AI. I can answer common questions offline, and can use Pollinations when an API key is added in Settings.';
 if(s.includes('what can you do'))return 'I can explain concepts, help with homework-style questions, brainstorm, rewrite text, explain code, do simple calculations, and help you use BrainWorks.';
 const m=s.match(/\b(-?\d+(?:\.\d+)?)\s*([+\-*x×÷\/])\s*(-?\d+(?:\.\d+)?)\b/);
 if(m){const a=Number(m[1]),b=Number(m[3]),op=m[2];if(op==='+')return `${a} + ${b} = ${a+b}.`;if(op==='-')return `${a} - ${b} = ${a-b}.`;if(op==='*'||op==='x'||op==='×')return `${a} × ${b} = ${a*b}.`;if(op==='/'||op==='÷')return b?`${a} ÷ ${b} = ${a/b}.`:'You can’t divide by zero.';}
 if(s.includes('capital of france'))return 'The capital of France is Paris.';
 if(s.includes('capital of the uk')||s.includes('capital of united kingdom'))return 'The capital of the United Kingdom is London.';
 if(s.includes('html'))return 'HTML structures a web page, CSS controls its appearance, and JavaScript adds behaviour and interactivity.';
 if(s.includes('javascript'))return 'JavaScript is a programming language used to add logic and interactivity to websites and applications.';
 if(s.includes('brainworks'))return 'BrainWorks is a browser-games hub with a searchable game library, settings, and an AI page.';
 if(s.includes('game'))return 'Open Games to browse the full collection, or search from the homepage.';
 return `I can give a limited offline answer about “${q}”. For open-ended AI answers, add a Pollinations API key in Settings.`;
}
async function onlineAnswer(q){
 const key=localStorage.getItem('bw_ai_key'); if(!key)return null;
 const controller=new AbortController(),to=setTimeout(()=>controller.abort(),20000);
 try{
  const r=await fetch('https://gen.pollinations.ai/v1/chat/completions',{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+key},body:JSON.stringify({model:'openai/gpt-5.4-nano',messages:[{role:'system',content:'You are BrainWorks AI. Give concise, helpful answers.'},{role:'user',content:q}],temperature:.7}),signal:controller.signal});
  if(r.ok){const data=await r.json();return data?.choices?.[0]?.message?.content?.trim()||null}
 }catch(e){}finally{clearTimeout(to)} return null;
}
async function answer(q){return await onlineAnswer(q)||localAnswer(q)}
add('bot','Hi! I’m BrainWorks AI. Ask me a question.');
setStatus(localStorage.getItem('bw_ai_key')?'Online AI key detected.':'Offline mode. Add a Pollinations API key in Settings for open-ended answers.');
form.addEventListener('submit',async e=>{e.preventDefault();if(!input.value.trim())return;const q=input.value.trim();input.value='';add('user',q);const wait=document.createElement('div');wait.className='msg bot';wait.textContent='Thinking…';log.appendChild(wait);log.scrollTop=log.scrollHeight;const a=await answer(q);wait.textContent=a;setStatus(localStorage.getItem('bw_ai_key')?'Online AI enabled when available.':'Offline mode.');});
})();