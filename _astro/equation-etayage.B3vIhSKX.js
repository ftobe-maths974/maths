import{l as S}from"./rapidos-visuals-integration.B-Jk-WKG.js";import"./editor.CJZspgfY.js";const z="content",N=!0,u=(n,e)=>Math.floor(Math.random()*(e-n+1))+n,h=(n,e)=>{let t;do t=u(n,e);while(t===0);return t};function O(n){const e=n&&n.form||"ax+b=c";if(e==="ax=b"){const s=u(2,7),o=u(2,9);return{...n,equation:`${s}x = ${s*o}`,_seed:Math.random()}}if(e==="x+a=b"){const s=u(1,9),o=u(2,9);return{...n,equation:`x + ${s} = ${s+o}`,_seed:Math.random()}}if(e==="x+a=b-relatif"){let s,o,i;do s=h(-9,9),o=h(-9,9),i=o+s;while(i===0||Math.abs(i)>12);const l=s<0?` - ${-s}`:` + ${s}`;return{...n,equation:`x${l} = ${i}`,_seed:Math.random()}}if(e==="ax=b-relatif"){let s,o;do s=u(-7,7),o=h(-9,9);while(Math.abs(s)<2);const i=s*o,l=s<0?`-${-s}`:`${s}`;return{...n,equation:`${l}x = ${i}`,_seed:Math.random()}}if(e==="ax+b=cx+d"){let s,o,i,l,d;do s=u(3,7),o=u(1,s-1),i=u(2,6),l=u(1,12),d=l-i*(s-o);while(d<=0||d>12);return{...n,equation:`${s}x + ${d} = ${o}x + ${l}`,_seed:Math.random()}}if(e==="ax+b=cx+d-relatif"){let s,o,i,l,d;do s=h(-5,5),o=h(-4,4),i=h(-6,6),l=u(-8,8),d=l-i*(s-o);while(s===o||Math.abs(d)>15);const p=s<0?`-${-s}`:`${s}`,f=o<0?`-${-o}`:`${o}`,k=d<0?` - ${-d}`:` + ${d}`,q=l<0?` - ${-l}`:` + ${l}`;return{...n,equation:`${p}x${k} = ${f}x${q}`,_seed:Math.random()}}const t=u(2,7),r=u(2,7),a=u(1,9),c=t*r+a;return{...n,equation:`${t}x + ${a} = ${c}`,_seed:Math.random()}}const M=`
.ee-wrap {
  padding: 4px 8px;
  margin: 0 auto;
  font-family: var(--font-sans);
  /* Pas de max-width : la largeur naturelle suit le contenu pour que
     setupAutoScale (autoScale=true) puisse mesurer correctement et
     appliquer un transform: scale() qui remplit la zone disponible
     (large ecran -> equation BIG). */
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
  grid-template-columns: minmax(100px, max-content) auto minmax(100px, max-content);
  align-items: center;
  padding: 0;
  justify-content: center;
}
.ee-eq { font-size: 2.4em; font-weight: 800; line-height: 1.1; margin: 1px 0; }
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
  font-size: 1.1em;
  font-weight: 800;
  padding: 3px 8px;
  border: 2px solid #c7d2fe;
  border-radius: 8px;
  background: white;
  color: #4338ca;
  min-height: 32px;
  line-height: 1.1;
}
.ee-op { min-width: 56px; }
.ee-k {
  width: 80px;
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
  font-size: 2em;
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
`;let g=!1;function L(){if(g)return;g=!0;const n=document.createElement("style");n.textContent=M,document.head.appendChild(n)}function $(n){const[e,t]=n.split("=").map(r=>r.trim());return{left:w(e),right:w(t)}}function w(n){return n=n.replace(/\s/g,"").replace(/−/g,"-"),/^[+\-]/.test(n)||(n="+"+n),(n.match(/[+\-][^+\-]+/g)||[]).map(t=>{const r=t[0]==="-"?-1:1,a=t.slice(1),c=a.match(/^(\d*)x$/);return c?{kind:"var",coef:r*parseInt(c[1]||"1",10)}:{kind:"const",coef:r*parseFloat(a)}})}function x(n){let e=0,t=0;for(const a of n)a.kind==="var"?e+=a.coef:t+=a.coef;const r=[];return e!==0&&r.push({kind:"var",coef:e}),(t!==0||r.length===0)&&r.push({kind:"const",coef:t}),e===0&&t===0?[{kind:"const",coef:0}]:r}function v(n){const e=(n||"").trim().replace(",",".");if(!e)return null;const t=e.match(/^([+-]?\d*)x$/i);if(t){const a=t[1];return a===""||a==="+"?{kind:"var",coef:1}:a==="-"?{kind:"var",coef:-1}:{kind:"var",coef:parseInt(a,10)}}const r=parseFloat(e);return Number.isFinite(r)?{kind:"const",coef:r}:null}function b(n,e,t){if(e==="+"||e==="−"){const r=e==="+"?1:-1;return x([...n,{kind:t.kind,coef:r*t.coef}])}return t.kind==="var"?null:e==="×"?x(n.map(r=>({...r,coef:r.coef*t.coef}))):e==="÷"?x(n.map(r=>({...r,coef:r.coef/t.coef}))):null}function m(n){const e=n.find(t=>t.kind==="var");return e?e.coef:0}function _(n){return n.every(e=>Number.isInteger(e.coef))}function C(n,e){const t=Math.abs(e.coef),r=e.coef<0;if(e.kind==="var"){const c=(t===1?"":t)+"x";return n==="+"?`$${r?"-":"+"} ${c}$`:n==="−"?`$${r?"+":"-"} ${c}$`:`$${n} ${c}$`}if(n==="+")return`$${r?"-":"+"} ${t}$`;if(n==="−")return`$${r?"+":"-"} ${t}$`;const a=n==="×"?"\\times":"\\div";return r?`$${a} (-${t})$`:`$${a} ${t}$`}function y(n){return n.length?n.map((e,t)=>{const r=t===0,a=e.coef<0,c=Math.abs(e.coef),s=Number.isInteger(c)?`${c}`:`${Math.round(c*1e3)/1e3}`,o=e.kind==="var"?(c===1?"":s)+"x":s;return r?(a?"-":"")+o:(a?" - ":" + ")+o}).join(""):"0"}class E extends HTMLElement{static get observedAttributes(){return["equation"]}connectedCallback(){L(),this.style.display="block",this.render()}attributeChangedCallback(){this.isConnected&&this.render()}render(){const e=this.getAttribute("equation")||"3x + 5 = 14";try{this._initial=$(e)}catch{this._initial=$("3x + 5 = 14")}this._current=JSON.parse(JSON.stringify(this._initial)),this._history=[this._current],this._opsApplied=[],this._solved=!1,this._draw()}_validateOp(e,t){const r=v(t);if(!r||r.coef===0)return null;const a=this._current,c=b(a.left,e,r),s=b(a.right,e,r);if(!c||!s||!_(c)||!_(s))return null;const o=m(c)+m(s);if(o===0)return null;const i=a.left.length+a.right.length,l=c.length+s.length,d=Math.abs(m(a.left))+Math.abs(m(a.right)),p=Math.abs(o);return l<i?{left:c,right:s}:p<d?{left:c,right:s}:null}_isSolved(e){return e.left.length===1&&e.left[0].kind==="var"&&Math.abs(e.left[0].coef)===1&&e.right.length===1&&e.right[0].kind==="const"}_solutionFromState(e){const t=e.left[0].coef;return e.right[0].coef/t}_draw(){let e='<div class="ee-stack">';if(this._history.forEach((t,r)=>{e+=this._renderEqRow(t),r<this._history.length-1&&(e+=this._renderAppliedArrow(this._opsApplied[r]))}),this._solved){const t=this._solutionFromState(this._current),r=Number.isInteger(t)?`${t}`:t.toFixed(2);e+=`<div class="ee-final">$S = \\{\\,${r}\\,\\}$</div>`}else e+=this._renderInteractiveArrow();e+="</div>",this.innerHTML=`<div class="ee-wrap">${e}</div>`,this._solved||this._wireInputs(),window.MathJax?.typesetPromise&&window.MathJax.typesetPromise([this]).catch(()=>{})}_renderEqRow(e){return`<div class="ee-row ee-eq">
      <span class="ee-left">$${y(e.left)}$</span>
      <span class="ee-sym">$=$</span>
      <span class="ee-right">$${y(e.right)}$</span>
    </div>`}_renderAppliedArrow(e){const t=C(e.op,e.kObj);return`<div class="ee-row ee-arrows ee-arrows-done">
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
    </div>`}_wireInputs(){const e=this.querySelector(".ee-op"),t=this.querySelector(".ee-k"),r=this.querySelector(".ee-op-m"),a=this.querySelector(".ee-k-m"),c=this.querySelector(".ee-fb");if(!e||!t)return;const s=()=>{r&&(r.textContent=e.value||"…"),a&&(a.textContent=t.value||"…")};e.addEventListener("change",s),t.addEventListener("input",()=>{s(),e.classList.remove("incorrect"),t.classList.remove("incorrect"),c&&(c.textContent="")});const o=()=>{const i=e.value,l=(t.value||"").trim();if(!i||!l)return;const d=v(l);if(!d){e.classList.add("incorrect"),t.classList.add("incorrect"),c&&(c.textContent="😞");return}const p=this._validateOp(i,l);if(!p){e.classList.add("incorrect"),t.classList.add("incorrect"),c&&(c.textContent="😞");return}if(this._opsApplied.push({op:i,kObj:d}),this._current=p,this._history.push(p),this._isSolved(p)){this._solved=!0,this._draw();const f=this.closest(".q-card");if(f&&!f.dataset.celebrated){f.dataset.celebrated="1";try{S(f)}catch{}}}else this._draw(),setTimeout(()=>this.querySelector(".ee-op")?.focus(),0)};t.addEventListener("blur",o),t.addEventListener("keydown",i=>{(i.key==="Enter"||i.key==="Tab")&&(i.preventDefault(),o())}),e.addEventListener("keydown",i=>{i.key==="Enter"&&(i.preventDefault(),t.focus())})}toggleSolution(e){if(e){this._solved=!0;const t=this._initial.left,r=this._initial.right,a=t.find(i=>i.kind==="var"),c=t.filter(i=>i.kind==="const").reduce((i,l)=>i+l.coef,0),o=(r.filter(i=>i.kind==="const").reduce((i,l)=>i+l.coef,0)-c)/(a?.coef||1);this._current={left:[{kind:"var",coef:1}],right:[{kind:"const",coef:o}]},this._history=[this._initial],this._opsApplied=[],this._draw()}else this.render()}}customElements.define("math974-equation-etayage",E);export{N as autoScale,z as defaultPosition,O as randomize};
