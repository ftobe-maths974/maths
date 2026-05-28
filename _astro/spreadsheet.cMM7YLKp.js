const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/rapido-engine.DdpoK3Ts.js","_astro/rapidos-visuals-integration.BuhAApdn.js","_astro/editor.CJZspgfY.js"])))=>i.map(i=>d[i]);
import{_ as R}from"./editor.CJZspgfY.js";import{ensureSharedStyles as A}from"./vis-input.DKEs0FjG.js";import{parseFormula as m,evaluate as y,idxToCol as L,formatValue as P,shiftRefs as M,stringify as F,astEqual as E}from"./formula-parser.CuBpGvtX.js";import"./rapido-engine.DdpoK3Ts.js";import"./rapidos-visuals-integration.BuhAApdn.js";const U="content",Y=!1,k="math974-spreadsheet-css",q=`
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
.ss-cell.ss-fill-only { background: rgba(148, 163, 184, 0.08); }
.ss-cell.ss-fill-only .ss-target-input {
  cursor: not-allowed;
  color: #475569;
}
/* Live-highlight : refs/plages contenues dans la formule en cours de saisie.
   Couleurs cyclées par ref unique (4 teintes daltonien-friendly). */
.ss-cell.ss-ref-hl-0 { outline: 2px dashed #1d4ed8; outline-offset: -2px; background: rgba(29, 78, 216, 0.10); }
.ss-cell.ss-ref-hl-1 { outline: 2px dashed #b45309; outline-offset: -2px; background: rgba(180, 83, 9, 0.10); }
.ss-cell.ss-ref-hl-2 { outline: 2px dashed #047857; outline-offset: -2px; background: rgba(4, 120, 87, 0.10); }
.ss-cell.ss-ref-hl-3 { outline: 2px dashed #9333ea; outline-offset: -2px; background: rgba(147, 51, 234, 0.10); }
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
  text-align: left;
}
@media (max-width: 480px) {
  math974-spreadsheet { --ss-cell-w: 64px; --ss-cell-h: 36px; font-size: 0.95em; }
  .ss-toolbar { font-size: 0.8em; }
}
`;function N(){if(document.getElementById(k))return;const c=document.createElement("style");c.id=k,c.textContent=q,document.head.appendChild(c)}function x(c,e){if(!c)return e;try{return JSON.parse(c)}catch{return e}}function _(c,e){return L(c)+(e+1)}function O(c){return(c||"").trim()}class D extends HTMLElement{static get observedAttributes(){return["rows","cols","cells","locked","solutions","headers"]}constructor(){super(),this._cells=new Map,this._values=new Map,this._selected=null,this._undo=[],this._activeInput=null,this._currentPhase="cellule_vide"}connectedCallback(){N(),A(),this._render(),this._wireDocLevelListeners()}attributeChangedCallback(){this.isConnected&&this._render()}validate(){const e=this._targetCells();return e.length===0?!1:e.every(t=>this._isCorrect(t))}toggleSolution(){this._showSolutions=!this._showSolutions,this._renderGrid()}getCurrentPhase(){return this._currentPhase}getCurrentStudentValue(){if(this._activeInput){const e=this._activeInput.dataset.ssRef,t=this._cells.get(e);return t?.raw?t.raw:this._activeInput.value||""}for(const e of this._targetCells()){const t=this._cells.get(e);if(t?.raw&&!this._isCorrect(e))return t.raw}return""}_validateCell(e){const t=e.dataset.ssRef;return t?this._isCorrect(t):!1}_readFormula(e){const t=e.dataset.ssRef;return t&&this._cells.get(t)?.raw||""}_readAttrs(){this._rows=Math.max(1,parseInt(this.getAttribute("rows")||"6",10)),this._cols=Math.max(1,parseInt(this.getAttribute("cols")||"5",10));const e=x(this.getAttribute("cells"),{}),t=new Set(x(this.getAttribute("locked"),[])),s=x(this.getAttribute("solutions"),{}),l=x(this.getAttribute("headers"),null);this._cells.clear();for(const[n,r]of Object.entries(e)){const i={raw:r==null?"":String(r),locked:t.has(n)};this._parseIntoCell(i),this._cells.set(n,i)}for(const n of t)this._cells.has(n)||this._cells.set(n,{raw:"",locked:!0});for(const[n,r]of Object.entries(s)){let o=this._cells.get(n);o||(o={raw:"",locked:!1},this._cells.set(n,o)),o.target=!0,o.sol={formula:r.formula||r,mode:r.mode||"formula",alt:Array.isArray(r.alt)?r.alt:[],fillOnly:!!r.fillOnly}}this._headers=l}_parseIntoCell(e){delete e.ast,delete e.parseError;const t=e.raw;if(typeof t=="string"&&t.trim().startsWith("=")){const s=m(t);s.error?e.parseError=s.error:e.ast=s}}_getCellValue(e,t){const s=_(e,t);this._values.has(s)||this._evaluateCell(s,new Set);const l=this._values.get(s);return l&&typeof l=="object"&&l.error?NaN:l}_evaluateCell(e,t){const s=this._cells.get(e);if(!s){this._values.set(e,"");return}if(s.ast){if(t.has(e)){this._values.set(e,{error:"#CYCLE!"});return}t.add(e);const l={getCell:(n,r)=>{const o=_(n,r);if(t.has(o))throw new S;this._values.has(o)||this._evaluateCell(o,t);const i=this._values.get(o);if(i&&typeof i=="object"&&i.error)throw new S(i.error);return i===void 0?"":i}};try{const n=y(s.ast,l);this._values.set(e,n)}catch(n){this._values.set(e,{error:n.code||"#CYCLE!"})}t.delete(e)}else{const l=s.raw;if(l===""||l==null){this._values.set(e,"");return}const n=parseFloat(String(l).replace(",","."));!isNaN(n)&&String(n)===String(l).replace(",",".").replace(/^\+/,"")?this._values.set(e,n):!isNaN(n)&&/^-?\d+([.,]\d+)?$/.test(String(l).trim())?this._values.set(e,n):this._values.set(e,String(l))}}_recompute(){this._values.clear();for(const e of this._cells.keys())this._values.has(e)||this._evaluateCell(e,new Set)}_render(){this._readAttrs(),this.innerHTML="",this._recompute(),this._buildDom(),this._updatePhase(),R(()=>import("./rapido-engine.DdpoK3Ts.js").then(e=>e.f),__vite__mapDeps([0,1,2])).then(e=>e.wireCardInputs?.(this.closest(".q-card")))}_buildDom(){const e=document.createElement("div");e.className="ss-wrap";const t=document.createElement("div");t.className="ss-toolbar";const s=document.createElement("span");s.className="ss-cell-label",s.textContent="—",t.appendChild(s);const l=document.createElement("div");l.className="ss-formula-bar",l.textContent="",t.appendChild(l);const n=document.createElement("button");n.type="button",n.textContent="↺",n.title="Annuler",n.addEventListener("click",()=>this._undoLast()),t.appendChild(n),e.appendChild(t);const r=document.createElement("table");r.className="ss-grid";const o=document.createElement("thead"),i=document.createElement("tr");i.appendChild(document.createElement("th"));for(let a=0;a<this._cols;a++){const u=document.createElement("th");u.textContent=this._headers?.col?.[a]??L(a),i.appendChild(u)}o.appendChild(i),r.appendChild(o);const d=document.createElement("tbody");for(let a=0;a<this._rows;a++){const u=document.createElement("tr"),h=document.createElement("th");h.textContent=this._headers?.row?.[a]??String(a+1),u.appendChild(h);for(let p=0;p<this._cols;p++){const f=document.createElement("td");f.className="ss-cell",f.dataset.col=String(p),f.dataset.row=String(a),f.dataset.ref=_(p,a),this._paintCell(f),u.appendChild(f)}d.appendChild(u)}r.appendChild(d),e.appendChild(r),this.appendChild(e),this._tbody=d,this._fxBar=l,this._cellLabel=s,this._wireGridEvents(d)}_renderGrid(){this._tbody&&(this._recompute(),this._tbody.querySelectorAll(".ss-cell").forEach(e=>this._paintCell(e)),this._updatePhase())}_paintCell(e){const t=e.dataset.ref,s=this._cells.get(t);if(s&&s.target&&!this._showSolutions){let r=e.querySelector(".ss-target-input");if(!r)e.classList.add("ss-target"),s.sol.fillOnly&&e.classList.add("ss-fill-only"),r=document.createElement("input"),r.type="text",r.className="rapido-input ss-target-input",r.dataset.solutionType="spreadsheet-formula",r.dataset.ssRef=t,r.dataset.solution=s.sol.formula,r.placeholder=s.sol.fillOnly?"":"…",r.value=s.raw||"",s.sol.fillOnly&&(r.readOnly=!0,r.title="Recopie depuis la cellule du dessus (drag-fill)"),e.textContent="",e.appendChild(r),r.addEventListener("focus",()=>{e.classList.add("ss-sel"),this._activeInput=r,this._updateFormulaBar(t),this._ensureHandleForRef(t),this._highlightFormulaRefs(r.value)}),r.addEventListener("input",()=>{this._highlightFormulaRefs(r.value),this._updateFormulaBar(t,r.value)}),r.addEventListener("blur",()=>{this._clearRefHighlights();const o=O(r.value);o!==s.raw&&(this._pushUndo(),s.raw=o,this._parseIntoCell(s),this._recompute(),this._repaintNonTargets(),this._updatePhase())}),r.addEventListener("keydown",o=>{o.key==="Enter"?(o.preventDefault(),r.blur()):o.key==="Escape"&&(r.value=s.raw||"",r.blur())}),this._observeTargetInput(r,t);else{const o=s.raw||"";document.activeElement!==r&&r.value!==o&&(r.value=o),e.classList.add("ss-target")}return}if(e.classList.remove("ss-locked","ss-target","ss-text","ss-num","ss-error"),e.querySelector(".ss-cell-input"))return;let n="";if(s){s.locked&&e.classList.add("ss-locked");const r=this._values.get(t);r&&typeof r=="object"&&r.error?(n=r.error,e.classList.add("ss-error")):typeof r=="number"?(n=P(r),e.classList.add("ss-num")):r!=null&&(n=String(r),e.classList.add("ss-text"))}e.textContent=n}_updateFormulaBar(e,t){const s=this._cells.get(e);this._cellLabel&&(this._cellLabel.textContent=e||"—"),this._fxBar&&(this._fxBar.textContent=t??s?.raw??"")}_wireGridEvents(e){e.addEventListener("click",t=>{if(this._refPickupActive)return;const s=t.target.closest(".ss-cell");s&&(t.target.classList?.contains("ss-cell-input")||this._selectCell(s))}),e.addEventListener("dblclick",t=>{const s=t.target.closest(".ss-cell");s&&this._beginEdit(s)}),e.addEventListener("keydown",t=>{if(t.key==="Enter"&&this._selected){const s=this._cellElement(this._selected.col,this._selected.row);s&&!s.querySelector(".ss-cell-input")&&(t.preventDefault(),this._beginEdit(s))}}),e.addEventListener("pointerdown",t=>{if(t.target.closest(".ss-fill-handle")&&this._selected){t.preventDefault(),this._startFill();return}const l=t.target.closest(".ss-cell");if(!l)return;const n=this._activeInput;!n||n.readOnly||this._isInRefPickupMode(n)&&(l.contains(n)||(t.preventDefault(),this._startRefPickup(l)))})}_isInRefPickupMode(e){const t=e.value||"";if(!t.startsWith("=")&&!t.startsWith("+"))return!1;const s=e.selectionStart??t.length,l=(t[s-1]||"").trim();return/[=+\-*/^(,;:<>]/.test(l)}_insertAtCursor(e,t){const s=e.value||"",l=e.selectionStart??s.length,n=e.selectionEnd??s.length,r=s.slice(0,l),o=s.slice(n);e.value=r+t+o;const i=l+t.length;e.setSelectionRange(i,i),e.dispatchEvent(new Event("input",{bubbles:!0}))}_startRefPickup(e){const t=this._activeInput;if(!t)return;const s=parseInt(e.dataset.col,10),l=parseInt(e.dataset.row,10),n=_(s,l),r=t.selectionStart??(t.value||"").length;this._insertAtCursor(t,n),this._refPickupActive=!0;const o=(u,h)=>{const f=document.elementFromPoint(u,h)?.closest?.(".ss-cell");return f&&this._tbody.contains(f)?f:null},i=(u,h)=>{const f=u===s&&h===l?n:n+":"+_(u,h),b=t.value.slice(0,r),C=t.value.slice(r+this._lastInsertedLen);t.value=b+f+C,this._lastInsertedLen=f.length;const w=r+f.length;t.setSelectionRange(w,w),t.focus(),t.dispatchEvent(new Event("input",{bubbles:!0}))};this._lastInsertedLen=n.length;const d=u=>{const h=o(u.clientX,u.clientY);if(!h)return;const p=parseInt(h.dataset.col,10),f=parseInt(h.dataset.row,10);i(p,f)},a=()=>{document.removeEventListener("pointermove",d),setTimeout(()=>{this._refPickupActive=!1},0),t.focus()};document.addEventListener("pointermove",d),document.addEventListener("pointerup",a,{once:!0})}_wireDocLevelListeners(){}_selectCell(e){if(this._selected){const l=this._cellElement(this._selected.col,this._selected.row);l?.classList.remove("ss-sel"),l?.querySelector(".ss-fill-handle")?.remove()}const t=parseInt(e.dataset.col,10),s=parseInt(e.dataset.row,10);this._selected={col:t,row:s},e.classList.add("ss-sel"),this._updateFormulaBar(e.dataset.ref),this._ensureHandleForRef(e.dataset.ref)}_ensureHandleForRef(e){const t=this._tbody?.querySelector(`.ss-cell[data-ref="${e}"]`);if(!t||t.querySelector(".ss-fill-handle")||t.querySelector(".ss-cell-input")||!this._cells.get(e)?.ast)return;const l=document.createElement("button");l.type="button",l.className="ss-fill-handle",l.title="Recopier (cliquer puis cliquer la cellule cible)",l.setAttribute("aria-label","Poignée de recopie"),t.appendChild(l)}_highlightFormulaRefs(e){if(this._clearRefHighlights(),!e)return;const t=String(e).trim();if(!t.startsWith("="))return;const s=m(t);if(s?.error)return;const l=[];v(s,l,new Map),l.forEach((r,o)=>{const i="ss-ref-hl-"+o%4;r.forEach(({col:d,row:a})=>{this._cellElement(d,a)?.classList.add(i)})})}_clearRefHighlights(){this._tbody&&this._tbody.querySelectorAll(".ss-ref-hl-0, .ss-ref-hl-1, .ss-ref-hl-2, .ss-ref-hl-3").forEach(e=>e.classList.remove("ss-ref-hl-0","ss-ref-hl-1","ss-ref-hl-2","ss-ref-hl-3"))}_repaintNonTargets(){if(this._tbody&&(this._tbody.querySelectorAll(".ss-cell").forEach(e=>{this._cells.get(e.dataset.ref)?.target&&!this._showSolutions||this._paintCell(e)}),this._selected)){const e=_(this._selected.col,this._selected.row);this._ensureHandleForRef(e)}}_cellElement(e,t){return this._tbody?.querySelector(`.ss-cell[data-col="${e}"][data-row="${t}"]`)}_beginEdit(e){const t=e.dataset.ref,s=this._cells.get(t)||{};if(s.locked)return;if(s.target){e.querySelector(".ss-cell-input, .rapido-input")?.focus();return}if(e.querySelector(".ss-cell-input"))return;const l=s.raw??"",n=document.createElement("input");n.type="text",n.className="ss-cell-input",n.value=l,e.textContent="",e.appendChild(n),n.focus(),n.select();const r=o=>{const i=o?n.value:l;if(o&&i!==l){this._pushUndo();let d=this._cells.get(t);d||(d={raw:"",locked:!1},this._cells.set(t,d)),d.raw=i,this._parseIntoCell(d),this._recompute()}this._renderGrid()};n.addEventListener("blur",()=>r(!0)),n.addEventListener("keydown",o=>{o.key==="Enter"?(o.preventDefault(),n.blur()):o.key==="Escape"&&(o.preventDefault(),r(!1))})}_startFill(){this._fillSource={...this._selected};const e=this._cellElement(this._fillSource.col,this._fillSource.row);e?.classList.add("ss-fill-source");const t=()=>{this._tbody.querySelectorAll(".ss-fill-preview").forEach(o=>o.classList.remove("ss-fill-preview"))},s=(o,i)=>{const a=document.elementFromPoint(o,i)?.closest?.(".ss-cell");return a&&this._tbody.contains(a)?a:null},l=(o,i)=>{t();const d=Math.min(this._fillSource.col,o),a=Math.max(this._fillSource.col,o),u=Math.min(this._fillSource.row,i),h=Math.max(this._fillSource.row,i);for(let p=u;p<=h;p++)for(let f=d;f<=a;f++){if(f===this._fillSource.col&&p===this._fillSource.row)continue;this._cellElement(f,p)?.classList.add("ss-fill-preview")}},n=o=>{const i=s(o.clientX,o.clientY);if(!i)return;const d=parseInt(i.dataset.col,10),a=parseInt(i.dataset.row,10);l(d,a)},r=o=>{document.removeEventListener("pointermove",n),t(),e?.classList.remove("ss-fill-source");const i=s(o.clientX,o.clientY);if(!i){this._fillSource=null;return}this._applyFill(i),this._fillSource=null};document.addEventListener("pointermove",n),document.addEventListener("pointerup",r,{once:!0})}_applyFill(e){const t=this._fillSource;if(!t)return;const s=_(t.col,t.row),l=this._cells.get(s);if(!l||!l.ast)return;const n=parseInt(e.dataset.col,10),r=parseInt(e.dataset.row,10),o=Math.min(t.col,n),i=Math.max(t.col,n),d=Math.min(t.row,r),a=Math.max(t.row,r);this._pushUndo();for(let u=d;u<=a;u++)for(let h=o;h<=i;h++){if(h===t.col&&u===t.row)continue;const p=_(h,u);if(this._cells.get(p)?.locked)continue;const b=h-t.col,C=u-t.row,w=M(l.ast,b,C),I=F(w);let g=this._cells.get(p);g||(g={raw:"",locked:!1},this._cells.set(p,g)),g.raw=I,this._parseIntoCell(g)}this._recompute(),this._renderGrid()}_pushUndo(){this._undo.length>=20&&this._undo.shift();const e={};for(const[t,s]of this._cells)e[t]={raw:s.raw,locked:s.locked,target:s.target,sol:s.sol};this._undo.push(e)}_undoLast(){const e=this._undo.pop();if(e){this._cells.clear();for(const[t,s]of Object.entries(e)){const l={raw:s.raw,locked:s.locked};s.target&&(l.target=!0,l.sol=s.sol),this._parseIntoCell(l),this._cells.set(t,l)}this._recompute(),this._renderGrid()}}_targetCells(){const e=[];for(const[t,s]of this._cells)s.target&&e.push(t);return e}_isCorrect(e){const t=this._cells.get(e);if(!t?.sol)return!1;const s=(t.raw||"").trim();if(s==="")return!1;const l=m(t.sol.formula);if(t.sol.mode==="value"){const r=m(s.startsWith("=")?s:"="+s);if(r.error)return!1;const o=this._evaluateInContext(r),i=this._evaluateInContext(l);return typeof o=="number"&&typeof i=="number"&&Math.abs(o-i)<1e-9}const n=m(s);if(n.error)return!1;if(E(n,l))return!0;for(const r of t.sol.alt||[]){const o=m(r);if(!o.error&&E(n,o))return!0}return!1}_evaluateInContext(e){if(!e||e.error)return null;const s=y(e,{getCell:(l,n)=>{const r=_(l,n);this._values.has(r)||this._evaluateCell(r,new Set);const o=this._values.get(r);return o&&typeof o=="object"&&o.error?NaN:o===void 0?"":o}});return s&&typeof s=="object"&&s.error?null:s}_updatePhase(){const e=this._targetCells();if(e.length===0){this._currentPhase="cellule_vide";return}let t=!0,s=!1,l=!1,n=!1;for(const r of e){const i=(this._cells.get(r)?.raw||"").trim();if(i===""){t=!1;continue}if(s=!0,m(i).error){n=!0,t=!1;continue}const a=this._values.get(r);a&&typeof a=="object"&&a.error&&(l=!0),this._isCorrect(r)||(t=!1)}t?this._currentPhase="done":n?this._currentPhase="formule_invalide":s?l?this._currentPhase="formule_invalide":this._currentPhase="erreur_calcul":this._currentPhase="cellule_vide"}_observeTargetInput(e,t){if(e._ssObserved)return;e._ssObserved=!0;const s=this.closest(".q-card");if(!s)return;const l=T(()=>{s.querySelector(".am-indice-panel.open")&&s.dispatchEvent(new CustomEvent("zefor-indice-auto-refresh",{detail:{studentValue:e.value,formula:e.value,phase:this.getCurrentPhase(),targetCell:t,source:this},bubbles:!0}))},300);e.addEventListener("input",l),new MutationObserver(()=>{e.classList.contains("incorrect")&&s.dispatchEvent(new CustomEvent("zefor-indice-auto-pop",{detail:{studentValue:e.value,formula:e.value,phase:this.getCurrentPhase(),targetCell:t,source:this},bubbles:!0}))}).observe(e,{attributes:!0,attributeFilter:["class"]})}}function v(c,e,t){if(!(!c||typeof c!="object"||c.error)){if(c.type==="ref"){const s="r:"+c.col+":"+c.row;t.has(s)||(t.set(s,e.length),e.push([{col:c.col,row:c.row}]));return}if(c.type==="range"){const s=c.a,l=c.b,n=Math.min(s.col,l.col),r=Math.max(s.col,l.col),o=Math.min(s.row,l.row),i=Math.max(s.row,l.row),d="g:"+n+":"+o+":"+r+":"+i;if(!t.has(d)){t.set(d,e.length);const a=[];for(let u=o;u<=i;u++)for(let h=n;h<=r;h++)a.push({col:h,row:u});e.push(a)}return}switch(c.type){case"unary":v(c.arg,e,t);break;case"binop":v(c.left,e,t),v(c.right,e,t);break;case"fn":c.args.forEach(s=>v(s,e,t));break}}}class S extends Error{constructor(e="#CYCLE!"){super(e),this.code=e}}function T(c,e){let t=null;return(...s)=>{t&&clearTimeout(t),t=setTimeout(()=>c(...s),e)}}customElements.get("math974-spreadsheet")||customElements.define("math974-spreadsheet",D);export{Y as autoScale,U as defaultPosition};
