const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/rapido-engine.C-ua_6HJ.js","_astro/rapidos-visuals-integration.BI45Mj8k.js","_astro/editor.CJZspgfY.js","_astro/vis-input.CdHznEp_.js"])))=>i.map(i=>d[i]);
import{_ as S}from"./editor.CJZspgfY.js";import{ensureSharedStyles as I}from"./vis-input.CdHznEp_.js";import{parseFormula as x,evaluate as z,parseRef as w,idxToCol as E,formatValue as M,shiftRefs as A,stringify as R,astEqual as L}from"./formula-parser.CuBpGvtX.js";import"./rapido-engine.C-ua_6HJ.js";import"./rapidos-visuals-integration.BI45Mj8k.js";const W="east",V=!0,q="math974-spreadsheet-css",T=`
math974-spreadsheet {
  display: block;
  font-family: inherit;
  /* Taille naturelle. Le helper setupAutoScale (autoScale=true) mesure cette
     taille puis applique transform:scale(k) pour fit la zone parent. */
  --ss-cell-w: 60px;
  --ss-cell-h: 36px;
  --ss-bord: #cbd5e1;
  --ss-head-bg: #f1f5f9;
  --ss-head-fg: #475569;
  --ss-sel: #6366f1;
  --ss-locked-bg: #f8fafc;
  --ss-target-bg: #eef2ff;
}
/* La consigne (.content) utilise --q-text-size global de .q-card
   (clamp(1.1rem, 4.5cqi, 2.2rem) — voir rapidos-visuals.css:639). Pas
   d'override custom : on laisse la convention wide-app gerer.
   Juste : autorise le wrap et le shrink. */
.variant-content.ss-variant > .content {
  text-align: left;
  overflow-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
  min-width: 0;
}
/* Permet au .content de wrap correctement sans pousser la grille. */
.q-card .q-card-content { min-width: 0; }
/* Diagnostic DOM : avec grid-template-columns "auto 1fr auto" et un
   composant de taille naturelle ~400-500px, le track east "auto" prend
   toute la place et le content "1fr" s'effondre a 0. Le max-width sur
   .q-card-east ne touche PAS le sizing du track (CSS Grid).
   Solution : override grid-template-columns avec un ratio fixe 2fr 3fr
   (40% content / 60% east). setupAutoScale recalcule k = 60% / nW. */
.q-card.has-visual-east.has-ss,
.q-card.q-card--fs.has-visual-east.has-ss {
  /* minmax(0, Nfr) au lieu de Nfr : sans ca CSS Grid traduit fr en
     minmax(min-content, Nfr) et la colonne content (textes longs comme
     "Identifie") gagne sur le ratio (ex. observe : 0px 706px 440px au lieu
     du 40/60 attendu). minmax(0, Xfr) force le respect strict du ratio.
     Second selecteur necessaire pour battre la regle de fullscreen.css
     '.q-card.q-card--fs.has-visual-east:not(.has-visual-west) { 0fr 1.8fr
     1fr }' qui a plus de specificite en FS. */
  grid-template-columns: 0px minmax(0, 2fr) minmax(0, 3fr);
}
.ss-wrap {
  overflow: auto;
  max-width: 100%;
  border: 1px solid var(--ss-bord);
  border-radius: 6px;
  background: #fff;
  -webkit-overflow-scrolling: touch;
  position: relative;
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
/* Sélection rectangulaire utilisateur (range-drag / cell-click) */
.ss-cell.ss-user-sel {
  background: rgba(99, 102, 241, 0.15);
  outline: 1px solid rgba(99, 102, 241, 0.6);
  outline-offset: -1px;
}
.ss-cell.ss-user-sel-anchor {
  outline: 2px solid var(--ss-sel);
  outline-offset: -2px;
}
.ss-cell.ss-fill-only { background: rgba(148, 163, 184, 0.08); }
.ss-cell.ss-fill-only .ss-target-input {
  cursor: not-allowed;
  color: #475569;
}
/* Mode identify-zones : présélections statiques + overlays nommés */
.ss-cell.ss-zone-range {
  background: rgba(99, 102, 241, 0.12) !important;
}
.ss-cell.ss-zone-active {
  outline: 2px solid var(--ss-sel) !important;
  outline-offset: -2px;
  background: rgba(99, 102, 241, 0.05) !important;
  font-weight: 600;
}
.ss-cell.ss-zone-multi {
  background: rgba(244, 114, 182, 0.20) !important;
}
.ss-zone-badge {
  position: absolute;
  z-index: 10;
  min-width: 26px;
  min-height: 26px;
  padding: 0 8px;
  background: #fff;
  color: #312e81;
  border: 2px solid #312e81;
  border-radius: 14px;
  font-weight: 700;
  font-size: 0.85em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.15);
  user-select: none;
  pointer-events: auto;
  white-space: nowrap;
}
.ss-zone-badge:hover { transform: scale(1.08); }
.ss-zone-badge.ss-zone-active-sel {
  background: #fef3c7;
  border-color: #d97706;
  color: #92400e;
}
.ss-zone-badge.ss-zone-ok {
  background: #dcfce7;
  border-color: #16a34a;
  color: #15803d;
  cursor: default;
}
.ss-zone-badge.ss-zone-ok::after { content: " ✓"; }
.ss-zone-badge.ss-zone-ko {
  background: #fee2e2;
  border-color: #dc2626;
  color: #991b1b;
  animation: ss-shake 0.3s;
}
@keyframes ss-shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-3px); }
  75% { transform: translateX(3px); }
}
.ss-vocab-panel {
  margin-top: 10px;
  padding: 10px;
  background: #fafbfc;
  border: 1px solid var(--ss-bord);
  border-radius: 6px;
}
/* Mode identify-zones : wrapper interne .ss-host-flex en flex-row
   (tableur a gauche, pills a droite en colonne verticale). Wrapper
   necessaire car autoScale pose display:inline-block en inline style
   sur le host, ce qui ecrase un display:flex CSS sur le host directement.
   align-items: stretch → le tableur (.ss-wrap) prend la hauteur du
   panneau pills. */
.ss-host-flex {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 10px;
  width: 100%;
}
.ss-host-flex > .ss-wrap {
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
}
.ss-host-flex > .ss-wrap > .ss-grid {
  flex: 1 1 auto;
  width: 100%;
}
.ss-host-flex > .ss-vocab-panel {
  margin-top: 0;
  flex: 0 0 220px;
}
.ss-host-flex .ss-vocab-pills {
  flex-direction: column;
  align-items: stretch;
}
.ss-vocab-panel-title {
  font-size: 0.85em;
  color: #475569;
  margin-bottom: 8px;
  font-weight: 600;
}
.ss-vocab-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.ss-vocab-pill {
  font: inherit;
  padding: 6px 12px;
  min-height: 44px;
  background: #fff;
  border: 1.5px solid var(--ss-bord);
  border-radius: 22px;
  cursor: pointer;
  font-size: 0.9em;
  color: #1e293b;
}
.ss-vocab-pill:hover { background: #f1f5f9; }
.ss-vocab-pill.ss-pill-used {
  background: #f0fdf4;
  border-color: #86efac;
  color: #166534;
  text-decoration: line-through;
  cursor: default;
  opacity: 0.7;
}
.ss-vocab-status {
  margin-top: 8px;
  font-size: 0.9em;
  color: #475569;
}
.ss-vocab-status.ss-status-done {
  color: #15803d;
  font-weight: 700;
}
/* Live-highlight : refs/plages contenues dans la formule en cours de saisie.
   Couleurs cyclées par ref unique (4 teintes daltonien-friendly). */
.ss-cell.ss-ref-hl-0 { outline: 2px dashed #1d4ed8; outline-offset: -2px; background: rgba(29, 78, 216, 0.10); }
.ss-cell.ss-ref-hl-1 { outline: 2px dashed #b45309; outline-offset: -2px; background: rgba(180, 83, 9, 0.10); }
.ss-cell.ss-ref-hl-2 { outline: 2px dashed #047857; outline-offset: -2px; background: rgba(4, 120, 87, 0.10); }
.ss-cell.ss-ref-hl-3 { outline: 2px dashed #9333ea; outline-offset: -2px; background: rgba(147, 51, 234, 0.10); }
.ss-toolbar {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 6px 8px;
  background: #fafbfc;
  border-bottom: 1px solid var(--ss-bord);
  font-size: 0.85em;
}
.ss-toolbar-row {
  display: flex;
  gap: 4px;
  align-items: center;
  flex-wrap: wrap;
}
.ss-toolbar button {
  font: inherit;
  padding: 4px 10px;
  border: 1px solid var(--ss-bord);
  background: #fff;
  border-radius: 4px;
  cursor: pointer;
  min-height: 32px;
  min-width: 32px;
}
.ss-toolbar button:active { background: #e2e8f0; }
.ss-toolbar .ss-tb-fmt {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  padding: 4px;
  font-size: 0.95em;
}
.ss-toolbar .ss-tb-fmt[data-fmt="bold"]      { font-weight: 700; }
.ss-toolbar .ss-tb-fmt[data-fmt="italic"]    { font-style: italic; }
.ss-toolbar .ss-tb-fmt[data-fmt="underline"] { text-decoration: underline; }
.ss-toolbar .ss-tb-fmt[data-fmt="color"]     { color: #dc2626; }
.ss-toolbar .ss-tb-fmt.ss-tb-sep {
  width: 1px; min-width: 1px; padding: 0; border: 0;
  background: var(--ss-bord); align-self: stretch; margin: 0 4px;
  pointer-events: none;
}
.ss-toolbar .ss-cell-label {
  font-weight: 600;
  color: var(--ss-head-fg);
  min-width: 28px;
  text-align: center;
  font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
  padding: 4px 6px;
  background: #fff;
  border: 1px solid var(--ss-bord);
  border-radius: 4px;
}
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
`;function B(){if(document.getElementById(q))return;const u=document.createElement("style");u.id=q,u.textContent=T,document.head.appendChild(u)}function C(u,e){if(!u)return e;try{return JSON.parse(u)}catch{return e}}function v(u,e){return E(u)+(e+1)}function N(u){return(u||"").trim()}class F extends HTMLElement{static get observedAttributes(){return["rows","cols","cells","locked","solutions","headers","mode","preset"]}constructor(){super(),this._cells=new Map,this._values=new Map,this._selected=null,this._undo=[],this._activeInput=null,this._currentPhase="cellule_vide",this._mode="formula",this._zonePairs=new Map,this._zoneSolved=new Set,this._activeBadge=null,this._currentTarget=""}connectedCallback(){B(),I(),this.closest(".variant-content")?.classList.add("ss-variant"),this.closest(".q-card")?.classList.add("has-ss"),this._render(),this._wireDocLevelListeners()}attributeChangedCallback(){this.isConnected&&this._render()}validate(){if(this._mode==="identify-zones")return this._zoneSolved.size===this._zonePairs.size&&this._zonePairs.size>0;if(this._mode==="cell-click"||this._mode==="range-drag")return this._userSelectionText().toUpperCase()===(this._currentTarget||"").trim().toUpperCase();if(this._mode==="cell-name"||this._mode==="range-name"){const s=(this.querySelector(".ss-name-input")?.value||"").trim().toUpperCase(),r=(this._currentTarget||"").trim().toUpperCase();return s===r&&r!==""}const e=this._targetCells();return e.length===0?!1:e.every(t=>this._isCorrect(t))}toggleSolution(){if(this._mode==="identify-zones"){this._zonePairs.forEach((e,t)=>{const s=this.querySelector(`.ss-zone-badge[data-zone-id="${t}"]`),r=Array.from(this.querySelectorAll(".ss-vocab-pill")).find(o=>o.dataset.label===e);s?.classList.remove("ss-zone-active-sel"),s?.classList.add("ss-zone-ok"),r?.classList.add("ss-pill-used"),r&&(r.disabled=!0),this._zoneSolved.add(t)}),this._updateZoneStatus(),this._updatePhase();return}this._showSolutions=!this._showSolutions,this._renderGrid()}getCurrentPhase(){return this._currentPhase}getCurrentStudentValue(){if(this._mode==="cell-click"||this._mode==="range-drag")return this._userSelectionText();if(this._mode==="cell-name"||this._mode==="range-name")return this.querySelector(".ss-name-input")?.value||"";if(this._activeInput){const e=this._activeInput.dataset.ssRef,t=this._cells.get(e);return t?.raw?t.raw:this._activeInput.value||""}for(const e of this._targetCells()){const t=this._cells.get(e);if(t?.raw&&!this._isCorrect(e))return t.raw}return""}_validateCell(e){if(this._mode==="cell-name"||this._mode==="range-name"){const s=(e.value||"").trim().toUpperCase(),r=(this._currentTarget||"").trim().toUpperCase();return s===r&&r!==""}const t=e.dataset.ssRef;return t?this._isCorrect(t):!1}_readFormula(e){const t=e.dataset.ssRef;return t&&this._cells.get(t)?.raw||""}_readAttrs(){this._rows=Math.max(1,parseInt(this.getAttribute("rows")||"6",10)),this._cols=Math.max(1,parseInt(this.getAttribute("cols")||"5",10));const e=C(this.getAttribute("cells"),{}),t=new Set(C(this.getAttribute("locked"),[])),s=C(this.getAttribute("solutions"),{}),r=C(this.getAttribute("headers"),null);this._declaredMode=this.getAttribute("mode")||"formula",this._mode=this._declaredMode,this._preset=C(this.getAttribute("preset"),null),this._cells.clear();for(const[o,l]of Object.entries(e)){const i={raw:l==null?"":String(l),locked:t.has(o)};this._parseIntoCell(i),this._cells.set(o,i)}for(const o of t)this._cells.has(o)||this._cells.set(o,{raw:"",locked:!0});for(const[o,l]of Object.entries(s)){let n=this._cells.get(o);n||(n={raw:"",locked:!1},this._cells.set(o,n)),n.target=!0,n.sol={formula:l.formula||l,mode:l.mode||"formula",alt:Array.isArray(l.alt)?l.alt:[],fillOnly:!!l.fillOnly}}this._headers=r}_parseIntoCell(e){delete e.ast,delete e.parseError;const t=e.raw;if(typeof t=="string"&&t.trim().startsWith("=")){const s=x(t);s.error?e.parseError=s.error:e.ast=s}}_getCellValue(e,t){const s=v(e,t);this._values.has(s)||this._evaluateCell(s,new Set);const r=this._values.get(s);return r&&typeof r=="object"&&r.error?NaN:r}_evaluateCell(e,t){const s=this._cells.get(e);if(!s){this._values.set(e,"");return}if(s.ast){if(t.has(e)){this._values.set(e,{error:"#CYCLE!"});return}t.add(e);const r={getCell:(o,l)=>{const n=v(o,l);if(t.has(n))throw new P;this._values.has(n)||this._evaluateCell(n,t);const i=this._values.get(n);if(i&&typeof i=="object"&&i.error)throw new P(i.error);return i===void 0?"":i}};try{const o=z(s.ast,r);this._values.set(e,o)}catch(o){this._values.set(e,{error:o.code||"#CYCLE!"})}t.delete(e)}else{const r=s.raw;if(r===""||r==null){this._values.set(e,"");return}const o=parseFloat(String(r).replace(",","."));!isNaN(o)&&String(o)===String(r).replace(",",".").replace(/^\+/,"")?this._values.set(e,o):!isNaN(o)&&/^-?\d+([.,]\d+)?$/.test(String(r).trim())?this._values.set(e,o):this._values.set(e,String(r))}}_recompute(){this._values.clear();for(const e of this._cells.keys())this._values.has(e)||this._evaluateCell(e,new Set)}_render(){this._readAttrs(),this._pickTarget(),this.innerHTML="",this.setAttribute("data-mode",this._mode),this._recompute(),this._buildDom(),this._mode==="identify-zones"?(this._applyPresetSelections(),this._buildIdentifyZones()):this._mode==="cell-name"||this._mode==="range-name"?(this._applyTargetPreset(),this._buildNamingPanel()):(this._mode==="cell-click"||this._mode==="range-drag")&&this._buildClickInstruction(),this._updatePhase(),S(()=>import("./rapido-engine.C-ua_6HJ.js").then(e=>e.h),__vite__mapDeps([0,1,2])).then(e=>e.wireCardInputs?.(this.closest(".q-card")))}_pickTarget(){const e=Array.isArray(this._preset?.targets)?this._preset.targets:null;e&&e.length>0?this._currentTarget=e[Math.floor(Math.random()*e.length)]:this._currentTarget=(this._preset?.target||"").trim(),this._declaredMode==="cell"?this._mode=Math.random()<.5?"cell-click":"cell-name":this._declaredMode==="range"&&(this._mode=Math.random()<.5?"range-drag":"range-name")}randomize(){this._render()}_applyTargetPreset(){if(!this._tbody||this._preset?.noHighlight)return;const e=this._currentTarget;if(e)if(e.includes(":")){const[t,s]=e.split(":"),r=w(t),o=w(s);if(!r||!o)return;const l=Math.min(r.col,o.col),n=Math.max(r.col,o.col),i=Math.min(r.row,o.row),a=Math.max(r.row,o.row);for(let c=i;c<=a;c++)for(let d=l;d<=n;d++)this._cellElement(d,c)?.classList.add("ss-user-sel")}else{const t=w(e);if(!t)return;this._cellElement(t.col,t.row)?.classList.add("ss-user-sel","ss-user-sel-anchor")}}_buildNamingPanel(){const e=this._currentTarget,t=this._mode==="range-name",s=!!this._preset?.noHighlight,r=document.createElement("div");r.className="ss-vocab-panel";const o=t?"ex. B2:D4":"ex. C5",l=s?`<div class="ss-vocab-panel-title">${this._buildTargetDescription(e,t)}</div>`:"";r.innerHTML=`
      ${l}
      <input class="rapido-input ss-name-input" type="text"
             data-solution-type="spreadsheet-formula"
             data-solution="${e}"
             data-ss-ref="__name__"
             placeholder="${o}"
             autocomplete="off" spellcheck="false" />
    `,this.appendChild(r)}_buildTargetDescription(e,t){if(!e)return"";if(t){const[r,o]=e.split(":"),l=w(r),n=w(o);if(!l||!n)return`→ Plage : ${e}`;const i=Math.min(l.col,n.col),a=Math.max(l.col,n.col),c=Math.min(l.row,n.row),d=Math.max(l.row,n.row);return`→ Plage du coin <strong>colonne ${E(i)}, ligne ${c+1}</strong> jusqu'au coin <strong>colonne ${E(a)}, ligne ${d+1}</strong>.`}const s=w(e);return s?`→ Colonne <strong>${E(s.col)}</strong>, ligne <strong>${s.row+1}</strong>.`:`→ Cellule : ${e}`}_buildClickInstruction(){const e=this._currentTarget,t=document.createElement("div");t.className="ss-vocab-panel",t.innerHTML=`
      <div class="ss-vocab-panel-title">→ Cible : <strong>${e}</strong></div>
      <div class="ss-vocab-status">${this._userSelectionText()||"(aucune sélection)"}</div>
    `,this.appendChild(t),this._userSelTarget=e,this._wireUserDragSelect()}_userSelectionText(){const e=this._userSelection;if(!e)return"";const t=v(e.c1,e.r1),s=v(e.c2,e.r2);return t===s?t:t+":"+s}_refreshClickStatus(){const e=this.querySelector(".ss-vocab-panel .ss-vocab-status");if(!e)return;const t=this._userSelectionText()||"(aucune sélection)",s=(this._currentTarget||"").trim().toUpperCase(),r=t.toUpperCase();s&&r===s?(e.textContent="✓ "+t,e.classList.add("ss-status-done")):(e.textContent=t,e.classList.remove("ss-status-done"))}_setUserSelection(e,t,s,r){this._clearUserSelection();const o=Math.min(e,s),l=Math.max(e,s),n=Math.min(t,r),i=Math.max(t,r);this._userSelection={c1:o,r1:n,c2:l,r2:i};for(let a=n;a<=i;a++)for(let c=o;c<=l;c++)this._cellElement(c,a)?.classList.add("ss-user-sel");this._cellElement(e,t)?.classList.add("ss-user-sel-anchor"),this._refreshClickStatus(),this._updatePhase()}_clearUserSelection(){this._tbody&&(this._tbody.querySelectorAll(".ss-user-sel, .ss-user-sel-anchor").forEach(e=>e.classList.remove("ss-user-sel","ss-user-sel-anchor")),this._userSelection=null)}_wireUserDragSelect(){!this._tbody||this._userDragWired||(this._userDragWired=!0,this._tbody.addEventListener("pointerdown",e=>{if(this._mode!=="cell-click"&&this._mode!=="range-drag")return;const t=e.target.closest(".ss-cell");if(!t)return;e.preventDefault();const s=parseInt(t.dataset.col,10),r=parseInt(t.dataset.row,10);this._setUserSelection(s,r,s,r);const o=(i,a)=>{const d=document.elementFromPoint(i,a)?.closest?.(".ss-cell");return d&&this._tbody.contains(d)?d:null},l=i=>{const a=o(i.clientX,i.clientY);if(!a)return;const c=parseInt(a.dataset.col,10),d=parseInt(a.dataset.row,10);this._mode!=="cell-click"&&this._setUserSelection(s,r,c,d)},n=i=>{document.removeEventListener("pointermove",l),this._fireSelectionFeedback()};document.addEventListener("pointermove",l),document.addEventListener("pointerup",n,{once:!0})}))}_fireSelectionFeedback(){const e=this.validate(),t=this._userSelection;if(!t)return;const s=this._cellElement(t.c1,t.r1);s&&(S(()=>import("./rapido-engine.C-ua_6HJ.js").then(r=>r.f),__vite__mapDeps([0,1,2])).then(r=>r.popSlogan?.(s,e)),e&&S(()=>import("./vis-input.CdHznEp_.js"),__vite__mapDeps([3,2,0,1])).then(r=>r.fireConfettiOnce?.(this)))}_applyPresetSelections(){if(!this._tbody)return;const e=this._preset||{active:"C3",range:["D2","E2","D3","E3","D4","E4"],multi:["A6","C6"]};e.active&&this._tbody.querySelector(`.ss-cell[data-ref="${e.active}"]`)?.classList.add("ss-zone-active"),(e.range||[]).forEach(t=>{this._tbody.querySelector(`.ss-cell[data-ref="${t}"]`)?.classList.add("ss-zone-range")}),(e.multi||[]).forEach(t=>{this._tbody.querySelector(`.ss-cell[data-ref="${t}"]`)?.classList.add("ss-zone-multi")})}_buildIdentifyZones(){const e=this.querySelector(".ss-wrap");if(!e)return;const t=e.querySelector(".ss-grid"),s=t?.querySelector("thead tr > th:nth-child(4)"),r=t?.querySelector("tbody tr:nth-child(3) > th"),o=t?.querySelector('.ss-cell[data-ref="B5"]'),l=t?.querySelector(".ss-cell.ss-zone-range"),n=t?.querySelector(".ss-cell.ss-zone-multi"),i=t?.querySelector(".ss-cell.ss-zone-active"),a=[{id:"toolbar",label:"Barre d'outils",anchor:e.querySelector(".ss-toolbar-fmt")},{id:"cell-address",label:"Adresse de la cellule",anchor:e.querySelector(".ss-cell-label")},{id:"formula-bar",label:"Barre de formule",anchor:e.querySelector(".ss-formula-bar")},{id:"col-header",label:"En-tête de colonne",anchor:s},{id:"row-header",label:"En-tête de ligne",anchor:r},{id:"cell",label:"Cellule",anchor:o},{id:"range",label:"Plage de cellules sélectionnées",anchor:l},{id:"multi",label:"Cellules sélectionnées",anchor:n},{id:"active-cell",label:"Cellule active",anchor:i},{id:"sheet",label:"Feuille de calcul",anchor:t}].filter(h=>h.anchor);this._zonePairs=new Map(a.map(h=>[h.id,h.label])),this._zoneSolved=new Set,this._activeBadge=null;const c=document.createElement("div");c.className="ss-zone-overlay-layer",c.style.cssText="position:absolute; top:0; left:0; right:0; bottom:0; pointer-events:none;",e.appendChild(c),a.forEach((h,_)=>{const b=document.createElement("button");b.type="button",b.className="ss-zone-badge",b.dataset.zoneId=h.id,b.textContent=String(_+1),b.title="Clique pour identifier cette zone",b.addEventListener("click",()=>this._onBadgeClick(b)),c.appendChild(b),this._positionBadge(b,h.anchor,e)});const d=document.createElement("div");d.className="ss-vocab-panel",d.innerHTML=`
      <div class="ss-vocab-pills"></div>
      <div class="ss-vocab-status">${this._zoneSolved.size} / ${this._zonePairs.size}</div>
    `;const m=d.querySelector(".ss-vocab-pills"),f=a.map(h=>h.label);D(f),f.forEach(h=>{const _=document.createElement("button");_.type="button",_.className="ss-vocab-pill",_.textContent=h,_.dataset.label=h,_.addEventListener("click",()=>this._onPillClick(_)),m.appendChild(_)});const p=document.createElement("div");p.className="ss-host-flex",p.appendChild(e),p.appendChild(d),this.appendChild(p),this._autoScaleRO&&(this._autoScaleRO.disconnect(),this._autoScaleRO=null),this.style.transform="none",this.style.width="100%",this.style.display="block";const g=this.parentElement;if(g&&(g.style.height="",g.style.alignItems="",g.style.width="100%"),!this._zoneResizeWired){this._zoneResizeWired=!0;const h=new ResizeObserver(()=>this._repositionZoneBadges());h.observe(e),this._zoneRO=h}}_positionBadge(e,t,s){if(!t||!s)return;const r=t.getBoundingClientRect(),o=s.getBoundingClientRect(),l=r.top-o.top+s.scrollTop+2,n=r.left-o.left+s.scrollLeft+2;e.style.top=l+"px",e.style.left=n+"px"}_repositionZoneBadges(){const e=this.querySelector(".ss-wrap");e&&e.querySelectorAll(".ss-zone-badge").forEach(t=>{const s=t.dataset.zoneId,r=this._findZoneAnchor(s);r&&this._positionBadge(t,r,e)})}_findZoneAnchor(e){const t=this.querySelector(".ss-wrap");if(!t)return null;const s=t.querySelector(".ss-grid");switch(e){case"toolbar":return t.querySelector(".ss-toolbar-fmt");case"cell-address":return t.querySelector(".ss-cell-label");case"formula-bar":return t.querySelector(".ss-formula-bar");case"col-header":return s?.querySelector("thead tr > th:nth-child(4)");case"row-header":return s?.querySelector("tbody tr:nth-child(3) > th");case"cell":return s?.querySelector('.ss-cell[data-ref="B5"]');case"range":return s?.querySelector(".ss-cell.ss-zone-range");case"multi":return s?.querySelector(".ss-cell.ss-zone-multi");case"active-cell":return s?.querySelector(".ss-cell.ss-zone-active");case"sheet":return s;default:return null}}_onBadgeClick(e){e.classList.contains("ss-zone-ok")||(this.querySelectorAll(".ss-zone-badge.ss-zone-active-sel").forEach(t=>t.classList.remove("ss-zone-active-sel")),e.classList.add("ss-zone-active-sel"),this._activeBadge=e)}_onPillClick(e){if(e.classList.contains("ss-pill-used"))return;if(!this._activeBadge){const o=this.querySelector(".ss-vocab-panel-title");o&&(o.style.color="#dc2626",setTimeout(()=>{o.style.color=""},600));return}const t=this._activeBadge.dataset.zoneId,s=this._zonePairs.get(t),r=e.dataset.label===s;if(S(()=>import("./rapido-engine.C-ua_6HJ.js").then(o=>o.f),__vite__mapDeps([0,1,2])).then(o=>o.popSlogan?.(e,r)),r)this._activeBadge.classList.remove("ss-zone-active-sel"),this._activeBadge.classList.add("ss-zone-ok"),e.classList.add("ss-pill-used"),e.disabled=!0,this._zoneSolved.add(t),this._activeBadge=null,this._updateZoneStatus(),this._updatePhase(),this._zoneSolved.size===this._zonePairs.size&&S(()=>import("./vis-input.CdHznEp_.js"),__vite__mapDeps([3,2,0,1])).then(o=>o.fireConfettiOnce?.(this));else{this._activeBadge.classList.add("ss-zone-ko");const o=this._activeBadge;setTimeout(()=>o.classList.remove("ss-zone-ko","ss-zone-active-sel"),400),this._activeBadge=null}}_updateZoneStatus(){const e=this.querySelector(".ss-vocab-status");if(!e)return;const t=this._zoneSolved.size,s=this._zonePairs.size;e.textContent=t+" / "+s,e.classList.toggle("ss-status-done",t===s),t===s&&(e.textContent="✓ "+t+" / "+s+"  —  Bravo !")}_buildDom(){const e=document.createElement("div");e.className="ss-wrap";const t=document.createElement("div");t.className="ss-toolbar";const s=document.createElement("div");s.className="ss-toolbar-row ss-toolbar-fmt",[{fmt:"bold",label:"B",title:"Gras"},{fmt:"italic",label:"I",title:"Italique"},{fmt:"underline",label:"U",title:"Souligné"},{fmt:"color",label:"A",title:"Couleur du texte"},{fmt:"sep",label:"",title:""},{fmt:"align-left",label:"⬅",title:"Aligner à gauche"},{fmt:"align-center",label:"⬛",title:"Centrer"},{fmt:"align-right",label:"➡",title:"Aligner à droite"}].forEach(({fmt:f,label:p,title:g})=>{if(f==="sep"){const _=document.createElement("span");_.className="ss-tb-fmt ss-tb-sep",s.appendChild(_);return}const h=document.createElement("button");h.type="button",h.className="ss-tb-fmt",h.dataset.fmt=f,h.textContent=p,h.title=g,h.setAttribute("aria-label",g),s.appendChild(h)}),t.appendChild(s);const o=document.createElement("div");o.className="ss-toolbar-row";const l=document.createElement("span");l.className="ss-cell-label",l.textContent="—",l.title="Adresse de la cellule",o.appendChild(l);const n=document.createElement("div");n.className="ss-formula-bar",n.textContent="",n.title="Barre de formule",o.appendChild(n);const i=document.createElement("button");i.type="button",i.textContent="↺",i.title="Annuler",i.addEventListener("click",()=>this._undoLast()),o.appendChild(i),t.appendChild(o),e.appendChild(t);const a=document.createElement("table");a.className="ss-grid";const c=document.createElement("thead"),d=document.createElement("tr");d.appendChild(document.createElement("th"));for(let f=0;f<this._cols;f++){const p=document.createElement("th");p.textContent=this._headers?.col?.[f]??E(f),d.appendChild(p)}c.appendChild(d),a.appendChild(c);const m=document.createElement("tbody");for(let f=0;f<this._rows;f++){const p=document.createElement("tr"),g=document.createElement("th");g.textContent=this._headers?.row?.[f]??String(f+1),p.appendChild(g);for(let h=0;h<this._cols;h++){const _=document.createElement("td");_.className="ss-cell",_.dataset.col=String(h),_.dataset.row=String(f),_.dataset.ref=v(h,f),this._paintCell(_),p.appendChild(_)}m.appendChild(p)}a.appendChild(m),e.appendChild(a),this.appendChild(e),this._tbody=m,this._fxBar=n,this._cellLabel=l,this._wireGridEvents(m)}_renderGrid(){this._tbody&&(this._recompute(),this._tbody.querySelectorAll(".ss-cell").forEach(e=>this._paintCell(e)),this._updatePhase())}_paintCell(e){const t=e.dataset.ref,s=this._cells.get(t);if(s&&s.target&&!this._showSolutions){let l=e.querySelector(".ss-target-input");if(!l)e.classList.add("ss-target"),s.sol.fillOnly&&e.classList.add("ss-fill-only"),l=document.createElement("input"),l.type="text",l.className="rapido-input ss-target-input",l.dataset.solutionType="spreadsheet-formula",l.dataset.ssRef=t,l.dataset.solution=s.sol.formula,l.placeholder=s.sol.fillOnly?"":"…",l.value=s.raw||"",s.sol.fillOnly&&(l.readOnly=!0,l.title="Recopie depuis la cellule du dessus (drag-fill)"),e.textContent="",e.appendChild(l),l.addEventListener("focus",()=>{e.classList.add("ss-sel"),this._activeInput=l,this._updateFormulaBar(t),this._ensureHandleForRef(t),this._highlightFormulaRefs(l.value)}),l.addEventListener("input",()=>{this._highlightFormulaRefs(l.value),this._updateFormulaBar(t,l.value)}),l.addEventListener("blur",()=>{this._clearRefHighlights();const n=N(l.value);n!==s.raw&&(this._pushUndo(),s.raw=n,this._parseIntoCell(s),this._recompute(),this._repaintNonTargets(),this._updatePhase())}),l.addEventListener("keydown",n=>{n.key==="Enter"?(n.preventDefault(),l.blur()):n.key==="Escape"&&(l.value=s.raw||"",l.blur())}),this._observeTargetInput(l,t);else{const n=s.raw||"";document.activeElement!==l&&l.value!==n&&(l.value=n),e.classList.add("ss-target")}return}if(e.classList.remove("ss-locked","ss-target","ss-text","ss-num","ss-error"),e.querySelector(".ss-cell-input"))return;let o="";if(s){s.locked&&e.classList.add("ss-locked");const l=this._values.get(t);l&&typeof l=="object"&&l.error?(o=l.error,e.classList.add("ss-error")):typeof l=="number"?(o=M(l),e.classList.add("ss-num")):l!=null&&(o=String(l),e.classList.add("ss-text"))}e.textContent=o}_updateFormulaBar(e,t){const s=this._cells.get(e);this._cellLabel&&(this._cellLabel.textContent=e||"—"),this._fxBar&&(this._fxBar.textContent=t??s?.raw??"")}_wireGridEvents(e){e.addEventListener("click",t=>{if(this._refPickupActive)return;const s=t.target.closest(".ss-cell");s&&(t.target.classList?.contains("ss-cell-input")||this._selectCell(s))}),e.addEventListener("dblclick",t=>{const s=t.target.closest(".ss-cell");s&&this._beginEdit(s)}),e.addEventListener("keydown",t=>{if(t.key==="Enter"&&this._selected){const s=this._cellElement(this._selected.col,this._selected.row);s&&!s.querySelector(".ss-cell-input")&&(t.preventDefault(),this._beginEdit(s))}}),e.addEventListener("pointerdown",t=>{if(t.target.closest(".ss-fill-handle")&&this._selected){t.preventDefault(),this._startFill();return}const r=t.target.closest(".ss-cell");if(!r)return;const o=this._activeInput;!o||o.readOnly||this._isInRefPickupMode(o)&&(r.contains(o)||(t.preventDefault(),this._startRefPickup(r)))})}_isInRefPickupMode(e){const t=e.value||"";if(!t.startsWith("=")&&!t.startsWith("+"))return!1;const s=e.selectionStart??t.length,r=(t[s-1]||"").trim();return/[=+\-*/^(,;:<>]/.test(r)}_insertAtCursor(e,t){const s=e.value||"",r=e.selectionStart??s.length,o=e.selectionEnd??s.length,l=s.slice(0,r),n=s.slice(o);e.value=l+t+n;const i=r+t.length;e.setSelectionRange(i,i),e.dispatchEvent(new Event("input",{bubbles:!0}))}_startRefPickup(e){const t=this._activeInput;if(!t)return;const s=parseInt(e.dataset.col,10),r=parseInt(e.dataset.row,10),o=v(s,r),l=t.selectionStart??(t.value||"").length;this._insertAtCursor(t,o),this._refPickupActive=!0;const n=(d,m)=>{const p=document.elementFromPoint(d,m)?.closest?.(".ss-cell");return p&&this._tbody.contains(p)?p:null},i=(d,m)=>{const p=d===s&&m===r?o:o+":"+v(d,m),g=t.value.slice(0,l),h=t.value.slice(l+this._lastInsertedLen);t.value=g+p+h,this._lastInsertedLen=p.length;const _=l+p.length;t.setSelectionRange(_,_),t.focus(),t.dispatchEvent(new Event("input",{bubbles:!0}))};this._lastInsertedLen=o.length;const a=d=>{const m=n(d.clientX,d.clientY);if(!m)return;const f=parseInt(m.dataset.col,10),p=parseInt(m.dataset.row,10);i(f,p)},c=()=>{document.removeEventListener("pointermove",a),setTimeout(()=>{this._refPickupActive=!1},0),t.focus()};document.addEventListener("pointermove",a),document.addEventListener("pointerup",c,{once:!0})}_wireDocLevelListeners(){}_selectCell(e){if(this._selected){const r=this._cellElement(this._selected.col,this._selected.row);r?.classList.remove("ss-sel"),r?.querySelector(".ss-fill-handle")?.remove()}const t=parseInt(e.dataset.col,10),s=parseInt(e.dataset.row,10);this._selected={col:t,row:s},e.classList.add("ss-sel"),this._updateFormulaBar(e.dataset.ref),this._ensureHandleForRef(e.dataset.ref)}_ensureHandleForRef(e){const t=this._tbody?.querySelector(`.ss-cell[data-ref="${e}"]`);if(!t||t.querySelector(".ss-fill-handle")||t.querySelector(".ss-cell-input")||!this._cells.get(e)?.ast)return;const r=document.createElement("button");r.type="button",r.className="ss-fill-handle",r.title="Recopier (cliquer puis cliquer la cellule cible)",r.setAttribute("aria-label","Poignée de recopie"),t.appendChild(r)}_highlightFormulaRefs(e){if(this._clearRefHighlights(),!e)return;const t=String(e).trim();if(!t.startsWith("="))return;const s=x(t);if(s?.error)return;const r=[];k(s,r,new Map),r.forEach((l,n)=>{const i="ss-ref-hl-"+n%4;l.forEach(({col:a,row:c})=>{this._cellElement(a,c)?.classList.add(i)})})}_clearRefHighlights(){this._tbody&&this._tbody.querySelectorAll(".ss-ref-hl-0, .ss-ref-hl-1, .ss-ref-hl-2, .ss-ref-hl-3").forEach(e=>e.classList.remove("ss-ref-hl-0","ss-ref-hl-1","ss-ref-hl-2","ss-ref-hl-3"))}_repaintNonTargets(){if(this._tbody&&(this._tbody.querySelectorAll(".ss-cell").forEach(e=>{this._cells.get(e.dataset.ref)?.target&&!this._showSolutions||this._paintCell(e)}),this._selected)){const e=v(this._selected.col,this._selected.row);this._ensureHandleForRef(e)}}_cellElement(e,t){return this._tbody?.querySelector(`.ss-cell[data-col="${e}"][data-row="${t}"]`)}_beginEdit(e){const t=e.dataset.ref,s=this._cells.get(t)||{};if(s.locked)return;if(s.target){e.querySelector(".ss-cell-input, .rapido-input")?.focus();return}if(e.querySelector(".ss-cell-input"))return;const r=s.raw??"",o=document.createElement("input");o.type="text",o.className="ss-cell-input",o.value=r,e.textContent="",e.appendChild(o),o.focus(),o.select();const l=n=>{const i=n?o.value:r;if(n&&i!==r){this._pushUndo();let a=this._cells.get(t);a||(a={raw:"",locked:!1},this._cells.set(t,a)),a.raw=i,this._parseIntoCell(a),this._recompute()}this._renderGrid()};o.addEventListener("blur",()=>l(!0)),o.addEventListener("keydown",n=>{n.key==="Enter"?(n.preventDefault(),o.blur()):n.key==="Escape"&&(n.preventDefault(),l(!1))})}_startFill(){this._fillSource={...this._selected};const e=this._cellElement(this._fillSource.col,this._fillSource.row);e?.classList.add("ss-fill-source");const t=()=>{this._tbody.querySelectorAll(".ss-fill-preview").forEach(n=>n.classList.remove("ss-fill-preview"))},s=(n,i)=>{const c=document.elementFromPoint(n,i)?.closest?.(".ss-cell");return c&&this._tbody.contains(c)?c:null},r=(n,i)=>{t();const a=Math.min(this._fillSource.col,n),c=Math.max(this._fillSource.col,n),d=Math.min(this._fillSource.row,i),m=Math.max(this._fillSource.row,i);for(let f=d;f<=m;f++)for(let p=a;p<=c;p++){if(p===this._fillSource.col&&f===this._fillSource.row)continue;this._cellElement(p,f)?.classList.add("ss-fill-preview")}},o=n=>{const i=s(n.clientX,n.clientY);if(!i)return;const a=parseInt(i.dataset.col,10),c=parseInt(i.dataset.row,10);r(a,c)},l=n=>{document.removeEventListener("pointermove",o),t(),e?.classList.remove("ss-fill-source");const i=s(n.clientX,n.clientY);if(!i){this._fillSource=null;return}this._applyFill(i),this._fillSource=null};document.addEventListener("pointermove",o),document.addEventListener("pointerup",l,{once:!0})}_applyFill(e){const t=this._fillSource;if(!t)return;const s=v(t.col,t.row),r=this._cells.get(s);if(!r||!r.ast)return;const o=parseInt(e.dataset.col,10),l=parseInt(e.dataset.row,10),n=Math.min(t.col,o),i=Math.max(t.col,o),a=Math.min(t.row,l),c=Math.max(t.row,l);this._pushUndo();for(let d=a;d<=c;d++)for(let m=n;m<=i;m++){if(m===t.col&&d===t.row)continue;const f=v(m,d);if(this._cells.get(f)?.locked)continue;const g=m-t.col,h=d-t.row,_=A(r.ast,g,h),b=R(_);let y=this._cells.get(f);y||(y={raw:"",locked:!1},this._cells.set(f,y)),y.raw=b,this._parseIntoCell(y)}this._recompute(),this._renderGrid()}_pushUndo(){this._undo.length>=20&&this._undo.shift();const e={};for(const[t,s]of this._cells)e[t]={raw:s.raw,locked:s.locked,target:s.target,sol:s.sol};this._undo.push(e)}_undoLast(){const e=this._undo.pop();if(e){this._cells.clear();for(const[t,s]of Object.entries(e)){const r={raw:s.raw,locked:s.locked};s.target&&(r.target=!0,r.sol=s.sol),this._parseIntoCell(r),this._cells.set(t,r)}this._recompute(),this._renderGrid()}}_targetCells(){const e=[];for(const[t,s]of this._cells)s.target&&e.push(t);return e}_isCorrect(e){const t=this._cells.get(e);if(!t?.sol)return!1;const s=(t.raw||"").trim();if(s==="")return!1;const r=x(t.sol.formula);if(t.sol.mode==="value"){const l=x(s.startsWith("=")?s:"="+s);if(l.error)return!1;const n=this._evaluateInContext(l),i=this._evaluateInContext(r);return typeof n=="number"&&typeof i=="number"&&Math.abs(n-i)<1e-9}const o=x(s);if(o.error)return!1;if(L(o,r))return!0;for(const l of t.sol.alt||[]){const n=x(l);if(!n.error&&L(o,n))return!0}return!1}_evaluateInContext(e){if(!e||e.error)return null;const s=z(e,{getCell:(r,o)=>{const l=v(r,o);this._values.has(l)||this._evaluateCell(l,new Set);const n=this._values.get(l);return n&&typeof n=="object"&&n.error?NaN:n===void 0?"":n}});return s&&typeof s=="object"&&s.error?null:s}_updatePhase(){if(this._mode==="identify-zones"){const l=this._zonePairs.size;if(l===0){this._currentPhase="cellule_vide";return}if(this._zoneSolved.size===l){this._currentPhase="done";return}if(this._zoneSolved.size===0){this._currentPhase="cellule_vide";return}this._currentPhase="erreur_calcul";return}if(this._mode==="cell-click"||this._mode==="range-drag"){if(!this._userSelection){this._currentPhase="cellule_vide";return}const l=this._userSelectionText().toUpperCase()===(this._currentTarget||"").trim().toUpperCase();this._currentPhase=l?"done":"erreur_calcul";return}if(this._mode==="cell-name"||this._mode==="range-name"){const n=(this.querySelector(".ss-name-input")?.value||"").trim();if(!n){this._currentPhase="cellule_vide";return}const i=(this._currentTarget||"").trim().toUpperCase();this._currentPhase=n.toUpperCase()===i?"done":"erreur_calcul";return}const e=this._targetCells();if(e.length===0){this._currentPhase="cellule_vide";return}let t=!0,s=!1,r=!1,o=!1;for(const l of e){const i=(this._cells.get(l)?.raw||"").trim();if(i===""){t=!1;continue}if(s=!0,x(i).error){o=!0,t=!1;continue}const c=this._values.get(l);c&&typeof c=="object"&&c.error&&(r=!0),this._isCorrect(l)||(t=!1)}t?this._currentPhase="done":o?this._currentPhase="formule_invalide":s?r?this._currentPhase="formule_invalide":this._currentPhase="erreur_calcul":this._currentPhase="cellule_vide"}_observeTargetInput(e,t){if(e._ssObserved)return;e._ssObserved=!0;const s=this.closest(".q-card");if(!s)return;const r=O(()=>{s.querySelector(".am-indice-panel.open")&&s.dispatchEvent(new CustomEvent("zefor-indice-auto-refresh",{detail:{studentValue:e.value,formula:e.value,phase:this.getCurrentPhase(),targetCell:t,source:this},bubbles:!0}))},300);e.addEventListener("input",r),new MutationObserver(()=>{e.classList.contains("incorrect")&&s.dispatchEvent(new CustomEvent("zefor-indice-auto-pop",{detail:{studentValue:e.value,formula:e.value,phase:this.getCurrentPhase(),targetCell:t,source:this},bubbles:!0}))}).observe(e,{attributes:!0,attributeFilter:["class"]})}}function k(u,e,t){if(!(!u||typeof u!="object"||u.error)){if(u.type==="ref"){const s="r:"+u.col+":"+u.row;t.has(s)||(t.set(s,e.length),e.push([{col:u.col,row:u.row}]));return}if(u.type==="range"){const s=u.a,r=u.b,o=Math.min(s.col,r.col),l=Math.max(s.col,r.col),n=Math.min(s.row,r.row),i=Math.max(s.row,r.row),a="g:"+o+":"+n+":"+l+":"+i;if(!t.has(a)){t.set(a,e.length);const c=[];for(let d=n;d<=i;d++)for(let m=o;m<=l;m++)c.push({col:m,row:d});e.push(c)}return}switch(u.type){case"unary":k(u.arg,e,t);break;case"binop":k(u.left,e,t),k(u.right,e,t);break;case"fn":u.args.forEach(s=>k(s,e,t));break}}}class P extends Error{constructor(e="#CYCLE!"){super(e),this.code=e}}function D(u){for(let e=u.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[u[e],u[t]]=[u[t],u[e]]}return u}function O(u,e){let t=null;return(...s)=>{t&&clearTimeout(t),t=setTimeout(()=>u(...s),e)}}customElements.get("math974-spreadsheet")||customElements.define("math974-spreadsheet",F);export{V as autoScale,W as defaultPosition};
