const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/rapido-engine.DVbYT9aF.js","_astro/rapidos-visuals-integration.CmlPdEtC.js","_astro/editor.CJZspgfY.js"])))=>i.map(i=>d[i]);
import{_ as I}from"./editor.CJZspgfY.js";import{ensureSharedStyles as A}from"./vis-input.CoB4Sc5Y.js";import{parseFormula as _,evaluate as b,idxToCol as E,formatValue as P,shiftRefs as N,stringify as q,astEqual as w}from"./formula-parser.CuBpGvtX.js";import"./rapido-engine.DVbYT9aF.js";import"./rapidos-visuals-integration.CmlPdEtC.js";const T="content",V=!1,x="math974-spreadsheet-css",R=`
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
  right: -4px; bottom: -4px;
  width: 24px; height: 24px;
  display: flex; align-items: flex-end; justify-content: flex-end;
  cursor: crosshair;
  z-index: 2;
  touch-action: none;
}
.ss-fill-handle::after {
  content: '';
  width: 10px; height: 10px;
  background: var(--ss-sel);
  border: 2px solid #fff;
  border-radius: 2px;
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
`;function M(){if(document.getElementById(x))return;const u=document.createElement("style");u.id=x,u.textContent=R,document.head.appendChild(u)}function v(u,e){if(!u)return e;try{return JSON.parse(u)}catch{return e}}function m(u,e){return E(u)+(e+1)}class F extends HTMLElement{static get observedAttributes(){return["rows","cols","cells","locked","solutions","headers"]}constructor(){super(),this._cells=new Map,this._values=new Map,this._selected=null,this._undo=[],this._activeInput=null,this._currentPhase="cellule_vide"}connectedCallback(){M(),A(),this._render(),this._wireDocLevelListeners()}attributeChangedCallback(){this.isConnected&&this._render()}validate(){const e=this._targetCells();return e.length===0?!1:e.every(t=>this._isCorrect(t))}toggleSolution(){this._showSolutions=!this._showSolutions,this._renderGrid()}getCurrentPhase(){return this._currentPhase}getCurrentStudentValue(){if(this._activeInput){const e=this._activeInput.dataset.ssRef,t=this._cells.get(e);return t?.raw?t.raw:this._activeInput.value||""}for(const e of this._targetCells()){const t=this._cells.get(e);if(t?.raw&&!this._isCorrect(e))return t.raw}return""}_validateCell(e){const t=e.dataset.ssRef;return t?this._isCorrect(t):!1}_readFormula(e){const t=e.dataset.ssRef;return t&&this._cells.get(t)?.raw||""}_readAttrs(){this._rows=Math.max(1,parseInt(this.getAttribute("rows")||"6",10)),this._cols=Math.max(1,parseInt(this.getAttribute("cols")||"5",10));const e=v(this.getAttribute("cells"),{}),t=new Set(v(this.getAttribute("locked"),[])),s=v(this.getAttribute("solutions"),{}),o=v(this.getAttribute("headers"),null);this._cells.clear();for(const[r,l]of Object.entries(e)){const i={raw:l==null?"":String(l),locked:t.has(r)};this._parseIntoCell(i),this._cells.set(r,i)}for(const r of t)this._cells.has(r)||this._cells.set(r,{raw:"",locked:!0});for(const[r,l]of Object.entries(s)){let n=this._cells.get(r);n||(n={raw:"",locked:!1},this._cells.set(r,n)),n.target=!0,n.sol={formula:l.formula||l,mode:l.mode||"formula",alt:Array.isArray(l.alt)?l.alt:[]}}this._headers=o}_parseIntoCell(e){delete e.ast,delete e.parseError;const t=e.raw;if(typeof t=="string"&&t.trim().startsWith("=")){const s=_(t);s.error?e.parseError=s.error:e.ast=s}}_getCellValue(e,t){const s=m(e,t);this._values.has(s)||this._evaluateCell(s,new Set);const o=this._values.get(s);return o&&typeof o=="object"&&o.error?NaN:o}_evaluateCell(e,t){const s=this._cells.get(e);if(!s){this._values.set(e,"");return}if(s.ast){if(t.has(e)){this._values.set(e,{error:"#CYCLE!"});return}t.add(e);const o={getCell:(r,l)=>{const n=m(r,l);if(t.has(n))throw new C;this._values.has(n)||this._evaluateCell(n,t);const i=this._values.get(n);if(i&&typeof i=="object"&&i.error)throw new C(i.error);return i===void 0?"":i}};try{const r=b(s.ast,o);this._values.set(e,r)}catch(r){this._values.set(e,{error:r.code||"#CYCLE!"})}t.delete(e)}else{const o=s.raw;if(o===""||o==null){this._values.set(e,"");return}const r=parseFloat(String(o).replace(",","."));!isNaN(r)&&String(r)===String(o).replace(",",".").replace(/^\+/,"")?this._values.set(e,r):!isNaN(r)&&/^-?\d+([.,]\d+)?$/.test(String(o).trim())?this._values.set(e,r):this._values.set(e,String(o))}}_recompute(){this._values.clear();for(const e of this._cells.keys())this._values.has(e)||this._evaluateCell(e,new Set)}_render(){this._readAttrs(),this.innerHTML="",this._recompute(),this._buildDom(),this._updatePhase(),I(()=>import("./rapido-engine.DVbYT9aF.js").then(e=>e.f),__vite__mapDeps([0,1,2])).then(e=>e.wireCardInputs?.(this.closest(".q-card")))}_buildDom(){const e=document.createElement("div");e.className="ss-wrap";const t=document.createElement("div");t.className="ss-toolbar";const s=document.createElement("span");s.className="ss-cell-label",s.textContent="—",t.appendChild(s);const o=document.createElement("div");o.className="ss-formula-bar",o.textContent="",t.appendChild(o);const r=document.createElement("button");r.type="button",r.textContent="↺",r.title="Annuler",r.addEventListener("click",()=>this._undoLast()),t.appendChild(r),e.appendChild(t);const l=document.createElement("table");l.className="ss-grid";const n=document.createElement("thead"),i=document.createElement("tr");i.appendChild(document.createElement("th"));for(let a=0;a<this._cols;a++){const d=document.createElement("th");d.textContent=this._headers?.col?.[a]??E(a),i.appendChild(d)}n.appendChild(i),l.appendChild(n);const c=document.createElement("tbody");for(let a=0;a<this._rows;a++){const d=document.createElement("tr"),h=document.createElement("th");h.textContent=this._headers?.row?.[a]??String(a+1),d.appendChild(h);for(let f=0;f<this._cols;f++){const p=document.createElement("td");p.className="ss-cell",p.dataset.col=String(f),p.dataset.row=String(a),p.dataset.ref=m(f,a),this._paintCell(p),d.appendChild(p)}c.appendChild(d)}l.appendChild(c),e.appendChild(l),this.appendChild(e),this._tbody=c,this._fxBar=o,this._cellLabel=s,this._wireGridEvents(c)}_renderGrid(){this._tbody&&(this._recompute(),this._tbody.querySelectorAll(".ss-cell").forEach(e=>this._paintCell(e)),this._updatePhase())}_paintCell(e){const t=e.dataset.ref,s=this._cells.get(t);if(e.classList.remove("ss-locked","ss-target","ss-text","ss-num","ss-error"),e.removeAttribute("data-solution"),e.removeAttribute("data-solution-type"),e.querySelector(".ss-cell-input"))return;let r="";if(s){s.locked&&e.classList.add("ss-locked"),s.target&&e.classList.add("ss-target");const l=this._values.get(t);l&&typeof l=="object"&&l.error?(r=l.error,e.classList.add("ss-error")):typeof l=="number"?(r=P(l),e.classList.add("ss-num")):l!=null&&(r=String(l),e.classList.add("ss-text")),this._showSolutions&&s.target&&s.sol&&(r=s.sol.formula)}if(s&&s.target&&!this._showSolutions){this._isCorrect(t);const l=document.createElement("input");l.type="text",l.className="rapido-input ss-target-input",l.dataset.solutionType="spreadsheet-formula",l.dataset.ssRef=t,l.dataset.solution=s.sol.formula,l.placeholder="= …",l.value=s.raw||"",e.textContent="",e.appendChild(l),l.addEventListener("focus",()=>{e.classList.add("ss-sel"),this._activeInput=l,this._updateFormulaBar(t)}),l.addEventListener("blur",()=>{e.classList.remove("ss-sel");const n=l.value;n!==s.raw&&(this._pushUndo(),s.raw=n,this._parseIntoCell(s),this._recompute(),this._renderGrid(),this._updatePhase())}),l.addEventListener("keydown",n=>{n.key==="Enter"?(n.preventDefault(),l.blur()):n.key==="Escape"&&(l.value=s.raw||"",l.blur())}),this._observeTargetInput(l,t);return}e.textContent=r}_updateFormulaBar(e){const t=this._cells.get(e);this._cellLabel&&(this._cellLabel.textContent=e||"—"),this._fxBar&&(this._fxBar.textContent=t?.raw??"")}_wireGridEvents(e){e.addEventListener("click",t=>{const s=t.target.closest(".ss-cell");s&&(t.target.classList?.contains("ss-cell-input")||this._selectCell(s))}),e.addEventListener("dblclick",t=>{const s=t.target.closest(".ss-cell");s&&this._beginEdit(s)}),e.addEventListener("keydown",t=>{if(t.key==="Enter"&&this._selected){const s=this._cellElement(this._selected.col,this._selected.row);s&&!s.querySelector(".ss-cell-input")&&(t.preventDefault(),this._beginEdit(s))}}),e.addEventListener("pointerdown",t=>{t.target.closest(".ss-fill-handle")&&this._selected&&(t.preventDefault(),this._startFill())})}_wireDocLevelListeners(){}_selectCell(e){if(this._selected){const o=this._cellElement(this._selected.col,this._selected.row);o?.classList.remove("ss-sel"),o?.querySelector(".ss-fill-handle")?.remove()}const t=parseInt(e.dataset.col,10),s=parseInt(e.dataset.row,10);if(this._selected={col:t,row:s},e.classList.add("ss-sel"),this._updateFormulaBar(e.dataset.ref),!e.querySelector(".ss-cell-input")&&this._cells.get(e.dataset.ref)?.ast){const r=document.createElement("div");r.className="ss-fill-handle",r.title="Recopier (cliquer puis cliquer la cellule cible)",e.appendChild(r)}}_cellElement(e,t){return this._tbody?.querySelector(`.ss-cell[data-col="${e}"][data-row="${t}"]`)}_beginEdit(e){const t=e.dataset.ref,s=this._cells.get(t)||{};if(s.locked)return;if(s.target){e.querySelector(".ss-cell-input, .rapido-input")?.focus();return}if(e.querySelector(".ss-cell-input"))return;const o=s.raw??"",r=document.createElement("input");r.type="text",r.className="ss-cell-input",r.value=o,e.textContent="",e.appendChild(r),r.focus(),r.select();const l=n=>{const i=n?r.value:o;if(n&&i!==o){this._pushUndo();let c=this._cells.get(t);c||(c={raw:"",locked:!1},this._cells.set(t,c)),c.raw=i,this._parseIntoCell(c),this._recompute()}this._renderGrid()};r.addEventListener("blur",()=>l(!0)),r.addEventListener("keydown",n=>{n.key==="Enter"?(n.preventDefault(),r.blur()):n.key==="Escape"&&(n.preventDefault(),l(!1))})}_startFill(){this._fillSource={...this._selected};const e=s=>{const o=s.target instanceof Element?s.target.closest(".ss-cell"):null;this._tbody.querySelectorAll(".ss-fill-preview").forEach(r=>r.classList.remove("ss-fill-preview")),o&&o.classList.add("ss-fill-preview")},t=s=>{document.removeEventListener("pointermove",e),document.removeEventListener("pointerup",t),this._tbody.querySelectorAll(".ss-fill-preview").forEach(r=>r.classList.remove("ss-fill-preview"));const o=s.target instanceof Element?s.target.closest(".ss-cell"):null;if(!o){this._fillSource=null;return}this._applyFill(o),this._fillSource=null};document.addEventListener("pointermove",e),document.addEventListener("pointerup",t,{once:!0})}_applyFill(e){const t=this._fillSource;if(!t)return;const s=m(t.col,t.row),o=this._cells.get(s);if(!o||!o.ast)return;const r=parseInt(e.dataset.col,10),l=parseInt(e.dataset.row,10),n=Math.min(t.col,r),i=Math.max(t.col,r),c=Math.min(t.row,l),a=Math.max(t.row,l);this._pushUndo();for(let d=c;d<=a;d++)for(let h=n;h<=i;h++){if(h===t.col&&d===t.row)continue;const f=m(h,d);if(this._cells.get(f)?.locked)continue;const y=h-t.col,L=d-t.row,k=N(o.ast,y,L),S=q(k);let g=this._cells.get(f);g||(g={raw:"",locked:!1},this._cells.set(f,g)),g.raw=S,this._parseIntoCell(g)}this._recompute(),this._renderGrid()}_pushUndo(){this._undo.length>=20&&this._undo.shift();const e={};for(const[t,s]of this._cells)e[t]={raw:s.raw,locked:s.locked,target:s.target,sol:s.sol};this._undo.push(e)}_undoLast(){const e=this._undo.pop();if(e){this._cells.clear();for(const[t,s]of Object.entries(e)){const o={raw:s.raw,locked:s.locked};s.target&&(o.target=!0,o.sol=s.sol),this._parseIntoCell(o),this._cells.set(t,o)}this._recompute(),this._renderGrid()}}_targetCells(){const e=[];for(const[t,s]of this._cells)s.target&&e.push(t);return e}_isCorrect(e){const t=this._cells.get(e);if(!t?.sol)return!1;const s=(t.raw||"").trim();if(s==="")return!1;const o=_(t.sol.formula);if(t.sol.mode==="value"){const l=_(s.startsWith("=")?s:"="+s);if(l.error)return!1;const n=this._evaluateInContext(l),i=this._evaluateInContext(o);return typeof n=="number"&&typeof i=="number"&&Math.abs(n-i)<1e-9}const r=_(s);if(r.error)return!1;if(w(r,o))return!0;for(const l of t.sol.alt||[]){const n=_(l);if(!n.error&&w(r,n))return!0}return!1}_evaluateInContext(e){if(!e||e.error)return null;const s=b(e,{getCell:(o,r)=>{const l=m(o,r);this._values.has(l)||this._evaluateCell(l,new Set);const n=this._values.get(l);return n&&typeof n=="object"&&n.error?NaN:n===void 0?"":n}});return s&&typeof s=="object"&&s.error?null:s}_updatePhase(){const e=this._targetCells();if(e.length===0){this._currentPhase="cellule_vide";return}let t=!0,s=!1,o=!1,r=!1;for(const l of e){const i=(this._cells.get(l)?.raw||"").trim();if(i===""){t=!1;continue}if(s=!0,_(i).error){r=!0,t=!1;continue}const a=this._values.get(l);a&&typeof a=="object"&&a.error&&(o=!0),this._isCorrect(l)||(t=!1)}t?this._currentPhase="done":r?this._currentPhase="formule_invalide":s?o?this._currentPhase="formule_invalide":this._currentPhase="erreur_calcul":this._currentPhase="cellule_vide"}_observeTargetInput(e,t){if(e._ssObserved)return;e._ssObserved=!0;const s=this.closest(".q-card");if(!s)return;const o=D(()=>{s.querySelector(".am-indice-panel.open")&&s.dispatchEvent(new CustomEvent("zefor-indice-auto-refresh",{detail:{studentValue:e.value,formula:e.value,phase:this.getCurrentPhase(),targetCell:t,source:this},bubbles:!0}))},300);e.addEventListener("input",o),new MutationObserver(()=>{e.classList.contains("incorrect")&&s.dispatchEvent(new CustomEvent("zefor-indice-auto-pop",{detail:{studentValue:e.value,formula:e.value,phase:this.getCurrentPhase(),targetCell:t,source:this},bubbles:!0}))}).observe(e,{attributes:!0,attributeFilter:["class"]})}}class C extends Error{constructor(e="#CYCLE!"){super(e),this.code=e}}function D(u,e){let t=null;return(...s)=>{t&&clearTimeout(t),t=setTimeout(()=>u(...s),e)}}customElements.get("math974-spreadsheet")||customElements.define("math974-spreadsheet",F);export{V as autoScale,T as defaultPosition};
