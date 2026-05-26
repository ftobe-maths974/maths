import{l as _}from"./rapidos-visuals-integration.DhdzGxAM.js";import"./editor.CJZspgfY.js";const E="content",C=!0,d=(r,e)=>Math.floor(Math.random()*(e-r+1))+r,h=(r,e)=>{let t;do t=d(r,e);while(t===0);return t};function A(r){const e=r&&r.form||"ax+b=c";if(e==="ax=b"){const a=d(2,7),c=d(2,9);return{...r,equation:`${a}x = ${a*c}`,_seed:Math.random()}}if(e==="x+a=b"){const a=d(1,9),c=d(2,9);return{...r,equation:`x + ${a} = ${a+c}`,_seed:Math.random()}}if(e==="x+a=b-relatif"){let a,c,s;do a=h(-9,9),c=h(-9,9),s=c+a;while(s===0||Math.abs(s)>12);const l=a<0?` - ${-a}`:` + ${a}`;return{...r,equation:`x${l} = ${s}`,_seed:Math.random()}}if(e==="ax=b-relatif"){let a,c;do a=d(-7,7),c=h(-9,9);while(Math.abs(a)<2);const s=a*c,l=a<0?`-${-a}`:`${a}`;return{...r,equation:`${l}x = ${s}`,_seed:Math.random()}}const t=d(2,7),n=d(2,7),i=d(1,9),o=t*n+i;return{...r,equation:`${t}x + ${i} = ${o}`,_seed:Math.random()}}const $=`
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
.ee-eq { font-size: 2.4em; font-weight: 800; line-height: 1.5; }
.ee-eq .ee-left  { text-align: right;  padding-right: 14px; }
.ee-eq .ee-sym   { padding: 0 10px; }
.ee-eq .ee-right { text-align: left;   padding-left: 14px; }

/* La variable x et les operateurs sont rendus via MathJax (LaTeX inline)
   apres chaque _draw(). Le poids/style des MJX-containers est neutralise
   pour qu'ils heritent du contexte (sans devenir gras). */
mjx-container {
  font-weight: normal !important;
}
.ee-eq mjx-container { font-size: inherit !important; }

.ee-arrows {
  font-size: 1.3em;
  font-weight: 800;
  color: #6366f1;
  padding: 4px 0;
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
  padding: 5px 8px;
  border: 2px solid #c7d2fe;
  border-radius: 8px;
  background: white;
  color: #4338ca;
  min-height: 38px;
}
.ee-op { min-width: 56px; }
.ee-k {
  width: 64px;
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
  margin: 20px auto 6px;
  padding: 14px 28px;
  background: linear-gradient(135deg, #d1fae5, #a7f3d0);
  color: #065f46;
  border: 2px solid #34d399;
  border-radius: 14px;
  font-size: 2em;
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
`;let g=!1;function k(){if(g)return;g=!0;const r=document.createElement("style");r.textContent=$,document.head.appendChild(r)}function x(r){const[e,t]=r.split("=").map(n=>n.trim());return{left:w(e),right:w(t)}}function w(r){return r=r.replace(/\s/g,"").replace(/−/g,"-"),/^[+\-]/.test(r)||(r="+"+r),(r.match(/[+\-][^+\-]+/g)||[]).map(t=>{const n=t[0]==="-"?-1:1,i=t.slice(1),o=i.match(/^(\d*)x$/);return o?{kind:"var",coef:n*parseInt(o[1]||"1",10)}:{kind:"const",coef:n*parseFloat(i)}})}function m(r){let e=0,t=0;for(const i of r)i.kind==="var"?e+=i.coef:t+=i.coef;const n=[];return e!==0&&n.push({kind:"var",coef:e}),(t!==0||n.length===0)&&n.push({kind:"const",coef:t}),e===0&&t===0?[{kind:"const",coef:0}]:n}function v(r,e,t){if(e==="+"||e==="−"){const n=e==="+"?1:-1;return m([...r,{kind:"const",coef:n*t}])}return e==="×"?m(r.map(n=>({...n,coef:n.coef*t}))):e==="÷"?m(r.map(n=>({...n,coef:n.coef/t}))):null}function f(r){const e=r.find(t=>t.kind==="var");return e?e.coef:0}function b(r){return r.every(e=>Number.isInteger(e.coef))}function q(r,e){const t=Math.abs(e),n=e<0;if(r==="+")return`$${n?"-":"+"} ${t}$`;if(r==="−")return`$${n?"+":"-"} ${t}$`;const i=r==="×"?"\\times":"\\div";return n?`$${i} (-${t})$`:`$${i} ${t}$`}function y(r){return r.length?r.map((e,t)=>{const n=t===0,i=e.coef<0,o=Math.abs(e.coef),a=Number.isInteger(o)?`${o}`:`${Math.round(o*1e3)/1e3}`,c=e.kind==="var"?(o===1?"":a)+"x":a;return n?(i?"-":"")+c:(i?" - ":" + ")+c}).join(""):"0"}class S extends HTMLElement{static get observedAttributes(){return["equation"]}connectedCallback(){k(),this.style.display="block",this.render()}attributeChangedCallback(){this.isConnected&&this.render()}render(){const e=this.getAttribute("equation")||"3x + 5 = 14";try{this._initial=x(e)}catch{this._initial=x("3x + 5 = 14")}this._current=JSON.parse(JSON.stringify(this._initial)),this._history=[this._current],this._opsApplied=[],this._solved=!1,this._draw()}_validateOp(e,t){if(!Number.isFinite(t)||t===0)return null;const n=this._current,i=v(n.left,e,t),o=v(n.right,e,t);if(!i||!o||!b(i)||!b(o))return null;const a=f(i)+f(o);if(a===0)return null;const c=n.left.length+n.right.length,s=i.length+o.length,l=Math.abs(f(n.left))+Math.abs(f(n.right)),p=Math.abs(a);return s<c?{left:i,right:o}:p<l?{left:i,right:o}:null}_isSolved(e){return e.left.length===1&&e.left[0].kind==="var"&&Math.abs(e.left[0].coef)===1&&e.right.length===1&&e.right[0].kind==="const"}_solutionFromState(e){const t=e.left[0].coef;return e.right[0].coef/t}_draw(){let e='<div class="ee-stack">';if(this._history.forEach((t,n)=>{e+=this._renderEqRow(t),n<this._history.length-1&&(e+=this._renderAppliedArrow(this._opsApplied[n]))}),this._solved){const t=this._solutionFromState(this._current),n=Number.isInteger(t)?`${t}`:t.toFixed(2);e+=`<div class="ee-final">$S = \\{\\,${n}\\,\\}$</div>`}else e+=this._renderInteractiveArrow();e+="</div>",this.innerHTML=`<div class="ee-wrap">${e}</div>`,this._solved||this._wireInputs(),window.MathJax?.typesetPromise&&window.MathJax.typesetPromise([this]).catch(()=>{})}_renderEqRow(e){return`<div class="ee-row ee-eq">
      <span class="ee-left">$${y(e.left)}$</span>
      <span class="ee-sym">$=$</span>
      <span class="ee-right">$${y(e.right)}$</span>
    </div>`}_renderAppliedArrow(e){const t=q(e.op,e.k);return`<div class="ee-row ee-arrows ee-arrows-done">
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
    </div>`}_wireInputs(){const e=this.querySelector(".ee-op"),t=this.querySelector(".ee-k"),n=this.querySelector(".ee-op-m"),i=this.querySelector(".ee-k-m"),o=this.querySelector(".ee-fb");if(!e||!t)return;const a=()=>{n&&(n.textContent=e.value||"?"),i&&(i.textContent=t.value||"?")};e.addEventListener("change",a),t.addEventListener("input",()=>{a(),e.classList.remove("incorrect"),t.classList.remove("incorrect"),o&&(o.textContent="")});const c=()=>{const s=e.value,l=parseFloat(t.value);if(!s||!Number.isFinite(l))return;const p=this._validateOp(s,l);if(!p){e.classList.add("incorrect"),t.classList.add("incorrect"),o&&(o.textContent="😞");return}if(this._opsApplied.push({op:s,k:l}),this._current=p,this._history.push(p),this._isSolved(p)){this._solved=!0,this._draw();const u=this.closest(".q-card");if(u&&!u.dataset.celebrated){u.dataset.celebrated="1";try{_(u)}catch{}}}else this._draw(),setTimeout(()=>this.querySelector(".ee-op")?.focus(),0)};t.addEventListener("blur",c),t.addEventListener("keydown",s=>{(s.key==="Enter"||s.key==="Tab")&&(s.preventDefault(),c())}),e.addEventListener("keydown",s=>{s.key==="Enter"&&(s.preventDefault(),t.focus())})}toggleSolution(e){if(e){this._solved=!0;const t=this._initial.left,n=this._initial.right,i=t.find(s=>s.kind==="var"),o=t.filter(s=>s.kind==="const").reduce((s,l)=>s+l.coef,0),c=(n.filter(s=>s.kind==="const").reduce((s,l)=>s+l.coef,0)-o)/(i?.coef||1);this._current={left:[{kind:"var",coef:1}],right:[{kind:"const",coef:c}]},this._history=[this._initial],this._opsApplied=[],this._draw()}else this.render()}}customElements.define("math974-equation-etayage",S);export{C as autoScale,E as defaultPosition,A as randomize};
