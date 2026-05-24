import{parseRange as v,evalExpr as T,fmt as B}from"./utils.MftNdmoG.js";import{a as X}from"./fullscreen-viewer.Deick_IN.js";import"./editor.CJZspgfY.js";const I="north",Q=!0,P=`
math974-linearite-tableau {
  display: block;
  position: relative;
  padding: 32px 4px;
  font-family: inherit;
  user-select: none;
  -webkit-user-select: none;
}

.lt-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
}

.lt-table {
  border-collapse: collapse;
  flex: 1;
}

.lt-hd {
  background: #bfdbfe;
  border: 2px solid #93c5fd;
  padding: 0.4rem 0.7rem;
  font-size: 0.76em;
  font-weight: 600;
  color: #1e3a5f;
  white-space: pre-line;
  max-width: 130px;
}

.lt-cell {
  border: 2px solid #cbd5e1;
  padding: 0.45rem 0.5rem;
  text-align: center;
  font-size: 1em;
  font-weight: 700;
  color: #1e293b;
  cursor: pointer;
  min-width: 50px;
  transition: background 0.12s, border-color 0.12s;
}

.lt-cell:not(.lt-unk):hover { background: #f0f9ff; border-color: #93c5fd; }
.lt-cell.lt-hi { background: #dbeafe; border-color: #3b82f6; }

.lt-cell.lt-unk {
  background: #fef9c3;
  border-color: #eab308;
  cursor: default;
}

.lt-cell.lt-unk input {
  background: transparent;
  border: none;
  outline: none;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
  text-align: center;
  width: 3.5ch;
  color: inherit;
}

.lt-cell.lt-unk input:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.lt-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: visible;
}

@keyframes lt-fadex {
  0%   { opacity: 1; }
  60%  { opacity: 1; }
  100% { opacity: 0; }
}
.lt-fx { animation: lt-fadex 0.7s ease-out forwards; }

.lt-ops {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  flex-shrink: 0;
}
.lt-op-btn {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 2px solid #cbd5e1;
  background: white;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  color: #64748b;
  line-height: 1;
  padding: 0;
  transition: border-color 0.1s, background 0.1s;
}
.lt-op-btn:hover { border-color: #93c5fd; }
.lt-op-btn.lt-op-active {
  border-color: #2563eb;
  background: #dbeafe;
  color: #1d4ed8;
}
.lt-reset-btn { color: #ef4444; border-color: #fca5a5; }
.lt-reset-btn:hover { border-color: #ef4444 !important; background: #fef2f2; }
`;function D(){if(document.getElementById("lt-styles"))return;const x=document.createElement("style");x.id="lt-styles",x.textContent=P,document.head.appendChild(x)}class O extends HTMLElement{static get observedAttributes(){return["headers","rows"]}connectedCallback(){D(),this._render()}attributeChangedCallback(){this.isConnected&&this._render()}_cfg(){try{const t=JSON.parse(this.getAttribute("headers")||"[]"),e=JSON.parse(this.getAttribute("rows")||"[]").map(s=>s.map(o=>o==="?"||o===null?null:o));return{headers:t,rows:e}}catch{return{headers:[],rows:[]}}}_render(){const{headers:t=[],rows:e=[]}=this._cfg();if(this._sel=null,!e.length){this.innerHTML="";return}this._op||(this._op="+"),this._connected=!1,this._unk=null,e.forEach((a,n)=>a.forEach((u,h)=>{u===null&&(this._unk={ri:n,ci:h})}));let s=0;if(this._unk){const{ri:a,ci:n}=this._unk,u=e[0][n];for(let h=0;h<e[0].length;h++){const p=e[0][h],f=e[a][h];if(h!==n&&p!=null&&f!=null&&p!==0){s=u*(f/p);break}}}const o=B(s),m=["+","-"].map(a=>`<button class="lt-op-btn${this._op===a?" lt-op-active":""}" data-op="${a}">${a==="-"?"−":"+"}</button>`).join("");let r='<div class="lt-wrap"><table class="lt-table"><tbody>';e.forEach((a,n)=>{r+="<tr>",t[n]!=null&&(r+=`<td class="lt-hd">${t[n]}</td>`),a.forEach((u,h)=>{const p=u===null;r+=`<td class="lt-cell${p?" lt-unk":""}" data-ri="${n}" data-ci="${h}">`,p?r+=`<span class="rapido-input-wrap"><input class="rapido-input" type="text" data-solution="${o}" placeholder="?" autocomplete="off" disabled><span class="rapido-fb" aria-hidden="true"></span></span>`:r+=B(u),r+="</td>"}),r+="</tr>"}),r+=`</tbody></table><div class="lt-ops">${m}<button class="lt-op-btn lt-reset-btn" style="display:none" title="Recommencer">↺</button></div></div><svg class="lt-svg"></svg>`,this.innerHTML=r,this.dataset.placeMode="1",this._setupClick(),requestAnimationFrame(()=>this._drawHint())}_drawHint(){const{rows:t}=this._cfg();if(!this._unk||!t.length)return;const e=t[0].length,s=this._cellEl(0,0),o=this._cellEl(0,e-1),m=this._cellEl(0,e-2);if(!s||!o||!m)return;const r=this.getBoundingClientRect(),a=s.getBoundingClientRect(),n=o.getBoundingClientRect(),u=m.getBoundingClientRect(),h=a.left-r.left+4,p=(n.left+n.right)/2-r.left,f=(a.left+u.right)/2-r.left,d=a.top-r.top,i=d-18,A=d-6,b=this.querySelector(".lt-svg"),g="#94a3b8",l="http://www.w3.org/2000/svg",c=document.createElementNS(l,"path");c.setAttribute("d",`M ${h} ${i} L ${p} ${i} L ${p} ${A}`),c.setAttribute("stroke",g),c.setAttribute("fill","none"),c.setAttribute("stroke-width","2"),c.setAttribute("stroke-dasharray","5 3"),c.setAttribute("stroke-linejoin","round"),c.classList.add("lt-hint"),b.appendChild(c);const y=5,_=document.createElementNS(l,"polygon");_.setAttribute("points",`${p},${d-1} ${p-y},${A-1} ${p+y},${A-1}`),_.setAttribute("fill",g),_.classList.add("lt-hint"),b.appendChild(_);const w=document.createElementNS(l,"text");w.setAttribute("x",f),w.setAttribute("y",i-4),w.setAttribute("text-anchor","middle"),w.setAttribute("fill",g),w.setAttribute("font-size","13"),w.setAttribute("font-weight","700"),w.setAttribute("font-family","inherit"),w.textContent=this._op==="-"?"−":"+",w.classList.add("lt-hint"),b.appendChild(w)}_drawUnkArrow(t,e){const{rows:s}=this._cfg();if(!s.length)return;const m=s[0].length-1;if(e>=m)return;const r=this._cellEl(t,e),a=this._cellEl(t,m);if(!r||!a)return;const n=this.getBoundingClientRect(),u=r.getBoundingClientRect(),h=a.getBoundingClientRect(),p=t===0,f=p?"#2563eb":"#94a3b8",d=(u.left+u.right)/2-n.left,i=(h.left+h.right)/2-n.left,A=p?u.top-n.top:u.bottom-n.top,b=p?A-18:A+18,g=p?A-6:A+6,l=this.querySelector(".lt-svg"),c="http://www.w3.org/2000/svg",y=document.createElementNS(c,"line");y.setAttribute("x1",d),y.setAttribute("y1",b),y.setAttribute("x2",i),y.setAttribute("y2",b),y.setAttribute("stroke",f),y.setAttribute("stroke-width","2"),l.appendChild(y);const _=document.createElementNS(c,"line");_.setAttribute("x1",i),_.setAttribute("y1",b),_.setAttribute("x2",i),_.setAttribute("y2",g),_.setAttribute("stroke",f),_.setAttribute("stroke-width","2"),l.appendChild(_);const w=5,S=document.createElementNS(c,"polygon"),L=p?`${i},${A-1} ${i-w},${g-1} ${i+w},${g-1}`:`${i},${A+1} ${i-w},${g+1} ${i+w},${g+1}`;S.setAttribute("points",L),S.setAttribute("fill",f),l.appendChild(S)}_setupClick(){this.querySelectorAll(".lt-cell:not(.lt-unk)").forEach(e=>{e.addEventListener("click",()=>this._click(e))}),this.querySelectorAll(".lt-op-btn:not(.lt-reset-btn)").forEach(e=>{e.addEventListener("click",()=>{this._op=e.dataset.op,this.querySelectorAll(".lt-op-btn").forEach(s=>s.classList.toggle("lt-op-active",s===e)),this._connected||(this.querySelector(".lt-svg").innerHTML="",this._drawHint())})});const t=this.querySelector(".lt-reset-btn");t&&t.addEventListener("click",()=>{this._connected=!1,this.querySelector(".lt-svg").innerHTML="",this._drawHint();const e=this.querySelector(".rapido-input");e&&(e.disabled=!0,e.value="",e.classList.remove("correct","incorrect"),delete e._showSol),this.querySelectorAll(".lt-op-btn:not(.lt-reset-btn)").forEach(s=>s.style.display=""),t.style.display="none"})}_click(t){const e=+t.dataset.ri,s=+t.dataset.ci;if(!this._sel){t.classList.add("lt-hi"),this._sel={ri:e,ci:s,td:t};return}const o=this._sel;if(o.ri===e&&o.ci===s){t.classList.remove("lt-hi"),this._sel=null;return}const{rows:m}=this._cfg(),r=m[0]?.length??0;o.ri===e&&e===0&&o.ci!==r-1&&s!==r-1?(t.classList.add("lt-hi"),this._connect(o.ci,s),this._sel=null):(this._showX(o.ri,o.ci,e,s),o.td.classList.remove("lt-hi"),this._sel=null)}_connect(t,e){this.querySelectorAll(".lt-hi").forEach(i=>i.classList.remove("lt-hi")),this.querySelector(".lt-svg").innerHTML="";const{rows:s}=this._cfg(),o=s[0].length,m=s[0][t],r=s[0][e],a=this._op||"+",n=a==="+"?m+r:m-r,u=s[0][o-1],h=Math.abs(n-u)<.01;this._connected=!0,this.querySelectorAll(".lt-op-btn:not(.lt-reset-btn)").forEach(i=>i.style.display="none");const p=Math.min(t,e),f=Math.max(t,e);if(!h){this._drawBracket(0,p,f),this._drawFormula(t,e,a,n,h),this._drawTargetArrow(f);const i=this.querySelector(".lt-reset-btn");i&&(i.style.display="");return}s.forEach((i,A)=>this._drawBracket(A,p,f)),s.forEach((i,A)=>this._drawUnkArrow(A,f)),this._drawFormula(t,e,a,n,h);const d=this.querySelector(".rapido-input");d&&(d.disabled=!1)}_drawTargetArrow(t){const{rows:e}=this._cfg();if(!e.length)return;const s=e[0].length,o=this._cellEl(0,t),m=this._cellEl(0,s-1);if(!o||!m)return;const r=this.getBoundingClientRect(),a=o.getBoundingClientRect(),n=m.getBoundingClientRect(),u=(a.left+a.right)/2-r.left,h=(n.left+n.right)/2-r.left,p=n.top-r.top,f=p-18,d=p-6,i=this.querySelector(".lt-svg"),A="#2563eb",b="http://www.w3.org/2000/svg",g=document.createElementNS(b,"line");g.setAttribute("x1",u),g.setAttribute("y1",f),g.setAttribute("x2",h),g.setAttribute("y2",f),g.setAttribute("stroke",A),g.setAttribute("stroke-width","2"),g.setAttribute("stroke-dasharray","5 3"),i.appendChild(g);const l=document.createElementNS(b,"line");l.setAttribute("x1",h),l.setAttribute("y1",f),l.setAttribute("x2",h),l.setAttribute("y2",d),l.setAttribute("stroke",A),l.setAttribute("stroke-width","2"),l.setAttribute("stroke-dasharray","5 3"),i.appendChild(l);const c=5,y=document.createElementNS(b,"polygon");y.setAttribute("points",`${h},${p-1} ${h-c},${d-1} ${h+c},${d-1}`),y.setAttribute("fill",A),i.appendChild(y)}_drawFormula(t,e,s,o,m){const{rows:r}=this._cfg(),a=r[0][t],n=r[0][e],u=Math.min(t,e),h=Math.max(t,e),p=this._cellEl(0,u),f=this._cellEl(0,h);if(!p||!f)return;const d=this.getBoundingClientRect(),i=p.getBoundingClientRect(),A=f.getBoundingClientRect(),b=(i.left+i.right)/2-d.left,g=(A.left+A.right)/2-d.left,l=(b+g)/2,c=i.top-d.top-18,y=s==="-"?"−":"+",_=`${B(a)} ${y} ${B(n)} = ${B(o)}${m?" 😀":""}`,w=m?"#16a34a":"#dc2626",S="http://www.w3.org/2000/svg",L=this.querySelector(".lt-svg"),k=document.createElementNS(S,"text");if(k.setAttribute("x",l),k.setAttribute("y",c-5),k.setAttribute("text-anchor","middle"),k.setAttribute("fill",w),k.setAttribute("font-size","11"),k.setAttribute("font-weight","700"),k.setAttribute("font-family","inherit"),k.textContent=_,L.appendChild(k),!m){const E=k.getComputedTextLength(),M=l+E/2+9,R=c-8,$=4;[[M-$,R-$,M+$,R+$],[M+$,R-$,M-$,R+$]].forEach(([F,z,H,j])=>{const C=document.createElementNS(S,"line");C.setAttribute("x1",F),C.setAttribute("y1",z),C.setAttribute("x2",H),C.setAttribute("y2",j),C.setAttribute("stroke","#dc2626"),C.setAttribute("stroke-width","2.5"),C.setAttribute("stroke-linecap","round"),L.appendChild(C)})}}_showX(t,e,s,o){const m=this._cellEl(t,e),r=this._cellEl(s,o);if(!m||!r)return;const a=this.getBoundingClientRect(),n=m.getBoundingClientRect(),u=r.getBoundingClientRect(),h=(n.left+n.right+u.left+u.right)/4-a.left,p=(n.top+n.bottom+u.top+u.bottom)/4-a.top,d=document.createElementNS("http://www.w3.org/2000/svg","text");d.setAttribute("x",h),d.setAttribute("y",p),d.setAttribute("text-anchor","middle"),d.setAttribute("dominant-baseline","middle"),d.setAttribute("fill","#ef4444"),d.setAttribute("font-size","20"),d.setAttribute("font-weight","700"),d.textContent="😞",d.classList.add("lt-fx"),this.querySelector(".lt-svg").appendChild(d),setTimeout(()=>d.remove(),700)}_cellEl(t,e){return this.querySelector(`.lt-cell[data-ri="${t}"][data-ci="${e}"]`)}_drawBracket(t,e,s){const o=this._cellEl(t,e),m=this._cellEl(t,s);if(!o||!m)return;const r=this.getBoundingClientRect(),a=o.getBoundingClientRect(),n=m.getBoundingClientRect(),u=(a.left+a.right)/2-r.left,h=(n.left+n.right)/2-r.left,p=(u+h)/2,f=t===0,d=f?a.top-r.top:a.bottom-r.top,i=f?d-18:d+18,A=f?"#2563eb":"#94a3b8",b="http://www.w3.org/2000/svg",g=this.querySelector(".lt-svg"),l=document.createElementNS(b,"path");if(l.setAttribute("d",`M ${u} ${d} L ${u} ${i} L ${h} ${i} L ${h} ${d}`),l.setAttribute("stroke",A),l.setAttribute("fill","none"),l.setAttribute("stroke-width","2"),l.setAttribute("stroke-linejoin","round"),g.appendChild(l),!f){const c=document.createElementNS(b,"text");c.setAttribute("x",p),c.setAttribute("y",i+13),c.setAttribute("text-anchor","middle"),c.setAttribute("fill",A),c.setAttribute("font-size","13"),c.setAttribute("font-weight","700"),c.setAttribute("font-family","inherit"),c.textContent=this._op==="-"?"−":"+",g.appendChild(c)}}validate(){const t=this.querySelector(".rapido-input");if(!t)return!1;const e=parseFloat(t.value.trim().replace(",",".")),s=parseFloat(t.dataset.solution.trim().replace(",",".")),o=!isNaN(e)&&Math.abs(e-s)<.01;return t.classList.toggle("correct",o),t.classList.toggle("incorrect",!o),o}toggleSolution(){const t=this.querySelector(".rapido-input");t&&(t._showSol?(t.value="",t.classList.remove("correct","incorrect"),t._showSol=!1):(t.disabled=!1,t.value=t.dataset.solution,t.classList.add("correct"),t.classList.remove("incorrect"),t._showSol=!0))}}customElements.get("math974-linearite-tableau")||customElements.define("math974-linearite-tableau",O);function N(x,t){const e=Array.from({length:t},(s,o)=>o);for(let s=t-1;s>0;s--){const o=Math.floor(Math.random()*(s+1));[e[s],e[o]]=[e[o],e[s]]}return x.map(s=>[...e.map(o=>s[o]),...s.slice(t)])}const q={u:"2,3,4,5,6",addA:"2..5",addB:"3..7",subA:"4..10"};function U(x){return x?x.charAt(0).toUpperCase()+x.slice(1):""}function V(){const x=["fruits","poissons","epicerie","transport"].flatMap(X);return x.length?x[Math.floor(Math.random()*x.length)]:null}function W(x,t){if(t?.top){const b=new Set(["top","k","op","headers"]),g={};for(const[E,M]of Object.entries(t))b.has(E)||(g[E]=v(M));const l=t.top.map(E=>typeof E=="number"?E:T(String(E),g));let c="+";Array.isArray(t.op)?c=t.op[Math.floor(Math.random()*t.op.length)]:t.op&&(c=String(t.op));const y=l.length;let _=Math.floor(Math.random()*y),w;do w=Math.floor(Math.random()*y);while(w===_);c==="-"&&l[_]<l[w]&&([_,w]=[w,_]);const S=c==="+"?l[_]+l[w]:l[_]-l[w],L=t.k!=null?typeof t.k=="number"?t.k:v(String(t.k)):1,k=[[...l,S],[...l.map(E=>E*L),null]];return{...x,headers:t.headers??x.headers??[],rows:k}}if(t?.rows){const b=new Set(["rows","headers","shuffle"]),g={};for(const[c,y]of Object.entries(t))b.has(c)||(g[c]=v(y));let l=t.rows.map(c=>c.map(y=>T(y,g)));return t.shuffle!==!1&&l.length>0&&(l=N(l,l[0].length-1)),{...x,headers:t.headers??x.headers??[],rows:l}}const e=V();if(!e)return x;const s=v(t?.u??q.u);let o="+";Array.isArray(t?.op)?o=t.op[Math.floor(Math.random()*t.op.length)]:t?.op&&(o=String(t.op));const m=t?.ncols!=null?typeof t.ncols=="number"?t.ncols:v(String(t.ncols)):4,r=Math.max(3,m),a=r-3;let n,u;o==="+"?(n=v(t?.a??q.addA),u=v(t?.b??q.addB)):(n=v(t?.a??q.subA),u=t?.b!=null?v(t.b):1+Math.floor(Math.random()*(n-2)));const h=o==="+"?n+u:n-u,p=new Set([n,u,h]),f=[];for(let b=1;b<=20;b++)p.has(b)||f.push(b);for(let b=f.length-1;b>0;b--){const g=Math.floor(Math.random()*(b+1));[f[b],f[g]]=[f[g],f[b]]}const d=f.slice(0,a);let i=[[n,u,...d,h],[n*s,u*s,...d.map(b=>b*s),null]];t?.shuffle!==!1&&(i=N(i,r-1));const A=e.lieu?`${e.plur}
(${U(e.lieu)})`:e.plur;return{...x,headers:[A,"Prix (en €)"],rows:i}}export{Q as autoScale,I as defaultPosition,W as randomize};
