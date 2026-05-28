const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/rapido-engine.fYWRzQ9G.js","_astro/rapidos-visuals-integration.B2twbPfL.js","_astro/editor.CJZspgfY.js"])))=>i.map(i=>d[i]);
import{_ as I}from"./editor.CJZspgfY.js";import{ensureSharedStyles as A}from"./vis-input.2xZ2TBfF.js";import{parseFormula as m,evaluate as b,idxToCol as E,formatValue as q,shiftRefs as N,stringify as P,astEqual as w}from"./formula-parser.CuBpGvtX.js";import"./rapido-engine.fYWRzQ9G.js";import"./rapidos-visuals-integration.B2twbPfL.js";const G="content",H=!1,x="math974-spreadsheet-css",R=`
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
`;function F(){if(document.getElementById(x))return;const u=document.createElement("style");u.id=x,u.textContent=R,document.head.appendChild(u)}function v(u,e){if(!u)return e;try{return JSON.parse(u)}catch{return e}}function _(u,e){return E(u)+(e+1)}class M extends HTMLElement{static get observedAttributes(){return["rows","cols","cells","locked","solutions","headers"]}constructor(){super(),this._cells=new Map,this._values=new Map,this._selected=null,this._undo=[],this._activeInput=null,this._currentPhase="cellule_vide"}connectedCallback(){F(),A(),this._render(),this._wireDocLevelListeners()}attributeChangedCallback(){this.isConnected&&this._render()}validate(){const e=this._targetCells();return e.length===0?!1:e.every(t=>this._isCorrect(t))}toggleSolution(){this._showSolutions=!this._showSolutions,this._renderGrid()}getCurrentPhase(){return this._currentPhase}getCurrentStudentValue(){if(this._activeInput){const e=this._activeInput.dataset.ssRef,t=this._cells.get(e);return t?.raw?t.raw:this._activeInput.value||""}for(const e of this._targetCells()){const t=this._cells.get(e);if(t?.raw&&!this._isCorrect(e))return t.raw}return""}_validateCell(e){const t=e.dataset.ssRef;return t?this._isCorrect(t):!1}_readFormula(e){const t=e.dataset.ssRef;return t&&this._cells.get(t)?.raw||""}_readAttrs(){this._rows=Math.max(1,parseInt(this.getAttribute("rows")||"6",10)),this._cols=Math.max(1,parseInt(this.getAttribute("cols")||"5",10));const e=v(this.getAttribute("cells"),{}),t=new Set(v(this.getAttribute("locked"),[])),s=v(this.getAttribute("solutions"),{}),l=v(this.getAttribute("headers"),null);this._cells.clear();for(const[o,r]of Object.entries(e)){const i={raw:r==null?"":String(r),locked:t.has(o)};this._parseIntoCell(i),this._cells.set(o,i)}for(const o of t)this._cells.has(o)||this._cells.set(o,{raw:"",locked:!0});for(const[o,r]of Object.entries(s)){let n=this._cells.get(o);n||(n={raw:"",locked:!1},this._cells.set(o,n)),n.target=!0,n.sol={formula:r.formula||r,mode:r.mode||"formula",alt:Array.isArray(r.alt)?r.alt:[]}}this._headers=l}_parseIntoCell(e){delete e.ast,delete e.parseError;const t=e.raw;if(typeof t=="string"&&t.trim().startsWith("=")){const s=m(t);s.error?e.parseError=s.error:e.ast=s}}_getCellValue(e,t){const s=_(e,t);this._values.has(s)||this._evaluateCell(s,new Set);const l=this._values.get(s);return l&&typeof l=="object"&&l.error?NaN:l}_evaluateCell(e,t){const s=this._cells.get(e);if(!s){this._values.set(e,"");return}if(s.ast){if(t.has(e)){this._values.set(e,{error:"#CYCLE!"});return}t.add(e);const l={getCell:(o,r)=>{const n=_(o,r);if(t.has(n))throw new C;this._values.has(n)||this._evaluateCell(n,t);const i=this._values.get(n);if(i&&typeof i=="object"&&i.error)throw new C(i.error);return i===void 0?"":i}};try{const o=b(s.ast,l);this._values.set(e,o)}catch(o){this._values.set(e,{error:o.code||"#CYCLE!"})}t.delete(e)}else{const l=s.raw;if(l===""||l==null){this._values.set(e,"");return}const o=parseFloat(String(l).replace(",","."));!isNaN(o)&&String(o)===String(l).replace(",",".").replace(/^\+/,"")?this._values.set(e,o):!isNaN(o)&&/^-?\d+([.,]\d+)?$/.test(String(l).trim())?this._values.set(e,o):this._values.set(e,String(l))}}_recompute(){this._values.clear();for(const e of this._cells.keys())this._values.has(e)||this._evaluateCell(e,new Set)}_render(){this._readAttrs(),this.innerHTML="",this._recompute(),this._buildDom(),this._updatePhase(),I(()=>import("./rapido-engine.fYWRzQ9G.js").then(e=>e.f),__vite__mapDeps([0,1,2])).then(e=>e.wireCardInputs?.(this.closest(".q-card")))}_buildDom(){const e=document.createElement("div");e.className="ss-wrap";const t=document.createElement("div");t.className="ss-toolbar";const s=document.createElement("span");s.className="ss-cell-label",s.textContent="—",t.appendChild(s);const l=document.createElement("div");l.className="ss-formula-bar",l.textContent="",t.appendChild(l);const o=document.createElement("button");o.type="button",o.textContent="↺",o.title="Annuler",o.addEventListener("click",()=>this._undoLast()),t.appendChild(o),e.appendChild(t);const r=document.createElement("table");r.className="ss-grid";const n=document.createElement("thead"),i=document.createElement("tr");i.appendChild(document.createElement("th"));for(let a=0;a<this._cols;a++){const d=document.createElement("th");d.textContent=this._headers?.col?.[a]??E(a),i.appendChild(d)}n.appendChild(i),r.appendChild(n);const c=document.createElement("tbody");for(let a=0;a<this._rows;a++){const d=document.createElement("tr"),h=document.createElement("th");h.textContent=this._headers?.row?.[a]??String(a+1),d.appendChild(h);for(let f=0;f<this._cols;f++){const p=document.createElement("td");p.className="ss-cell",p.dataset.col=String(f),p.dataset.row=String(a),p.dataset.ref=_(f,a),this._paintCell(p),d.appendChild(p)}c.appendChild(d)}r.appendChild(c),e.appendChild(r),this.appendChild(e),this._tbody=c,this._fxBar=l,this._cellLabel=s,this._wireGridEvents(c)}_renderGrid(){this._tbody&&(this._recompute(),this._tbody.querySelectorAll(".ss-cell").forEach(e=>this._paintCell(e)),this._updatePhase())}_paintCell(e){const t=e.dataset.ref,s=this._cells.get(t);if(s&&s.target&&!this._showSolutions){let r=e.querySelector(".ss-target-input");r?(document.activeElement!==r&&r.value!==(s.raw||"")&&(r.value=s.raw||""),e.classList.add("ss-target")):(e.classList.add("ss-target"),r=document.createElement("input"),r.type="text",r.className="rapido-input ss-target-input",r.dataset.solutionType="spreadsheet-formula",r.dataset.ssRef=t,r.dataset.solution=s.sol.formula,r.placeholder="= …",r.value=s.raw||"",e.textContent="",e.appendChild(r),r.addEventListener("focus",()=>{e.classList.add("ss-sel"),this._activeInput=r,this._updateFormulaBar(t),this._ensureHandleForRef(t)}),r.addEventListener("blur",()=>{const n=r.value;n!==s.raw&&(this._pushUndo(),s.raw=n,this._parseIntoCell(s),this._recompute(),this._repaintNonTargets(),this._updatePhase())}),r.addEventListener("keydown",n=>{n.key==="Enter"?(n.preventDefault(),r.blur()):n.key==="Escape"&&(r.value=s.raw||"",r.blur())}),this._observeTargetInput(r,t));return}if(e.classList.remove("ss-locked","ss-target","ss-text","ss-num","ss-error"),e.querySelector(".ss-cell-input"))return;let o="";if(s){s.locked&&e.classList.add("ss-locked");const r=this._values.get(t);r&&typeof r=="object"&&r.error?(o=r.error,e.classList.add("ss-error")):typeof r=="number"?(o=q(r),e.classList.add("ss-num")):r!=null&&(o=String(r),e.classList.add("ss-text"))}e.textContent=o}_updateFormulaBar(e){const t=this._cells.get(e);this._cellLabel&&(this._cellLabel.textContent=e||"—"),this._fxBar&&(this._fxBar.textContent=t?.raw??"")}_wireGridEvents(e){e.addEventListener("click",t=>{const s=t.target.closest(".ss-cell");s&&(t.target.classList?.contains("ss-cell-input")||this._selectCell(s))}),e.addEventListener("dblclick",t=>{const s=t.target.closest(".ss-cell");s&&this._beginEdit(s)}),e.addEventListener("keydown",t=>{if(t.key==="Enter"&&this._selected){const s=this._cellElement(this._selected.col,this._selected.row);s&&!s.querySelector(".ss-cell-input")&&(t.preventDefault(),this._beginEdit(s))}}),e.addEventListener("pointerdown",t=>{t.target.closest(".ss-fill-handle")&&this._selected&&(t.preventDefault(),this._startFill())})}_wireDocLevelListeners(){}_selectCell(e){if(this._selected){const l=this._cellElement(this._selected.col,this._selected.row);l?.classList.remove("ss-sel"),l?.querySelector(".ss-fill-handle")?.remove()}const t=parseInt(e.dataset.col,10),s=parseInt(e.dataset.row,10);this._selected={col:t,row:s},e.classList.add("ss-sel"),this._updateFormulaBar(e.dataset.ref),this._ensureHandleForRef(e.dataset.ref)}_ensureHandleForRef(e){const t=this._tbody?.querySelector(`.ss-cell[data-ref="${e}"]`);if(!t||t.querySelector(".ss-fill-handle")||t.querySelector(".ss-cell-input")||!this._cells.get(e)?.ast)return;const l=document.createElement("button");l.type="button",l.className="ss-fill-handle",l.title="Recopier (cliquer puis cliquer la cellule cible)",l.setAttribute("aria-label","Poignée de recopie"),t.appendChild(l)}_repaintNonTargets(){if(this._tbody&&(this._tbody.querySelectorAll(".ss-cell").forEach(e=>{this._cells.get(e.dataset.ref)?.target&&!this._showSolutions||this._paintCell(e)}),this._selected)){const e=_(this._selected.col,this._selected.row);this._ensureHandleForRef(e)}}_cellElement(e,t){return this._tbody?.querySelector(`.ss-cell[data-col="${e}"][data-row="${t}"]`)}_beginEdit(e){const t=e.dataset.ref,s=this._cells.get(t)||{};if(s.locked)return;if(s.target){e.querySelector(".ss-cell-input, .rapido-input")?.focus();return}if(e.querySelector(".ss-cell-input"))return;const l=s.raw??"",o=document.createElement("input");o.type="text",o.className="ss-cell-input",o.value=l,e.textContent="",e.appendChild(o),o.focus(),o.select();const r=n=>{const i=n?o.value:l;if(n&&i!==l){this._pushUndo();let c=this._cells.get(t);c||(c={raw:"",locked:!1},this._cells.set(t,c)),c.raw=i,this._parseIntoCell(c),this._recompute()}this._renderGrid()};o.addEventListener("blur",()=>r(!0)),o.addEventListener("keydown",n=>{n.key==="Enter"?(n.preventDefault(),o.blur()):n.key==="Escape"&&(n.preventDefault(),r(!1))})}_startFill(){this._fillSource={...this._selected};const e=s=>{const l=s.target instanceof Element?s.target.closest(".ss-cell"):null;this._tbody.querySelectorAll(".ss-fill-preview").forEach(o=>o.classList.remove("ss-fill-preview")),l&&l.classList.add("ss-fill-preview")},t=s=>{document.removeEventListener("pointermove",e),document.removeEventListener("pointerup",t),this._tbody.querySelectorAll(".ss-fill-preview").forEach(o=>o.classList.remove("ss-fill-preview"));const l=s.target instanceof Element?s.target.closest(".ss-cell"):null;if(!l){this._fillSource=null;return}this._applyFill(l),this._fillSource=null};document.addEventListener("pointermove",e),document.addEventListener("pointerup",t,{once:!0})}_applyFill(e){const t=this._fillSource;if(!t)return;const s=_(t.col,t.row),l=this._cells.get(s);if(!l||!l.ast)return;const o=parseInt(e.dataset.col,10),r=parseInt(e.dataset.row,10),n=Math.min(t.col,o),i=Math.max(t.col,o),c=Math.min(t.row,r),a=Math.max(t.row,r);this._pushUndo();for(let d=c;d<=a;d++)for(let h=n;h<=i;h++){if(h===t.col&&d===t.row)continue;const f=_(h,d);if(this._cells.get(f)?.locked)continue;const y=h-t.col,S=d-t.row,k=N(l.ast,y,S),L=P(k);let g=this._cells.get(f);g||(g={raw:"",locked:!1},this._cells.set(f,g)),g.raw=L,this._parseIntoCell(g)}this._recompute(),this._renderGrid()}_pushUndo(){this._undo.length>=20&&this._undo.shift();const e={};for(const[t,s]of this._cells)e[t]={raw:s.raw,locked:s.locked,target:s.target,sol:s.sol};this._undo.push(e)}_undoLast(){const e=this._undo.pop();if(e){this._cells.clear();for(const[t,s]of Object.entries(e)){const l={raw:s.raw,locked:s.locked};s.target&&(l.target=!0,l.sol=s.sol),this._parseIntoCell(l),this._cells.set(t,l)}this._recompute(),this._renderGrid()}}_targetCells(){const e=[];for(const[t,s]of this._cells)s.target&&e.push(t);return e}_isCorrect(e){const t=this._cells.get(e);if(!t?.sol)return!1;const s=(t.raw||"").trim();if(s==="")return!1;const l=m(t.sol.formula);if(t.sol.mode==="value"){const r=m(s.startsWith("=")?s:"="+s);if(r.error)return!1;const n=this._evaluateInContext(r),i=this._evaluateInContext(l);return typeof n=="number"&&typeof i=="number"&&Math.abs(n-i)<1e-9}const o=m(s);if(o.error)return!1;if(w(o,l))return!0;for(const r of t.sol.alt||[]){const n=m(r);if(!n.error&&w(o,n))return!0}return!1}_evaluateInContext(e){if(!e||e.error)return null;const s=b(e,{getCell:(l,o)=>{const r=_(l,o);this._values.has(r)||this._evaluateCell(r,new Set);const n=this._values.get(r);return n&&typeof n=="object"&&n.error?NaN:n===void 0?"":n}});return s&&typeof s=="object"&&s.error?null:s}_updatePhase(){const e=this._targetCells();if(e.length===0){this._currentPhase="cellule_vide";return}let t=!0,s=!1,l=!1,o=!1;for(const r of e){const i=(this._cells.get(r)?.raw||"").trim();if(i===""){t=!1;continue}if(s=!0,m(i).error){o=!0,t=!1;continue}const a=this._values.get(r);a&&typeof a=="object"&&a.error&&(l=!0),this._isCorrect(r)||(t=!1)}t?this._currentPhase="done":o?this._currentPhase="formule_invalide":s?l?this._currentPhase="formule_invalide":this._currentPhase="erreur_calcul":this._currentPhase="cellule_vide"}_observeTargetInput(e,t){if(e._ssObserved)return;e._ssObserved=!0;const s=this.closest(".q-card");if(!s)return;const l=D(()=>{s.querySelector(".am-indice-panel.open")&&s.dispatchEvent(new CustomEvent("zefor-indice-auto-refresh",{detail:{studentValue:e.value,formula:e.value,phase:this.getCurrentPhase(),targetCell:t,source:this},bubbles:!0}))},300);e.addEventListener("input",l),new MutationObserver(()=>{e.classList.contains("incorrect")&&s.dispatchEvent(new CustomEvent("zefor-indice-auto-pop",{detail:{studentValue:e.value,formula:e.value,phase:this.getCurrentPhase(),targetCell:t,source:this},bubbles:!0}))}).observe(e,{attributes:!0,attributeFilter:["class"]})}}class C extends Error{constructor(e="#CYCLE!"){super(e),this.code=e}}function D(u,e){let t=null;return(...s)=>{t&&clearTimeout(t),t=setTimeout(()=>u(...s),e)}}customElements.get("math974-spreadsheet")||customElements.define("math974-spreadsheet",M);export{H as autoScale,G as defaultPosition};
