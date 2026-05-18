import{parseRange as x,evalExpr as C,fmt as _}from"./utils.MftNdmoG.js";const M="north",$=`
math974-linearite-mult {
  display: block;
  position: relative;
  padding: 36px 4px 36px;
  font-family: inherit;
  user-select: none;
  -webkit-user-select: none;
}
.lm-wrap { display: flex; align-items: center; justify-content: center; }
.lm-table { border-collapse: collapse; }
.lm-hd {
  background: #bfdbfe; border: 2px solid #93c5fd;
  padding: 0.4rem 0.7rem; font-size: 0.76em; font-weight: 600;
  color: #1e3a5f; max-width: 130px; white-space: pre-line; text-align: left;
}
.lm-cell {
  border: 2px solid #cbd5e1; padding: 0.45rem 0.5rem;
  text-align: center; min-width: 64px;
}
.lm-cell.lm-unk { background: #fef9c3; border-color: #eab308; }
.lm-cell input {
  background: transparent; border: none; outline: none;
  font-size: 1em; font-weight: 700; font-family: inherit;
  text-align: center; width: 3.5ch;
}
.lm-cell input:disabled { opacity: 0.35; cursor: not-allowed; }
.lm-svg {
  position: absolute; inset: 0; width: 100%; height: 100%;
  pointer-events: none; overflow: visible;
}
.lm-coef {
  position: absolute;
  transform: translate(-50%, -50%);
  display: flex; align-items: center; gap: 1px;
  font-size: 0.9em; font-weight: 700; color: #2563eb;
  white-space: nowrap;
}
.lm-coef input {
  width: 2.5ch; text-align: center; font-weight: 700; font-size: inherit;
  font-family: inherit; color: #2563eb;
  border: none; border-bottom: 2px solid #93c5fd; outline: none;
  background: transparent;
}
.lm-coef input.correct   { color: #16a34a; border-bottom-color: #16a34a; }
.lm-coef input.incorrect { color: #dc2626; border-bottom-color: #dc2626; }
.lm-coef-fb { font-size: 0.85em; margin-left: 1px; }
`;function L(){if(document.getElementById("lm-styles"))return;const d=document.createElement("style");d.id="lm-styles",d.textContent=$,document.head.appendChild(d)}class S extends HTMLElement{static get observedAttributes(){return["rows","headers"]}connectedCallback(){L(),this._render()}attributeChangedCallback(){this.isConnected&&this._render()}_cfg(){try{const o=JSON.parse(this.getAttribute("rows")||"[]").map(t=>t.map(e=>e==="?"||e===null?null:e)),n=JSON.parse(this.getAttribute("headers")||"[]");return{rows:o,rowHeaders:n}}catch{return{rows:[],rowHeaders:[]}}}_render(){const{rows:o,rowHeaders:n}=this._cfg();if(this._phase=0,this._showSol=!1,!o.length||o[0]?.length!==2){this.innerHTML="";return}if(this._unk=null,o.forEach((e,i)=>e.forEach((s,l)=>{s===null&&(this._unk={ri:i,ci:l})})),!this._unk){this.innerHTML="";return}this._k=null,this._sol=null;for(let e=0;e<o.length;e++)if(o[e][0]!=null&&o[e][1]!=null){this._k=o[e][1]/o[e][0];break}if(this._k!==null){const{ri:e,ci:i}=this._unk,s=o[e][i===0?1:0];s!=null&&(this._sol=s*this._k)}let t='<div class="lm-wrap"><table class="lm-table"><tbody>';o.forEach((e,i)=>{t+="<tr>",n[i]!=null&&(t+=`<td class="lm-hd">${n[i]}</td>`),e.forEach((s,l)=>{const r=s===null,a=r?_(this._sol):_(s);t+=`<td class="lm-cell${r?" lm-unk":""}" data-ri="${i}" data-ci="${l}"><span class="rapido-input-wrap"><input class="rapido-input" type="text" data-solution="${a}" placeholder="${r?"?":"…"}" autocomplete="off"${r?" disabled":""}><span class="rapido-fb" aria-hidden="true"></span></span></td>`}),t+="</tr>"}),t+='</tbody></table></div><svg class="lm-svg"></svg>',this.innerHTML=t,this.dataset.placeMode="1",this._setupTableInputs()}_cellEl(o,n){return this.querySelector(`.lm-cell[data-ri="${o}"][data-ci="${n}"]`)}_inp(o,n){return this._cellEl(o,n)?.querySelector("input")}_checkCell(o,n){const t=this._inp(o,n);if(!t||!t.value.trim())return!1;const e=parseFloat(t.value.trim().replace(",",".")),i=parseFloat(t.dataset.solution),s=!isNaN(e)&&Math.abs(e-i)<.01;return t.classList.toggle("correct",s),t.classList.toggle("incorrect",!s),s}_setupTableInputs(){const{rows:o}=this._cfg();o.forEach((n,t)=>n.forEach((e,i)=>{if(e===null)return;const s=this._inp(t,i);s&&(s.addEventListener("input",()=>s.classList.remove("correct","incorrect")),s.addEventListener("blur",()=>{this._checkCell(t,i),this._phase===0&&this._tryPhase1()}))}))}_tryPhase1(){const{rows:o}=this._cfg();!o.every((t,e)=>t.every((i,s)=>i===null||this._inp(e,s)?.classList.contains("correct")))||this._phase!==0||(this._phase=1,requestAnimationFrame(()=>{this._drawArrow(0),this._showCoefInput(0)}))}_arrowCoords(o){const n=this._cellEl(o,0),t=this._cellEl(o,1);if(!n||!t)return null;const e=this.getBoundingClientRect(),i=n.getBoundingClientRect(),s=t.getBoundingClientRect(),l=(i.left+i.right)/2-e.left,r=(s.left+s.right)/2-e.left,a=(l+r)/2,h=o===0,c=h?i.top-e.top:i.bottom-e.top,p=h?c-18:c+18,u=h?c-6:c+6;return{x1:l,x2:r,midX:a,isTop:h,yEdge:c,yArm:p,yTip:u}}_drawArrow(o){const n=this._arrowCoords(o);if(!n)return;const{x1:t,x2:e,isTop:i,yEdge:s,yArm:l,yTip:r}=n,a="#2563eb",h="http://www.w3.org/2000/svg",c=this.querySelector(".lm-svg"),p=(k,y,E,v)=>{const m=document.createElementNS(h,"line");m.setAttribute("x1",k),m.setAttribute("y1",y),m.setAttribute("x2",E),m.setAttribute("y2",v),m.setAttribute("stroke",a),m.setAttribute("stroke-width","2"),c.appendChild(m)};p(t,s,t,l),p(t,l,e,l),p(e,l,e,r);const u=5,f=document.createElementNS(h,"polygon"),w=i?`${e},${s-1} ${e-u},${r-1} ${e+u},${r-1}`:`${e},${s+1} ${e-u},${r+1} ${e+u},${r+1}`;f.setAttribute("points",w),f.setAttribute("fill",a),c.appendChild(f)}_showCoefInput(o){const n=this._arrowCoords(o);if(!n)return;const{midX:t,isTop:e,yArm:i}=n,s=e?i-10:i+10,l=document.createElement("span");l.className="lm-coef",l.style.left=`${t}px`,l.style.top=`${s}px`,l.innerHTML="×";const r=document.createElement("input");r.type="text",r.placeholder="?",r.autocomplete="off",r.dataset.solution=_(this._k),l.appendChild(r);const a=document.createElement("span");a.className="lm-coef-fb",l.appendChild(a),this.appendChild(l),r.addEventListener("input",()=>{r.classList.remove("correct","incorrect"),a.textContent=""}),r.addEventListener("blur",()=>{const h=parseFloat(r.value.trim().replace(",",".")),c=!isNaN(h)&&this._k!=null&&Math.abs(h-this._k)<.01;r.classList.toggle("correct",c),r.classList.toggle("incorrect",!c),a.textContent=c?"😀":r.value.trim()?"😞":"",a.style.color=c?"#16a34a":"#dc2626",c&&o===0&&this._phase===1&&this._toPhase2()}),r.focus(),this[`_coefWrap${o}`]=l,this[`_coefInp${o}`]=r}_toPhase2(){if(this._phase!==1)return;this._phase=2;const{ri:o,ci:n}=this._unk,t=this._inp(o,n);t&&(t.disabled=!1,t.addEventListener("input",()=>t.classList.remove("correct","incorrect")),t.addEventListener("blur",()=>this._checkCell(o,n)),t.focus()),requestAnimationFrame(()=>{this._drawArrow(1),this._showCoefInput(1)})}validate(){const{rows:o}=this._cfg();o.forEach((n,t)=>n.forEach((e,i)=>{const s=this._inp(t,i);!s||s.disabled||this._checkCell(t,i)})),[0,1].forEach(n=>{const t=this[`_coefInp${n}`],e=this[`_coefWrap${n}`];if(!t)return;const i=parseFloat(t.value.trim().replace(",",".")),s=!isNaN(i)&&this._k!=null&&Math.abs(i-this._k)<.01;t.classList.toggle("correct",s),t.classList.toggle("incorrect",!s);const l=e?.querySelector(".lm-coef-fb");l&&(l.textContent=s?"😀":t.value.trim()?"😞":"",l.style.color=s?"#16a34a":"#dc2626")}),this._phase===0&&this._tryPhase1(),this._phase===1&&this._coefInp0?.classList.contains("correct")&&this._toPhase2()}toggleSolution(){const{rows:o}=this._cfg();if(this._showSol)o.forEach((n,t)=>n.forEach((e,i)=>{const s=this._inp(t,i);s&&(s.value="",s.disabled=e===null&&this._phase<2,s.classList.remove("correct","incorrect"))})),[0,1].forEach(n=>{const t=this[`_coefInp${n}`];t&&(t.value="",t.classList.remove("correct","incorrect"))}),this._showSol=!1;else{if(o.forEach((n,t)=>n.forEach((e,i)=>{const s=this._inp(t,i);s&&(s.disabled=!1,s.value=s.dataset.solution,s.classList.add("correct"),s.classList.remove("incorrect"))})),this._phase<1&&(this._phase=1,this._drawArrow(0),this._showCoefInput(0)),this._phase<2){this._phase=2;const{ri:n,ci:t}=this._unk,e=this._inp(n,t);e&&(e.disabled=!1),this._drawArrow(1),this._showCoefInput(1)}[0,1].forEach(n=>{const t=this[`_coefInp${n}`],e=this[`_coefWrap${n}`];if(!t)return;t.value=t.dataset.solution,t.classList.add("correct"),t.classList.remove("incorrect");const i=e?.querySelector(".lm-coef-fb");i&&(i.textContent="😀",i.style.color="#16a34a")}),this._showSol=!0}}}customElements.get("math974-linearite-mult")||customElements.define("math974-linearite-mult",S);const b=[{item:"kg de mangues",lieu:"marché de Saint-Pierre"},{item:"kg de thon",lieu:"pêcheur de Saint-Gilles"},{item:"sachets d'épices",lieu:"marché de Salazie"},{item:"ananas Victoria",lieu:"marché du Tampon"},{item:"kg de letchis",lieu:"marché du Port"},{item:"billets de bus",lieu:null}],g=[3,4,5,6,8,10];function I(d,o){if(o?.rows){const h=new Set(["rows","headers","content"]),c={};for(const[u,f]of Object.entries(o))h.has(u)||(c[u]=x(f));const p=o.rows.map(u=>u.map(f=>C(f,c)));return{...d,...c,headers:o.headers??d.headers??[],rows:p,content:o.content??d.content??""}}const n=b[Math.floor(Math.random()*b.length)],t=2+Math.floor(Math.random()*4),e=2+Math.floor(Math.random()*4),i=t*e,s=g[Math.floor(Math.random()*g.length)],l=e*s,a=`${n.lieu?`Au ${n.lieu}, `:""}**${e} ${n.item}** coûtent **${l} €**. Combien coûtent **${i} ${n.item}** ?`;return{...d,headers:[n.item,"Prix (€)"],rows:[[e,i],[l,null]],content:a}}export{M as defaultPosition,I as randomize};
