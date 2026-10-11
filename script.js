const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('#primary-nav');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'✕':'☰';});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='☰';}));
const screens=[['dashboard','Security Dashboard'],['scanner','PC Scanner'],['password','Password Security'],['ai','CyberGuard AI'],['updates','Windows Updates'],['startup','Startup Apps']];
const lightbox=document.querySelector('#lightbox'),lightboxImage=document.querySelector('#lightbox-img'),lightboxTitle=document.querySelector('#lightbox-title'),lightboxCount=document.querySelector('#lightbox-count');
let selected=0;
function renderScreen(){const [file,title]=screens[selected];lightboxImage.src=`assets/${file}.webp`;lightboxImage.alt=`Full-size ${title} screenshot`;lightboxTitle.textContent=title;lightboxCount.textContent=`${selected+1} / ${screens.length}`;}
document.querySelectorAll('[data-screen]').forEach(button=>button.addEventListener('click',()=>{selected=screens.findIndex(s=>s[0]===button.dataset.screen);renderScreen();lightbox.showModal();}));
document.querySelector('#close-lightbox').addEventListener('click',()=>lightbox.close());
document.querySelector('#prev-screen').addEventListener('click',()=>{selected=(selected+screens.length-1)%screens.length;renderScreen();});
document.querySelector('#next-screen').addEventListener('click',()=>{selected=(selected+1)%screens.length;renderScreen();});
lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close();});
document.addEventListener('keydown',e=>{if(!lightbox.open)return;if(e.key==='ArrowRight'){selected=(selected+1)%screens.length;renderScreen();}if(e.key==='ArrowLeft'){selected=(selected+screens.length-1)%screens.length;renderScreen();}});
