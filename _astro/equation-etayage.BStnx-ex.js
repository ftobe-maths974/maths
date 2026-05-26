import{l as k}from"./rapido-engine.JaC33Kb-.js";import"./editor.CJZspgfY.js";const I="content",N=!0,p=(n,e)=>Math.floor(Math.random()*(e-n+1))+n,f=(n,e)=>{let t;do t=p(n,e);while(t===0);return t};function z(n){const e=n&&n.form||"ax+b=c";if(e==="ax=b"){const s=p(2,7),i=p(2,9);return{...n,equation:`${s}x = ${s*i}`,_seed:Math.random()}}if(e==="x+a=b"){const s=p(1,9),i=p(2,9);return{...n,equation:`x + ${s} = ${s+i}`,_seed:Math.random()}}if(e==="x+a=b-relatif"){let s,i,a;do s=f(-9,9),i=f(-9,9),a=i+s;while(a===0||Math.abs(a)>12);const l=s<0?` - ${-s}`:` + ${s}`;return{...n,equation:`x${l} = ${a}`,_seed:Math.random()}}if(e==="ax=b-relatif"){let s,i;do s=p(-7,7),i=f(-9,9);while(Math.abs(s)<2);const a=s*i,l=s<0?`-${-s}`:`${s}`;return{...n,equation:`${l}x = ${a}`,_seed:Math.random()}}if(e==="ax+b=cx+d"){let s,i,a,l,d;do s=p(3,7),i=p(1,s-1),a=p(2,6),l=p(1,12),d=l-a*(s-i);while(d<=0||d>12);return{...n,equation:`${s}x + ${d} = ${i}x + ${l}`,_seed:Math.random()}}if(e==="ax+b=cx+d-relatif"){let s,i,a,l,d;do s=f(-5,5),i=f(-4,4),a=f(-6,6),l=p(-8,8),d=l-a*(s-i);while(s===i||Math.abs(d)>15);const u=s<0?`-${-s}`:`${s}`,_=i<0?`-${-i}`:`${i}`,y=d<0?` - ${-d}`:` + ${d}`,q=l<0?` - ${-l}`:` + ${l}`;return{...n,equation:`${u}x${y} = ${_}x${q}`,_seed:Math.random()}}const t=p(2,7),r=p(2,7),o=p(1,9),c=t*r+o;return{...n,equation:`${t}x + ${o} = ${c}`,_seed:Math.random()}}const S=`
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
`;let x=!1;function M(){if(x)return;x=!0;const n=document.createElement("style");n.textContent=S,document.head.appendChild(n)}function g(n){const[e,t]=n.split("=").map(r=>r.trim());return{left:w(e),right:w(t)}}function w(n){return n=n.replace(/\s/g,"").replace(/−/g,"-"),/^[+\-]/.test(n)||(n="+"+n),(n.match(/[+\-][^+\-]+/g)||[]).map(t=>{const r=t[0]==="-"?-1:1,o=t.slice(1),c=o.match(/^(\d*)x$/);return c?{kind:"var",coef:r*parseInt(c[1]||"1",10)}:{kind:"const",coef:r*parseFloat(o)}})}function m(n){let e=0,t=0;for(const o of n)o.kind==="var"?e+=o.coef:t+=o.coef;const r=[];return e!==0&&r.push({kind:"var",coef:e}),(t!==0||r.length===0)&&r.push({kind:"const",coef:t}),e===0&&t===0?[{kind:"const",coef:0}]:r}function b(n,e,t){if(e==="+"||e==="−"){const r=e==="+"?1:-1;return m([...n,{kind:"const",coef:r*t}])}return e==="×"?m(n.map(r=>({...r,coef:r.coef*t}))):e==="÷"?m(n.map(r=>({...r,coef:r.coef/t}))):null}function h(n){const e=n.find(t=>t.kind==="var");return e?e.coef:0}function v(n){return n.every(e=>Number.isInteger(e.coef))}function L(n,e){const t=Math.abs(e),r=e<0;if(n==="+")return`$${r?"-":"+"} ${t}$`;if(n==="−")return`$${r?"+":"-"} ${t}$`;const o=n==="×"?"\\times":"\\div";return r?`$${o} (-${t})$`:`$${o} ${t}$`}function $(n){return n.length?n.map((e,t)=>{const r=t===0,o=e.coef<0,c=Math.abs(e.coef),s=Number.isInteger(c)?`${c}`:`${Math.round(c*1e3)/1e3}`,i=e.kind==="var"?(c===1?"":s)+"x":s;return r?(o?"-":"")+i:(o?" - ":" + ")+i}).join(""):"0"}class E extends HTMLElement{static get observedAttributes(){return["equation"]}connectedCallback(){M(),this.style.display="block",this.render()}attributeChangedCallback(){this.isConnected&&this.render()}render(){const e=this.getAttribute("equation")||"3x + 5 = 14";try{this._initial=g(e)}catch{this._initial=g("3x + 5 = 14")}this._current=JSON.parse(JSON.stringify(this._initial)),this._history=[this._current],this._opsApplied=[],this._solved=!1,this._draw()}_validateOp(e,t){if(!Number.isFinite(t)||t===0)return null;const r=this._current,o=b(r.left,e,t),c=b(r.right,e,t);if(!o||!c||!v(o)||!v(c))return null;const s=h(o)+h(c);if(s===0)return null;const i=r.left.length+r.right.length,a=o.length+c.length,l=Math.abs(h(r.left))+Math.abs(h(r.right)),d=Math.abs(s);return a<i?{left:o,right:c}:d<l?{left:o,right:c}:null}_isSolved(e){return e.left.length===1&&e.left[0].kind==="var"&&Math.abs(e.left[0].coef)===1&&e.right.length===1&&e.right[0].kind==="const"}_solutionFromState(e){const t=e.left[0].coef;return e.right[0].coef/t}_draw(){let e='<div class="ee-stack">';if(this._history.forEach((t,r)=>{e+=this._renderEqRow(t),r<this._history.length-1&&(e+=this._renderAppliedArrow(this._opsApplied[r]))}),this._solved){const t=this._solutionFromState(this._current),r=Number.isInteger(t)?`${t}`:t.toFixed(2);e+=`<div class="ee-final">$S = \\{\\,${r}\\,\\}$</div>`}else e+=this._renderInteractiveArrow();e+="</div>",this.innerHTML=`<div class="ee-wrap">${e}</div>`,this._solved||this._wireInputs(),window.MathJax?.typesetPromise&&window.MathJax.typesetPromise([this]).catch(()=>{})}_renderEqRow(e){return`<div class="ee-row ee-eq">
      <span class="ee-left">$${$(e.left)}$</span>
      <span class="ee-sym">$=$</span>
      <span class="ee-right">$${$(e.right)}$</span>
    </div>`}_renderAppliedArrow(e){const t=L(e.op,e.k);return`<div class="ee-row ee-arrows ee-arrows-done">
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
    </div>`}_wireInputs(){const e=this.querySelector(".ee-op"),t=this.querySelector(".ee-k"),r=this.querySelector(".ee-op-m"),o=this.querySelector(".ee-k-m"),c=this.querySelector(".ee-fb");if(!e||!t)return;const s=()=>{r&&(r.textContent=e.value||"?"),o&&(o.textContent=t.value||"?")};e.addEventListener("change",s),t.addEventListener("input",()=>{s(),e.classList.remove("incorrect"),t.classList.remove("incorrect"),c&&(c.textContent="")});const i=()=>{const a=e.value,l=parseFloat(t.value);if(!a||!Number.isFinite(l))return;const d=this._validateOp(a,l);if(!d){e.classList.add("incorrect"),t.classList.add("incorrect"),c&&(c.textContent="😞");return}if(this._opsApplied.push({op:a,k:l}),this._current=d,this._history.push(d),this._isSolved(d)){this._solved=!0,this._draw();const u=this.closest(".q-card");if(u&&!u.dataset.celebrated){u.dataset.celebrated="1";try{k(u)}catch{}}}else this._draw(),setTimeout(()=>this.querySelector(".ee-op")?.focus(),0)};t.addEventListener("blur",i),t.addEventListener("keydown",a=>{(a.key==="Enter"||a.key==="Tab")&&(a.preventDefault(),i())}),e.addEventListener("keydown",a=>{a.key==="Enter"&&(a.preventDefault(),t.focus())})}toggleSolution(e){if(e){this._solved=!0;const t=this._initial.left,r=this._initial.right,o=t.find(a=>a.kind==="var"),c=t.filter(a=>a.kind==="const").reduce((a,l)=>a+l.coef,0),i=(r.filter(a=>a.kind==="const").reduce((a,l)=>a+l.coef,0)-c)/(o?.coef||1);this._current={left:[{kind:"var",coef:1}],right:[{kind:"const",coef:i}]},this._history=[this._initial],this._opsApplied=[],this._draw()}else this.render()}}customElements.define("math974-equation-etayage",E);export{N as autoScale,I as defaultPosition,z as randomize};
