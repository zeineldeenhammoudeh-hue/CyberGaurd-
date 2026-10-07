const boot=document.getElementById('boot');addEventListener('load',()=>setTimeout(()=>boot.classList.add('hide'),850));
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');const p=e.target.closest('.panel');if(p)p.classList.add('active')}}),{threshold:.16});document.querySelectorAll('.reveal').forEach(e=>obs.observe(e));
addEventListener('scroll',()=>document.querySelector('.nav').classList.toggle('solid',scrollY>60));
const menu=document.querySelector('.menu'),mobile=document.querySelector('.mobile-nav');menu.onclick=()=>mobile.classList.toggle('open');mobile.querySelectorAll('a').forEach(a=>a.onclick=()=>mobile.classList.remove('open'));
document.getElementById('downloadBtn').onclick=()=>alert("CyberGuard for Windows is coming soon. The download will be enabled after the final build is tested.");
document.querySelectorAll('details').forEach(d=>d.addEventListener('toggle',()=>{if(d.open)document.querySelectorAll('details').forEach(x=>{if(x!==d)x.open=false})}));
