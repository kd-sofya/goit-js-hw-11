import{a as h,S as g,i as n}from"./assets/vendor-BGjKfUOh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const m="54229410-94c77c5f0b522302148c51193",f="https://pixabay.com/api/",y=i=>h.get(f,{params:{key:m,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data),l=document.querySelector(".gallery"),u=document.querySelector(".loader"),v=new g(".gallery a"),b=i=>{const t=i.map(({webformatURL:r,largeImageURL:o,tags:e,likes:s,views:a,comments:d,downloads:p})=>`<a href="${o}">
        <div class="card">
                <img class="card-image" src="${r}" alt="${e}" width="370" height="334"/>
            <div class="card-body">
            <span class="card-body-title">
                <p class="card-subtitle">       
                 <svg class="icon-like" width="20" height="20">
                    <use xlink:href="#icon-heart"></use>
                </svg> <span class="span-js-num">${s}</span></p>
                <p class="card-subtitle">               
                 <svg class="icon-eye" width="20" height="20">
                    <use xlink:href="#icon-eye"></use>
                 </svg> <span class="span-js-num">${a}</span></p>
                <p class="card-subtitle">               
                 <svg class="icon-com" width="20" height="20">
                    <use xlink:href="#icon-bubbles2"></use>
                 </svg> <span class="span-js-num">${d}</span></p>
                <p class="card-subtitle">               
                 <svg class="icon-down" width="20" height="20">
                    <use xlink:href="#icon-cloud-upload"></use>
                 </svg> <span class="span-js-num">${p}</span></p>
            </span>
            </div>
        </div>
        </a>`).join("");l.insertAdjacentHTML("beforeend",t),v.refresh()},L=()=>{l.innerHTML=""},S=()=>{u.classList.add("hidden")},q=()=>{u.classList.remove("hidden")},w=document.querySelector(".form"),c=document.querySelector("#input");w.addEventListener("submit",i=>{i.preventDefault();const t=c.value.trim();if(!t){n.error({position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}q(),L(),y(t).then(r=>{const o=r.hits;o.length===0?(setTimeout(()=>{n.error({position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})},1e3),c.value=""):setTimeout(()=>{b(o),c.value=""},1e3)}).catch(r=>{n.error({position:"topRight",message:"Sorry"}),console.error(r)}).finally(()=>{S()})});
//# sourceMappingURL=index.js.map
