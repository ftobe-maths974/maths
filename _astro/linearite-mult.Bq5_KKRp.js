import{parseRange as _,evalExpr as x,fmt as b}from"./utils.MftNdmoG.js";import{e as C}from"./rapido-engine.C8UCvB3m.js";import"./editor.CJZspgfY.js";import"./rapidos-visuals-integration.v8j-7aTf.js";import"./js-yaml.CwjAzRNl.js";const R="north",q=!0,$=`
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
`;function L(){if(document.getElementById("lm-styles"))return;const c=document.createElement("style");c.id="lm-styles",c.textContent=$,document.head.appendChild(c)}class A extends HTMLElement{static get observedAttributes(){return["rows","headers"]}connectedCallback(){L(),this._render()}attributeChangedCallback(){this.isConnected&&this._render()}_cfg(){try{const s=JSON.parse(this.getAttribute("rows")||"[]").map(t=>t.map(e=>e==="?"||e===null?null:e)),n=JSON.parse(this.getAttribute("headers")||"[]");return{rows:s,rowHeaders:n}}catch{return{rows:[],rowHeaders:[]}}}_render(){const{rows:s,rowHeaders:n}=this._cfg();if(this._phase=0,this._showSol=!1,!s.length||s[0]?.length!==2){this.innerHTML="";return}if(this._unk=null,s.forEach((e,i)=>e.forEach((o,l)=>{o===null&&(this._unk={ri:i,ci:l})})),!this._unk){this.innerHTML="";return}this._k=null,this._sol=null;for(let e=0;e<s.length;e++)if(s[e][0]!=null&&s[e][1]!=null){this._k=s[e][1]/s[e][0];break}if(this._k!==null){const{ri:e,ci:i}=this._unk,o=s[e][i===0?1:0];o!=null&&(this._sol=o*this._k)}let t='<div class="lm-wrap"><table class="lm-table"><tbody>';s.forEach((e,i)=>{t+="<tr>",n[i]!=null&&(t+=`<td class="lm-hd">${n[i]}</td>`),e.forEach((o,l)=>{const r=o===null,h=r?b(this._sol):b(o);t+=`<td class="lm-cell${r?" lm-unk":""}" data-ri="${i}" data-ci="${l}"><span class="rapido-input-wrap"><input class="rapido-input" type="text" data-solution="${h}" placeholder="${r?"?":"…"}" autocomplete="off"${r?" disabled":""}><span class="rapido-fb" aria-hidden="true"></span></span></td>`}),t+="</tr>"}),t+='</tbody></table></div><svg class="lm-svg"></svg>',this.innerHTML=t,this.dataset.placeMode="1",this._setupTableInputs()}_cellEl(s,n){return this.querySelector(`.lm-cell[data-ri="${s}"][data-ci="${n}"]`)}_inp(s,n){return this._cellEl(s,n)?.querySelector("input")}_checkCell(s,n){const t=this._inp(s,n);if(!t||!t.value.trim())return!1;const e=parseFloat(t.value.trim().replace(",",".")),i=parseFloat(t.dataset.solution),o=!isNaN(e)&&Math.abs(e-i)<.01;return t.classList.toggle("correct",o),t.classList.toggle("incorrect",!o),o}_setupTableInputs(){const{rows:s}=this._cfg();s.forEach((n,t)=>n.forEach((e,i)=>{if(e===null)return;const o=this._inp(t,i);o&&(o.addEventListener("input",()=>o.classList.remove("correct","incorrect")),o.addEventListener("blur",()=>{this._checkCell(t,i),this._phase===0&&this._tryPhase1()}))}))}_tryPhase1(){const{rows:s}=this._cfg();!s.every((t,e)=>t.every((i,o)=>i===null||this._inp(e,o)?.classList.contains("correct")))||this._phase!==0||(this._phase=1,requestAnimationFrame(()=>{this._drawArrow(0),this._showCoefInput(0)}))}_arrowCoords(s){const n=this._cellEl(s,0),t=this._cellEl(s,1);if(!n||!t)return null;const e=this.getBoundingClientRect(),i=n.getBoundingClientRect(),o=t.getBoundingClientRect(),l=(i.left+i.right)/2-e.left,r=(o.left+o.right)/2-e.left,h=(l+r)/2,p=s===0,a=p?i.top-e.top:i.bottom-e.top,d=p?a-18:a+18,u=p?a-6:a+6;return{x1:l,x2:r,midX:h,isTop:p,yEdge:a,yArm:d,yTip:u}}_drawArrow(s){const n=this._arrowCoords(s);if(!n)return;const{x1:t,x2:e,isTop:i,yEdge:o,yArm:l,yTip:r}=n,h="#2563eb",p="http://www.w3.org/2000/svg",a=this.querySelector(".lm-svg"),d=(k,y,E,v)=>{const m=document.createElementNS(p,"line");m.setAttribute("x1",k),m.setAttribute("y1",y),m.setAttribute("x2",E),m.setAttribute("y2",v),m.setAttribute("stroke",h),m.setAttribute("stroke-width","2"),a.appendChild(m)};d(t,o,t,l),d(t,l,e,l),d(e,l,e,r);const u=5,f=document.createElementNS(p,"polygon"),w=i?`${e},${o-1} ${e-u},${r-1} ${e+u},${r-1}`:`${e},${o+1} ${e-u},${r+1} ${e+u},${r+1}`;f.setAttribute("points",w),f.setAttribute("fill",h),a.appendChild(f)}_showCoefInput(s){const n=this._arrowCoords(s);if(!n)return;const{midX:t,isTop:e,yArm:i}=n,o=e?i-10:i+10,l=document.createElement("span");l.className="lm-coef",l.style.left=`${t}px`,l.style.top=`${o}px`,l.innerHTML="×";const r=document.createElement("input");r.type="text",r.placeholder="?",r.autocomplete="off",r.dataset.solution=b(this._k),l.appendChild(r);const h=document.createElement("span");h.className="lm-coef-fb",l.appendChild(h),this.appendChild(l),r.addEventListener("input",()=>{r.classList.remove("correct","incorrect"),h.textContent=""}),r.addEventListener("blur",()=>{const p=parseFloat(r.value.trim().replace(",",".")),a=!isNaN(p)&&this._k!=null&&Math.abs(p-this._k)<.01;r.classList.toggle("correct",a),r.classList.toggle("incorrect",!a),h.textContent=a?"😀":r.value.trim()?"😞":"",h.style.color=a?"#16a34a":"#dc2626",a&&s===0&&this._phase===1&&this._toPhase2()}),r.focus(),this[`_coefWrap${s}`]=l,this[`_coefInp${s}`]=r}_toPhase2(){if(this._phase!==1)return;this._phase=2;const{ri:s,ci:n}=this._unk,t=this._inp(s,n);t&&(t.disabled=!1,t.addEventListener("input",()=>t.classList.remove("correct","incorrect")),t.addEventListener("blur",()=>this._checkCell(s,n)),t.focus()),requestAnimationFrame(()=>{this._drawArrow(1),this._showCoefInput(1)})}validate(){const{rows:s}=this._cfg();s.forEach((n,t)=>n.forEach((e,i)=>{const o=this._inp(t,i);!o||o.disabled||this._checkCell(t,i)})),[0,1].forEach(n=>{const t=this[`_coefInp${n}`],e=this[`_coefWrap${n}`];if(!t)return;const i=parseFloat(t.value.trim().replace(",",".")),o=!isNaN(i)&&this._k!=null&&Math.abs(i-this._k)<.01;t.classList.toggle("correct",o),t.classList.toggle("incorrect",!o);const l=e?.querySelector(".lm-coef-fb");l&&(l.textContent=o?"😀":t.value.trim()?"😞":"",l.style.color=o?"#16a34a":"#dc2626")}),this._phase===0&&this._tryPhase1(),this._phase===1&&this._coefInp0?.classList.contains("correct")&&this._toPhase2()}toggleSolution(){const{rows:s}=this._cfg();if(this._showSol)s.forEach((n,t)=>n.forEach((e,i)=>{const o=this._inp(t,i);o&&(o.value="",o.disabled=e===null&&this._phase<2,o.classList.remove("correct","incorrect"))})),[0,1].forEach(n=>{const t=this[`_coefInp${n}`];t&&(t.value="",t.classList.remove("correct","incorrect"))}),this._showSol=!1;else{if(s.forEach((n,t)=>n.forEach((e,i)=>{const o=this._inp(t,i);o&&(o.disabled=!1,o.value=o.dataset.solution,o.classList.add("correct"),o.classList.remove("incorrect"))})),this._phase<1&&(this._phase=1,this._drawArrow(0),this._showCoefInput(0)),this._phase<2){this._phase=2;const{ri:n,ci:t}=this._unk,e=this._inp(n,t);e&&(e.disabled=!1),this._drawArrow(1),this._showCoefInput(1)}[0,1].forEach(n=>{const t=this[`_coefInp${n}`],e=this[`_coefWrap${n}`];if(!t)return;t.value=t.dataset.solution,t.classList.add("correct"),t.classList.remove("incorrect");const i=e?.querySelector(".lm-coef-fb");i&&(i.textContent="😀",i.style.color="#16a34a")}),this._showSol=!0}}}customElements.get("math974-linearite-mult")||customElements.define("math974-linearite-mult",A);const g={a:"2..5",k:"2..5",p:"3,4,5,6,8,10"};function S(c){return c?c.charAt(0).toUpperCase()+c.slice(1):""}function I(){const c=["fruits","poissons","epicerie","transport"].flatMap(C);return c.length?c[Math.floor(Math.random()*c.length)]:null}function F(c,s){if(s?.rows){const p=new Set(["rows","headers","content"]),a={};for(const[u,f]of Object.entries(s))p.has(u)||(a[u]=_(f));const d=s.rows.map(u=>u.map(f=>x(f,a)));return{...c,...a,headers:s.headers??c.headers??[],rows:d,content:s.content??c.content??""}}const n=I();if(!n)return c;const t=_(s?.k??g.k),e=_(s?.a??g.a),i=t*e,o=_(s?.p??g.p),l=e*o,h=`${n.lieu?`${S(n.lieu)}, `:""}**${e} ${n.plur}** coûtent **${l} €**. Combien coûtent **${i} ${n.plur}** ?`;return{...c,headers:[n.plur,"Prix (€)"],rows:[[e,i],[l,null]],content:h}}export{q as autoScale,R as defaultPosition,F as randomize};
