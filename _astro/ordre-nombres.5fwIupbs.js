const _=`
math974-ordre-nombres {
  display: block;
  padding: 4px 0;
  user-select: none;
  -webkit-user-select: none;
}
math974-ordre-nombres .on-dir {
  font-size: 0.78em;
  color: #6b7280;
  text-align: center;
  margin-bottom: 6px;
  font-style: italic;
}
math974-ordre-nombres .on-list {
  display: flex;
  flex-direction: column;
  gap: 5px;
  touch-action: none;
}
math974-ordre-nombres .on-list.horiz {
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 18px;
}
math974-ordre-nombres .on-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 12px;
  background: #f9fafb;
  border: 1.5px solid #d1d5db;
  border-radius: 8px;
  cursor: grab;
  transition: border-color 0.2s, background 0.2s;
  box-sizing: border-box;
}
math974-ordre-nombres .on-list.horiz .on-item {
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px 6px;
  text-align: center;
  min-width: 0;
}
math974-ordre-nombres .on-item:active { cursor: grabbing; }
math974-ordre-nombres .on-handle {
  color: #9ca3af;
  font-size: 1.1em;
  line-height: 1;
  flex-shrink: 0;
}
math974-ordre-nombres .on-list.horiz .on-handle {
  font-size: 0.85em;
}
math974-ordre-nombres .on-name {
  font-weight: 500;
  color: #374151;
  font-size: 0.85em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
math974-ordre-nombres .on-val {
  font-weight: 700;
  color: #1e293b;
  font-size: 1em;
  margin-left: auto;
  white-space: nowrap;
}
math974-ordre-nombres .on-list.horiz .on-val {
  margin-left: 0;
  font-size: 1.1em;
}
math974-ordre-nombres .on-ghost {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 12px;
  background: #fff;
  border: 2px solid #3b82f6;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(59,130,246,0.25);
  cursor: grabbing;
  box-sizing: border-box;
  pointer-events: none;
  z-index: 9999;
  position: fixed;
}
math974-ordre-nombres .on-ghost .on-val { margin-left: auto; }
math974-ordre-nombres .on-list.horiz .on-item:not(:last-child)::before {
  content: attr(data-chevron);
  position: absolute;
  right: -14px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.1em;
  font-weight: 700;
  color: #9ca3af;
  pointer-events: none;
  z-index: 1;
}
math974-ordre-nombres .on-list.horiz.dragging .on-item::before { content: none; }
math974-ordre-nombres .on-correct {
  border-color: #16a34a !important;
  background: #f0fdf4 !important;
}
math974-ordre-nombres .on-incorrect {
  border-color: #dc2626 !important;
  background: #fef2f2 !important;
}
math974-ordre-nombres .on-correct::after,
math974-ordre-nombres .on-incorrect::after {
  position: absolute;
  top: 2px;
  right: 5px;
  font-size: 0.7em;
  font-weight: 900;
  line-height: 1;
  pointer-events: none;
}
math974-ordre-nombres .on-correct::after   { content: '😀'; color: #16a34a; }
math974-ordre-nombres .on-incorrect::after { content: '😞'; color: #dc2626; }
`;function z(){if(document.getElementById("on-styles"))return;const s=document.createElement("style");s.id="on-styles",s.textContent=_,document.head.appendChild(s)}function v(s,t){return Math.round(s/t)*t}function w(s,t){if(!t||t>=1)return String(Math.round(s));const e=Math.max(0,Math.round(-Math.log10(t)));return s.toFixed(e).replace(".",",")}function C(s){const t=[...s];for(let e=t.length-1;e>0;e--){const o=Math.floor(Math.random()*(e+1));[t[e],t[o]]=[t[o],t[e]]}return t}function $(s,t){return[...s].sort((e,o)=>t==="asc"?e.value-o.value:o.value-e.value)}class L extends HTMLElement{static get observedAttributes(){return["items","direction","unit","step","layout"]}connectedCallback(){z(),this._solutionVisible=!1,this._locked=!1,this._render()}attributeChangedCallback(){this.isConnected&&(this._solutionVisible=!1,this._locked=!1,this._render())}_cfg(){return{items:JSON.parse(this.getAttribute("items")||"[]"),direction:this.getAttribute("direction")||"desc",unit:this.getAttribute("unit")||"",step:parseFloat(this.getAttribute("step")||"1"),layout:this.getAttribute("layout")||"vertical"}}_itemHtml(t,e,o){const n=t.label?`<span class="on-name">${t.label}</span>`:"",r=`<span class="on-val">${t.display??w(t.value,e)}${o?" "+o:""}</span>`;return`<span class="on-handle">⠿</span>${n}${r}`}_render(){const{items:t,direction:e,unit:o,step:n,layout:r}=this._cfg();if(!t.length){this.innerHTML="";return}const d=e==="random"?Math.random()<.5?"asc":"desc":e||"desc";this._direction=d;const l=$(t,d);this.dataset.solution=l.map(a=>a.short??a.label).join(","),this.dataset.placeMode="1";let i=C(t);i.map(a=>a.short??a.label).join(",")===this.dataset.solution&&i.length>1&&([i[0],i[1]]=[i[1],i[0]]);const f=`Classer dans l'ordre ${d==="asc"?"croissant":"décroissant"} <span style="font-weight:400">(${r==="horizontal"?d==="asc"?"du plus petit au plus grand":"du plus grand au plus petit":d==="asc"?"du plus petit en haut, au plus grand en bas":"du plus grand en haut, au plus petit en bas"})</span>`,c=r==="horizontal"?"on-list horiz":"on-list";this.innerHTML=`
      <div class="on-dir">${f}</div>
      <div class="${c}">
        ${i.map(a=>`<div class="on-item" data-short="${a.short??a.label}" data-chevron="${d==="asc"?"<":">"}">${this._itemHtml(a,n,o)}</div>`).join("")}
      </div>
    `,this._setupDrag(r)}validate(){const{items:t}=this._cfg(),e=$(t,this._direction||"desc").map(o=>o.short??o.label);this.querySelectorAll(".on-item").forEach((o,n)=>{o.classList.toggle("on-correct",o.dataset.short===e[n]),o.classList.toggle("on-incorrect",o.dataset.short!==e[n])})}toggleSolution(){this._solutionVisible=!this._solutionVisible;const t=this.querySelector(".on-list"),{items:e}=this._cfg(),o=this._direction||"desc";if(this._solutionVisible){this._studentOrder=[...t.querySelectorAll(".on-item")];const n=$(e,o),r=[...t.querySelectorAll(".on-item")];n.forEach(d=>{const l=r.find(i=>i.dataset.short===(d.short??d.label));l&&(t.appendChild(l),l.classList.add("on-correct"),l.classList.remove("on-incorrect"))}),this._locked=!0}else(this._studentOrder||[]).forEach(n=>{t.appendChild(n),n.classList.remove("on-correct","on-incorrect")}),this._studentOrder=null,this._locked=!1;return this._solutionVisible}_setupDrag(t){const e=this.querySelector(".on-list"),o=t==="horizontal";let n=null,r=null,d=null,l=0,i=0,m=0,p=0;e.addEventListener("pointerdown",c=>{if(this._locked||r)return;const a=c.target.closest(".on-item");if(!a)return;c.preventDefault();const h=a.getBoundingClientRect();l=c.clientX,i=c.clientY,m=h.left,p=h.top,d=c.pointerId,n=document.createElement("div"),n.className="on-ghost",n.innerHTML=a.innerHTML,n.style.top=h.top+"px",n.style.left=h.left+"px",n.style.width=h.width+"px",n.style.height=h.height+"px",o&&(n.style.flexDirection="column",n.style.alignItems="center",n.style.textAlign="center"),document.body.appendChild(n),a.style.opacity="0.35",e.classList.add("dragging"),r=a,e.setPointerCapture(d)}),e.addEventListener("pointermove",c=>{if(!r||c.pointerId!==d)return;c.preventDefault(),n.style.top=p+c.clientY-i+"px",n.style.left=m+c.clientX-l+"px";const a=[...e.querySelectorAll(".on-item")].filter(u=>u!==r);let h=!1;for(const u of a){const g=u.getBoundingClientRect(),x=o?g.left+g.width/2:g.top+g.height/2;if((o?c.clientX:c.clientY)<x){e.insertBefore(r,u),h=!0;break}}h||e.appendChild(r)});const f=c=>{!r||c.pointerId!==d||(r.style.opacity="",e.classList.remove("dragging"),n.remove(),n=null,r=null,d=null)};e.addEventListener("pointerup",f),e.addEventListener("pointercancel",f)}}customElements.get("math974-ordre-nombres")||customElements.define("math974-ordre-nombres",L);const E="north";function k(s){const t=["A","B","C","D"],e=[...Array(s.length).keys()];for(let o=e.length-1;o>0;o--){const n=Math.floor(Math.random()*(o+1));[e[o],e[n]]=[e[n],e[o]]}return s.map((o,n)=>({...o,short:t[e[n]]}))}function A(s,t,e){const[o,n]=t.baseRange??[3,7],[r,d]=t.dixRange??[1,7],l=o+Math.floor(Math.random()*(n-o+1)),i=r+Math.floor(Math.random()*(d-r+1)),m=1+Math.floor(Math.random()*8),p=2+Math.floor(Math.random()*7),f=Math.random()<.5?1:-1,c=Math.random()<.5,a=Math.random()<.5,h=l*1e3+i*100+m*10,u=(h+p)/1e3,g=(h+p+f)/1e3,x=c?(h+10)/1e3:h/1e3,y=a?(l*1e3+(i+1)*100)/1e3:(l*1e3+i*100)/1e3,b=[{value:u,display:`${l},${i}${m}${p}`},{value:g,display:`${l},${i}${m}${p+f}`},{value:x,display:c?`${l},${i}${m+1}`:`${l},${i}${m}`},{value:y,display:a?`${l},${i+1}`:`${l},${i}`}];return{...s,items:k(b),direction:e,layout:t.layout??"horizontal",unit:t.unit??""}}function S(s,t,e){const o=t?.direction??e?.direction??s.direction??"random",n=o==="random"?Math.random()<.5?"asc":"desc":o;if(t?.trapType==="centieme"||t?.trapType==="millieme")return A(s,t,n);if(!t||!t.medianRange)return{...s,direction:n};const r=t.step??s.step??1,d=t.unit??s.unit??"",l=t.layout??s.layout??"vertical",[i,m]=t.medianRange??[200,800],p=v(i+Math.random()*(m-i),r),[f,c]=t.deltaRange??[20,100],a=Math.max(r,v(f+Math.random()*(c-f),r));let u=[-1.5,-.5,.5,1.5].map(b=>v(p+b*a,r));const g=Math.min(...u);if(g<=0){const b=v(-g+r,r);u=u.map(M=>v(M+b,r))}const x=["A","B","C","D"],y=u.map((b,M)=>({short:x[M],label:"",value:b}));return{...s,items:y,direction:n,unit:d,step:r,layout:l}}export{L as default,E as defaultPosition,S as randomize};
