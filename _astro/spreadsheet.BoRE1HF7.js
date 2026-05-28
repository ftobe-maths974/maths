const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/rapido-engine.CE-UaIAM.js","_astro/rapidos-visuals-integration.Cqgd_Pj1.js","_astro/editor.CJZspgfY.js"])))=>i.map(i=>d[i]);
import{_ as R}from"./editor.CJZspgfY.js";import{ensureSharedStyles as A}from"./vis-input.TqqxI7q9.js";import{parseFormula as _,evaluate as x,idxToCol as S,formatValue as M,shiftRefs as F,stringify as P,astEqual as C}from"./formula-parser.CuBpGvtX.js";import"./rapido-engine.CE-UaIAM.js";import"./rapidos-visuals-integration.Cqgd_Pj1.js";const U="content",V=!1,y="math974-spreadsheet-css",q=`
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
`;function N(){if(document.getElementById(y))return;const a=document.createElement("style");a.id=y,a.textContent=q,document.head.appendChild(a)}function v(a,e){if(!a)return e;try{return JSON.parse(a)}catch{return e}}function m(a,e){return S(a)+(e+1)}function O(a){return(a||"").trim()}class T extends HTMLElement{static get observedAttributes(){return["rows","cols","cells","locked","solutions","headers"]}constructor(){super(),this._cells=new Map,this._values=new Map,this._selected=null,this._undo=[],this._activeInput=null,this._currentPhase="cellule_vide"}connectedCallback(){N(),A(),this._render(),this._wireDocLevelListeners()}attributeChangedCallback(){this.isConnected&&this._render()}validate(){const e=this._targetCells();return e.length===0?!1:e.every(t=>this._isCorrect(t))}toggleSolution(){this._showSolutions=!this._showSolutions,this._renderGrid()}getCurrentPhase(){return this._currentPhase}getCurrentStudentValue(){if(this._activeInput){const e=this._activeInput.dataset.ssRef,t=this._cells.get(e);return t?.raw?t.raw:this._activeInput.value||""}for(const e of this._targetCells()){const t=this._cells.get(e);if(t?.raw&&!this._isCorrect(e))return t.raw}return""}_validateCell(e){const t=e.dataset.ssRef;return t?this._isCorrect(t):!1}_readFormula(e){const t=e.dataset.ssRef;return t&&this._cells.get(t)?.raw||""}_readAttrs(){this._rows=Math.max(1,parseInt(this.getAttribute("rows")||"6",10)),this._cols=Math.max(1,parseInt(this.getAttribute("cols")||"5",10));const e=v(this.getAttribute("cells"),{}),t=new Set(v(this.getAttribute("locked"),[])),s=v(this.getAttribute("solutions"),{}),o=v(this.getAttribute("headers"),null);this._cells.clear();for(const[i,l]of Object.entries(e)){const n={raw:l==null?"":String(l),locked:t.has(i)};this._parseIntoCell(n),this._cells.set(i,n)}for(const i of t)this._cells.has(i)||this._cells.set(i,{raw:"",locked:!0});for(const[i,l]of Object.entries(s)){let r=this._cells.get(i);r||(r={raw:"",locked:!1},this._cells.set(i,r)),r.target=!0,r.sol={formula:l.formula||l,mode:l.mode||"formula",alt:Array.isArray(l.alt)?l.alt:[],fillOnly:!!l.fillOnly}}this._headers=o}_parseIntoCell(e){delete e.ast,delete e.parseError;const t=e.raw;if(typeof t=="string"&&t.trim().startsWith("=")){const s=_(t);s.error?e.parseError=s.error:e.ast=s}}_getCellValue(e,t){const s=m(e,t);this._values.has(s)||this._evaluateCell(s,new Set);const o=this._values.get(s);return o&&typeof o=="object"&&o.error?NaN:o}_evaluateCell(e,t){const s=this._cells.get(e);if(!s){this._values.set(e,"");return}if(s.ast){if(t.has(e)){this._values.set(e,{error:"#CYCLE!"});return}t.add(e);const o={getCell:(i,l)=>{const r=m(i,l);if(t.has(r))throw new E;this._values.has(r)||this._evaluateCell(r,t);const n=this._values.get(r);if(n&&typeof n=="object"&&n.error)throw new E(n.error);return n===void 0?"":n}};try{const i=x(s.ast,o);this._values.set(e,i)}catch(i){this._values.set(e,{error:i.code||"#CYCLE!"})}t.delete(e)}else{const o=s.raw;if(o===""||o==null){this._values.set(e,"");return}const i=parseFloat(String(o).replace(",","."));!isNaN(i)&&String(i)===String(o).replace(",",".").replace(/^\+/,"")?this._values.set(e,i):!isNaN(i)&&/^-?\d+([.,]\d+)?$/.test(String(o).trim())?this._values.set(e,i):this._values.set(e,String(o))}}_recompute(){this._values.clear();for(const e of this._cells.keys())this._values.has(e)||this._evaluateCell(e,new Set)}_render(){this._readAttrs(),this.innerHTML="",this._recompute(),this._buildDom(),this._updatePhase(),R(()=>import("./rapido-engine.CE-UaIAM.js").then(e=>e.f),__vite__mapDeps([0,1,2])).then(e=>e.wireCardInputs?.(this.closest(".q-card")))}_buildDom(){const e=document.createElement("div");e.className="ss-wrap";const t=document.createElement("div");t.className="ss-toolbar";const s=document.createElement("span");s.className="ss-cell-label",s.textContent="—",t.appendChild(s);const o=document.createElement("div");o.className="ss-formula-bar",o.textContent="",t.appendChild(o);const i=document.createElement("button");i.type="button",i.textContent="↺",i.title="Annuler",i.addEventListener("click",()=>this._undoLast()),t.appendChild(i),e.appendChild(t);const l=document.createElement("table");l.className="ss-grid";const r=document.createElement("thead"),n=document.createElement("tr");n.appendChild(document.createElement("th"));for(let c=0;c<this._cols;c++){const d=document.createElement("th");d.textContent=this._headers?.col?.[c]??S(c),n.appendChild(d)}r.appendChild(n),l.appendChild(r);const u=document.createElement("tbody");for(let c=0;c<this._rows;c++){const d=document.createElement("tr"),h=document.createElement("th");h.textContent=this._headers?.row?.[c]??String(c+1),d.appendChild(h);for(let f=0;f<this._cols;f++){const p=document.createElement("td");p.className="ss-cell",p.dataset.col=String(f),p.dataset.row=String(c),p.dataset.ref=m(f,c),this._paintCell(p),d.appendChild(p)}u.appendChild(d)}l.appendChild(u),e.appendChild(l),this.appendChild(e),this._tbody=u,this._fxBar=o,this._cellLabel=s,this._wireGridEvents(u)}_renderGrid(){this._tbody&&(this._recompute(),this._tbody.querySelectorAll(".ss-cell").forEach(e=>this._paintCell(e)),this._updatePhase())}_paintCell(e){const t=e.dataset.ref,s=this._cells.get(t);if(s&&s.target&&!this._showSolutions){let l=e.querySelector(".ss-target-input");if(!l)e.classList.add("ss-target"),s.sol.fillOnly&&e.classList.add("ss-fill-only"),l=document.createElement("input"),l.type="text",l.className="rapido-input ss-target-input",l.dataset.solutionType="spreadsheet-formula",l.dataset.ssRef=t,l.dataset.solution=s.sol.formula,l.placeholder=s.sol.fillOnly?"":"…",l.value=s.raw||"",s.sol.fillOnly&&(l.readOnly=!0,l.title="Recopie depuis la cellule du dessus (drag-fill)"),e.textContent="",e.appendChild(l),l.addEventListener("focus",()=>{e.classList.add("ss-sel"),this._activeInput=l,this._updateFormulaBar(t),this._ensureHandleForRef(t),this._highlightFormulaRefs(l.value)}),l.addEventListener("input",()=>{this._highlightFormulaRefs(l.value),this._updateFormulaBar(t,l.value)}),l.addEventListener("blur",()=>{this._clearRefHighlights();const r=O(l.value);r!==s.raw&&(this._pushUndo(),s.raw=r,this._parseIntoCell(s),this._recompute(),this._repaintNonTargets(),this._updatePhase())}),l.addEventListener("keydown",r=>{r.key==="Enter"?(r.preventDefault(),l.blur()):r.key==="Escape"&&(l.value=s.raw||"",l.blur())}),this._observeTargetInput(l,t);else{const r=s.raw||"";document.activeElement!==l&&l.value!==r&&(l.value=r),e.classList.add("ss-target")}return}if(e.classList.remove("ss-locked","ss-target","ss-text","ss-num","ss-error"),e.querySelector(".ss-cell-input"))return;let i="";if(s){s.locked&&e.classList.add("ss-locked");const l=this._values.get(t);l&&typeof l=="object"&&l.error?(i=l.error,e.classList.add("ss-error")):typeof l=="number"?(i=M(l),e.classList.add("ss-num")):l!=null&&(i=String(l),e.classList.add("ss-text"))}e.textContent=i}_updateFormulaBar(e,t){const s=this._cells.get(e);this._cellLabel&&(this._cellLabel.textContent=e||"—"),this._fxBar&&(this._fxBar.textContent=t??s?.raw??"")}_wireGridEvents(e){e.addEventListener("click",t=>{const s=t.target.closest(".ss-cell");s&&(t.target.classList?.contains("ss-cell-input")||this._selectCell(s))}),e.addEventListener("dblclick",t=>{const s=t.target.closest(".ss-cell");s&&this._beginEdit(s)}),e.addEventListener("keydown",t=>{if(t.key==="Enter"&&this._selected){const s=this._cellElement(this._selected.col,this._selected.row);s&&!s.querySelector(".ss-cell-input")&&(t.preventDefault(),this._beginEdit(s))}}),e.addEventListener("pointerdown",t=>{t.target.closest(".ss-fill-handle")&&this._selected&&(t.preventDefault(),this._startFill())})}_wireDocLevelListeners(){}_selectCell(e){if(this._selected){const o=this._cellElement(this._selected.col,this._selected.row);o?.classList.remove("ss-sel"),o?.querySelector(".ss-fill-handle")?.remove()}const t=parseInt(e.dataset.col,10),s=parseInt(e.dataset.row,10);this._selected={col:t,row:s},e.classList.add("ss-sel"),this._updateFormulaBar(e.dataset.ref),this._ensureHandleForRef(e.dataset.ref)}_ensureHandleForRef(e){const t=this._tbody?.querySelector(`.ss-cell[data-ref="${e}"]`);if(!t||t.querySelector(".ss-fill-handle")||t.querySelector(".ss-cell-input")||!this._cells.get(e)?.ast)return;const o=document.createElement("button");o.type="button",o.className="ss-fill-handle",o.title="Recopier (cliquer puis cliquer la cellule cible)",o.setAttribute("aria-label","Poignée de recopie"),t.appendChild(o)}_highlightFormulaRefs(e){if(this._clearRefHighlights(),!e)return;const t=String(e).trim();if(!t.startsWith("="))return;const s=_(t);if(s?.error)return;const o=[];b(s,o,new Map),o.forEach((l,r)=>{const n="ss-ref-hl-"+r%4;l.forEach(({col:u,row:c})=>{this._cellElement(u,c)?.classList.add(n)})})}_clearRefHighlights(){this._tbody&&this._tbody.querySelectorAll(".ss-ref-hl-0, .ss-ref-hl-1, .ss-ref-hl-2, .ss-ref-hl-3").forEach(e=>e.classList.remove("ss-ref-hl-0","ss-ref-hl-1","ss-ref-hl-2","ss-ref-hl-3"))}_repaintNonTargets(){if(this._tbody&&(this._tbody.querySelectorAll(".ss-cell").forEach(e=>{this._cells.get(e.dataset.ref)?.target&&!this._showSolutions||this._paintCell(e)}),this._selected)){const e=m(this._selected.col,this._selected.row);this._ensureHandleForRef(e)}}_cellElement(e,t){return this._tbody?.querySelector(`.ss-cell[data-col="${e}"][data-row="${t}"]`)}_beginEdit(e){const t=e.dataset.ref,s=this._cells.get(t)||{};if(s.locked)return;if(s.target){e.querySelector(".ss-cell-input, .rapido-input")?.focus();return}if(e.querySelector(".ss-cell-input"))return;const o=s.raw??"",i=document.createElement("input");i.type="text",i.className="ss-cell-input",i.value=o,e.textContent="",e.appendChild(i),i.focus(),i.select();const l=r=>{const n=r?i.value:o;if(r&&n!==o){this._pushUndo();let u=this._cells.get(t);u||(u={raw:"",locked:!1},this._cells.set(t,u)),u.raw=n,this._parseIntoCell(u),this._recompute()}this._renderGrid()};i.addEventListener("blur",()=>l(!0)),i.addEventListener("keydown",r=>{r.key==="Enter"?(r.preventDefault(),i.blur()):r.key==="Escape"&&(r.preventDefault(),l(!1))})}_startFill(){this._fillSource={...this._selected};const e=this._cellElement(this._fillSource.col,this._fillSource.row);e?.classList.add("ss-fill-source");const t=()=>{this._tbody.querySelectorAll(".ss-fill-preview").forEach(r=>r.classList.remove("ss-fill-preview"))},s=(r,n)=>{const c=document.elementFromPoint(r,n)?.closest?.(".ss-cell");return c&&this._tbody.contains(c)?c:null},o=(r,n)=>{t();const u=Math.min(this._fillSource.col,r),c=Math.max(this._fillSource.col,r),d=Math.min(this._fillSource.row,n),h=Math.max(this._fillSource.row,n);for(let f=d;f<=h;f++)for(let p=u;p<=c;p++){if(p===this._fillSource.col&&f===this._fillSource.row)continue;this._cellElement(p,f)?.classList.add("ss-fill-preview")}},i=r=>{const n=s(r.clientX,r.clientY);if(!n)return;const u=parseInt(n.dataset.col,10),c=parseInt(n.dataset.row,10);o(u,c)},l=r=>{document.removeEventListener("pointermove",i),t(),e?.classList.remove("ss-fill-source");const n=s(r.clientX,r.clientY);if(!n){this._fillSource=null;return}this._applyFill(n),this._fillSource=null};document.addEventListener("pointermove",i),document.addEventListener("pointerup",l,{once:!0})}_applyFill(e){const t=this._fillSource;if(!t)return;const s=m(t.col,t.row),o=this._cells.get(s);if(!o||!o.ast)return;const i=parseInt(e.dataset.col,10),l=parseInt(e.dataset.row,10),r=Math.min(t.col,i),n=Math.max(t.col,i),u=Math.min(t.row,l),c=Math.max(t.row,l);this._pushUndo();for(let d=u;d<=c;d++)for(let h=r;h<=n;h++){if(h===t.col&&d===t.row)continue;const f=m(h,d);if(this._cells.get(f)?.locked)continue;const w=h-t.col,k=d-t.row,L=F(o.ast,w,k),I=P(L);let g=this._cells.get(f);g||(g={raw:"",locked:!1},this._cells.set(f,g)),g.raw=I,this._parseIntoCell(g)}this._recompute(),this._renderGrid()}_pushUndo(){this._undo.length>=20&&this._undo.shift();const e={};for(const[t,s]of this._cells)e[t]={raw:s.raw,locked:s.locked,target:s.target,sol:s.sol};this._undo.push(e)}_undoLast(){const e=this._undo.pop();if(e){this._cells.clear();for(const[t,s]of Object.entries(e)){const o={raw:s.raw,locked:s.locked};s.target&&(o.target=!0,o.sol=s.sol),this._parseIntoCell(o),this._cells.set(t,o)}this._recompute(),this._renderGrid()}}_targetCells(){const e=[];for(const[t,s]of this._cells)s.target&&e.push(t);return e}_isCorrect(e){const t=this._cells.get(e);if(!t?.sol)return!1;const s=(t.raw||"").trim();if(s==="")return!1;const o=_(t.sol.formula);if(t.sol.mode==="value"){const l=_(s.startsWith("=")?s:"="+s);if(l.error)return!1;const r=this._evaluateInContext(l),n=this._evaluateInContext(o);return typeof r=="number"&&typeof n=="number"&&Math.abs(r-n)<1e-9}const i=_(s);if(i.error)return!1;if(C(i,o))return!0;for(const l of t.sol.alt||[]){const r=_(l);if(!r.error&&C(i,r))return!0}return!1}_evaluateInContext(e){if(!e||e.error)return null;const s=x(e,{getCell:(o,i)=>{const l=m(o,i);this._values.has(l)||this._evaluateCell(l,new Set);const r=this._values.get(l);return r&&typeof r=="object"&&r.error?NaN:r===void 0?"":r}});return s&&typeof s=="object"&&s.error?null:s}_updatePhase(){const e=this._targetCells();if(e.length===0){this._currentPhase="cellule_vide";return}let t=!0,s=!1,o=!1,i=!1;for(const l of e){const n=(this._cells.get(l)?.raw||"").trim();if(n===""){t=!1;continue}if(s=!0,_(n).error){i=!0,t=!1;continue}const c=this._values.get(l);c&&typeof c=="object"&&c.error&&(o=!0),this._isCorrect(l)||(t=!1)}t?this._currentPhase="done":i?this._currentPhase="formule_invalide":s?o?this._currentPhase="formule_invalide":this._currentPhase="erreur_calcul":this._currentPhase="cellule_vide"}_observeTargetInput(e,t){if(e._ssObserved)return;e._ssObserved=!0;const s=this.closest(".q-card");if(!s)return;const o=j(()=>{s.querySelector(".am-indice-panel.open")&&s.dispatchEvent(new CustomEvent("zefor-indice-auto-refresh",{detail:{studentValue:e.value,formula:e.value,phase:this.getCurrentPhase(),targetCell:t,source:this},bubbles:!0}))},300);e.addEventListener("input",o),new MutationObserver(()=>{e.classList.contains("incorrect")&&s.dispatchEvent(new CustomEvent("zefor-indice-auto-pop",{detail:{studentValue:e.value,formula:e.value,phase:this.getCurrentPhase(),targetCell:t,source:this},bubbles:!0}))}).observe(e,{attributes:!0,attributeFilter:["class"]})}}function b(a,e,t){if(!(!a||typeof a!="object"||a.error)){if(a.type==="ref"){const s="r:"+a.col+":"+a.row;t.has(s)||(t.set(s,e.length),e.push([{col:a.col,row:a.row}]));return}if(a.type==="range"){const s=a.a,o=a.b,i=Math.min(s.col,o.col),l=Math.max(s.col,o.col),r=Math.min(s.row,o.row),n=Math.max(s.row,o.row),u="g:"+i+":"+r+":"+l+":"+n;if(!t.has(u)){t.set(u,e.length);const c=[];for(let d=r;d<=n;d++)for(let h=i;h<=l;h++)c.push({col:h,row:d});e.push(c)}return}switch(a.type){case"unary":b(a.arg,e,t);break;case"binop":b(a.left,e,t),b(a.right,e,t);break;case"fn":a.args.forEach(s=>b(s,e,t));break}}}class E extends Error{constructor(e="#CYCLE!"){super(e),this.code=e}}function j(a,e){let t=null;return(...s)=>{t&&clearTimeout(t),t=setTimeout(()=>a(...s),e)}}customElements.get("math974-spreadsheet")||customElements.define("math974-spreadsheet",T);export{V as autoScale,U as defaultPosition};
