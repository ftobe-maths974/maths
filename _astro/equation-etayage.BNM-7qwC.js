import{l as y}from"./rapidos-visuals-integration.Dt_pdZ55.js";import"./editor.CJZspgfY.js";const T="content",u=(r,e)=>Math.floor(Math.random()*(e-r+1))+r,m=(r,e)=>{let t;do t=u(r,e);while(t===0);return t};function F(r){const e=r&&r.form||"ax+b=c";if(e==="ax=b"){const i=u(2,7),o=u(2,9);return{...r,equation:`${i}x = ${i*o}`,_seed:Math.random()}}if(e==="x+a=b"){const i=u(1,9),o=u(2,9);return{...r,equation:`x + ${i} = ${i+o}`,_seed:Math.random()}}if(e==="x+a=b-relatif"){let i,o,s;do i=m(-9,9),o=m(-9,9),s=o+i;while(s===0||Math.abs(s)>12);const l=i<0?` - ${-i}`:` + ${i}`;return{...r,equation:`x${l} = ${s}`,_seed:Math.random()}}if(e==="ax=b-relatif"){let i,o;do i=u(-7,7),o=m(-9,9);while(Math.abs(i)<2);const s=i*o,l=i<0?`-${-i}`:`${i}`;return{...r,equation:`${l}x = ${s}`,_seed:Math.random()}}if(e==="ax+b=cx+d"){let i,o,s,l,d;do i=u(3,7),o=u(1,i-1),s=u(2,6),l=u(1,12),d=l-s*(i-o);while(d<=0||d>12);return{...r,equation:`${i}x + ${d} = ${o}x + ${l}`,_seed:Math.random()}}if(e==="ax+b=cx+d-relatif"){let i,o,s,l,d;do i=m(-5,5),o=m(-4,4),s=m(-6,6),l=u(-8,8),d=l-s*(i-o);while(i===o||Math.abs(d)>15);const f=i<0?`-${-i}`:`${i}`,h=o<0?`-${-o}`:`${o}`,p=d<0?` - ${-d}`:` + ${d}`,b=l<0?` - ${-l}`:` + ${l}`;return{...r,equation:`${f}x${p} = ${h}x${b}`,_seed:Math.random()}}const t=u(2,7),n=u(2,7),a=u(1,9),c=t*n+a;return{...r,equation:`${t}x + ${a} = ${c}`,_seed:Math.random()}}const I=`
.ee-wrap {
  padding: 4px 8px;
  margin: 0 auto;
  font-family: var(--font-sans);
  /* RESPONSIVE (comportement global) : base en var(--q-text-size), la
     container query de .q-card-content (clamp(1.1rem, 5cqi, 4rem)). Tout le
     visuel est en em → il scale uniformément avec la taille de la carte,
     exactement comme le DSL .content. (Les inputs gardent une taille absolue
     plus bas pour rester des contrôles tactiles utilisables.) */
  font-size: var(--q-text-size, 1.5rem);
}
.ee-stack {
  display: flex;
  flex-direction: column;
  gap: 0;
  color: #1e293b;
}
.ee-row {
  display: grid;
  /* min auto / max-content : chaque côté prend la largeur naturelle de
     son contenu, avec un plancher pour les rangs courts (ex. "x"). */
  grid-template-columns: minmax(2em, max-content) auto minmax(2em, max-content);
  align-items: center;
  padding: 0;
  justify-content: center;
}
.ee-eq { font-size: 1.5em; font-weight: 800; line-height: 1.1; margin: 1px 0; }
.ee-eq .ee-left  { text-align: right;  padding-right: 14px; }
.ee-eq .ee-sym   { padding: 0 10px; }
.ee-eq .ee-right { text-align: left;   padding-left: 14px; }

/* La variable x et les operateurs sont rendus via MathJax (LaTeX inline)
   apres chaque _draw(). Le poids/style des MJX-containers est neutralise
   pour qu'ils heritent du contexte (sans devenir gras). */
mjx-container {
  font-weight: normal !important;
}
.ee-eq mjx-container {
  font-size: inherit !important;
  margin: 0 !important;
  line-height: 1 !important;
}

.ee-arrows {
  font-size: 1.3em;
  font-weight: 800;
  color: #6366f1;
  padding: 0;
  line-height: 1;
}
.ee-arrows .ee-arrow {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.ee-arrows .ee-left  .ee-arrow { justify-self: end;   padding-right: 14px; }
.ee-arrows .ee-right .ee-arrow { justify-self: start; padding-left: 14px; }
.ee-arrow-tip {
  font-size: 1.3em;
  line-height: 1;
}
.ee-arrow-text { white-space: nowrap; }

.ee-op, .ee-k {
  /* Scale MODÉRÉ avec la carte (cqi, plus lent que l'équation) puis plafonné :
     les contrôles grandissent en projection pour rester lisibles à côté de
     l'équation, sans devenir géants — et restent tactiles (min 1rem + 44px)
     sur mobile. padding/largeurs en em → la boîte suit la police du champ. */
  font-size: clamp(1rem, 2.5cqi, 1.7rem);
  font-weight: 800;
  padding: 0.2em 0.5em;
  border: 2px solid #c7d2fe;
  border-radius: 8px;
  background: white;
  color: #4338ca;
  min-height: 44px;
  line-height: 1.1;
}
.ee-op { min-width: 3.4em; }
.ee-k {
  width: 4.5em;
  text-align: center;
}
.ee-op:focus, .ee-k:focus {
  outline: none;
  border-color: #6366f1;
  background: #eef2ff;
}
.ee-k.incorrect, .ee-op.incorrect {
  border-color: #dc2626;
  background: #fef2f2;
}
.ee-fb { display: inline-flex; min-width: 22px; font-size: 1.2em; }

/* Inputs de SAISIE LIBRE (mode 'saisie-libre') : l'élève tape les membres de
   l'équation. Taille héritée de .ee-eq (1.5em) → ils s'intègrent à la ligne
   d'équation. Soulignés (≠ champs op/k encadrés) pour évoquer « à compléter ». */
.ee-entry {
  font: inherit;
  width: 4.5em;
  max-width: 38vw;
  text-align: center;
  font-weight: 800;
  padding: 0.05em 0.3em;
  border: none;
  border-bottom: 3px solid #c7d2fe;
  background: #f8faff;
  color: #1e293b;
  min-height: 44px;
  border-radius: 6px 6px 0 0;
}
.ee-entry:focus { outline: none; border-bottom-color: #6366f1; background: #eef2ff; }
.ee-entry.incorrect { border-bottom-color: #dc2626; background: #fef2f2; }
.ee-entry-row .ee-fb { font-size: 0.55em; }

.ee-arrows-done { color: #94a3b8; opacity: 0.85; }
.ee-arrows-done .ee-arrow-text { font-weight: 700; }

.ee-final {
  text-align: center;
  margin: 6px auto 2px;
  padding: 6px 20px;
  background: linear-gradient(135deg, #d1fae5, #a7f3d0);
  color: #065f46;
  border: 2px solid #34d399;
  border-radius: 12px;
  font-size: 1.4em;
  line-height: 1.2;
  font-weight: 900;
  letter-spacing: 0.02em;
  max-width: max-content;
  animation: ee-pop 0.5s cubic-bezier(.34,1.56,.64,1);
}
@keyframes ee-pop {
  0%   { opacity: 0; transform: scale(0.5); }
  60%  { transform: scale(1.08); }
  100% { opacity: 1; transform: scale(1); }
}
`;let _=!1;function A(){if(_)return;_=!0;const r=document.createElement("style");r.textContent=I,document.head.appendChild(r)}function $(r){const[e,t]=r.split("=").map(n=>n.trim());return{left:w(e),right:w(t)}}function w(r){return r=r.replace(/\s/g,"").replace(/−/g,"-"),/^[+\-]/.test(r)||(r="+"+r),(r.match(/[+\-][^+\-]+/g)||[]).map(t=>{const n=t[0]==="-"?-1:1,a=t.slice(1),c=a.match(/^(\d*)x$/);return c?{kind:"var",coef:n*parseInt(c[1]||"1",10)}:{kind:"const",coef:n*parseFloat(a)}})}function g(r){let e=0,t=0;for(const a of r)a.kind==="var"?e+=a.coef:t+=a.coef;const n=[];return e!==0&&n.push({kind:"var",coef:e}),(t!==0||n.length===0)&&n.push({kind:"const",coef:t}),e===0&&t===0?[{kind:"const",coef:0}]:n}function k(r){const e=(r||"").trim().replace(",",".");if(!e)return null;const t=e.match(/^([+-]?\d*)x$/i);if(t){const a=t[1];return a===""||a==="+"?{kind:"var",coef:1}:a==="-"?{kind:"var",coef:-1}:{kind:"var",coef:parseInt(a,10)}}const n=parseFloat(e);return Number.isFinite(n)?{kind:"const",coef:n}:null}function q(r,e,t){if(e==="+"||e==="−"){const n=e==="+"?1:-1;return g([...r,{kind:t.kind,coef:n*t.coef}])}return t.kind==="var"?null:e==="×"?g(r.map(n=>({...n,coef:n.coef*t.coef}))):e==="÷"?g(r.map(n=>({...n,coef:n.coef/t.coef}))):null}function v(r){const e=r.find(t=>t.kind==="var");return e?e.coef:0}function S(r){return r.every(e=>Number.isInteger(e.coef))}function E(r){let e=0,t=0;for(const n of r)n.kind==="var"?e+=n.coef:t+=n.coef;return{v:e,c:t}}function L(r,e){const t=E(r),n=E(e);return t.v===n.v&&t.c===n.c}function M(r){try{const e=w(r);return!e.length||e.some(t=>!Number.isFinite(t.coef))?null:e}catch{return null}}function N(r,e){const t=Math.abs(e.coef),n=e.coef<0;if(e.kind==="var"){const c=(t===1?"":t)+"x";return r==="+"?`$${n?"-":"+"} ${c}$`:r==="−"?`$${n?"+":"-"} ${c}$`:`$${r} ${c}$`}if(r==="+")return`$${n?"-":"+"} ${t}$`;if(r==="−")return`$${n?"+":"-"} ${t}$`;const a=r==="×"?"\\times":"\\div";return n?`$${a} (-${t})$`:`$${a} ${t}$`}function C(r){return r.length?r.map((e,t)=>{const n=t===0,a=e.coef<0,c=Math.abs(e.coef),i=Number.isInteger(c)?`${c}`:`${Math.round(c*1e3)/1e3}`,o=e.kind==="var"?(c===1?"":i)+"x":i;return n?(a?"-":"")+o:(a?" - ":" + ")+o}).join(""):"0"}class R extends HTMLElement{static get observedAttributes(){return["equation"]}connectedCallback(){A(),this.style.display="block",this.render()}attributeChangedCallback(){this.isConnected&&this.render()}render(){const e=this.getAttribute("equation")||"3x + 5 = 14";try{this._initial=$(e)}catch{this._initial=$("3x + 5 = 14")}this._current=JSON.parse(JSON.stringify(this._initial)),this._history=[this._current],this._opsApplied=[],this._solved=!1,this._saisieLibre=this.getAttribute("mode")==="saisie-libre",this._awaitingEntry=!1,this._pending=null,this._committing=!1,this._draw()}_validateOp(e,t){const n=k(t);if(!n||n.coef===0)return null;const a=this._current,c=q(a.left,e,n),i=q(a.right,e,n);if(!c||!i||!S(c)||!S(i))return null;const o=v(c)+v(i);if(o===0)return null;const s=a.left.length+a.right.length,l=c.length+i.length,d=Math.abs(v(a.left))+Math.abs(v(a.right)),f=Math.abs(o);return l<s?{left:c,right:i}:f<d?{left:c,right:i}:null}_isSolved(e){return e.left.length===1&&e.left[0].kind==="var"&&Math.abs(e.left[0].coef)===1&&e.right.length===1&&e.right[0].kind==="const"}_solutionFromState(e){const t=e.left[0].coef;return e.right[0].coef/t}_draw(){let e='<div class="ee-stack">';if(this._history.forEach((t,n)=>{e+=this._renderEqRow(t),n<this._history.length-1&&(e+=this._renderAppliedArrow(this._opsApplied[n]))}),this._solved){const t=this._solutionFromState(this._current),n=Number.isInteger(t)?`${t}`:t.toFixed(2);e+=`<div class="ee-final">$S = \\{\\,${n}\\,\\}$</div>`}else this._awaitingEntry?(e+=this._renderAppliedArrow(this._pending),e+=this._renderEntryRow()):e+=this._renderInteractiveArrow();e+="</div>",this.innerHTML=`<div class="ee-wrap">${e}</div>`,this._solved||(this._awaitingEntry?this._wireEntryInputs():this._wireInputs()),window.MathJax?.typesetPromise&&window.MathJax.typesetPromise([this]).catch(()=>{})}_renderEqRow(e){return`<div class="ee-row ee-eq">
      <span class="ee-left">$${C(e.left)}$</span>
      <span class="ee-sym">$=$</span>
      <span class="ee-right">$${C(e.right)}$</span>
    </div>`}_renderAppliedArrow(e){const t=N(e.op,e.kObj);return`<div class="ee-row ee-arrows ee-arrows-done">
      <span class="ee-left"><span class="ee-arrow">
        <span class="ee-arrow-tip">↓</span><span class="ee-arrow-text">${t}</span>
      </span></span>
      <span class="ee-sym"></span>
      <span class="ee-right"><span class="ee-arrow">
        <span class="ee-arrow-tip">↓</span><span class="ee-arrow-text">${t}</span>
      </span></span>
    </div>`}_renderInteractiveArrow(){return`<div class="ee-row ee-arrows ee-arrows-active">
      <span class="ee-left"><span class="ee-arrow">
        <span class="ee-arrow-tip">↓</span>
        <select class="ee-op" aria-label="Opération">
          <option value="" disabled selected>…</option>
          <option value="+">+</option>
          <option value="−">−</option>
          <option value="×">×</option>
          <option value="÷">÷</option>
        </select>
        <input class="ee-k" type="text" inputmode="text" placeholder="…" autocomplete="off" aria-label="Valeur (nombre ou terme variable comme 6x)" title="Tape un nombre (5, -3) OU un terme variable (x, 6x, -3x)">
        <span class="ee-fb" aria-hidden="true"></span>
      </span></span>
      <span class="ee-sym"></span>
      <span class="ee-right"><span class="ee-arrow">
        <span class="ee-arrow-tip">↓</span>
        <span class="ee-op-m">…</span>
        <span class="ee-k-m">…</span>
      </span></span>
    </div>`}_renderEntryRow(){return`<div class="ee-row ee-eq ee-entry-row">
      <span class="ee-left">
        <input class="ee-entry ee-entry-l" type="text" inputmode="text" placeholder="…"
               autocomplete="off" aria-label="Nouveau membre de gauche">
        <span class="ee-fb ee-entry-fb-l" aria-hidden="true"></span>
      </span>
      <span class="ee-sym">$=$</span>
      <span class="ee-right">
        <input class="ee-entry ee-entry-r" type="text" inputmode="text" placeholder="…"
               autocomplete="off" aria-label="Nouveau membre de droite">
        <span class="ee-fb ee-entry-fb-r" aria-hidden="true"></span>
      </span>
    </div>`}_wireEntryInputs(){const e=this.querySelector(".ee-entry-l"),t=this.querySelector(".ee-entry-r");if(!e||!t)return;const n=this.querySelector(".ee-entry-fb-l"),a=this.querySelector(".ee-entry-fb-r"),c=()=>{e.classList.remove("incorrect"),t.classList.remove("incorrect"),n&&(n.textContent=""),a&&(a.textContent="")};e.addEventListener("input",c),t.addEventListener("input",c);const i=()=>{if(this._committing||!this._awaitingEntry||!this._pending)return;const o=(e.value||"").trim(),s=(t.value||"").trim();if(!o||!s)return;const l=M(o),d=M(s),f=!!l&&L(g(l),this._pending.result.left),h=!!d&&L(g(d),this._pending.result.right);if(n&&(n.textContent=f?"😀":"😞"),a&&(a.textContent=h?"😀":"😞"),e.classList.toggle("incorrect",!f),t.classList.toggle("incorrect",!h),!f||!h)return;const p=this._pending;this._committing=!0,this._awaitingEntry=!1,this._pending=null,this._opsApplied.push({op:p.op,kObj:p.kObj}),this._current=p.result,this._history.push(p.result);const b=this._isSolved(this._current);if(b&&(this._solved=!0),this._draw(),this._committing=!1,b){const x=this.closest(".q-card");if(x&&!x.dataset.celebrated){x.dataset.celebrated="1";try{y(x)}catch{}}}else setTimeout(()=>this.querySelector(".ee-op")?.focus(),0)};[e,t].forEach(o=>{o.addEventListener("blur",i),o.addEventListener("keydown",s=>{(s.key==="Enter"||s.key==="Tab")&&(s.key==="Enter"&&s.preventDefault(),i())})}),setTimeout(()=>e.focus(),0)}_wireInputs(){const e=this.querySelector(".ee-op"),t=this.querySelector(".ee-k"),n=this.querySelector(".ee-op-m"),a=this.querySelector(".ee-k-m"),c=this.querySelector(".ee-fb");if(!e||!t)return;const i=()=>{n&&(n.textContent=e.value||"…"),a&&(a.textContent=t.value||"…")};e.addEventListener("change",i),t.addEventListener("input",()=>{i(),e.classList.remove("incorrect"),t.classList.remove("incorrect"),c&&(c.textContent="")});const o=()=>{if(this._committing)return;const s=e.value,l=(t.value||"").trim();if(!s||!l)return;const d=k(l);if(!d){e.classList.add("incorrect"),t.classList.add("incorrect"),c&&(c.textContent="😞");return}const f=this._validateOp(s,l);if(!f){e.classList.add("incorrect"),t.classList.add("incorrect"),c&&(c.textContent="😞");return}if(this._saisieLibre){this._committing=!0,this._pending={op:s,kObj:d,result:f},this._awaitingEntry=!0,this._draw(),this._committing=!1;return}this._committing=!0,this._opsApplied.push({op:s,kObj:d}),this._current=f,this._history.push(f);const h=this._isSolved(f);if(h&&(this._solved=!0),this._draw(),this._committing=!1,h){const p=this.closest(".q-card");if(p&&!p.dataset.celebrated){p.dataset.celebrated="1";try{y(p)}catch{}}}else setTimeout(()=>this.querySelector(".ee-op")?.focus(),0)};t.addEventListener("blur",o),t.addEventListener("keydown",s=>{(s.key==="Enter"||s.key==="Tab")&&(s.preventDefault(),o())}),e.addEventListener("keydown",s=>{s.key==="Enter"&&(s.preventDefault(),t.focus())})}toggleSolution(e){if(e){this._solved=!0;const t=this._initial.left,n=this._initial.right,a=t.find(s=>s.kind==="var"),c=t.filter(s=>s.kind==="const").reduce((s,l)=>s+l.coef,0),o=(n.filter(s=>s.kind==="const").reduce((s,l)=>s+l.coef,0)-c)/(a?.coef||1);this._current={left:[{kind:"var",coef:1}],right:[{kind:"const",coef:o}]},this._history=[this._initial],this._opsApplied=[],this._awaitingEntry=!1,this._pending=null,this._draw()}else this.render()}}customElements.define("math974-equation-etayage",R);export{T as defaultPosition,F as randomize};
