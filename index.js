import{a as w,S as P,i as c}from"./assets/vendor-DUzvakyU.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const j={key:"49359598-9a4c243d7cce225cafe13dd3f",image_type:"photo",per_page:15,orientation:"horizontal",safesearch:"true"};async function f(e,s){return await w.get("https://pixabay.com/api/",{params:{page:s,q:e,...j}})}const p=document.querySelector(".gallery"),S=new P(".gallery-link");function q(e){const s=e.map(o=>{const{webformatURL:l,largeImageURL:t,tags:r,likes:i,views:L,comments:v,downloads:b}=o;return`<li class="gallery-item">
            <a  class='gallery-link' href="${t}"><img class="item-image" src="${l}" alt="${r}"></a>
                <ul class = 'image-info'>
                    <li>
                        <p class="item-likes"><span class="info-accent">Likes</span>${i}</p>
                    </li>
                    <li>
                        <p class="item-views"><span class="info-accent">Views</span>${L}</p>
                    </li>
                    <li>
                        <p class="item-comments"><span class="info-accent">Comments</span>${v}</p>
                    </li>
                    <li>
                        <p class="item-downloads"><span class="info-accent">Downloads</span>${b}</p>
                    </li>
                </ul>
        </li>`}).join("");p.insertAdjacentHTML("beforeend",s),S.refresh()}function x(){p.innerHTML=""}const g=document.querySelector(".gallery"),m=document.querySelector(".form"),n=document.querySelector(".loader"),F=document.querySelector(".container"),a=document.querySelector(".load-more-button");let d="",h=0,u=1;m.addEventListener("submit",async e=>{if(e.preventDefault(),d=e.currentTarget.elements.searchText.value.trim(),!!$(d)){u=1,n.classList.remove("js-hidden"),a.classList.add("js-hidden");try{const s=await f(d,u);h=s.data.totalHits;const o=s.data.hits;x(),y(o)}catch{c.info({message:"Sorry, we have a problems, try later"})}}});function $(e){return e===""?(c.error({title:"Error",message:"Please, input data to search."}),!1):!0}function y(e){if(!O(e)){n.classList.add("js-hidden"),m.reset();return}q(e),T(),n.classList.add("js-hidden"),F.classList.remove("center"),m.reset()}function O(e){return e.length===0?(a.classList.add("js-hidden"),c.error({message:"Sorry, there are no images matching your search query. Please try again!"}),!1):!0}function T(){g.children.length<h?a.classList.remove("js-hidden"):(a.classList.add("js-hidden"),c.error({message:"We`re sorry, but you`ve reached the end of search results."}))}a.addEventListener("click",async()=>{D(d)});async function D(e){u+=1,a.classList.add("js-hidden"),n.classList.remove("js-hidden");try{const s=(await f(e,u)).data.hits;y(s),H(),a.classList.remove("js-hidden"),n.classList.add("js-hidden")}catch{c.info({message:"Sorry, we have a problems, try later"})}}function H(){const e=g.querySelector(".gallery-item");if(e){const s=e.getBoundingClientRect().height;window.scrollBy({top:2*s,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
