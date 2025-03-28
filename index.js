import{a as b,S as w,i as l}from"./assets/vendor-DUzvakyU.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const P={key:"49359598-9a4c243d7cce225cafe13dd3f",image_type:"photo",per_page:15,orientation:"horizontal",safesearch:"true"};function f(e,r){return b.get("https://pixabay.com/api/",{params:{page:r,q:e,...P}})}const S=document.querySelector(".gallery");function j(e){const r=e.map(o=>{const{webformatURL:t,largeImageURL:s,tags:n,likes:h,views:y,comments:L,downloads:v}=o;return`<li class="gallery-item">
            <a href="${s}"><img class="item-image" src="${t}" alt="${n}"></a>
                <ul class = 'image-info'>
                    <li>
                        <p class="item-likes"><span class="info-accent">Likes</span>${h}</p>
                    </li>
                    <li>
                        <p class="item-views"><span class="info-accent">Views</span>${y}</p>
                    </li>
                    <li>
                        <p class="item-comments"><span class="info-accent">Comments</span>${L}</p>
                    </li>
                    <li>
                        <p class="item-downloads"><span class="info-accent">Downloads</span>${v}</p>
                    </li>
                </ul>
        </li>`}).join("");S.insertAdjacentHTML("beforeend",r),new w(".gallery a").refresh()}const m=document.querySelector(".gallery"),u=document.querySelector(".form"),c=document.querySelector(".loader"),q=document.querySelector(".container"),i=document.querySelector(".load-more-button");let p,d=1;u.addEventListener("submit",async e=>{e.preventDefault();const r=e.currentTarget.elements.searchText.value.trim();if(x(r)){d=1,c.classList.remove("js-hidden"),i.classList.add("js-hidden");try{m.innerHTML="";const a=await f(r,d);p=a.data.totalHits;const o=a.data.hits;g(o),O(r)}catch{l.info({message:"Sorry, we have a problems, try later"})}}});function x(e){return e===""?(l.error({title:"Error",message:"Please, input data to search."}),!1):!0}function g(e){if(!F(e)){c.classList.add("js-hidden"),u.reset();return}j(e),$(),c.classList.add("js-hidden"),q.classList.remove("center"),u.reset(),T()}function F(e){return e.length===0?(l.error({message:"Sorry, there are no images matching your search query. Please try again!"}),!1):!0}function $(){m.children.length<p?i.classList.remove("js-hidden"):(i.classList.add("js-hidden"),l.error({message:"We`re sorry, but you`ve reached the end of search results."}))}function O(e){i.addEventListener("click",async()=>{d+=1,i.classList.add("js-hidden"),c.classList.remove("js-hidden");try{const r=(await f(e,d)).data.hits;g(r),i.classList.remove("js-hidden"),c.classList.add("js-hidden")}catch{l.info({message:"Sorry, we have a problems, try later"})}})}function T(){const e=m.querySelector(".gallery-item");if(e){const r=e.getBoundingClientRect().height;window.scrollBy({top:2*r,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
