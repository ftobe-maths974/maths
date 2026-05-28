const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/rapido-engine.7ZIDQB1d.js","_astro/rapidos-visuals-integration.DGD9e6nZ.js","_astro/editor.CJZspgfY.js"])))=>i.map(i=>d[i]);
import{_ as I}from"./editor.CJZspgfY.js";import{ensureSharedStyles as A}from"./vis-input.BBK0Yi4q.js";import{parseFormula as m,evaluate as w,idxToCol as y,formatValue as P,shiftRefs as N,stringify as q,astEqual as x}from"./formula-parser.CuBpGvtX.js";import"./rapido-engine.7ZIDQB1d.js";import"./rapidos-visuals-integration.DGD9e6nZ.js";const H="content",V=!1,C="math974-spreadsheet-css",M=`
math974-spreadsheet {
  display: block;
  font-family: inherit;
  width: 100%;
  --ss-cell-w: 80px;
  --ss-cell-h: 36px;
  --ss-bord: #cbd5e1;
  --ss-head-bg: #f1f5f9;
  --ss-head-fg: #475569;
  --ss-sel: #6366f1;
  --ss-locked-bg: #f8fafc;
  --ss-target-bg: #eef2ff;
}
.ss-wrap {
  overflow: auto;
  max-width: 100%;
  border: 1px solid var(--ss-bord);
  border-radius: 6px;
  background: #fff;
  -webkit-overflow-scrolling: touch;
}
.ss-grid {
  border-collapse: collapse;
  font: inherit;
  table-layout: fixed;
  width: max-content;
}
.ss-grid th, .ss-grid td {
  border: 1px solid var(--ss-bord);
  width: var(--ss-cell-w);
  height: var(--ss-cell-h);
  padding: 0;
  text-align: center;
  vertical-align: middle;
  font: inherit;
  position: relative;
}
.ss-grid th {
  background: var(--ss-head-bg);
  color: var(--ss-head-fg);
  font-weight: 600;
  font-size: 0.85em;
  width: 32px;
  min-width: 32px;
  user-select: none;
}
.ss-grid thead th { height: 28px; }
.ss-cell {
  cursor: cell;
  font-variant-numeric: tabular-nums;
  padding: 0 6px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.ss-cell.ss-locked { background: var(--ss-locked-bg); color: #334155; cursor: default; }
.ss-cell.ss-target { background: var(--ss-target-bg); }
.ss-cell.ss-text { text-align: left; }
.ss-cell.ss-num  { text-align: right; }
.ss-cell.ss-error { color: #b91c1c; font-weight: 600; }
.ss-cell.ss-sel { outline: 2px solid var(--ss-sel); outline-offset: -2px; z-index: 1; }
.ss-cell-input {
  width: 100%; height: 100%;
  border: 0; outline: 2px solid var(--ss-sel);
  outline-offset: -2px;
  padding: 0 4px;
  font: inherit;
  background: #fff;
  box-sizing: border-box;
  text-align: left;
}
.ss-fill-handle {
  position: absolute;
  right: 0; bottom: 0;
  width: 24px; height: 24px;
  display: flex; align-items: flex-end; justify-content: flex-end;
  cursor: crosshair;
  z-index: 5;
  touch-action: none;
  background: transparent;
  border: 0;
  padding: 0;
}
.ss-fill-handle::after {
  content: '';
  width: 10px; height: 10px;
  background: var(--ss-sel);
  border: 2px solid #fff;
  border-radius: 2px;
  box-shadow: 0 0 2px rgba(0,0,0,0.3);
}
.ss-cell { overflow: visible; }
.ss-cell.ss-fill-preview {
  outline: 2px dashed var(--ss-sel);
  outline-offset: -2px;
  background: rgba(99, 102, 241, 0.08);
}
.ss-cell.ss-fill-source {
  outline: 2px solid var(--ss-sel);
  outline-offset: -2px;
}
.ss-toolbar {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
  padding: 6px 8px;
  background: #fafbfc;
  border-bottom: 1px solid var(--ss-bord);
  font-size: 0.85em;
}
.ss-toolbar button {
  font: inherit;
  padding: 4px 10px;
  border: 1px solid var(--ss-bord);
  background: #fff;
  border-radius: 4px;
  cursor: pointer;
  min-height: 32px;
}
.ss-toolbar button:active { background: #e2e8f0; }
.ss-toolbar .ss-formula-bar {
  flex: 1;
  min-width: 120px;
  font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
  font-size: 0.85em;
  color: #1e293b;
  padding: 4px 6px;
  background: #fff;
  border: 1px solid var(--ss-bord);
  border-radius: 4px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  min-height: 24px;
}
@media (max-width: 480px) {
  math974-spreadsheet { --ss-cell-w: 64px; --ss-cell-h: 36px; font-size: 0.95em; }
  .ss-toolbar { font-size: 0.8em; }
}
`;function R(){if(document.getElementById(C))return;const u=document.createElement("style");u.id=C,u.textContent=M,document.head.appendChild(u)}function v(u,e){if(!u)return e;try{return JSON.parse(u)}catch{return e}}function _(u,e){return y(u)+(e+1)}function F(u){return(u||"").trim()}class T extends HTMLElement{static get observedAttributes(){return["rows","cols","cells","locked","solutions","headers"]}constructor(){super(),this._cells=new Map,this._values=new Map,this._selected=null,this._undo=[],this._activeInput=null,this._currentPhase="cellule_vide"}connectedCallback(){R(),A(),this._render(),this._wireDocLevelListeners()}attributeChangedCallback(){this.isConnected&&this._render()}validate(){const e=this._targetCells();return e.length===0?!1:e.every(t=>this._isCorrect(t))}toggleSolution(){this._showSolutions=!this._showSolutions,this._renderGrid()}getCurrentPhase(){return this._currentPhase}getCurrentStudentValue(){if(this._activeInput){const e=this._activeInput.dataset.ssRef,t=this._cells.get(e);return t?.raw?t.raw:this._activeInput.value||""}for(const e of this._targetCells()){const t=this._cells.get(e);if(t?.raw&&!this._isCorrect(e))return t.raw}return""}_validateCell(e){const t=e.dataset.ssRef;return t?this._isCorrect(t):!1}_readFormula(e){const t=e.dataset.ssRef;return t&&this._cells.get(t)?.raw||""}_readAttrs(){this._rows=Math.max(1,parseInt(this.getAttribute("rows")||"6",10)),this._cols=Math.max(1,parseInt(this.getAttribute("cols")||"5",10));const e=v(this.getAttribute("cells"),{}),t=new Set(v(this.getAttribute("locked"),[])),s=v(this.getAttribute("solutions"),{}),n=v(this.getAttribute("headers"),null);this._cells.clear();for(const[o,r]of Object.entries(e)){const i={raw:r==null?"":String(r),locked:t.has(o)};this._parseIntoCell(i),this._cells.set(o,i)}for(const o of t)this._cells.has(o)||this._cells.set(o,{raw:"",locked:!0});for(const[o,r]of Object.entries(s)){let l=this._cells.get(o);l||(l={raw:"",locked:!1},this._cells.set(o,l)),l.target=!0,l.sol={formula:r.formula||r,mode:r.mode||"formula",alt:Array.isArray(r.alt)?r.alt:[]}}this._headers=n}_parseIntoCell(e){delete e.ast,delete e.parseError;const t=e.raw;if(typeof t=="string"&&t.trim().startsWith("=")){const s=m(t);s.error?e.parseError=s.error:e.ast=s}}_getCellValue(e,t){const s=_(e,t);this._values.has(s)||this._evaluateCell(s,new Set);const n=this._values.get(s);return n&&typeof n=="object"&&n.error?NaN:n}_evaluateCell(e,t){const s=this._cells.get(e);if(!s){this._values.set(e,"");return}if(s.ast){if(t.has(e)){this._values.set(e,{error:"#CYCLE!"});return}t.add(e);const n={getCell:(o,r)=>{const l=_(o,r);if(t.has(l))throw new E;this._values.has(l)||this._evaluateCell(l,t);const i=this._values.get(l);if(i&&typeof i=="object"&&i.error)throw new E(i.error);return i===void 0?"":i}};try{const o=w(s.ast,n);this._values.set(e,o)}catch(o){this._values.set(e,{error:o.code||"#CYCLE!"})}t.delete(e)}else{const n=s.raw;if(n===""||n==null){this._values.set(e,"");return}const o=parseFloat(String(n).replace(",","."));!isNaN(o)&&String(o)===String(n).replace(",",".").replace(/^\+/,"")?this._values.set(e,o):!isNaN(o)&&/^-?\d+([.,]\d+)?$/.test(String(n).trim())?this._values.set(e,o):this._values.set(e,String(n))}}_recompute(){this._values.clear();for(const e of this._cells.keys())this._values.has(e)||this._evaluateCell(e,new Set)}_render(){this._readAttrs(),this.innerHTML="",this._recompute(),this._buildDom(),this._updatePhase(),I(()=>import("./rapido-engine.7ZIDQB1d.js").then(e=>e.f),__vite__mapDeps([0,1,2])).then(e=>e.wireCardInputs?.(this.closest(".q-card")))}_buildDom(){const e=document.createElement("div");e.className="ss-wrap";const t=document.createElement("div");t.className="ss-toolbar";const s=document.createElement("span");s.className="ss-cell-label",s.textContent="—",t.appendChild(s);const n=document.createElement("div");n.className="ss-formula-bar",n.textContent="",t.appendChild(n);const o=document.createElement("button");o.type="button",o.textContent="↺",o.title="Annuler",o.addEventListener("click",()=>this._undoLast()),t.appendChild(o),e.appendChild(t);const r=document.createElement("table");r.className="ss-grid";const l=document.createElement("thead"),i=document.createElement("tr");i.appendChild(document.createElement("th"));for(let a=0;a<this._cols;a++){const d=document.createElement("th");d.textContent=this._headers?.col?.[a]??y(a),i.appendChild(d)}l.appendChild(i),r.appendChild(l);const c=document.createElement("tbody");for(let a=0;a<this._rows;a++){const d=document.createElement("tr"),p=document.createElement("th");p.textContent=this._headers?.row?.[a]??String(a+1),d.appendChild(p);for(let h=0;h<this._cols;h++){const f=document.createElement("td");f.className="ss-cell",f.dataset.col=String(h),f.dataset.row=String(a),f.dataset.ref=_(h,a),this._paintCell(f),d.appendChild(f)}c.appendChild(d)}r.appendChild(c),e.appendChild(r),this.appendChild(e),this._tbody=c,this._fxBar=n,this._cellLabel=s,this._wireGridEvents(c)}_renderGrid(){this._tbody&&(this._recompute(),this._tbody.querySelectorAll(".ss-cell").forEach(e=>this._paintCell(e)),this._updatePhase())}_paintCell(e){const t=e.dataset.ref,s=this._cells.get(t);if(s&&s.target&&!this._showSolutions){let r=e.querySelector(".ss-target-input");if(!r)e.classList.add("ss-target"),r=document.createElement("input"),r.type="text",r.className="rapido-input ss-target-input",r.dataset.solutionType="spreadsheet-formula",r.dataset.ssRef=t,r.dataset.solution=s.sol.formula,r.placeholder="…",r.value=s.raw||"",e.textContent="",e.appendChild(r),r.addEventListener("focus",()=>{e.classList.add("ss-sel"),this._activeInput=r,this._updateFormulaBar(t),this._ensureHandleForRef(t)}),r.addEventListener("blur",()=>{const l=F(r.value);l!==s.raw&&(this._pushUndo(),s.raw=l,this._parseIntoCell(s),this._recompute(),this._repaintNonTargets(),this._updatePhase())}),r.addEventListener("keydown",l=>{l.key==="Enter"?(l.preventDefault(),r.blur()):l.key==="Escape"&&(r.value=s.raw||"",r.blur())}),this._observeTargetInput(r,t);else{const l=s.raw||"";document.activeElement!==r&&r.value!==l&&(r.value=l),e.classList.add("ss-target")}return}if(e.classList.remove("ss-locked","ss-target","ss-text","ss-num","ss-error"),e.querySelector(".ss-cell-input"))return;let o="";if(s){s.locked&&e.classList.add("ss-locked");const r=this._values.get(t);r&&typeof r=="object"&&r.error?(o=r.error,e.classList.add("ss-error")):typeof r=="number"?(o=P(r),e.classList.add("ss-num")):r!=null&&(o=String(r),e.classList.add("ss-text"))}e.textContent=o}_updateFormulaBar(e){const t=this._cells.get(e);this._cellLabel&&(this._cellLabel.textContent=e||"—"),this._fxBar&&(this._fxBar.textContent=t?.raw??"")}_wireGridEvents(e){e.addEventListener("click",t=>{const s=t.target.closest(".ss-cell");s&&(t.target.classList?.contains("ss-cell-input")||this._selectCell(s))}),e.addEventListener("dblclick",t=>{const s=t.target.closest(".ss-cell");s&&this._beginEdit(s)}),e.addEventListener("keydown",t=>{if(t.key==="Enter"&&this._selected){const s=this._cellElement(this._selected.col,this._selected.row);s&&!s.querySelector(".ss-cell-input")&&(t.preventDefault(),this._beginEdit(s))}}),e.addEventListener("pointerdown",t=>{t.target.closest(".ss-fill-handle")&&this._selected&&(t.preventDefault(),this._startFill())})}_wireDocLevelListeners(){}_selectCell(e){if(this._selected){const n=this._cellElement(this._selected.col,this._selected.row);n?.classList.remove("ss-sel"),n?.querySelector(".ss-fill-handle")?.remove()}const t=parseInt(e.dataset.col,10),s=parseInt(e.dataset.row,10);this._selected={col:t,row:s},e.classList.add("ss-sel"),this._updateFormulaBar(e.dataset.ref),this._ensureHandleForRef(e.dataset.ref)}_ensureHandleForRef(e){const t=this._tbody?.querySelector(`.ss-cell[data-ref="${e}"]`);if(!t||t.querySelector(".ss-fill-handle")||t.querySelector(".ss-cell-input")||!this._cells.get(e)?.ast)return;const n=document.createElement("button");n.type="button",n.className="ss-fill-handle",n.title="Recopier (cliquer puis cliquer la cellule cible)",n.setAttribute("aria-label","Poignée de recopie"),t.appendChild(n)}_repaintNonTargets(){if(this._tbody&&(this._tbody.querySelectorAll(".ss-cell").forEach(e=>{this._cells.get(e.dataset.ref)?.target&&!this._showSolutions||this._paintCell(e)}),this._selected)){const e=_(this._selected.col,this._selected.row);this._ensureHandleForRef(e)}}_cellElement(e,t){return this._tbody?.querySelector(`.ss-cell[data-col="${e}"][data-row="${t}"]`)}_beginEdit(e){const t=e.dataset.ref,s=this._cells.get(t)||{};if(s.locked)return;if(s.target){e.querySelector(".ss-cell-input, .rapido-input")?.focus();return}if(e.querySelector(".ss-cell-input"))return;const n=s.raw??"",o=document.createElement("input");o.type="text",o.className="ss-cell-input",o.value=n,e.textContent="",e.appendChild(o),o.focus(),o.select();const r=l=>{const i=l?o.value:n;if(l&&i!==n){this._pushUndo();let c=this._cells.get(t);c||(c={raw:"",locked:!1},this._cells.set(t,c)),c.raw=i,this._parseIntoCell(c),this._recompute()}this._renderGrid()};o.addEventListener("blur",()=>r(!0)),o.addEventListener("keydown",l=>{l.key==="Enter"?(l.preventDefault(),o.blur()):l.key==="Escape"&&(l.preventDefault(),r(!1))})}_startFill(){this._fillSource={...this._selected};const e=this._cellElement(this._fillSource.col,this._fillSource.row);e?.classList.add("ss-fill-source");const t=()=>{this._tbody.querySelectorAll(".ss-fill-preview").forEach(l=>l.classList.remove("ss-fill-preview"))},s=(l,i)=>{const a=document.elementFromPoint(l,i)?.closest?.(".ss-cell");return a&&this._tbody.contains(a)?a:null},n=(l,i)=>{t();const c=Math.min(this._fillSource.col,l),a=Math.max(this._fillSource.col,l),d=Math.min(this._fillSource.row,i),p=Math.max(this._fillSource.row,i);for(let h=d;h<=p;h++)for(let f=c;f<=a;f++){if(f===this._fillSource.col&&h===this._fillSource.row)continue;this._cellElement(f,h)?.classList.add("ss-fill-preview")}},o=l=>{const i=s(l.clientX,l.clientY);if(!i)return;const c=parseInt(i.dataset.col,10),a=parseInt(i.dataset.row,10);n(c,a)},r=l=>{document.removeEventListener("pointermove",o),t(),e?.classList.remove("ss-fill-source");const i=s(l.clientX,l.clientY);if(!i){this._fillSource=null;return}this._applyFill(i),this._fillSource=null};document.addEventListener("pointermove",o),document.addEventListener("pointerup",r,{once:!0})}_applyFill(e){const t=this._fillSource;if(!t)return;const s=_(t.col,t.row),n=this._cells.get(s);if(!n||!n.ast)return;const o=parseInt(e.dataset.col,10),r=parseInt(e.dataset.row,10),l=Math.min(t.col,o),i=Math.max(t.col,o),c=Math.min(t.row,r),a=Math.max(t.row,r);this._pushUndo();for(let d=c;d<=a;d++)for(let p=l;p<=i;p++){if(p===t.col&&d===t.row)continue;const h=_(p,d);if(this._cells.get(h)?.locked)continue;const b=p-t.col,S=d-t.row,k=N(n.ast,b,S),L=q(k);let g=this._cells.get(h);g||(g={raw:"",locked:!1},this._cells.set(h,g)),g.raw=L,this._parseIntoCell(g)}this._recompute(),this._renderGrid()}_pushUndo(){this._undo.length>=20&&this._undo.shift();const e={};for(const[t,s]of this._cells)e[t]={raw:s.raw,locked:s.locked,target:s.target,sol:s.sol};this._undo.push(e)}_undoLast(){const e=this._undo.pop();if(e){this._cells.clear();for(const[t,s]of Object.entries(e)){const n={raw:s.raw,locked:s.locked};s.target&&(n.target=!0,n.sol=s.sol),this._parseIntoCell(n),this._cells.set(t,n)}this._recompute(),this._renderGrid()}}_targetCells(){const e=[];for(const[t,s]of this._cells)s.target&&e.push(t);return e}_isCorrect(e){const t=this._cells.get(e);if(!t?.sol)return!1;const s=(t.raw||"").trim();if(s==="")return!1;const n=m(t.sol.formula);if(t.sol.mode==="value"){const r=m(s.startsWith("=")?s:"="+s);if(r.error)return!1;const l=this._evaluateInContext(r),i=this._evaluateInContext(n);return typeof l=="number"&&typeof i=="number"&&Math.abs(l-i)<1e-9}const o=m(s);if(o.error)return!1;if(x(o,n))return!0;for(const r of t.sol.alt||[]){const l=m(r);if(!l.error&&x(o,l))return!0}return!1}_evaluateInContext(e){if(!e||e.error)return null;const s=w(e,{getCell:(n,o)=>{const r=_(n,o);this._values.has(r)||this._evaluateCell(r,new Set);const l=this._values.get(r);return l&&typeof l=="object"&&l.error?NaN:l===void 0?"":l}});return s&&typeof s=="object"&&s.error?null:s}_updatePhase(){const e=this._targetCells();if(e.length===0){this._currentPhase="cellule_vide";return}let t=!0,s=!1,n=!1,o=!1;for(const r of e){const i=(this._cells.get(r)?.raw||"").trim();if(i===""){t=!1;continue}if(s=!0,m(i).error){o=!0,t=!1;continue}const a=this._values.get(r);a&&typeof a=="object"&&a.error&&(n=!0),this._isCorrect(r)||(t=!1)}t?this._currentPhase="done":o?this._currentPhase="formule_invalide":s?n?this._currentPhase="formule_invalide":this._currentPhase="erreur_calcul":this._currentPhase="cellule_vide"}_observeTargetInput(e,t){if(e._ssObserved)return;e._ssObserved=!0;const s=this.closest(".q-card");if(!s)return;const n=z(()=>{s.querySelector(".am-indice-panel.open")&&s.dispatchEvent(new CustomEvent("zefor-indice-auto-refresh",{detail:{studentValue:e.value,formula:e.value,phase:this.getCurrentPhase(),targetCell:t,source:this},bubbles:!0}))},300);e.addEventListener("input",n),new MutationObserver(()=>{e.classList.contains("incorrect")&&s.dispatchEvent(new CustomEvent("zefor-indice-auto-pop",{detail:{studentValue:e.value,formula:e.value,phase:this.getCurrentPhase(),targetCell:t,source:this},bubbles:!0}))}).observe(e,{attributes:!0,attributeFilter:["class"]})}}class E extends Error{constructor(e="#CYCLE!"){super(e),this.code=e}}function z(u,e){let t=null;return(...s)=>{t&&clearTimeout(t),t=setTimeout(()=>u(...s),e)}}customElements.get("math974-spreadsheet")||customElements.define("math974-spreadsheet",T);export{V as autoScale,H as defaultPosition};
