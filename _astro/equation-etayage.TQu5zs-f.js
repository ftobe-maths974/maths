import{l as y}from"./rapidos-visuals-integration.BQ5blcLV.js";import"./editor.CJZspgfY.js";const C="content",L=!0,f=(r,e)=>Math.floor(Math.random()*(e-r+1))+r;function $(r){const e=f(2,7),t=f(2,7),n=f(1,9),s=e*t+n;return{...r||{},equation:`${e}x + ${n} = ${s}`,_seed:Math.random()}}const _=`
.ee-wrap {
  padding: 12px 8px;
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
  gap: 2px;
  color: #1e293b;
}
.ee-row {
  display: grid;
  /* min auto / max-content : chaque côté prend la largeur naturelle de
     son contenu, avec un plancher pour les rangs courts (ex. "x"). */
  grid-template-columns: minmax(100px, max-content) auto minmax(100px, max-content);
  align-items: center;
  padding: 4px 0;
  justify-content: center;
}
.ee-eq { font-size: 1.5em; font-weight: 800; }
.ee-eq .ee-left  { text-align: right;  padding-right: 14px; }
.ee-eq .ee-sym   { padding: 0 10px; }
.ee-eq .ee-right { text-align: left;   padding-left: 14px; }

.ee-arrows {
  font-size: 1em;
  font-weight: 800;
  color: #6366f1;
  padding: 2px 0;
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
  font-size: 1em;
  font-weight: 800;
  padding: 4px 6px;
  border: 2px solid #c7d2fe;
  border-radius: 8px;
  background: white;
  color: #4338ca;
  min-height: 32px;
}
.ee-op { min-width: 48px; }
.ee-k {
  width: 56px;
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
  margin: 16px auto 4px;
  padding: 12px 24px;
  background: linear-gradient(135deg, #d1fae5, #a7f3d0);
  color: #065f46;
  border: 2px solid #34d399;
  border-radius: 14px;
  font-size: 1.5em;
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
`;let g=!1;function k(){if(g)return;g=!0;const r=document.createElement("style");r.textContent=_,document.head.appendChild(r)}function m(r){const[e,t]=r.split("=").map(n=>n.trim());return{left:x(e),right:x(t)}}function x(r){return r=r.replace(/\s/g,"").replace(/−/g,"-"),/^[+\-]/.test(r)||(r="+"+r),(r.match(/[+\-][^+\-]+/g)||[]).map(t=>{const n=t[0]==="-"?-1:1,s=t.slice(1),a=s.match(/^(\d*)x$/);return a?{kind:"var",coef:n*parseInt(a[1]||"1",10)}:{kind:"const",coef:n*parseFloat(s)}})}function h(r){let e=0,t=0;for(const s of r)s.kind==="var"?e+=s.coef:t+=s.coef;const n=[];return e!==0&&n.push({kind:"var",coef:e}),(t!==0||n.length===0)&&n.push({kind:"const",coef:t}),e===0&&t===0?[{kind:"const",coef:0}]:n}function w(r,e,t){if(e==="+"||e==="−"){const n=e==="+"?1:-1;return h([...r,{kind:"const",coef:n*t}])}return e==="×"?h(r.map(n=>({...n,coef:n.coef*t}))):e==="÷"?h(r.map(n=>({...n,coef:n.coef/t}))):null}function u(r){const e=r.find(t=>t.kind==="var");return e?e.coef:0}function v(r){return r.every(e=>Number.isInteger(e.coef))}function b(r){return r.length?r.map((e,t)=>{const n=t===0,s=e.coef<0,a=Math.abs(e.coef),o=Number.isInteger(a)?`${a}`:`${Math.round(a*1e3)/1e3}`,c=e.kind==="var"?(a===1?"":o)+"x":o;return n?(s?"−":"")+c:(s?" − ":" + ")+c}).join(""):"0"}class q extends HTMLElement{static get observedAttributes(){return["equation"]}connectedCallback(){k(),this.style.display="block",this.render()}attributeChangedCallback(){this.isConnected&&this.render()}render(){const e=this.getAttribute("equation")||"3x + 5 = 14";try{this._initial=m(e)}catch{this._initial=m("3x + 5 = 14")}this._current=JSON.parse(JSON.stringify(this._initial)),this._history=[this._current],this._opsApplied=[],this._solved=!1,this._draw()}_validateOp(e,t){if(!Number.isFinite(t)||t<=0)return null;const n=this._current,s=w(n.left,e,t),a=w(n.right,e,t);if(!s||!a||!v(s)||!v(a))return null;const o=u(s)+u(a);if(o===0)return null;const c=n.left.length+n.right.length,i=s.length+a.length,l=Math.abs(u(n.left))+Math.abs(u(n.right)),p=Math.abs(o);return i<c?{left:s,right:a}:p<l?{left:s,right:a}:null}_isSolved(e){return e.left.length===1&&e.left[0].kind==="var"&&Math.abs(e.left[0].coef)===1&&e.right.length===1&&e.right[0].kind==="const"}_solutionFromState(e){const t=e.left[0].coef;return e.right[0].coef/t}_draw(){let e='<div class="ee-stack">';if(this._history.forEach((t,n)=>{e+=this._renderEqRow(t),n<this._history.length-1&&(e+=this._renderAppliedArrow(this._opsApplied[n]))}),this._solved){const t=this._solutionFromState(this._current);e+=`<div class="ee-final">S = { ${Number.isInteger(t)?t:t.toFixed(2)} }</div>`}else e+=this._renderInteractiveArrow();e+="</div>",this.innerHTML=`<div class="ee-wrap">${e}</div>`,this._solved||this._wireInputs()}_renderEqRow(e){return`<div class="ee-row ee-eq">
      <span class="ee-left">${b(e.left)}</span>
      <span class="ee-sym">=</span>
      <span class="ee-right">${b(e.right)}</span>
    </div>`}_renderAppliedArrow(e){const t=`${e.op}${e.k}`;return`<div class="ee-row ee-arrows ee-arrows-done">
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
          <option value="" disabled selected>?</option>
          <option value="+">+</option>
          <option value="−">−</option>
          <option value="×">×</option>
          <option value="÷">÷</option>
        </select>
        <input class="ee-k" type="text" inputmode="numeric" placeholder="?" autocomplete="off" aria-label="Valeur">
        <span class="ee-fb" aria-hidden="true"></span>
      </span></span>
      <span class="ee-sym"></span>
      <span class="ee-right"><span class="ee-arrow">
        <span class="ee-arrow-tip">↓</span>
        <span class="ee-op-m">?</span>
        <span class="ee-k-m">?</span>
      </span></span>
    </div>`}_wireInputs(){const e=this.querySelector(".ee-op"),t=this.querySelector(".ee-k"),n=this.querySelector(".ee-op-m"),s=this.querySelector(".ee-k-m"),a=this.querySelector(".ee-fb");if(!e||!t)return;const o=()=>{n&&(n.textContent=e.value||"?"),s&&(s.textContent=t.value||"?")};e.addEventListener("change",o),t.addEventListener("input",()=>{o(),e.classList.remove("incorrect"),t.classList.remove("incorrect"),a&&(a.textContent="")});const c=()=>{const i=e.value,l=parseFloat(t.value);if(!i||!Number.isFinite(l))return;const p=this._validateOp(i,l);if(!p){e.classList.add("incorrect"),t.classList.add("incorrect"),a&&(a.textContent="😞");return}if(this._opsApplied.push({op:i,k:l}),this._current=p,this._history.push(p),this._isSolved(p)){this._solved=!0,this._draw();const d=this.closest(".q-card");if(d&&!d.dataset.celebrated){d.dataset.celebrated="1";try{y(d)}catch{}}}else this._draw(),setTimeout(()=>this.querySelector(".ee-op")?.focus(),0)};t.addEventListener("blur",c),t.addEventListener("keydown",i=>{(i.key==="Enter"||i.key==="Tab")&&(i.preventDefault(),c())}),e.addEventListener("keydown",i=>{i.key==="Enter"&&(i.preventDefault(),t.focus())})}toggleSolution(e){if(e){this._solved=!0;const t=this._initial.left,n=this._initial.right,s=t.find(i=>i.kind==="var"),a=t.filter(i=>i.kind==="const").reduce((i,l)=>i+l.coef,0),c=(n.filter(i=>i.kind==="const").reduce((i,l)=>i+l.coef,0)-a)/(s?.coef||1);this._current={left:[{kind:"var",coef:1}],right:[{kind:"const",coef:c}]},this._history=[this._initial],this._opsApplied=[],this._draw()}else this.render()}}customElements.define("math974-equation-etayage",q);export{L as autoScale,C as defaultPosition,$ as randomize};
