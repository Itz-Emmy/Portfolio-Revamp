(()=>{const e=document.querySelector(".preload"),t=()=>{e.classList.add("fadeOut"),e.style.display="none"};window.addEventListener("load",(()=>{setTimeout(t,2e3)}));const l=document.querySelector(".open"),s=document.querySelector(".close"),o=document.getElementById("dark-menu-open"),d=document.getElementById("dark-menu-close"),n=document.querySelector(".links-container"),a=(document.querySelector(".links"),document.querySelector(".top-link")),i=document.querySelector(".hero"),c=document.getElementById("nav");o.style.display="none",d.style.display="none",l.addEventListener("click",(()=>{l.style.display="none",s.style.display="block",o.style.display="none",d.style.display="none",n.style.display="block",n.style.width="100vw",i.style.position="relative",i.style.zIndex="5",i.style.paddingTop="70px",c.style.position="fixed",c.style.zIndex="999"})),s.addEventListener("click",(()=>{s.style.display="none",l.style.display="block",o.style.display="none",d.style.display="none",n.style.display="none",i.style.position="static",i.style.paddingTop="0",c.style.position="fixed"})),o.addEventListener("click",(()=>{o.style.display="none",s.style.display="none",l.style.display="none",d.style.display="block",n.style.display="block",n.style.width="100vw",i.style.position="relative",i.style.zIndex="5",i.style.paddingTop="70px",c.style.position="fixed",c.style.zIndex="999"})),d.addEventListener("click",(()=>{s.style.display="none",l.style.display="none",d.style.display="none",o.style.display="block",n.style.display="none",i.style.position="static",c.style.position="fixed"}));const y=document.querySelector(".top-link");window.addEventListener("scroll",(()=>{window.innerWidth<=768&&c.classList.add("fixed-nav");const e=window.scrollY;e>c.getBoundingClientRect().height?c.classList.add("fixed-nav"):c.classList.remove("fixed-nav"),e>500?y.classList.add("show-link"):y.classList.remove("show-link")})),document.querySelectorAll(".scroll-link").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=e.currentTarget.getAttribute("href").slice(1),a=document.getElementById(t),i=c.getBoundingClientRect().height,y=n.getBoundingClientRect().height,r=c.classList.contains("fixed-nav");let m=a.offsetTop-i;r||(m-=i),i>82&&(m+=y),window.scrollTo({left:0,top:m}),window.innerWidth<=768&&(n.style.display="none"),g.classList.contains("dark-mode")?(s.style.display="none",l.style.display="none",d.style.display="none",o.style.display="block"):(s.style.display="none",l.style.display="block")}))}));const r=document.querySelectorAll(".dark"),m=document.querySelectorAll(".light");r.forEach((e=>{e.style.display="none"}));const p=document.getElementById("toggle"),k=document.getElementsByTagName("section"),u=document.getElementById("home"),f=document.getElementById("nav"),g=document.body,h=document.querySelector(".dark-logo"),v=document.querySelector(".light-logo"),L=document.getElementById("contact"),E=document.querySelector(".footer-columns"),b=document.querySelector(".footer-bottom"),S=document.querySelectorAll("a.scroll-link"),w=window.matchMedia("(prefers-color-scheme: dark)");a.addEventListener("click",(()=>{d.style.display="none",o.style.display="block",g.classList.contains("dark-mode")&&(s.style.display="none",l.style.display="none")}));const q=(e,t)=>{e.classList.add(t),e.querySelectorAll("*").forEach((e=>{e.classList.add(t)}))},I=()=>{o.style.display="none",l.style.display="block";for(const e of k)e.classList.remove("dark-mode"),u.classList.remove("dark-mode"),f.style.background="#ffffff",g.classList.remove("dark-mode"),E.classList.remove("dark-mode"),b.classList.remove("dark-mode"),L.classList.remove("dark-mode"),v.style.display="block",h.style.display="none",a.style.color="#333333",x(e,"dark-mode"),r.forEach((e=>{e.style.display="none"})),m.forEach((e=>{e.style.display="block"}))},x=(e,t)=>{e.classList.remove(t),e.querySelectorAll("*").forEach((e=>{e.classList.remove(t)}))},B=()=>{p.checked?((()=>{o.style.display="block",l.style.display="none";for(const e of k)e.classList.add("dark-mode"),u.classList.add("dark-mode"),f.style.background="#333333",g.classList.add("dark-mode"),E.classList.add("dark-mode"),b.classList.add("dark-mode"),L.classList.add("dark-mode"),v.style.display="none",h.style.display="block",a.style.color="#ffffff",q(e,"dark-mode"),r.forEach((e=>{e.style.display="block"})),m.forEach((e=>{e.style.display="none"}))})(),S.forEach((e=>{e.style.color="#ffffff !important",e.style.backgroundImage="linear-gradient(to right, var(--primary-hover), var(--primary-hover) 50%, #ffffff 50%) !important"})),localStorage.setItem("darkMode","enabled")):I(),p.checked?localStorage.setItem("darkMode","enabled"):localStorage.setItem("darkMode","disabled")};p.addEventListener("change",B),"enabled"===localStorage.getItem("darkMode")?(p.checked=!0,B()):(p.checked=!1,I()),w.addEventListener("change",(e=>{e.matches?(p.checked=!0,B()):(p.checked=!1,I())}))})();