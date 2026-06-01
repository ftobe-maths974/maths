const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/rapido-engine.C8UCvB3m.js","_astro/editor.CJZspgfY.js","_astro/rapidos-visuals-integration.v8j-7aTf.js","_astro/js-yaml.CwjAzRNl.js"])))=>i.map(i=>d[i]);
import{_ as B}from"./editor.CJZspgfY.js";import{ensureSharedStyles as P}from"./vis-input.Bx75NjJR.js";import{parseRange as A}from"./utils.MftNdmoG.js";import"./rapido-engine.C8UCvB3m.js";import"./rapidos-visuals-integration.v8j-7aTf.js";import"./js-yaml.CwjAzRNl.js";const ne="south",oe=!0,x=s=>Math.round(s*1e6)/1e6,R=s=>Number(x(s)).toLocaleString("fr-FR",{maximumFractionDigits:6}),V={7:"dizaines de millions",6:"millions",5:"centaines de mille",4:"dizaines de mille",3:"milliers",2:"centaines",1:"dizaines",0:"unités","-1":"dixièmes","-2":"centièmes","-3":"millièmes","-4":"dix-millièmes","-5":"cent-millièmes","-6":"millionièmes"};function D(s){let a=Math.abs(x(s)).toFixed(6),[l,m=""]=a.split(".");m=m.replace(/0+$/,""),l=l.replace(/^0+(?=\d)/,"");const p={};for(let n=0;n<l.length;n++)p[l.length-1-n]=l[n];for(let n=0;n<m.length;n++)p[-(n+1)]=m[n];const u=Object.keys(p).map(Number);return{digits:p,minRank:Math.min(0,...u),maxRank:Math.max(0,...u)}}function G(s){return String(s??"").replace(/\s/g,"").replace(",",".")}function I(s,t){const a=parseFloat(G(s));return!isNaN(a)&&Math.abs(a-t)<.001}const K=`
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
.gnz-grid { display:flex; align-items:stretch; justify-content:center; }
.gnz-col  { display:flex; flex-direction:column; min-width:2.3em; }
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
  width:0; position:relative; z-index:3;
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
`;function W(){if(document.getElementById("gnz-styles"))return;const s=document.createElement("style");s.id="gnz-styles",s.textContent=K,document.head.appendChild(s)}class Z extends HTMLElement{static get observedAttributes(){return["n","k","op","dir","p","answer"]}connectedCallback(){P(),W(),this.dataset.placeMode="1",this._render()}attributeChangedCallback(){this.isConnected&&this._render()}_cfg(){const t=parseFloat(this.getAttribute("n")),a=parseInt(this.getAttribute("k"),10),l=this.getAttribute("op")||"×",m=l==="÷"?-1:1,p=Math.round(Math.log10(a)),u=x(m===1?t*a:t/a);return{n:t,k:a,op:l,dir:m,p,answer:u}}_render(){const{n:t,k:a,op:l,dir:m,p,answer:u}=this._cfg();if(!Number.isFinite(t)||!Number.isFinite(a)){this.innerHTML="";return}this.innerHTML="";const n=document.createElement("div");n.className="gnz-direct",n.innerHTML=`
      <div class="gnz-op-row">
        <span>Ta réponse :</span>
        <input class="gnz-input rapido-input" type="text" autocomplete="off"
               inputmode="decimal" placeholder="?">
        <span class="rapido-fb" aria-hidden="true"></span>
      </div>
    `;const o=n.querySelector(".gnz-input");o.dataset.solution=String(u);const b=document.createElement("details");b.className="gnz-schema";const i=document.createElement("summary");i.textContent="💡 Voir le glisse-nombre",b.appendChild(i),b.appendChild(this._buildTable(t,a,l,m,p,u)),b.addEventListener("toggle",()=>{b.open&&this._schemaApply0?.()}),this.appendChild(n),this.appendChild(b),this._inpDirect=o,this._schemaDetails=b,o.addEventListener("keydown",c=>{c.key==="Enter"&&(c.preventDefault(),o.blur())});const h=this.closest(".q-card");h&&B(()=>import("./rapido-engine.C8UCvB3m.js").then(c=>c.j),__vite__mapDeps([0,1,2,3])).then(c=>c.wireCardInputs?.(h)).catch(()=>{}),new MutationObserver(()=>{o.classList.contains("incorrect")&&this.closest(".q-card")?.dispatchEvent(new CustomEvent("zefor-indice-auto-pop",{detail:{studentValue:o.value,source:this},bubbles:!0}))}).observe(o,{attributes:!0,attributeFilter:["class"]});let f=null;o.addEventListener("input",()=>{clearTimeout(f),f=setTimeout(()=>{const c=this.closest(".q-card");!c||!c.querySelector(".am-indice-panel.open")||c.dispatchEvent(new CustomEvent("zefor-indice-auto-refresh",{detail:{studentValue:o.value,source:this},bubbles:!0}))},300)})}_buildTable(t,a,l,m,p,u){const n=D(t),o=3,b=n.maxRank+o,i=n.minRank-o,h=document.createElement("div");h.className="gnz-table";const v=document.createElement("div");v.className="gnz-grid";const f={};for(let e=b;e>=i;e--){const d=document.createElement("div");d.className="gnz-col"+(e<0?" gnz-col--dec":"");const g=document.createElement("div");g.className="gnz-head",g.textContent=V[e]??`10^${e}`;const M=document.createElement("div");if(M.className="gnz-cell",M.dataset.rank=String(e),d.appendChild(g),d.appendChild(M),v.appendChild(d),f[e]=M,e===0&&i<0){const L=document.createElement("div");L.className="gnz-comma",L.innerHTML='<span class="gnz-comma-lbl">virgule fixe</span><span class="gnz-comma-mark">,</span>',v.appendChild(L)}}h.appendChild(v);const c=[];for(const[e,d]of Object.entries(n.digits)){const g=document.createElement("span");g.className="gnz-digit gnz-digit--start",g.textContent=d,g.dataset.rank=e,f[e]?.appendChild(g),c.push(g)}let S=[];const j=e=>e>0?`×${10**e}`:e<0?`÷${10**-e}`:"nombre de départ",k=document.createElement("div");k.className="gnz-slider-wrap",k.innerHTML=`
      <div class="gnz-bubble" data-s="0">nombre de départ</div>
      <input type="range" class="gnz-slider" min="-${o}" max="${o}" step="1" value="0"
             aria-label="Multiplier ou diviser par une puissance de 10">
      <div class="gnz-ticks">
        <span>÷1000</span><span>÷100</span><span>÷10</span>
        <span class="gnz-tick--mid">•</span>
        <span>×10</span><span>×100</span><span>×1000</span>
      </div>`;const C=k.querySelector(".gnz-slider"),_=k.querySelector(".gnz-bubble"),r=document.createElement("div");r.className="gnz-result";const w=(e,d=!0)=>{c.forEach(z=>{const $=Number(z.dataset.rank),N=f[$],E=f[$+e],O=N&&E?E.offsetLeft-N.offsetLeft:0;z.style.transition=d?"transform .3s cubic-bezier(.34,1.05,.5,1)":"none",z.style.transform=`translateX(${O}px)`}),S.forEach(z=>z.remove()),S=[];const g=x(t*Math.pow(10,e)),M=new Set(c.map(z=>Number(z.dataset.rank)+e)),L=D(g);for(const[z,$]of Object.entries(L.digits)){const N=Number(z);if($==="0"&&!M.has(N)&&f[N]){const E=document.createElement("span");E.className="gnz-digit gnz-digit--zero",E.textContent="0",f[N].appendChild(E),S.push(E)}}const q=j(e);_.textContent=q,_.dataset.s=String(e),_.classList.toggle("gnz-bubble--zero",e===0);const X=(e+o)/(2*o);_.style.left=`${X*100}%`,r.innerHTML=e===0?`Nombre de départ : <strong>${R(t)}</strong>`:`<strong>${R(t)}</strong> <span class="gnz-op">${q}</span> = <strong>${R(g)}</strong>`};this._goTo=e=>{C.value=String(e),w(e,!0)},C.addEventListener("input",()=>w(parseInt(C.value,10),!0));const y=document.createElement("div");y.className="gnz-actions";const H=[{s:-3,t:"÷1000"},{s:-2,t:"÷100"},{s:-1,t:"÷10"},{s:1,t:"×10"},{s:2,t:"×100"},{s:3,t:"×1000"}];for(const e of H){const d=document.createElement("button");d.type="button",d.className="gnz-btn"+(e.s<0?" gnz-btn--div":""),d.textContent=e.t,d.addEventListener("click",()=>this._goTo(e.s)),y.appendChild(d)}const T=document.createElement("button");T.type="button",T.className="gnz-btn gnz-btn--ghost",T.textContent="⟳ départ",T.addEventListener("click",()=>this._goTo(0)),y.appendChild(T);const F=document.createElement("div");return F.className="gnz-note",F.textContent="Glisse le curseur (ou clique un bouton) : les chiffres changent de rang, la virgule ne bouge pas.",h.appendChild(k),h.appendChild(y),h.appendChild(r),h.appendChild(F),w(0,!1),this._schemaApply0=()=>w(parseInt(C.value,10),!1),h}getCurrentPhase(){const{answer:t}=this._cfg(),a=this._inpDirect?.value??"";return a.trim()===""?"reponse_directe":I(a,t)?"done":"erreur_reponse_directe"}validate(){const{answer:t}=this._cfg();return I(this._inpDirect?.value,t)}toggleSolution(t){if(t&&this._schemaDetails){this._schemaDetails.open=!0;const{dir:a,p:l}=this._cfg();requestAnimationFrame(()=>this._goTo?.(a*l))}}}customElements.get("math974-glisse-nombre-zefor")||customElements.define("math974-glisse-nombre-zefor",Z);function re(s,t,a){const l=r=>r[Math.floor(Math.random()*r.length)],p=String(t?.op??"×,÷").split(",").map(r=>r.trim()).map(r=>r==="*"||r==="x"||r==="×"?"×":r==="/"||r===":"||r==="÷"?"÷":r).filter(r=>r==="×"||r==="÷"),u=l(p.length?p:["×"]),n=u==="÷"?-1:1,o=A(t?.k??"10,100"),b=Math.round(Math.log10(o));let i;if(t?.decimal===!0||s?.decimal==="true"){const r=A(t?.dec??"1,2");let w,y=0;do w=A(t?.mant??"105..9995"),y++;while(w%Math.pow(10,r)===0&&y<30);i=x(w/Math.pow(10,r))}else i=A(t?.n??"12..999");const v=x(n===1?i*o:i/o),f=x(n===1?i/o:i*o),c=x(n===1?i*10:i/10),S=i,j=Math.trunc(Math.abs(i)),k=Math.abs(i)-j,C=i<0?-1:1,_=n===1?x(C*(j*o+k)):v;return{...s,n:i,k:o,op:u,dir:n,p:b,answer:v,err_sens:f,err_rangs:c,err_inchange:S,err_virgule:_}}export{oe as autoScale,ne as defaultPosition,re as randomize};
