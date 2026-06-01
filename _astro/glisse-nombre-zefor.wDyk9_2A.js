const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/rapido-engine.BaLalbJW.js","_astro/editor.CJZspgfY.js","_astro/rapidos-visuals-integration.DFzkP-TN.js","_astro/js-yaml.CwjAzRNl.js"])))=>i.map(i=>d[i]);
import{_ as B}from"./editor.CJZspgfY.js";import{ensureSharedStyles as G}from"./vis-input.BqI2t2o9.js";import{parseRange as F}from"./utils.MftNdmoG.js";import"./rapido-engine.BaLalbJW.js";import"./rapidos-visuals-integration.DFzkP-TN.js";import"./js-yaml.CwjAzRNl.js";const ne="south",oe=!0,x=i=>Math.round(i*1e6)/1e6,R=i=>Number(x(i)).toLocaleString("fr-FR",{maximumFractionDigits:6}),P={7:"dizaines de millions",6:"millions",5:"centaines de mille",4:"dizaines de mille",3:"milliers",2:"centaines",1:"dizaines",0:"unités","-1":"dixièmes","-2":"centièmes","-3":"millièmes","-4":"dix-millièmes","-5":"cent-millièmes","-6":"millionièmes"};function H(i){let a=Math.abs(x(i)).toFixed(6),[c,g=""]=a.split(".");g=g.replace(/0+$/,""),c=c.replace(/^0+(?=\d)/,"");const m={};for(let n=0;n<c.length;n++)m[c.length-1-n]=c[n];for(let n=0;n<g.length;n++)m[-(n+1)]=g[n];const h=Object.keys(m).map(Number);return{digits:m,minRank:Math.min(0,...h),maxRank:Math.max(0,...h)}}function V(i){return String(i??"").replace(/\s/g,"").replace(",",".")}function I(i,t){const a=parseFloat(V(i));return!isNaN(a)&&Math.abs(a-t)<.001}const K=`
math974-glisse-nombre-zefor { display:block; font-family:inherit; width:100%; }

.gnz-direct {
  display:flex; flex-direction:column; align-items:center; gap:10px;
  padding:14px 16px; margin-bottom:12px;
  background:rgba(14,165,233,.05);
  border:2px solid rgba(14,165,233,.18); border-radius:10px;
}
.gnz-op-row {
  display:flex; align-items:center; gap:8px; flex-wrap:wrap; justify-content:center;
  font-size:1.3em; font-weight:700; color:#0f172a;
}
.gnz-op-row .gnz-op { color:#0369a1; }
.gnz-input {
  border:none; border-bottom:2px solid #0ea5e9; outline:none;
  font-size:1.15em; font-weight:700; font-family:inherit; text-align:center;
  width:7ch; color:#0f172a; background:transparent; padding:4px 0;
}
.gnz-input:focus { border-bottom-color:#0284c7; background:rgba(14,165,233,.08); }
.gnz-input.correct   { border-bottom-color:#16a34a; color:#15803d; }
.gnz-input.incorrect { border-bottom-color:#dc2626; color:#dc2626; }

.gnz-schema {
  background:rgba(15,23,42,.03); border:1px solid rgba(15,23,42,.08);
  border-radius:8px; padding:4px 12px;
}
.gnz-schema > summary {
  cursor:pointer; padding:8px 4px; font-weight:500; font-size:.95em; color:#475569;
  user-select:none; -webkit-user-select:none;
}
.gnz-schema > summary:hover { color:#0f172a; }
.gnz-schema[open] > summary {
  margin-bottom:10px; border-bottom:1px dashed rgba(15,23,42,.15);
}

/* ── Tableau de numération ── */
.gnz-table { position:relative; overflow:visible; padding:6px 2px 2px; }
.gnz-grid { display:flex; align-items:stretch; width:100%; }
/* Colonnes en flex:1 → LARGEUR ÉGALE remplissant 100% → uniforme, donc le
   glissement par delta offsetLeft aligne parfaitement les chiffres. */
.gnz-col  { display:flex; flex-direction:column; flex:1 1 0; min-width:0; }
.gnz-col.gnz-col--dec .gnz-head { color:#0369a1; }

.gnz-head {
  writing-mode:vertical-rl; transform:rotate(180deg);
  font-size:.62rem; line-height:1; text-align:center; color:#334155;
  height:5.5em; margin:0 auto 3px; white-space:nowrap; font-weight:600;
}
.gnz-cell {
  position:relative; height:2.4em;
  border:2px solid #0f172a; border-right-width:1px; border-left-width:1px;
  display:flex; align-items:center; justify-content:center;
  font-size:1.4em; font-weight:700; color:#0f172a; background:#fff;
}
.gnz-col:first-child .gnz-cell { border-left-width:2px; }
.gnz-col:last-child  .gnz-cell { border-right-width:2px; }

/* La virgule FIXE entre les unités et les dixièmes (ne bouge jamais). */
.gnz-comma {
  width:0; flex:0 0 0; position:relative; z-index:3;
}
.gnz-comma .gnz-comma-mark {
  position:absolute; bottom:-1px; left:-5px;
  font-size:1.8em; font-weight:900; color:#dc2626; line-height:.5;
}
.gnz-comma .gnz-comma-lbl {
  position:absolute; top:-1.1em; left:50%; transform:translateX(-50%);
  font-size:.5rem; color:#dc2626; white-space:nowrap; font-weight:600;
}

.gnz-digit {
  display:inline-flex; align-items:center; justify-content:center;
  width:100%; height:100%;
}
.gnz-digit.gnz-digit--start { color:#0369a1; position:relative; z-index:4; }
.gnz-digit.gnz-digit--zero  { color:#16a34a; animation:gnz-pop .35s ease-out; }
@keyframes gnz-pop { from { transform:scale(0); opacity:0; } to { transform:scale(1); opacity:1; } }

/* ── Slider + bulle popup ── */
.gnz-slider-wrap { position:relative; margin:22px auto 6px; max-width:340px; padding-top:16px; }
.gnz-bubble {
  position:absolute; top:-4px; transform:translateX(-50%);
  background:#0369a1; color:#fff; font-weight:700; font-size:.82rem;
  padding:3px 10px; border-radius:999px; white-space:nowrap; pointer-events:none;
  box-shadow:0 2px 6px rgba(0,0,0,.25); transition:left .15s ease;
}
.gnz-bubble::after {
  content:''; position:absolute; bottom:-5px; left:50%; transform:translateX(-50%);
  border:5px solid transparent; border-top-color:#0369a1; border-bottom:0;
}
.gnz-bubble.gnz-bubble--zero { background:#64748b; }
.gnz-bubble.gnz-bubble--zero::after { border-top-color:#64748b; }
.gnz-slider {
  -webkit-appearance:none; appearance:none; width:100%; height:8px; margin:0;
  border-radius:999px; outline:none; cursor:pointer;
  background:linear-gradient(90deg,#16a34a 0 40%,#cbd5e1 46% 54%,#0ea5e9 60% 100%);
}
.gnz-slider::-webkit-slider-thumb {
  -webkit-appearance:none; appearance:none; width:26px; height:26px; border-radius:50%;
  background:#fff; border:3px solid #0369a1; cursor:pointer; box-shadow:0 1px 4px rgba(0,0,0,.3);
}
.gnz-slider::-moz-range-thumb {
  width:26px; height:26px; border-radius:50%; background:#fff;
  border:3px solid #0369a1; cursor:pointer;
}
.gnz-ticks {
  display:flex; justify-content:space-between; margin-top:4px;
  font-size:.6rem; color:#64748b; font-weight:600;
}
.gnz-ticks .gnz-tick--mid { color:#334155; }
.gnz-result .gnz-op { color:#0369a1; }

.gnz-actions { display:flex; gap:7px; align-items:center; justify-content:center; margin-top:12px; flex-wrap:wrap; }
.gnz-btn {
  appearance:none; border:2px solid #0ea5e9; background:#0ea5e9; color:#fff;
  font-weight:700; font-family:inherit; font-size:.85rem;
  padding:6px 11px; border-radius:8px; cursor:pointer;
  min-height:40px;
}
.gnz-btn:hover { background:#0284c7; border-color:#0284c7; }
.gnz-btn.gnz-btn--div { background:#16a34a; border-color:#16a34a; }
.gnz-btn.gnz-btn--div:hover { background:#15803d; border-color:#15803d; }
.gnz-btn.gnz-btn--ghost { background:#fff; color:#475569; border-color:#cbd5e1; }
.gnz-btn.gnz-btn--ghost:hover { background:rgba(14,165,233,.08); }
.gnz-result {
  margin-top:10px; text-align:center; font-size:1.1em; font-weight:700; color:#15803d;
  min-height:1.4em;
}
.gnz-note { margin-top:6px; text-align:center; font-size:.72rem; color:#64748b; }
`;function U(){if(document.getElementById("gnz-styles"))return;const i=document.createElement("style");i.id="gnz-styles",i.textContent=K,document.head.appendChild(i)}class W extends HTMLElement{static get observedAttributes(){return["n","k","op","dir","p","answer"]}connectedCallback(){G(),U(),this.dataset.placeMode="1",this._render()}attributeChangedCallback(){this.isConnected&&this._render()}_cfg(){const t=parseFloat(this.getAttribute("n")),a=parseFloat(this.getAttribute("k")),c=this.getAttribute("op")||"×",g=c==="÷"?1/a:a,m=g>1?1:-1,h=Math.round(Math.abs(Math.log10(a))),n=x(t*g);return{n:t,k:a,op:c,factor:g,dir:m,p:h,answer:n}}_render(){const{n:t,k:a,op:c,dir:g,p:m,answer:h}=this._cfg();if(!Number.isFinite(t)||!Number.isFinite(a)){this.innerHTML="";return}this.innerHTML="";const n=document.createElement("div");n.className="gnz-direct",n.innerHTML=`
      <div class="gnz-op-row">
        <span>Calcule :</span>
        <strong class="gnz-num">${R(t)}</strong>
        <strong class="gnz-op">${c}</strong>
        <strong class="gnz-num">${R(a)}</strong>
        <span>=</span>
        <input class="gnz-input rapido-input" type="text" autocomplete="off"
               inputmode="decimal" placeholder="?">
        <span class="rapido-fb" aria-hidden="true"></span>
      </div>
    `;const r=n.querySelector(".gnz-input");r.dataset.solution=String(h);const p=document.createElement("details");p.className="gnz-schema";const w=document.createElement("summary");w.textContent="💡 Voir le glisse-nombre",p.appendChild(w),p.appendChild(this._buildTable(t,a,c,g,m,h)),p.addEventListener("toggle",()=>{p.open&&this._schemaApply0?.()}),this.appendChild(n),this.appendChild(p),this._inpDirect=r,this._schemaDetails=p,r.addEventListener("keydown",s=>{s.key==="Enter"&&(s.preventDefault(),r.blur())});const u=this.closest(".q-card");u&&B(()=>import("./rapido-engine.BaLalbJW.js").then(s=>s.j),__vite__mapDeps([0,1,2,3])).then(s=>s.wireCardInputs?.(u)).catch(()=>{}),new MutationObserver(()=>{r.classList.contains("incorrect")&&this.closest(".q-card")?.dispatchEvent(new CustomEvent("zefor-indice-auto-pop",{detail:{studentValue:r.value,source:this},bubbles:!0}))}).observe(r,{attributes:!0,attributeFilter:["class"]});let f=null;r.addEventListener("input",()=>{clearTimeout(f),f=setTimeout(()=>{const s=this.closest(".q-card");!s||!s.querySelector(".am-indice-panel.open")||s.dispatchEvent(new CustomEvent("zefor-indice-auto-refresh",{detail:{studentValue:r.value,source:this},bubbles:!0}))},300)})}_buildTable(t,a,c,g,m,h){const n=H(t),r=3,p=n.maxRank+r,w=n.minRank-r,u=document.createElement("div");u.className="gnz-table";const l=document.createElement("div");l.className="gnz-grid";const f={};for(let e=p;e>=w;e--){const d=document.createElement("div");d.className="gnz-col"+(e<0?" gnz-col--dec":"");const b=document.createElement("div");b.className="gnz-head",b.textContent=P[e]??`10^${e}`;const M=document.createElement("div");if(M.className="gnz-cell",M.dataset.rank=String(e),d.appendChild(b),d.appendChild(M),l.appendChild(d),f[e]=M,e===0&&w<0){const $=document.createElement("div");$.className="gnz-comma",$.innerHTML='<span class="gnz-comma-lbl">virgule fixe</span><span class="gnz-comma-mark">,</span>',l.appendChild($)}}u.appendChild(l);const s=[];for(const[e,d]of Object.entries(n.digits)){const b=document.createElement("span");b.className="gnz-digit gnz-digit--start",b.textContent=d,b.dataset.rank=e,f[e]?.appendChild(b),s.push(b)}let S=[];const j=e=>e>0?`×${10**e}`:e<0?`÷${10**-e}`:"nombre de départ",k=document.createElement("div");k.className="gnz-slider-wrap",k.innerHTML=`
      <div class="gnz-bubble" data-s="0">nombre de départ</div>
      <input type="range" class="gnz-slider" min="-${r}" max="${r}" step="1" value="0"
             aria-label="Multiplier ou diviser par une puissance de 10">
      <div class="gnz-ticks">
        <span>÷1000</span><span>÷100</span><span>÷10</span>
        <span class="gnz-tick--mid">•</span>
        <span>×10</span><span>×100</span><span>×1000</span>
      </div>`;const y=k.querySelector(".gnz-slider"),C=k.querySelector(".gnz-bubble"),L=document.createElement("div");L.className="gnz-result";const _=(e,d=!0)=>{s.forEach(z=>{const A=Number(z.dataset.rank),N=f[A],E=f[A+e],O=N&&E?E.offsetLeft-N.offsetLeft:0;z.style.transition=d?"transform .3s cubic-bezier(.34,1.05,.5,1)":"none",z.style.transform=`translateX(${O}px)`}),S.forEach(z=>z.remove()),S=[];const b=x(t*Math.pow(10,e)),M=new Set(s.map(z=>Number(z.dataset.rank)+e)),$=H(b);for(const[z,A]of Object.entries($.digits)){const N=Number(z);if(A==="0"&&!M.has(N)&&f[N]){const E=document.createElement("span");E.className="gnz-digit gnz-digit--zero",E.textContent="0",f[N].appendChild(E),S.push(E)}}const D=j(e);C.textContent=D,C.dataset.s=String(e),C.classList.toggle("gnz-bubble--zero",e===0);const X=(e+r)/(2*r);C.style.left=`${X*100}%`,L.innerHTML=e===0?`Nombre de départ : <strong>${R(t)}</strong>`:`<strong>${R(t)}</strong> <span class="gnz-op">${D}</span> = <strong>${R(b)}</strong>`};this._goTo=e=>{y.value=String(e),_(e,!0)},y.addEventListener("input",()=>_(parseInt(y.value,10),!0));const o=document.createElement("div");o.className="gnz-actions";const T=[{s:-3,t:"÷1000"},{s:-2,t:"÷100"},{s:-1,t:"÷10"},{s:1,t:"×10"},{s:2,t:"×100"},{s:3,t:"×1000"}];for(const e of T){const d=document.createElement("button");d.type="button",d.className="gnz-btn"+(e.s<0?" gnz-btn--div":""),d.textContent=e.t,d.addEventListener("click",()=>this._goTo(e.s)),o.appendChild(d)}const v=document.createElement("button");v.type="button",v.className="gnz-btn gnz-btn--ghost",v.textContent="⟳ départ",v.addEventListener("click",()=>this._goTo(0)),o.appendChild(v);const q=document.createElement("div");return q.className="gnz-note",q.textContent="Glisse le curseur (ou clique un bouton) : les chiffres changent de rang, la virgule ne bouge pas.",u.appendChild(k),u.appendChild(o),u.appendChild(L),u.appendChild(q),_(0,!1),this._schemaApply0=()=>_(parseInt(y.value,10),!1),u}getCurrentPhase(){const{answer:t}=this._cfg(),a=this._inpDirect?.value??"";return a.trim()===""?"reponse_directe":I(a,t)?"done":"erreur_reponse_directe"}validate(){const{answer:t}=this._cfg();return I(this._inpDirect?.value,t)}toggleSolution(t){if(t&&this._schemaDetails){this._schemaDetails.open=!0;const{dir:a,p:c}=this._cfg();requestAnimationFrame(()=>this._goTo?.(a*c))}}}customElements.get("math974-glisse-nombre-zefor")||customElements.define("math974-glisse-nombre-zefor",W);function re(i,t,a){const c=o=>o[Math.floor(Math.random()*o.length)],m=String(t?.op??"×,÷").split(",").map(o=>o.trim()).map(o=>o==="*"||o==="x"||o==="×"?"×":o==="/"||o===":"||o==="÷"?"÷":o).filter(o=>o==="×"||o==="÷"),h=c(m.length?m:["×"]),n=F(t?.k??"10,100"),r=h==="÷"?1/n:n,p=r>1?1:-1,w=Math.round(Math.abs(Math.log10(n))),u=Math.pow(10,w);let l;if(t?.decimal===!0||i?.decimal==="true"){const o=F(t?.dec??"1,2");let T,v=0;do T=F(t?.mant??"105..9995"),v++;while(T%Math.pow(10,o)===0&&v<30);l=x(T/Math.pow(10,o))}else l=F(t?.n??"12..999");const s=x(l*r),S=x(l/r),j=x(l*(p>0?10:.1)),k=l,y=Math.trunc(Math.abs(l)),C=Math.abs(l)-y,L=l<0?-1:1,_=p>0?x(L*(y*u+C)):s;return{...i,n:l,k:n,op:h,dir:p,p:w,factor:r,answer:s,err_sens:S,err_rangs:j,err_inchange:k,err_virgule:_}}export{oe as autoScale,ne as defaultPosition,re as randomize};
