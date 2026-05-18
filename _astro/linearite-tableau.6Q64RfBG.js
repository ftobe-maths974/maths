import{parseRange as B,evalExpr as q,fmt as L}from"./utils.MftNdmoG.js";const I="north",P=`
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
`;function O(){if(document.getElementById("lt-styles"))return;const _=document.createElement("style");_.id="lt-styles",_.textContent=P,document.head.appendChild(_)}class V extends HTMLElement{static get observedAttributes(){return["headers","rows"]}connectedCallback(){O(),this._render()}attributeChangedCallback(){this.isConnected&&this._render()}_cfg(){try{const t=JSON.parse(this.getAttribute("headers")||"[]"),e=JSON.parse(this.getAttribute("rows")||"[]").map(s=>s.map(o=>o==="?"||o===null?null:o));return{headers:t,rows:e}}catch{return{headers:[],rows:[]}}}_render(){const{headers:t=[],rows:e=[]}=this._cfg();if(this._sel=null,!e.length){this.innerHTML="";return}this._op||(this._op="+"),this._connected=!1,this._unk=null,e.forEach((a,n)=>a.forEach((h,u)=>{h===null&&(this._unk={ri:n,ci:u})}));let s=0;if(this._unk){const{ri:a,ci:n}=this._unk,h=e[0][n];for(let u=0;u<e[0].length;u++){const p=e[0][u],f=e[a][u];if(u!==n&&p!=null&&f!=null&&p!==0){s=h*(f/p);break}}}const o=L(s),m=["+","-"].map(a=>`<button class="lt-op-btn${this._op===a?" lt-op-active":""}" data-op="${a}">${a==="-"?"−":"+"}</button>`).join("");let l='<div class="lt-wrap"><table class="lt-table"><tbody>';e.forEach((a,n)=>{l+="<tr>",t[n]!=null&&(l+=`<td class="lt-hd">${t[n]}</td>`),a.forEach((h,u)=>{const p=h===null;l+=`<td class="lt-cell${p?" lt-unk":""}" data-ri="${n}" data-ci="${u}">`,p?l+=`<span class="rapido-input-wrap"><input class="rapido-input" type="text" data-solution="${o}" placeholder="?" autocomplete="off" disabled><span class="rapido-fb" aria-hidden="true"></span></span>`:l+=L(h),l+="</td>"}),l+="</tr>"}),l+=`</tbody></table><div class="lt-ops">${m}<button class="lt-op-btn lt-reset-btn" style="display:none" title="Recommencer">↺</button></div></div><svg class="lt-svg"></svg>`,this.innerHTML=l,this.dataset.placeMode="1",this._setupClick(),requestAnimationFrame(()=>this._drawHint())}_drawHint(){const{rows:t}=this._cfg();if(!this._unk||!t.length)return;const e=t[0].length,s=this._cellEl(0,0),o=this._cellEl(0,e-1),m=this._cellEl(0,e-2);if(!s||!o||!m)return;const l=this.getBoundingClientRect(),a=s.getBoundingClientRect(),n=o.getBoundingClientRect(),h=m.getBoundingClientRect(),u=a.left-l.left+4,p=(n.left+n.right)/2-l.left,f=(a.left+h.right)/2-l.left,d=a.top-l.top,r=d-18,w=d-6,b=this.querySelector(".lt-svg"),g="#94a3b8",i="http://www.w3.org/2000/svg",c=document.createElementNS(i,"path");c.setAttribute("d",`M ${u} ${r} L ${p} ${r} L ${p} ${w}`),c.setAttribute("stroke",g),c.setAttribute("fill","none"),c.setAttribute("stroke-width","2"),c.setAttribute("stroke-dasharray","5 3"),c.setAttribute("stroke-linejoin","round"),c.classList.add("lt-hint"),b.appendChild(c);const y=5,x=document.createElementNS(i,"polygon");x.setAttribute("points",`${p},${d-1} ${p-y},${w-1} ${p+y},${w-1}`),x.setAttribute("fill",g),x.classList.add("lt-hint"),b.appendChild(x);const A=document.createElementNS(i,"text");A.setAttribute("x",f),A.setAttribute("y",r-4),A.setAttribute("text-anchor","middle"),A.setAttribute("fill",g),A.setAttribute("font-size","13"),A.setAttribute("font-weight","700"),A.setAttribute("font-family","inherit"),A.textContent=this._op==="-"?"−":"+",A.classList.add("lt-hint"),b.appendChild(A)}_drawUnkArrow(t,e){const{rows:s}=this._cfg();if(!s.length)return;const m=s[0].length-1;if(e>=m)return;const l=this._cellEl(t,e),a=this._cellEl(t,m);if(!l||!a)return;const n=this.getBoundingClientRect(),h=l.getBoundingClientRect(),u=a.getBoundingClientRect(),p=t===0,f=p?"#2563eb":"#94a3b8",d=(h.left+h.right)/2-n.left,r=(u.left+u.right)/2-n.left,w=p?h.top-n.top:h.bottom-n.top,b=p?w-18:w+18,g=p?w-6:w+6,i=this.querySelector(".lt-svg"),c="http://www.w3.org/2000/svg",y=document.createElementNS(c,"line");y.setAttribute("x1",d),y.setAttribute("y1",b),y.setAttribute("x2",r),y.setAttribute("y2",b),y.setAttribute("stroke",f),y.setAttribute("stroke-width","2"),i.appendChild(y);const x=document.createElementNS(c,"line");x.setAttribute("x1",r),x.setAttribute("y1",b),x.setAttribute("x2",r),x.setAttribute("y2",g),x.setAttribute("stroke",f),x.setAttribute("stroke-width","2"),i.appendChild(x);const A=5,S=document.createElementNS(c,"polygon"),C=p?`${r},${w-1} ${r-A},${g-1} ${r+A},${g-1}`:`${r},${w+1} ${r-A},${g+1} ${r+A},${g+1}`;S.setAttribute("points",C),S.setAttribute("fill",f),i.appendChild(S)}_setupClick(){this.querySelectorAll(".lt-cell:not(.lt-unk)").forEach(e=>{e.addEventListener("click",()=>this._click(e))}),this.querySelectorAll(".lt-op-btn:not(.lt-reset-btn)").forEach(e=>{e.addEventListener("click",()=>{this._op=e.dataset.op,this.querySelectorAll(".lt-op-btn").forEach(s=>s.classList.toggle("lt-op-active",s===e)),this._connected||(this.querySelector(".lt-svg").innerHTML="",this._drawHint())})});const t=this.querySelector(".lt-reset-btn");t&&t.addEventListener("click",()=>{this._connected=!1,this.querySelector(".lt-svg").innerHTML="",this._drawHint();const e=this.querySelector(".rapido-input");e&&(e.disabled=!0,e.value="",e.classList.remove("correct","incorrect"),delete e._showSol),this.querySelectorAll(".lt-op-btn:not(.lt-reset-btn)").forEach(s=>s.style.display=""),t.style.display="none"})}_click(t){const e=+t.dataset.ri,s=+t.dataset.ci;if(!this._sel){t.classList.add("lt-hi"),this._sel={ri:e,ci:s,td:t};return}const o=this._sel;if(o.ri===e&&o.ci===s){t.classList.remove("lt-hi"),this._sel=null;return}const{rows:m}=this._cfg(),l=m[0]?.length??0;o.ri===e&&e===0&&o.ci!==l-1&&s!==l-1?(t.classList.add("lt-hi"),this._connect(o.ci,s),this._sel=null):(this._showX(o.ri,o.ci,e,s),o.td.classList.remove("lt-hi"),this._sel=null)}_connect(t,e){this.querySelectorAll(".lt-hi").forEach(r=>r.classList.remove("lt-hi")),this.querySelector(".lt-svg").innerHTML="";const{rows:s}=this._cfg(),o=s[0].length,m=s[0][t],l=s[0][e],a=this._op||"+",n=a==="+"?m+l:m-l,h=s[0][o-1],u=Math.abs(n-h)<.01;this._connected=!0,this.querySelectorAll(".lt-op-btn:not(.lt-reset-btn)").forEach(r=>r.style.display="none");const p=Math.min(t,e),f=Math.max(t,e);if(!u){this._drawBracket(0,p,f),this._drawFormula(t,e,a,n,u),this._drawTargetArrow(f);const r=this.querySelector(".lt-reset-btn");r&&(r.style.display="");return}s.forEach((r,w)=>this._drawBracket(w,p,f)),s.forEach((r,w)=>this._drawUnkArrow(w,f)),this._drawFormula(t,e,a,n,u);const d=this.querySelector(".rapido-input");d&&(d.disabled=!1)}_drawTargetArrow(t){const{rows:e}=this._cfg();if(!e.length)return;const s=e[0].length,o=this._cellEl(0,t),m=this._cellEl(0,s-1);if(!o||!m)return;const l=this.getBoundingClientRect(),a=o.getBoundingClientRect(),n=m.getBoundingClientRect(),h=(a.left+a.right)/2-l.left,u=(n.left+n.right)/2-l.left,p=n.top-l.top,f=p-18,d=p-6,r=this.querySelector(".lt-svg"),w="#2563eb",b="http://www.w3.org/2000/svg",g=document.createElementNS(b,"line");g.setAttribute("x1",h),g.setAttribute("y1",f),g.setAttribute("x2",u),g.setAttribute("y2",f),g.setAttribute("stroke",w),g.setAttribute("stroke-width","2"),g.setAttribute("stroke-dasharray","5 3"),r.appendChild(g);const i=document.createElementNS(b,"line");i.setAttribute("x1",u),i.setAttribute("y1",f),i.setAttribute("x2",u),i.setAttribute("y2",d),i.setAttribute("stroke",w),i.setAttribute("stroke-width","2"),i.setAttribute("stroke-dasharray","5 3"),r.appendChild(i);const c=5,y=document.createElementNS(b,"polygon");y.setAttribute("points",`${u},${p-1} ${u-c},${d-1} ${u+c},${d-1}`),y.setAttribute("fill",w),r.appendChild(y)}_drawFormula(t,e,s,o,m){const{rows:l}=this._cfg(),a=l[0][t],n=l[0][e],h=Math.min(t,e),u=Math.max(t,e),p=this._cellEl(0,h),f=this._cellEl(0,u);if(!p||!f)return;const d=this.getBoundingClientRect(),r=p.getBoundingClientRect(),w=f.getBoundingClientRect(),b=(r.left+r.right)/2-d.left,g=(w.left+w.right)/2-d.left,i=(b+g)/2,c=r.top-d.top-18,y=s==="-"?"−":"+",x=`${L(a)} ${y} ${L(n)} = ${L(o)}${m?" 😀":""}`,A=m?"#16a34a":"#dc2626",S="http://www.w3.org/2000/svg",C=this.querySelector(".lt-svg"),k=document.createElementNS(S,"text");if(k.setAttribute("x",i),k.setAttribute("y",c-5),k.setAttribute("text-anchor","middle"),k.setAttribute("fill",A),k.setAttribute("font-size","11"),k.setAttribute("font-weight","700"),k.setAttribute("font-family","inherit"),k.textContent=x,C.appendChild(k),!m){const E=k.getComputedTextLength(),M=i+E/2+9,R=c-8,v=4;[[M-v,R-v,M+v,R+v],[M+v,R-v,M-v,R+v]].forEach(([z,H,j,X])=>{const $=document.createElementNS(S,"line");$.setAttribute("x1",z),$.setAttribute("y1",H),$.setAttribute("x2",j),$.setAttribute("y2",X),$.setAttribute("stroke","#dc2626"),$.setAttribute("stroke-width","2.5"),$.setAttribute("stroke-linecap","round"),C.appendChild($)})}}_showX(t,e,s,o){const m=this._cellEl(t,e),l=this._cellEl(s,o);if(!m||!l)return;const a=this.getBoundingClientRect(),n=m.getBoundingClientRect(),h=l.getBoundingClientRect(),u=(n.left+n.right+h.left+h.right)/4-a.left,p=(n.top+n.bottom+h.top+h.bottom)/4-a.top,d=document.createElementNS("http://www.w3.org/2000/svg","text");d.setAttribute("x",u),d.setAttribute("y",p),d.setAttribute("text-anchor","middle"),d.setAttribute("dominant-baseline","middle"),d.setAttribute("fill","#ef4444"),d.setAttribute("font-size","20"),d.setAttribute("font-weight","700"),d.textContent="😞",d.classList.add("lt-fx"),this.querySelector(".lt-svg").appendChild(d),setTimeout(()=>d.remove(),700)}_cellEl(t,e){return this.querySelector(`.lt-cell[data-ri="${t}"][data-ci="${e}"]`)}_drawBracket(t,e,s){const o=this._cellEl(t,e),m=this._cellEl(t,s);if(!o||!m)return;const l=this.getBoundingClientRect(),a=o.getBoundingClientRect(),n=m.getBoundingClientRect(),h=(a.left+a.right)/2-l.left,u=(n.left+n.right)/2-l.left,p=(h+u)/2,f=t===0,d=f?a.top-l.top:a.bottom-l.top,r=f?d-18:d+18,w=f?"#2563eb":"#94a3b8",b="http://www.w3.org/2000/svg",g=this.querySelector(".lt-svg"),i=document.createElementNS(b,"path");if(i.setAttribute("d",`M ${h} ${d} L ${h} ${r} L ${u} ${r} L ${u} ${d}`),i.setAttribute("stroke",w),i.setAttribute("fill","none"),i.setAttribute("stroke-width","2"),i.setAttribute("stroke-linejoin","round"),g.appendChild(i),!f){const c=document.createElementNS(b,"text");c.setAttribute("x",p),c.setAttribute("y",r+13),c.setAttribute("text-anchor","middle"),c.setAttribute("fill",w),c.setAttribute("font-size","13"),c.setAttribute("font-weight","700"),c.setAttribute("font-family","inherit"),c.textContent=this._op==="-"?"−":"+",g.appendChild(c)}}validate(){const t=this.querySelector(".rapido-input");if(!t)return;const e=parseFloat(t.value.trim().replace(",",".")),s=parseFloat(t.dataset.solution.trim().replace(",",".")),o=!isNaN(e)&&Math.abs(e-s)<.01;t.classList.toggle("correct",o),t.classList.toggle("incorrect",!o)}toggleSolution(){const t=this.querySelector(".rapido-input");t&&(t._showSol?(t.value="",t.classList.remove("correct","incorrect"),t._showSol=!1):(t.disabled=!1,t.value=t.dataset.solution,t.classList.add("correct"),t.classList.remove("incorrect"),t._showSol=!0))}}customElements.get("math974-linearite-tableau")||customElements.define("math974-linearite-tableau",V);function T(_,t){const e=Array.from({length:t},(s,o)=>o);for(let s=t-1;s>0;s--){const o=Math.floor(Math.random()*(s+1));[e[s],e[o]]=[e[o],e[s]]}return _.map(s=>[...e.map(o=>s[o]),...s.slice(t)])}const N=[{item:"kg de mangues",lieu:`Marché de
Saint-Pierre`},{item:"kg de thon",lieu:`Pêcheur de
Saint-Gilles`},{item:"sachets d'épices",lieu:`Marché de
Salazie`},{item:"ananas Victoria",lieu:`Marché
du Tampon`},{item:"boîtes de sardines",lieu:""},{item:"tickets de bus",lieu:""}],F=[2,3,4,5,6];function U(_,t){if(t?.top){const b=new Set(["top","k","op","headers"]),g={};for(const[E,M]of Object.entries(t))b.has(E)||(g[E]=B(M));const i=t.top.map(E=>typeof E=="number"?E:q(String(E),g));let c="+";Array.isArray(t.op)?c=t.op[Math.floor(Math.random()*t.op.length)]:t.op&&(c=String(t.op));const y=i.length;let x=Math.floor(Math.random()*y),A;do A=Math.floor(Math.random()*y);while(A===x);c==="-"&&i[x]<i[A]&&([x,A]=[A,x]);const S=c==="+"?i[x]+i[A]:i[x]-i[A],C=t.k!=null?typeof t.k=="number"?t.k:B(String(t.k)):1,k=[[...i,S],[...i.map(E=>E*C),null]];return{..._,headers:t.headers??_.headers??[],rows:k}}if(t?.rows){const b=new Set(["rows","headers","shuffle"]),g={};for(const[c,y]of Object.entries(t))b.has(c)||(g[c]=B(y));let i=t.rows.map(c=>c.map(y=>q(y,g)));return t.shuffle!==!1&&i.length>0&&(i=T(i,i[0].length-1)),{..._,headers:t.headers??_.headers??[],rows:i}}const e=N[Math.floor(Math.random()*N.length)],s=F[Math.floor(Math.random()*F.length)];let o="+";Array.isArray(t?.op)?o=t.op[Math.floor(Math.random()*t.op.length)]:t?.op&&(o=String(t.op));const m=t?.ncols!=null?typeof t.ncols=="number"?t.ncols:B(String(t.ncols)):4,l=Math.max(3,m),a=l-3;let n,h;o==="+"?(n=2+Math.floor(Math.random()*4),h=3+Math.floor(Math.random()*5)):(n=4+Math.floor(Math.random()*7),h=1+Math.floor(Math.random()*(n-2)));const u=o==="+"?n+h:n-h,p=new Set([n,h,u]),f=[];for(let b=1;b<=20;b++)p.has(b)||f.push(b);for(let b=f.length-1;b>0;b--){const g=Math.floor(Math.random()*(b+1));[f[b],f[g]]=[f[g],f[b]]}const d=f.slice(0,a);let r=[[n,h,...d,u],[n*s,h*s,...d.map(b=>b*s),null]];t?.shuffle!==!1&&(r=T(r,l-1));const w=e.lieu?`${e.item}
(${e.lieu})`:e.item;return{..._,headers:[w,"Prix (en €)"],rows:r}}export{I as defaultPosition,U as randomize};
