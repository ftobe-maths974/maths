import{ensureSharedStyles as G}from"./vis-input.B89IOM9B.js";import{parseRange as A}from"./utils.MftNdmoG.js";import"./preload-helper.CLcXU_4U.js";import"./rapido-engine.CN7B9C5e.js";import"./rapidos-visuals-integration.qcazsRqN.js";import"./js-yaml.CwjAzRNl.js";import"./editor.Di92v2Ao.js";const oe="south",re=!0,ie=!0,b=s=>Math.round(s*1e6)/1e6,$=s=>Number(b(s)).toLocaleString("fr-FR",{maximumFractionDigits:6}),O={7:"dizaines de millions",6:"millions",5:"centaines de mille",4:"dizaines de mille",3:"milliers",2:"centaines",1:"dizaines",0:"unités","-1":"dixièmes","-2":"centièmes","-3":"millièmes","-4":"dix-millièmes","-5":"cent-millièmes","-6":"millionièmes"};function I(s){let t=Math.abs(b(s)).toFixed(6),[i,a=""]=t.split(".");a=a.replace(/0+$/,""),i=i.replace(/^0+(?=\d)/,"");const c={};for(let o=0;o<i.length;o++)c[i.length-1-o]=i[o];for(let o=0;o<a.length;o++)c[-(o+1)]=a[o];const m=Object.keys(c).map(Number);return{digits:c,minRank:Math.min(0,...m),maxRank:Math.max(0,...m)}}function V(s){return String(s??"").replace(/\s/g,"").replace(",",".")}function j(s,e){const t=parseFloat(V(s));return!isNaN(t)&&Math.abs(t-e)<.001}const P=`
math974-glisse-nombre-zefor { display:block; font-family:inherit; width:100%; }

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
`;function K(){if(document.getElementById("gnz-styles"))return;const s=document.createElement("style");s.id="gnz-styles",s.textContent=P,document.head.appendChild(s)}class U extends HTMLElement{static get observedAttributes(){return["n","k","op","dir","p","answer"]}connectedCallback(){G(),K(),this.dataset.placeMode="1",this._render(),this._wireInput()}attributeChangedCallback(){this.isConnected&&(this._render(),this._wireInput())}disconnectedCallback(){this._obs?.disconnect()}_input(){return this.closest(".variant-content")?.querySelector(".rapido-input")||this.closest(".q-card")?.querySelector(".variant-content.active .content .rapido-input")}_cfg(){const e=parseFloat(this.getAttribute("n")),t=parseFloat(this.getAttribute("k")),i=this.getAttribute("op")||"×",a=i==="÷"?1/t:t,c=a>1?1:-1,m=Math.round(Math.abs(Math.log10(t))),o=b(e*a);return{n:e,k:t,op:i,factor:a,dir:c,p:m,answer:o}}_render(){const{n:e,k:t,op:i,dir:a,p:c,answer:m}=this._cfg();if(!Number.isFinite(e)||!Number.isFinite(t)){this.innerHTML="";return}this.innerHTML="";const o=document.createElement("details");o.className="gnz-schema";const l=document.createElement("summary");l.textContent="💡 Voir le glisse-nombre",o.appendChild(l),o.appendChild(this._buildTable(e,t,i,a,c,m)),o.addEventListener("toggle",()=>{o.open&&this._schemaApply0?.()}),this.appendChild(o),this._schemaDetails=o}_wireInput(e=0){const t=this._input();if(!t){e<5&&requestAnimationFrame(()=>this._wireInput(e+1));return}t!==this._wiredInp&&(this._wiredInp=t,this._obs?.disconnect(),this._obs=new MutationObserver(()=>{t.classList.contains("incorrect")&&this.closest(".q-card")?.dispatchEvent(new CustomEvent("zefor-indice-auto-pop",{detail:{studentValue:t.value,source:this},bubbles:!0}))}),this._obs.observe(t,{attributes:!0,attributeFilter:["class"]}),t.addEventListener("input",()=>{clearTimeout(this._refreshTimer),this._refreshTimer=setTimeout(()=>{const i=this.closest(".q-card");!i||!i.querySelector(".am-indice-panel.open")||i.dispatchEvent(new CustomEvent("zefor-indice-auto-refresh",{detail:{studentValue:t.value,source:this},bubbles:!0}))},300)}))}_buildTable(e,t,i,a,c,m){const o=I(e),l=3,E=o.maxRank+l,r=o.minRank-l,p=document.createElement("div");p.className="gnz-table";const u=document.createElement("div");u.className="gnz-grid";const f={};for(let n=E;n>=r;n--){const d=document.createElement("div");d.className="gnz-col"+(n<0?" gnz-col--dec":"");const g=document.createElement("div");g.className="gnz-head",g.textContent=O[n]??`10^${n}`;const x=document.createElement("div");if(x.className="gnz-cell",x.dataset.rank=String(n),d.appendChild(g),d.appendChild(x),u.appendChild(d),f[n]=x,n===0&&r<0){const C=document.createElement("div");C.className="gnz-comma",C.innerHTML='<span class="gnz-comma-lbl">virgule fixe</span><span class="gnz-comma-mark">,</span>',u.appendChild(C)}}p.appendChild(u);const w=[];for(const[n,d]of Object.entries(o.digits)){const g=document.createElement("span");g.className="gnz-digit gnz-digit--start",g.textContent=d,g.dataset.rank=n,f[n]?.appendChild(g),w.push(g)}let k=[];const H=n=>n>0?`×${10**n}`:n<0?`÷${10**-n}`:"nombre de départ",_=document.createElement("div");_.className="gnz-slider-wrap",_.innerHTML=`
      <div class="gnz-bubble" data-s="0">nombre de départ</div>
      <input type="range" class="gnz-slider" min="-${l}" max="${l}" step="1" value="0"
             aria-label="Multiplier ou diviser par une puissance de 10">
      <div class="gnz-ticks">
        <span>÷1000</span><span>÷100</span><span>÷10</span>
        <span class="gnz-tick--mid">•</span>
        <span>×10</span><span>×100</span><span>×1000</span>
      </div>`;const M=_.querySelector(".gnz-slider"),N=_.querySelector(".gnz-bubble"),F=document.createElement("div");F.className="gnz-result";const S=(n,d=!0)=>{w.forEach(h=>{const T=Number(h.dataset.rank),v=f[T],z=f[T+n],D=v&&z?z.offsetLeft-v.offsetLeft:0;h.style.transition=d?"transform .3s cubic-bezier(.34,1.05,.5,1)":"none",h.style.transform=`translateX(${D}px)`}),k.forEach(h=>h.remove()),k=[];const g=b(e*Math.pow(10,n)),x=new Set(w.map(h=>Number(h.dataset.rank)+n)),C=I(g);for(const[h,T]of Object.entries(C.digits)){const v=Number(h);if(T==="0"&&!x.has(v)&&f[v]){const z=document.createElement("span");z.className="gnz-digit gnz-digit--zero",z.textContent="0",f[v].appendChild(z),k.push(z)}}const q=H(n);N.textContent=q,N.dataset.s=String(n),N.classList.toggle("gnz-bubble--zero",n===0);const B=(n+l)/(2*l);N.style.left=`${B*100}%`,F.innerHTML=n===0?`Nombre de départ : <strong>${$(e)}</strong>`:`<strong>${$(e)}</strong> <span class="gnz-op">${q}</span> = <strong>${$(g)}</strong>`};this._goTo=n=>{M.value=String(n),S(n,!0)},M.addEventListener("input",()=>S(parseInt(M.value,10),!0));const L=document.createElement("div");L.className="gnz-actions";const X=[{s:-3,t:"÷1000"},{s:-2,t:"÷100"},{s:-1,t:"÷10"},{s:1,t:"×10"},{s:2,t:"×100"},{s:3,t:"×1000"}];for(const n of X){const d=document.createElement("button");d.type="button",d.className="gnz-btn"+(n.s<0?" gnz-btn--div":""),d.textContent=n.t,d.addEventListener("click",()=>this._goTo(n.s)),L.appendChild(d)}const y=document.createElement("button");y.type="button",y.className="gnz-btn gnz-btn--ghost",y.textContent="⟳ départ",y.addEventListener("click",()=>this._goTo(0)),L.appendChild(y);const R=document.createElement("div");return R.className="gnz-note",R.textContent="Glisse le curseur (ou clique un bouton) : les chiffres changent de rang, la virgule ne bouge pas.",p.appendChild(_),p.appendChild(L),p.appendChild(F),p.appendChild(R),S(0,!1),this._schemaApply0=()=>S(parseInt(M.value,10),!1),p}getCurrentPhase(){const{answer:e}=this._cfg(),t=this._input()?.value??"";return t.trim()===""?"reponse_directe":j(t,e)?"done":"erreur_reponse_directe"}getCurrentStudentValue(){return this._input()?.value??""}validate(){const{answer:e}=this._cfg();return j(this._input()?.value,e)}toggleSolution(e){if(e&&this._schemaDetails){this._schemaDetails.open=!0;const{dir:t,p:i}=this._cfg();requestAnimationFrame(()=>this._goTo?.(t*i))}}}customElements.get("math974-glisse-nombre-zefor")||customElements.define("math974-glisse-nombre-zefor",U);function W(s){const e=Number(s.n),t=Number(s.k),i=s.op||"×",a=i==="÷"?1/t:t,c=a>1?1:-1,m=Math.round(Math.abs(Math.log10(t))),o=Math.pow(10,m),l=b(e*a),E=b(e/a),r=b(e*(c>0?10:.1)),p=e,u=Math.trunc(Math.abs(e)),f=Math.abs(e)-u,w=e<0?-1:1,k=c>0?b(w*(u*o+f)):l;return{n:e,k:t,op:i,factor:a,dir:c,p:m,answer:l,err_sens:E,err_rangs:r,err_inchange:p,err_virgule:k}}function se(s,e,t){const i=r=>r[Math.floor(Math.random()*r.length)],c=String(e?.op??"×,÷").split(",").map(r=>r.trim()).map(r=>r==="*"||r==="x"||r==="×"?"×":r==="/"||r===":"||r==="÷"?"÷":r).filter(r=>r==="×"||r==="÷"),m=i(c.length?c:["×"]),o=A(e?.k??"10,100");let l;if(e?.decimal===!0||s?.decimal==="true"){const r=A(e?.dec??"1,2");let p,u=0;do p=A(e?.mant??"105..9995"),u++;while(p%Math.pow(10,r)===0&&u<30);l=b(p/Math.pow(10,r))}else l=A(e?.n??"12..999");return{...s,...W({n:l,k:o,op:m})}}export{ie as autoScale,re as contentBlock,oe as defaultPosition,W as derive,se as randomize};
