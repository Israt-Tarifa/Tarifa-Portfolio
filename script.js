(function(){var r=document.documentElement,n=document.getElementById('nav'),m=document.getElementById('menu'),mb=document.getElementById('mb'),tb=document.getElementById('tb');
var sv=null;try{sv=localStorage.getItem('theme')}catch(e){}
r.setAttribute('data-theme',sv||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'));
tb.onclick=function(){var x=r.getAttribute('data-theme')==='dark'?'light':'dark';r.setAttribute('data-theme',x);try{localStorage.setItem('theme',x)}catch(e){}};
function cl(){m.classList.remove('open');mb.setAttribute('aria-expanded','false');mb.textContent='☰'}
mb.onclick=function(){var o=m.classList.toggle('open');mb.setAttribute('aria-expanded',o);mb.textContent=o?'✕':'☰'};
m.querySelectorAll('a').forEach(function(a){a.onclick=cl});
document.addEventListener('keydown',function(e){if(e.key==='Escape')cl()});
function sc(){n.classList.toggle('s',scrollY>10)}addEventListener('scroll',sc,{passive:true});sc();
var it=document.querySelectorAll('.rv');
if('IntersectionObserver'in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}})},{threshold:.12});it.forEach(function(e){io.observe(e)});
var ls=[].slice.call(m.querySelectorAll('a')),ss=ls.map(function(a){return document.querySelector(a.getAttribute('href'))}).filter(Boolean);
var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)ls.forEach(function(l){l.classList.toggle('on',l.getAttribute('href')==='#'+e.target.id)})})},{rootMargin:'-45% 0px -50% 0px'});ss.forEach(function(s){so.observe(s)})}
else it.forEach(function(e){e.classList.add('show')});
document.getElementById('yr').textContent=new Date().getFullYear();
var f=document.getElementById('cf'),fn=document.getElementById('fn');
f.onsubmit=function(e){e.preventDefault();var d=new FormData(f),a=(d.get('name')||'').trim(),b=(d.get('email')||'').trim(),c=(d.get('message')||'').trim();
if(!a||!/^\S+@\S+\.\S+$/.test(b)||!c){fn.textContent='Please fill in all fields with a valid email.';return}
location.href='mailto:isratjahantarifa@gmail.com?subject='+encodeURIComponent('Portfolio contact from '+a)+'&body='+encodeURIComponent(c+'\n\nFrom: '+a+' ('+b+')');fn.textContent='Opening your email app…'};
})();
(function(){var c=document.getElementById('bg'),x=c.getContext('2d'),P=[],W,H,rm=matchMedia('(prefers-reduced-motion: reduce)').matches,run=true;
function rs(){W=c.width=innerWidth;H=c.height=innerHeight;var n=Math.min(70,Math.floor(W*H/22000));P=[];for(var i=0;i<n;i++)P.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35})}
function d(){x.clearRect(0,0,W,H);var col=getComputedStyle(document.documentElement).getPropertyValue('--ac').trim()||'#0d9488';x.fillStyle=col;x.strokeStyle=col;
for(var i=0;i<P.length;i++){var p=P[i];if(!rm){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1}
x.globalAlpha=.7;x.beginPath();x.arc(p.x,p.y,2,0,6.283);x.fill();
for(var j=i+1;j<P.length;j++){var q=P[j],dx=p.x-q.x,dy=p.y-q.y,s=dx*dx+dy*dy;if(s<19000){x.globalAlpha=(1-s/19000)*.32;x.lineWidth=1;x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke()}}}
if(!rm&&run)requestAnimationFrame(d)}
addEventListener('mousemove',function(e){var s=document.getElementById('spot').style;s.setProperty('--mx',e.clientX+'px');s.setProperty('--my',e.clientY+'px')},{passive:true});rs();d();addEventListener('resize',function(){rs();if(rm)d()});
document.addEventListener('visibilitychange',function(){run=!document.hidden;if(run&&!rm)d()});
document.getElementById('tb').addEventListener('click',function(){setTimeout(function(){if(rm)d()},0)});
})();